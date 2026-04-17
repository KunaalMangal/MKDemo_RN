# MKDemo - React Native Cross-Platform Mobile App

A modern, feature-rich React Native application demonstrating best practices in mobile development with authentication, navigation, form handling, and component architecture.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

## Overview

MKDemo is a cross-platform React Native application built to showcase modern mobile development patterns and architecture. It provides a solid foundation for building scalable mobile applications with authentication, multi-screen navigation, form validation, and component reusability.

The app supports both iOS and Android platforms and includes features like user authentication, onboarding flows, account management, customizable theming, and robust form handling.

> ⚠️ **Platform Status**: This application is currently tested and optimized for **Android only**. iOS support will be added in a future update. If you encounter any issues on iOS, you may need to fix them yourself or raise an issue on the repository.

## ✨ Features

- **Authentication System**
  - User login and signup
  - Password reset functionality
  - Secure token management
  - Persistent session handling

- **Navigation**
  - Bottom tab navigation
  - Drawer navigation support
  - Stack navigation for flows
  - Gesture-based navigation

- **User Interface**
  - Dark/Light theme support
  - Safe area handling
  - Reusable component library
  - Custom vector icons

- **Data Management**
  - Form validation with React Hook Form + Yup
  - Secure local storage (MMKV)
  - State management with Context API and useReducer

- **Developer Experience**
  - TypeScript for type safety
  - Jest testing setup
  - ESLint configuration
  - Development logging and debug mode

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | React Native | 0.85.1 |
| **Language** | TypeScript | 5.8.3 |
| **UI Library** | React | 19.2.3 |
| **Navigation** | React Navigation | 7.x |
| **Form Handling** | React Hook Form | 7.66.1 |
| **Validation** | Yup | 1.7.1 |

| **Storage** | React Native MMKV | 4.3.1 |
| **Animations** | React Native Reanimated | 4.3.0 |
| **Gestures** | React Native Gesture Handler | 2.31.1 |
| **Icons** | React Native Vector Icons | 10.3.0 |
| **Testing** | Jest | 29.6.3 |
| **Build Tool** | Metro | (bundled with RN) |

## 🚀 Getting Started

### Prerequisites

- **Node.js** v22.11.0 or higher
- **npm** or **yarn** (latest recommended)
- **React Native CLI** (v20.1.0+)
- **Android Studio** (for Android development)
  - Android SDK (API level 23+)
  - Android emulator or physical device
- **Xcode** 14+ (for iOS development on macOS)
  - CocoaPods

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KunaalMangal/MKDemo_RN.git
   cd MKDemo_RN
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install iOS pods** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the Project

#### Start Metro (Development Server)
```bash
npm start
# or
yarn start
```

#### Run on Android
```bash
# In a new terminal (with Metro running)
npm run android
# or
yarn android
```

**Requirements:**
- Android emulator running or physical device connected
- USB debugging enabled (for physical devices)

#### Run on iOS
```bash
# In a new terminal (with Metro running)
npm run ios
# or
yarn ios
```

**Requirements:**
- macOS machine
- Xcode installed

#### Run on iOS with Specific Device
```bash
npm run ios -- --device "iPhone 16"
```

## 📁 Project Structure

```
MKDemo_RN/
├── src/
│   ├── assets/
│   │   ├── fonts/              # Custom fonts
│   │   └── images/             # Image assets
│   ├── components/             # Reusable UI components
│   │   ├── AppButton/
│   │   ├── AppHeader/
│   │   ├── AppImage/
│   │   ├── AppInput/
│   │   ├── AppText/
│   │   ├── KeyboardAvoidingWrapper/
│   │   ├── SafeAreaView/
│   │   └── loader/
│   ├── config/
│   │   ├── config.ts           # App configuration
│   │   └── index.ts
│   ├── constants/              # App-wide constants
│   │   ├── images.ts
│   │   ├── regex.ts
│   │   └── validationMsg.ts
│   ├── context/                # React Context providers
│   │   ├── AuthContext.tsx
│   │   └── index.ts
│   ├── helpers/                # Utility helper functions
│   ├── hooks/                  # Custom React hooks
│   │   ├── useAuth.ts
│   │   └── useValidationSchema.ts
│   ├── i18n/                   # Internationalization
│   ├── navigations/            # Navigation configuration
│   │   ├── AppStack.tsx
│   │   ├── AuthStack.tsx
│   │   ├── BottomTab.tsx
│   │   ├── Router.tsx
│   │   ├── Routes.ts
│   │   ├── NavigationOptions.tsx
│   │   ├── NavigationService.ts
│   │   └── types.ts
│   ├── reducers/               # Redux-like reducers
│   │   ├── authReducer.ts
│   │   └── index.ts
│   ├── screens/                # Screen components
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   └── signup/
│   │   ├── main/
│   │   │   ├── home/
│   │   │   └── myaccount/
│   │   ├── onboarding/
│   │   └── common/
│   ├── services/               # API and storage services
│   │   ├── api/
│   │   │   └── apiService.ts
│   │   └── storage/
│   │       ├── storageKeys.ts
│   │       └── storageService.ts
│   ├── theme/                  # Theming
│   │   ├── AppStyles.ts
│   │   ├── Fonts.ts
│   │   ├── ThemeConfig.ts
│   │   ├── ThemeContext.tsx
│   │   ├── Typography.ts
│   │   ├── colors/
│   │   └── index.ts
│   ├── types/                  # TypeScript type definitions
│   │   ├── appConfig.ts
│   │   ├── formTypes.ts
│   │   ├── globalTypes.ts
│   │   └── index.ts
│   └── utils/                  # Utility functions
│       └── ViewPorts.ts
├── android/                    # Android native code
├── ios/                        # iOS native code
├── __tests__/                  # Test files
├── App.tsx                     # Root app component
├── app.json                    # App manifest
├── package.json
├── tsconfig.json
├── jest.config.js
├── metro.config.js
├── babel.config.js
└── README.md
```

