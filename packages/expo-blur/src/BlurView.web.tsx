// Copyright © 2024 650 Industries.
'use client';
import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import { View } from 'react-native';

import { BlurViewProps } from './BlurView.types';
import getBackgroundColor from './getBackgroundColor';

const BlurView = forwardRef<{ setNativeProps: (props: BlurViewProps) => void }, BlurViewProps>(
  ({ tint = 'default', intensity = 50, style, ...props }, ref) => {
    const blurViewRef = useRef<HTMLDivElement>(null);
    const blurStyle = getBlurStyle({ tint, intensity });

    useImperativeHandle(
      ref,
      () => ({
        setNativeProps: (nativeProps: BlurViewProps) => {
          if (!blurViewRef.current?.style) {
            return;
          }

          // @ts-expect-error: `style.intensity` is not defined in the types
          const nextIntensity = nativeProps.style?.intensity ?? intensity;
          const blurStyle = getBlurStyle({ intensity: nextIntensity, tint: tint ?? 'default' });
          if (nativeProps.style) {
            for (const key in nativeProps.style) {
              if (key !== 'intensity') {
                // @ts-expect-error: nativeProps.style[key] may not always be a string
                blurViewRef.current.style[key as any] =
                  nativeProps.style[key as keyof typeof nativeProps.style];
              }
            }
          }

          blurViewRef.current.style.backgroundColor = blurStyle.backgroundColor;
          blurViewRef.current.style.backdropFilter = blurStyle.backdropFilter;
          // @ts-expect-error: Webkit-specific legacy property (let's not type this, since it's deprecated)
          blurViewRef.current.style['webkitBackdropFilter'] = blurStyle.WebkitBackdropFilter;
        },
      }),
      [intensity, tint]
    );

    // [Bolt]: Memoize the combined style array to preserve referential equality.
    // In React Native Web, passing dynamically computed objects within array literals
    // to style props (e.g., style={[style, blurStyle]}) breaks referential equality
    // and causes unnecessary re-renders. Wrapping the combined array in useMemo
    // prevents this.
    const combinedStyle = useMemo(() => [style, blurStyle], [style, blurStyle]);

    return (
      <View
        {...props}
        style={combinedStyle}
        /** @ts-expect-error: mismatch in ref type to support manually setting style props. */
        ref={blurViewRef}
      />
    );
  }
);

function getBlurStyle({
  intensity,
  tint,
}: Required<Pick<BlurViewProps, 'intensity' | 'tint'>>): Record<string, string> {
  const blur = `saturate(180%) blur(${Math.min(intensity, 100) * 0.2}px)`;
  return {
    backgroundColor: getBackgroundColor(Math.min(intensity, 100), tint),
    backdropFilter: blur,
    WebkitBackdropFilter: blur,
  };
}

export default BlurView;
