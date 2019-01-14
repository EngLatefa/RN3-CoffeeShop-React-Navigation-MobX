import { createStackNavigator } from "react-navigation";

import CoffeeCartScreen from "../CoffeeCart";
import CoffeeDetailScreen from "../CoffeeDetail";
import CoffeeListScreen from "../CoffeeList";
import LoginScreen from "../Login";

const OurStack = createStackNavigator(
  {
    List: CoffeeListScreen,
    Detail: CoffeeDetailScreen,
    Cart: CoffeeCartScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    }
  }
);

export default OurStack;
