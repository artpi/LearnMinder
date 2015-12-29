# Learnminder

LearnMinder is a SmartPhone app that blocks internet access until a homework / coding challenge is solved.

It is intended to be installed on a child’s smartphone. Parent can set up a topic that the child needs to practice. Every time the child wants to play or browse the Internet, she/he has to first solve a challenge custom tailored to current skill level. When the challenge is solved – child can use the Internet again.

The whole challenge is presented in a narrative that “the Internet is broken” and child needs to fix a bug in the software to use it. In the process, it learns, that all services it enjoys using are created by someone, maintained constantly and it is not magical black box.

Day by day, challenge by challenge the child gets more comfortable in thinking how the websites / services / games are designed and that sometimes it’s actually more fun to create these products than to use them.

### Future home: [LearnMinder.artpi.net](http://learnminder.artpi.net)

## FUTURE INTEGRATIONS INCLUDE

- Coding lessons
- Duolingo – foreign language lessons
- Fintess tracker – training workouts

# Technology

App is supposed to run both on iOS as well as android smartphones/tablets.
It is built using **[React Native](https://facebook.github.io/react-native/)**

## How are you blocking Internet?

Well, it is a bit of a cheat, but it isnt actually blocking Internet. Using built-in parental control function of your smartphone, you would disable browser.

Then, the app serves as a browser with a challenge to solve. That way, if you want to browse Internet, you need to go through a challenge.

# I want to help!

Perfect! Here are setup instructions:

## First you'll need:
- GIT
- NPM
- `npm -g react-native-cli`
- Clone this repo

## Android

- You need Android SDK and emulator - more here: [Android React-Native setup](https://facebook.github.io/react-native/docs/android-setup.html#content)
- Start an emulator with API level at least 21 - to do this: `android avd`
- Go into the folder with the cloned repo and:
- `react-native run-android` - this will compile app, install it on your emulator, compile JS and run everything


## iOS
- You need updated Xcode
- Open Xcode
- Run project in emulator. Thats it.

## Workflow: 
- Do all of the above
- Make some changes
- Reload JS:
	- Android: Press F2 in emulator and choose reload JS. You can also connect via Chrome debugger and do some other cool stuff
	- iOS: CMD-R to reload


## Please Fork and PR !
