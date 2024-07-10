# Acode Editor - Code Editor for Android

<p align="center">
  <img src='utils/resources/logo.png' width='250'>
</p>

[![](https://img.shields.io/endpoint?label=Acode&style=flat-square&url=https%3A%2F%2Fmogyo.ro%2Fquart-apis%2Ftgmembercount%3Fchat_id%3Dfoxdebug_acode)](https://t.me/foxdebug_acode) [![](https://dcbadge.vercel.app/api/server/vVxVWYUAWD?style=flat)](https://discord.gg/vVxVWYUAWD)

## • Overview

Welcome to Acode Editor - a powerful and versatile code editing tool designed specifically for Android devices. Whether you're working on HTML, CSS, JavaScript, or other programming languages, Acode empowers you to code on-the-go with confidence. It comes with a built in nodejs environment for plugin development and support for executing commands in [Termux](https://github.com/termux/termux-app)

## • Features

- Builtin language clients.
- Code execution.
- Edit and create websites, and instantly preview them in a browser.
- Seamlessly modify source files for various languages like Python, Java, JavaScript, and more.
- Access the console to quickly identify errors and logs.
- Enjoy multi-language editing support with easy management tools.
- Terminal support and command executions support via [Termux](https://github.com/termux/termux-app).
- NodeJS environment for plugin development.

## • Installation

You can get Acode Editor from popular platforms:

[<img src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png" alt="Get it on Google Play" height="60">](https://play.google.com/store/apps/details?id=com.foxdebug.acodefree) [<img src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" alt="Get it on F-Droid" height="60"/>](https://www.f-droid.org/packages/com.foxdebug.acodenode/)

## • Project Structure

<pre>
Acode/
|
|- packages/  - Npm support packages
|
|- src/   - Core code and language files
|
|- www/   - Public documents, compiled files, and HTML templates
|
|- utils/ - CLI tools for building, string manipulation, and more
</pre>

## • Multi-language Support

Enhance Acode's capabilities by adding new languages easily. Just create a file with the language code (e.g., en-us for English) in [`src/lang/`](https://github.com/7HR4IZ3/Acode/tree/main/src/lang) and include it in [`src/lib/lang.js`](https://github.com/7HR4IZ3/Acode/blob/main/src/lib/lang.js). Manage strings across languages effortlessly using utility commands:

```shell
yarn lang add
yarn lang remove
yarn lang search
yarn lang update
```

## • Building the Application

To build the APK, ensure you have Node.js, NPM, and Apache Cordova installed on your device. Use Cordova CLI to build the application. To build thw Nodejs environment, you need Android NDK installed on your setup.

1. Initial setup (required only once):

```shell
yarn setup
```

2. Build the project:

```shell
yarn build <platform (android)> <free|paid> <p|prod|d|dev>
```

## • Developing a Plugin for Acode

For comprehensive documentation on creating plugins for Acode Editor, visit the [repository](https://github.com/7HR4IZ3/acode-nodejs-plugin).

For plugin development information, refer to: [Acode Plugin Documentation](https://acode.app/plugin-docs)

> 💙 Empower your coding journey with the dynamic and efficient Acode Editor. Happy coding on-the-go!
