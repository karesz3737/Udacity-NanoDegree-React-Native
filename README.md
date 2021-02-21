# React-Native application built with expo metro builder.

```
The Application using Redux, only React Hooks,Async Storage,Expo notifications ,The icons were used for the application were Ionic icons.
The Application using React native navitation version 5 ,Stack navigation and Tab navigation.
The Application was tested on IPhone 8 and IPhone 11 simulator as well as on Nexus API 30 on Android simulator.
```

# To get started

```
To be able to run the application user needs to have npm installed on his/her computer and also needs to install Expo from the expo - cli, after the installation the user could run npm start or expo start to start the react native application.
The Application uses two kinds of React-native navigations Stack navigation and Tab navigation.
Also needs to install Xcode to be able to run Ios simulator as well as Android Studio to be able to run Android Simulator

```

# Start up the Application

```
Before the user starts the application all the data from the data.js file  will be parsed to React-native Async Storage by using react-native AsyncStorage.get and AsyncStorage.set methods.
At the same time expo notification will be set for an other 24 hours time frame.
If the user doesn't start answering questions expo notifies the user by sendinding notification to the user.
If the user does answer the question new timeline will be set by expo notifications.
After parsing the data, the redux store gets initialized by dispatching the data to redux store reducers.
```

# Screens

### DeckScreen:

```
This is the main Screen where the application starts.
On this Screen the application already fetches data from redux store and the new deck added to Async Storage were dispatched to redux store accordingly.

```

[![Deck.png](https://i.postimg.cc/BZLJ833h/Deck.png)](https://postimg.cc/dDYbXzLd)

[![Simulator-Screen-Shot-i-Phone-8-Plus-2021-02-21-at-14-36-14.png](https://i.postimg.cc/K8txvDnJ/Simulator-Screen-Shot-i-Phone-8-Plus-2021-02-21-at-14-36-14.png)](https://postimg.cc/qNB91nD3)

### QuizScreen:

```
User will navigate with the selected Deck to answer the questions
```

# QuizStartScreen:

```
User can view the answer, select a correct or incorrect answer to selected questions if the user decides the answer was correct, will be given 1 point, with incorrect will be given 0,and the app moves to the next question.
The result will be stored to redux store.
If the user chooses a next question, an alert modal will pop up and warns the user!


```

[![Question.png](https://i.postimg.cc/fLPR0TkK/Question.png)](https://postimg.cc/PpmjgHWp)

[![Qustions.png](https://i.postimg.cc/hPdNnPnB/Qustions.png)](https://postimg.cc/D87xdhmj)

# ResetScreen:

```
The user can reset his/her score and will be navigated back to Home Screen.
```

[![Reset-S.png](https://i.postimg.cc/8z8Qff4c/Reset-S.png)](https://postimg.cc/xcPFWCWV)

[![Reset.png](https://i.postimg.cc/5t7CnJ6H/Reset.png)](https://postimg.cc/R3thZj19)

# AddQuestionScreen:

```
User can add his/her on Deck and her/his question and the answer will be stored to React-native AsyncStorage and the user will be navigated back to Home Screen.
The form was used is a React-hook-form.
```

[![Add-Deck.png](https://i.postimg.cc/8PzVVV5k/Add-Deck.png)](https://postimg.cc/V5phjpn2)

[![Add-Deck.png](https://i.postimg.cc/Gh68BK6D/Add-Deck.png)](https://postimg.cc/4mbNq6f4)

# Succes Screen:

```
After adding a new Deck to stock user will be navigated to Succes Screen where will have the choice to add a new set of questions or to go back to main Screen.

```
[![Simulator-Screen-Shot-i-Phone-8-Plus-2021-02-10-at-19-21-12.png](https://i.postimg.cc/bNC298MK/Simulator-Screen-Shot-i-Phone-8-Plus-2021-02-10-at-19-21-12.png)](https://postimg.cc/2VW6zpCw)
