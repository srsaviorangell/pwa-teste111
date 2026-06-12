import { View, Text, Image, Pressable } from 'react-native';
import React, { createContext, useContext, useState, } from 'react';
import { ThemeContext } from '../../../src/theme/ThemeContext';
import { Link } from 'expo-router'
import { buscarPalcoPrincipal, buscarZeBigode, requisicaoProgamacaoPorPalco } from '../../../src/requisicao/listaProgamacao';
import type { Evento } from '../../../src/requisicao/listaProgamacao';
import { EventContext } from '../../../src/conext/EventContext';
import { getStyles } from "../../../src/styles/style";



const ProgramacaoContext = createContext({});



export default function Programacao() {

  const { setEventos } = useContext(EventContext);

  const { dark, theme } = useContext(ThemeContext)

  const styles = getStyles(theme, dark)

  const [carregandoPalco, setCarregandoPalco] = useState<string | null>(null);


  const handlePressPalcoPrincipal = async () => {
    console.log("CLICOU PALCO PRINCIPAL");
    setCarregandoPalco('principal');

    try {
      const dados = await buscarPalcoPrincipal();
      console.log("📦 Dados recebidos:", dados);

      setEventos(dados);

    } catch (error) {
      console.log("❌ Erro na requisição:", error);

      console.log(error);
    } finally {
      setCarregandoPalco(null);
      console.log("🏁 Finalizou processo do palco principal");

    }
  };

  const handlePressPalcoZeBigode = async () => {
    setCarregandoPalco('zebigode');

    try {
      const dados = await buscarZeBigode();
      console.log("📦 Dados recebidos:", dados);

      setEventos(dados);

    } catch (error) {
      console.log(error);
      console.log("❌ Erro na requisição:", error);

    } finally {
      setCarregandoPalco(null);
      console.log("🏁 Finalizou processo do palco ze bigode");

    }
  };


  return (
    <View className=' flex flex-row h-full w-full gap-2  justify-center  ' style={[styles.cardGereis]}>

      <Link href="/pages/programacao/programacaoGeral" asChild>

        <Pressable id='palcoPrincipal' className='  w-[45%] h-full flex  items-center rounded-xl'
          style={{ backgroundColor: theme.colors.cards.palcoPrincipal }}
          onPress={() => {
            handlePressPalcoPrincipal();
          }}


        >
          <View className=' flex justify-center items-center'>
            <Image source={require("../../../assets/images/palco-principal-semfundo.png")}
              className="  bottom-[23%]  w-full h-full   "
              style={{ tintColor: dark ? theme.colors.text.disabled : theme.colors.background.primarySoft, height: 130 }} resizeMode="contain" />

            <Text className=" font-extrabold  bottom-[43%]   "
              style={{
                color: dark ? theme.colors.text.disabled : theme.colors.background.primarySoft,

              }}


            >Palco Principal</Text>
          </View>
        </Pressable>

      </Link>

      <Link href="/pages/programacao/programacaoGeral" asChild>

        <Pressable id='barracaoZeBigode' className='relative w-[45%] h-full flex items-center rounded-xl '

          style={{ backgroundColor: theme.colors.cards.zeBigode2 }}
          onPress={() => {
            
            handlePressPalcoZeBigode();
          }}
        >
          <View className=' flex justify-center items-center  w-[10rem] h-[5rem] translate-y-[10px]'>
            <Image source={require("../../../assets/images/zebarraca-semfundo.png")}
              className="  scale-110 "
              style={{ tintColor: dark ? theme.colors.text.secondary : theme.colors.background.primarySoft, height: 120 , width: 150 }} resizeMode="contain" />

            <Text className=" font-extrabold  bottom-[43%]   "
              style={{
                color: dark ? theme.colors.text.secondary : theme.colors.background.primarySoft,

              }}


            >Circuito Zé Bigode</Text>
          </View>
        </Pressable>

      </Link>

    </View>
  );
}