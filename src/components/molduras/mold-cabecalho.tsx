import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../../src/theme/ThemeContext'
import { getStyles } from '../../../src/styles/style'
import { SetaEsquerda } from '../../components/Icons'


export default function Cabecalho() {
  const { dark, theme } = useContext(ThemeContext)
  const styles = getStyles(theme, dark)
  return (
        <View className="flex justify-center items-center border rounded-full  h-[90%]  rounder">
            <SetaEsquerda size={100} color="#000000"  />
        </View>
  )
}