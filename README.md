# MKDemo React Native App

## 📌 Introduction
Welcome to the **MKDemo React Native App**! This is a demo application built to demonstrate a sample project using React Native. It showcases core functionalities, navigation, and UI components while maintaining modern development standards.

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## 📖 Table of Contents
- [Introduction](#-introduction)
- [Requirements](#-requirements)
- [Getting Started](#-getting-started)
- [Installed Dependencies](#-installed-dependencies)
- [Setup and Run](#-setup-and-run)
- [Additional Resources](#-additional-resources)
- [Troubleshooting](#-troubleshooting)

## ✅ Requirements
Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio](https://developer.android.com/studio) (for Android development)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development)

## 🚀 Getting Started
> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Step 1: Start Metro
Metro is the JavaScript build tool for React Native. To start the Metro dev server, run:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Build and Run Your App
With Metro running, open a new terminal and use one of the following commands:

#### Android
```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

#### iOS
For iOS, install CocoaPods dependencies (only required on first setup or when updating native dependencies):

```sh
bundle install
bundle exec pod install
```
Then, run:

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the emulator or a connected device.

### Step 3: Modify Your App
Open `App.tsx` in your text editor and make changes. Thanks to [Fast Refresh](https://reactnative.dev/docs/fast-refresh), your app will update automatically.

To manually reload:
- **Android**: Press <kbd>R</kbd> twice or select **Reload** from the **Dev Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> on Windows/Linux, <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> on macOS).
- **iOS**: Press <kbd>R</kbd> in the iOS Simulator.

## 🎉 Congratulations!
You've successfully run and modified your React Native app! 🚀

### Next Steps
- If you want to integrate this into an existing app, check out the [Integration Guide](https://reactnative.dev/docs/integration-with-existing-apps).
- Learn more from the [React Native Docs](https://reactnative.dev/docs/getting-started).

## 📦 Installed Dependencies
Here are the major dependencies used in this project:

### **Core Dependencies**
- `react`
- `react-native`

### **Navigation**
- `@react-navigation/native`
- `@react-navigation/stack`
- `@react-navigation/bottom-tabs`
- `@react-navigation/drawer`
- `@react-navigation/material-top-tabs`
- `@react-navigation/native-stack`

### **UI & Animations**
- `react-native-vector-icons`
- `react-native-gesture-handler`
- `react-native-reanimated`
- `react-native-safe-area-context`
- `react-native-screens`
- `react-native-pager-view`

### **Development & Tooling**
- `eslint`
- `prettier`
- `jest`
- `typescript`
- `@babel/core`
- `@react-native-community/cli`
- `@types/react`
- `@types/jest`

For the complete list of dependencies, refer to [`package.json`](./package.json).

## 📘 Additional Resources
- [React Native Website](https://reactnative.dev)
- [Getting Started Guide](https://reactnative.dev/docs/environment-setup)
- [Learn the Basics](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/)
- [Jest Testing Framework](https://jestjs.io/)

## 🛠 Troubleshooting
If you're facing issues, check the [Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting).

---
If you encounter any issues or have suggestions, feel free to raise an issue in the repository. 🚀

