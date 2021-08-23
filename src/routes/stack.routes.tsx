import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../styles/colors";

import { Welcome } from "../pages/Welcome";
import { UserIndentification } from "../pages/UserIndentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSelect } from "../pages/PlantSelect";

const stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <stack.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <stack.Screen name="Welcome" component={Welcome} />
    <stack.Screen name="UserIndentification" component={UserIndentification} />
    <stack.Screen name="Confirmation" component={Confirmation} />
    <stack.Screen name="PlantSelect" component={PlantSelect} />
  </stack.Navigator>
);

export default AppRoutes;
