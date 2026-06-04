import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import  NavTop  from '../src/components/NavTop'
import  InicioIndex  from './pages/inicio/inicio'

export default function Inicio() {
  return (
    <View style={{flex : 1}}>
      <NavTop />
      <ScrollView style={{ flex: 1 }} className=""
        contentContainerClassName="flex-1 items-center justify-center ">
        <InicioIndex />
      </ScrollView>
    </View>
  )
}
