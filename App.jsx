
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Dashboard } from './src/screens/Dashboard';
import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";

import AppLoading from 'expo-app-loading';
import theme from './src/global/styles/theme';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'

export default function App() {

  const [fontsLoader] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoader) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});