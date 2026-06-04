import { Slot } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavBottom from "../src/components/NavBottom";
import "../src/styles/global.css";
import { ThemeProvider, ThemeContext } from "../src/theme/ThemeContext";
import { useContext } from "react";
import { EventProvider } from "../src/conext/EventContext";

export default function Layout() {
  return (
    <ThemeProvider>
      <EventProvider>
        <LayoutContent />
      </EventProvider>
    </ThemeProvider>
  );
}

 function LayoutContent() {
  
  const { theme, dark } = useContext(ThemeContext);

  const [active, setActive] = useState("home");

  return (
    

        <SafeAreaProvider style={{ flex: 1 , backgroundColor: dark ? theme.colors.background.primary :theme.colors.background.primary }} className="h-20">
          <StatusBar style={dark ? 'light' : 'dark'} />          
          <View style={{ flex: 1 }} >
              <Slot />
          </View>
          <NavBottom active={active} setActive={setActive}/>
        </SafeAreaProvider>
        

  );
}