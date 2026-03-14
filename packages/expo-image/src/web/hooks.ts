import { useEffect, useMemo, useState } from 'react';

import { OnErrorEvent } from './ImageWrapper.types';
import { ImageNativeProps, ImageSource } from '../Image.types';
import { useBlurhash } from '../utils/blurhash/useBlurhash';
import { isThumbhashString } from '../utils/resolveSources';
import { thumbHashStringToDataURL } from '../utils/thumbhash/thumbhash';

export function useThumbhash(source: ImageSource | null | undefined) {
  const isThumbhash = isThumbhashString(source?.uri || '');
  const strippedThumbhashString = source?.uri?.replace(/thumbhash:\//, '') ?? '';
  const thumbhashSource = useMemo(
    () => (isThumbhash ? { uri: thumbHashStringToDataURL(strippedThumbhashString) } : null),
    [strippedThumbhashString, isThumbhash]
  );
  return [thumbhashSource, isThumbhash] as const;
}

export function useImageHashes(source: ImageSource | null | undefined) {
  const [thumbhash, isThumbhashString] = useThumbhash(source);
  const [blurhash, isBlurhashString] = useBlurhash(source);
  return useMemo(() => {
    if (!isThumbhashString && !isBlurhashString) {
      return { resolvedSource: source, isImageHash: false };
    }
    if (!blurhash && !thumbhash) {
      return { resolvedSource: null, isImageHash: true };
    }
    return {
      resolvedSource: blurhash ?? thumbhash,
      isImageHash: true,
    };
  }, [blurhash, thumbhash, isThumbhashString, isBlurhashString, source]);
}

export function useHeaders(
  source: ImageSource | null | undefined,
  cachePolicy: ImageNativeProps['cachePolicy'],
  onError?: OnErrorEvent[]
): ImageSource | null | undefined {
  const [objectURL, setObjectURL] = useState<string | null>(null);
  useEffect(() => {
    let isMounted = true;
    // We keep track of the object URL created in this effect to clean it up
    // when the component unmounts or the effect re-runs, preventing a memory leak.
    let urlToRevoke: string | null = null;
    (async () => {
      if (!source?.headers || !source.uri) {
        return;
      }
      try {
        const result = await fetch(source.uri, {
          headers: source.headers,
          cache: cachePolicy === 'none' ? 'no-cache' : 'default',
          redirect: 'follow',
        });
        if (!result.ok) {
          throw new Error(`Failed to fetch image: ${result.status} ${result.statusText}`);
        }
        const blob = await result.blob();
        if (isMounted) {
          const newUrl = URL.createObjectURL(blob);
          urlToRevoke = newUrl;
          setObjectURL((prevObjURL) => {
            if (prevObjURL) {
              URL.revokeObjectURL(prevObjURL);
            }
            return newUrl;
          });
        }
      } catch {
        if (isMounted) {
          onError?.forEach((e) => e?.({ source }));
        }
      }
    })();

    return () => {
      isMounted = false;
      if (urlToRevoke) {
        URL.revokeObjectURL(urlToRevoke);
      }
    };
  }, [source]);
  if (!source?.headers) {
    return source;
  }
  if (!objectURL) {
    // Avoid fetching a URL without headers if we have headers
    return null;
  }
  return { ...source, uri: objectURL };
}
