import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../../src/theme/ThemeContext'
import { EventContext } from '../../../src/conext/EventContext'
import { getStyles } from "../../../src/styles/style";
import { FavoritoIcon } from "../../../src/components/Icons"
import CardsParaPageProgamacao from '../../../src/components/cardsParaPageProgamacao';

type SelecionarDiaProps = {
  diaSelecionado: string | null;
};

export default function AtracoesPorPalco({diaSelecionado}: SelecionarDiaProps) {
  
  const { eventos } = useContext(EventContext);

  const { dark, theme } = useContext(ThemeContext)  
    const styles = getStyles(theme, dark)

  return (
  <View style={{ flex: 1 }} className=" w-full   ">
    <ScrollView  className=" w-full h-full "
    contentContainerClassName="pb-24 px-4 "
    showsVerticalScrollIndicator={false}
    nestedScrollEnabled={true}>
    
      <View className=' w-full h-full flex justify-start items-center gap-5 mt-5 '>
        <CardsParaPageProgamacao   diaSelecionado={diaSelecionado}
 />

      </View>
    </ScrollView>

  </View>
);}



 // {eventos.map((item) => (
        

        
   //   ))}
     //   <Text key={item.id}>{item.artist}</Text>

