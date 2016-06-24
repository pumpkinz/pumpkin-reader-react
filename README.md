#### Pumpkin Reader React + React Native
This is our attempt to develop Pumpkin Reader using [React](https://facebook.github.io/react/) and [React Native](https://facebook.github.io/react-native/) technology.

We try to reuse the code as many as possible.

The functionality is far from complete. Currently, it can only show 10 news title.

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

#### Code reusability
Actions (47) + Reducers (46) + Store (17) = 110 lines

Android view: container (116) + component (24) = 140 lines

Web view: container (66) + component (20) + HTML (12) = 98 lines

Android reusability: 110 / 250 = 44%

Web reusability: 110 / 208 = 52%

#### Screenshots
##### Android
<img src="images/android.png" alt="Android screenshot" width="300">

##### Web
<img src="images/web.png" alt="Web screenshot" width="300">
