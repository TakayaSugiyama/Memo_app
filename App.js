import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import SignUpScreen from "./src/screens/SignUpScreen"
import LoginScreen from "./src/screens/LoginScreen";
import MemoListScreen from "./src/screens/MemoListScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";



const App = createStackNavigator({
  Home: {screen: MemoListScreen},
  MemoDetail: {screen: MemoDetailScreen},
  MemoEdit: {screen: MemoEditScreen},
  Login: {screen: LoginScreen},
  SignUp: {screen: SignUpScreen},
},{
  defaultNavigationOptions: {headerTitle: "Memot",
                            headerStyle:{
                              backgroundColor:"#265366",
                            },
                            headerTitleStyle:{
                              color:"#fff",
                            }
 },
});

export default createAppContainer(App);



