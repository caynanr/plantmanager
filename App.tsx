import React from "react";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

import Routes from "./src/routes";

export default function App() {
  const [fonstLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });

  if (!fonstLoaded) return <AppLoading />;

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Routes />
    </>
  );
}