## 📱 Usage

### ⚡ Important: Demo Application - No Backend Services

This application is a **demonstration project** that showcases authentication UI patterns and validation flows. It currently **does NOT use any real API or backend services**.

**How to test the app:**
- Enter any valid email format (e.g., `test@example.com`)
- Enter any password (minimum 8 characters)
- The app will validate the input and allow you to proceed
- All data is stored locally using MMKV storage

When implementing this in a real application, you would replace the local validation with actual API calls to your backend.

### Basic App Flow

1. **Onboarding** - First-time users see the onboarding screen
2. **Authentication** - Users can log in or sign up using dummy credentials
3. **Main App** - Authenticated users access the main app with bottom tab navigation
4. **Account Management** - Users can manage their profile

### Authentication Example

```tsx
import { useAuth } from '@/hooks/useAuth';

export function LoginScreen() {
  const { onLogin } = useAuth();
  
  const handleLogin = async (email: string, password: string) => {
    // API call to authenticate
    const response = await apiService.login(email, password);
    
    // Update auth context
    onLogin({
      token: response.token,
      user: response.user
    });
  };
  
  return (
    // Your login form JSX
  );
}
```

### Form Validation Example

```tsx
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8).required('Password is required'),
});

export function MyForm() {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
}
```

### Theme Switching

```tsx
import { useTheme } from '@/theme';

export function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <TouchableOpacity onPress={toggleTheme}>
      <Text>Current theme: {theme.mode}</Text>
    </TouchableOpacity>
  );
}
```

## 🧪 Testing

### Run Tests
```bash
npm test
# or
yarn test
```

### Run Tests with Coverage
```bash
npm test -- --coverage
```

Jest is configured to work with React Native and TypeScript. Test files are located in `__tests__/` directory.

## �️ Roadmap

The following features are planned for upcoming releases:

- **API Integration & Backend Services**
  - REST API client with request/response interceptors
  - Automatic token injection and refresh
  - Error handling and retry mechanisms

- **Environment Configuration**
  - Multi-environment support (dev, staging, production)
  - Secure configuration management
  - Build-time and runtime configuration

- **Internationalization (i18n)**
  - Multi-language support framework
  - Dynamic language switching
  - Locale-specific formatting

- **Advanced State Management**
  - Redux or Zustand integration
  - Middleware for logging and analytics
  - DevTools integration

- **Additional Features**
  - Push notifications
  - Deep linking
  - Analytics integration
  - Crash reporting
  - Offline support

## �📝 Scripts

| Script | Purpose |
|--------|---------|
| `npm start` | Start Metro development server |
| `npm run android` | Build and run on Android |
| `npm run ios` | Build and run on iOS |
| `npm test` | Run Jest tests |
| `npm run lint` | Run ESLint |
| `npm run eject` | Eject from React Native CLI |

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Commit changes: `git commit -am 'Add my feature'`
3. Push to branch: `git push origin feature/my-feature`
4. Submit a pull request

### Code Standards

- Use TypeScript for type safety
- Follow ESLint configuration
- Write descriptive commit messages
- Test your changes before submitting PR
- Use React hooks instead of class components

## � Author

This project is created to demonstrate best practices in mobile development with React Native.

**For more information about my work and projects, visit my portfolio:**
- Portfolio: [Kunaal Mangal](https://kunaalmangal.github.io/)
- GitHub: [Kunaal Mangal](https://github.com/KunaalMangal)
- LinkedIn: [Kunaal Mangal](https://www.linkedin.com/in/kunaalmangal/)

## 📚 Documentation

For troubleshooting, advanced configuration, and platform-specific issues, please refer to the official documentation:

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation Docs](https://reactnavigation.org/docs/getting-started/)
- [React Hook Form Docs](https://react-hook-form.com/get-started)
- [Yup Validation Library](https://github.com/jquense/yup)
- [React Native MMKV](https://github.com/mrousavy/react-native-mmkv)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

You are free to use this project for personal and commercial purposes with proper attribution.

## 📞 Support

For issues, questions, or suggestions, please open an issue in the repository.

---

**Built with ❤️ using React Native**

