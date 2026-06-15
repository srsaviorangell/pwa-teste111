import { View, Text, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../../src/theme/ThemeContext'
import { getStyles } from '../../../src/styles/style'
import  Cabecalho  from '../../../src/components/molduras/mold-cabecalho'



export default function Molduras404() {
  const { dark, theme } = useContext(ThemeContext)
  const styles = getStyles(theme, dark)
  return (
      <View className="flex-1 items-center  w-full" style={{backgroundColor: dark ? `${theme.colors.cards.zeBigode}60` : `${theme.colors.details.higlight}`}}>
        <View className="flex justify-center items-center border  w-[90%] h-[15%] mt-[1rem]">
          <Cabecalho />
        </View>

        <View className="flex justify-center items-center border  w-[90%] h-[65%] mt-[1rem]">
          <Text >local da moldura</Text>
        </View>
        <View className="flex justify-center items-center border  w-[90%] h-[10%] mt-[1rem]">
          <Text >salva  para disparar e compatilhar

          </Text>
        </View>
      </View>
  )
}