import { View, Text, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../../src/theme/ThemeContext'
import { getStyles } from '../../../src/styles/style'

export default function Molduras() {
  const { dark, theme } = useContext(ThemeContext)
  const styles = getStyles(theme, dark)
  return (
      <View className="flex-1 items-center  w-full" style={{backgroundColor: dark ? `${theme.colors.cards.zeBigode}60` : `${theme.colors.details.higlight}`}}>
        <View className="flex justify-center items-center border  w-[90%] h-[15%] mt-[1rem]">
          <Text >cabecalho</Text>
        </View>

        <View className="flex justify-center items-center border  w-[90%] h-[65%] mt-[1rem]">
          <Text >local da moldura</Text>
        </View>
        <View className="flex justify-center items-center border  w-[90%] h-[10%] mt-[1rem]">
          <Text >salva e o clic para disparar

          </Text>
        </View>
      </View>
  )
}