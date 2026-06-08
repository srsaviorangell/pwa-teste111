import { View, Text ,ScrollView } from 'react-native'
import React from 'react'
import  MapaGeral  from '../../../src/mapaComponent/mapsGeral'

export default function Maps() {
  return (
    <ScrollView style={{ flex: 1 }} className=""
    contentContainerClassName="flex-1 items-center justify-center">
      <View className="border h-full w-full items-center justify-center">
      <Text className="text-2xl font-bold mb-4">Mapa Geral</Text>
      <View className="h-[80%] w-[90%]">
        <MapaGeral />
      </View>
      </View>
    </ScrollView>
  )
}


