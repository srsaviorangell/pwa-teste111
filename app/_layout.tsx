import { Slot } from "expo-router";
import Head from 'expo-router/head'; // <- 1. Importamos o Head aqui
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useContext } from 'react'; // <- 2. Importamos o useEffect aqui
import { View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavBottom from "../src/components/NavBottom";
import "../src/styles/global.css";
import { ThemeProvider, ThemeContext } from "../src/theme/ThemeContext";
import { EventProvider } from "../src/conext/EventContext";
import { FavoritesProvider } from "../src/conext/FavoritesContext";

export default function Layout() {
  return (
    <ThemeProvider>
      <EventProvider>
        <FavoritesProvider>
          <LayoutContent />
        </FavoritesProvider>
      </EventProvider>
    </ThemeProvider>
  );
}

function LayoutContent() {
  const { theme, dark } = useContext(ThemeContext);
  const [active, setActive] = useState("home");

  useServiceWorker();
  

  return (
    <>
      {/* 4. Injetando as tags do PWA direto no cabeçalho HTML da página */}
      <Head>
        <title>São João Irecê</title>
        <meta name="description" content="Aplicação PWA São João Irecê" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <SafeAreaProvider style={{  backgroundColor: dark ? theme.colors.background.primary :theme.colors.background.primary }} className="h-20">
        <StatusBar style={dark ? 'light' : 'dark'} />          
        <View className="flex h-[91.9%] " style={{ flex: 1, overflow: 'hidden' }}>  
            <Slot />
        </View>
        <NavBottom active={active} setActive={setActive}/>
      </SafeAreaProvider>
    </>
  );
}


export function useServiceWorker() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => console.log("SW registrado"))
        .catch((err) => console.log("Erro SW", err));
    }
  }, []);
}