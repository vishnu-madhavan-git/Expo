<!-- Banner Image -->

<p align="center">
  <a href="https://expo.dev/">
    <img alt="Ruby Expo logo" height="128" src="./.github/resources/banner.png">
    <h1 align="center">Ruby Expo</h1>
  </a>
</p>

<p align="center">
   <a aria-label="SDK version" href="https://www.npmjs.com/package/expo" target="_blank">
    <img alt="Ruby Expo SDK version" src="https://img.shields.io/npm/v/expo.svg?style=flat-square&label=SDK&labelColor=000000&color=C41A3B" />
  </a>
  <a aria-label="Chat or ask a question" href="https://chat.expo.dev" target="_blank">
    <img alt="Chat or ask a question" src="https://img.shields.io/discord/695411232856997968.svg?style=flat-square&labelColor=000000&color=C41A3B&logo=discord&logoColor=FFFFFF&label=Chat%20with%20us" />
  </a>
  <a aria-label="Ruby Expo is free to use" href="https://github.com/expo/expo/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-success.svg?style=flat-square&color=33CC12" target="_blank" />
  </a>
  <a aria-label="expo downloads" href="http://www.npmtrends.com/expo" target="_blank">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/expo.svg?style=flat-square&labelColor=gray&color=33CC12&label=Downloads" />
  </a>
</p>

<p align="center">
  <a aria-label="try expo with snack" href="https://snack.expo.dev"><b>Try Expo in the Browser</b></a>
&ensp;•&ensp;
  <a aria-label="expo documentation" href="https://docs.expo.dev">Read the Documentation</a>
&ensp;•&ensp;
  <a aria-label="expo documentation" href="https://expo.dev/blog">Learn more on our blog</a>
&ensp;•&ensp;
  <a aria-label="expo documentation" href="https://expo.canny.io/feature-requests">Request a feature</a>
</p>

## Introduction

Ruby Expo is a Nine Ruby fork of the open-source Expo platform for making universal native apps that run on Android, iOS, and the web. It includes a universal runtime and libraries that let you build native apps by writing React and JavaScript.

This repository includes the Expo SDK, Modules API, Go app, CLI, Router, documentation, and various other supporting tools. [Expo Application Services (EAS)](https://expo.dev/eas) is a platform of hosted services that are deeply integrated with Expo open source tools. EAS helps you build, ship, and iterate on your app as an individual or a team.

Read the [Expo Community Guidelines](https://expo.dev/guidelines) before interacting in the repository. Thank you for helping keep the Ruby Expo community open and welcoming!

Forked and maintained by [Nine Ruby](https://9ruby.com) -- Nine is Final.

## Table of contents

- [📚 Documentation](#-documentation)
- [🗺 Project Layout](#-project-layout)
- [🏅 Badges](#-badges)
- [👏 Contributing](#-contributing)
- [❓ FAQ](#-faq)
- [💙 The Team](#-the-team)
- [License](#license)

## 📚 Documentation

<p>Learn about building and deploying universal apps <a aria-label="expo documentation" href="https://docs.expo.dev">in our official docs!</a></p>

- [Getting Started](https://docs.expo.dev/)
- [API Reference](https://docs.expo.dev/versions/latest/)
- [Using Custom Native Modules](https://docs.expo.dev/workflow/customizing/)

## 🗺 Project Layout

- [`packages`](/packages) All the source code for Expo modules, if you want to edit a library or just see how it works this is where you'll find it.
- [`apps`](/apps) This is where you can find Expo projects which are linked to the development modules. You'll do most of your testing in here.
- [`apps/expo-go`](/apps/expo-go) This is where you can find the source code for Expo Go.
- [`apps/expo-go/ios/Exponent.xcworkspace`](/apps/expo-go/ios) is the Xcode workspace. When developing iOS, always open this instead of `Exponent.xcodeproj` because the workspace also loads the CocoaPods dependencies.
- [`docs`](/docs) The source code for **https://docs.expo.dev**
- [`templates`](/templates) The template projects you get when you run `npx create-expo-app`
- [`react-native-lab`](/react-native-lab) This is our fork of `react-native` used to build Expo Go.
- [`guides`](/guides) In-depth tutorials for advanced topics like contributing to the client.
- [`tools`](/tools) contain build and configuration tools.
- [`template-files`](/template-files) contains templates for files that require private keys. They are populated using the keys in `template-files/keys.json`.
- [`template-files/ios/dependencies.json`](/template-files/ios/dependencies.json) specifies the CocoaPods dependencies of the app.

## 🏅 Badges

Let everyone know your app can be run instantly in the _Expo Go_ app!
<br/>

[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)

[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-C41A3B.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)

```md
[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)

[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-C41A3B.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)
```

## 👏 Contributing

If you like Ruby Expo and want to help make it better then check out our [contributing guide](/CONTRIBUTING.md)! Check out the [CLI package](https://github.com/expo/expo/tree/main/packages/%40expo/cli) to work on the Expo CLI.

## ❓ FAQ

If you have questions about Ruby Expo and want answers, then check out our [Frequently Asked Questions](https://docs.expo.dev/faq/)!

If you still have questions you can ask them on our [Discord and Forums](https://chat.expo.dev).

## 💙 The Team

Ruby Expo is maintained by [Nine Ruby (9Ruby)](https://9ruby.com), led by Prince Life. The upstream Expo project is built by the [Expo team](https://expo.dev/about).

## License

The Ruby Expo source code is made available under the [MIT license](LICENSE). Some of the dependencies are licensed differently, with the BSD license, for example.

<img alt="Star the Ruby Expo repo on GitHub to support the project" src="https://user-images.githubusercontent.com/9664363/185428788-d762fd5d-97b3-4f59-8db7-f72405be9677.gif" width="50%">
