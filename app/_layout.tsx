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

  // 3. Script que ativa o instalador do PWA no celular
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(reg => console.log('Service Worker registrado:', reg.scope))
          .catch(err => console.log('Erro ao registrar Service Worker:', err));
      });
    }
  }, []);

  return (
    <>
      {/* 4. Injetando as tags do PWA direto no cabeçalho HTML da página */}
      <Head>
        <title>São João Irecê</title>
        <meta name="description" content="Aplicação PWA São João Irecê" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <SafeAreaProvider style={{ flex: 1 , backgroundColor: dark ? theme.colors.background.primary :theme.colors.background.primary }} className="h-20">
        <StatusBar style={dark ? 'light' : 'dark'} />          
        <View style={{ flex: 1 }} >
            <Slot />
        </View>
        <NavBottom active={active} setActive={setActive}/>
      </SafeAreaProvider>
    </>
  );
}