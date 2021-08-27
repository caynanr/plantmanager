import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../styles/colors";

import { Welcome } from "../pages/Welcome";
import { UserIndentification } from "../pages/UserIndentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSave } from "../pages/PlantSave";

import AuthRoutes from "./tab.routes";

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
    <stack.Screen name="PlantSelect" component={AuthRoutes} />
    <stack.Screen name="PlantSave" component={PlantSave} />
    <stack.Screen name="MyPlants" component={AuthRoutes} />
  </stack.Navigator>
);

export default AppRoutes;
