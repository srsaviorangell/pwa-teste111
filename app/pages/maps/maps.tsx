import { View, Text ,ScrollView } from 'react-native'
import React from 'react'
import  MapaGeral  from '../../../src/mapaComponent/mapsGeral';

export default function Maps() {
  return (
    <ScrollView style={{ flex: 1 }} className="h-full w-full items-center justify-center">
      <View className=" h-full w-full items-center justify-center">
   
      <MapaGeral />
    
      </View>
    </ScrollView>
  )
}


