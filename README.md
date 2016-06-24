#### Pumpkin Reader React + React Native
This is our attempt to develop Pumpkin Reader using [React](https://facebook.github.io/react/) and [React Native](https://facebook.github.io/react-native/) technology.

We try to reuse the code as many as possible.

The functionality is far from complete. Currently, it can only show 10 news title (Yes, only the title. You can not even click on it to view the comments).

--

#### How to run
##### Android
```sh
// First, launch an Android emulator or connect an Android device
$ react-native run-android

// when you run on an Android device
$ adb reverse tcp:8081 tcp:8081
```

##### Web
```sh
// run in dev mode
$ npm run-script web-start

// bundle for production
$ npm run-script web-bundle
```

--

#### Code reusability
Actions (47) + Reducers (46) + Store (17) = 110 lines

View = (Android) 140 + (Web) 98 = 238

**Reusability: 110 / (238 + 110) ≅ 31.6%**

--

#### Screenshots
##### Android
<img src="images/android.png" alt="Android screenshot" width="300">

##### Web
<img src="images/web.png" alt="Web screenshot" width="300">
