- React-Native application built with expo metro builder.
- To be able to run the application user needs to have npm installed on his/her computerand also needs to install Expo from expo-cli,
  after the installation the user could run npm start or expo start to start the application.
  -The Application uses two kinds of React-native navigations Stack navigation and Tab navigation

1# Before the user starts the application all the data from data.js file will be parsed to React-native and Async Storage by using react-nataive
AsyncStorage.get and AsyncStorage.set methods.
After parsing the data ,the redux store get initialized by dispatching the data to redux store.

2# After the user arrives to DescScreen can choose between questions to be answered.

3# QuizScreen: User will navigate with the selected Deck to answer the questions.

4# QuizStartScreen: User can view the answer, select correct or incorrect answer to selected question
if the user decides the answer was correct ,will be given 1 point,with incorrect will be given 0,and the app moves to next question.
The result will be store to redux store.
if the user chooses next question,an alert will pop!

5# ResetScreen: the user can reset his/her score and will be navigated back to homeScreen.

6# AddQuestionScreen: User can add his/her on Deck and her/his question and answer the the will be stored to React-native AsyncStorage and the user will be navigated back to homeScreen
