# Jobs App

This is a mobile app that allows you find the latest and most popular jobs around you in. This app utilizes RapidAPI's JSearch API to retrieve the jobs requested in real time.

### Prerequisites

Create an account on RapidAPI to be able to perform real time requests.

## Running the project

- Clone this project
```
git clone < project-url.git >
```

- [Install NodeJS](https://nodejs.org/en/) on your computer.

- [Install yarn](https://yarnpkg.com/en/docs/install) on your computer
> Yarn is a dependency manager built by facebook and google. It is a more efficient and reliable (thanks to yarn.lock) alternative of npm.

- Launch ``` yarn ``` command in a terminal opened in the project folder.
> This command will look into the *package.json* file and install all the dependencies listed here.

- Install react-native-cli globally on your computer
```
yarn global add react-native-cli

### Android steps

- Launch a virtual android device [(through *Android Studio* for instance)](https://developer.android.com/studio/run/managing-avds.html#viewing)

> If you have never installed any android virtual device, [follow those instructions](https://developer.android.com/studio/run/managing-avds.html#createavd)

- Then, run the project in executing on your project folder:

```
react-native run-android
```

## Usage with Expo Client App

Expo Client enables you to work with all of the [Components and APIs](https://facebook.github.io/react-native/docs/getting-started.html) in React Native, as well as the [JavaScript APIs](https://docs.expo.io/versions/latest/sdk/index.html) that the are bundled with the Expo App.

Expo Client supports running any project that doesn't have custom native modules added.

- Download the "Expo Client" app from the Play Store or App Store.
- Start your project with Expo
  - Install the CLI `npm i -g expo-cli`
  - Start the project `expo start`
- Open the project:
  - Sign in to expo and the project will appear in the app.
  - Or point your phone's camera at the QR code in the terminal (press "c" to view it)
  
  ## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
