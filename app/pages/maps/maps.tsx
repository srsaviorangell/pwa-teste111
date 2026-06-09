import { View, Text ,ScrollView } from 'react-native'
import React from 'react'
import  MapaGeral  from '../../../src/mapaComponent/mapsGeral';

export default function Maps() {
  return (
    <ScrollView style={{ flex: 1 }} className="flex-1 items-center justify-center">
      <View className="border h-full w-full items-center justify-center">
   
      <MapaGeral />
      
      </View>
    </ScrollView>
  )
}


