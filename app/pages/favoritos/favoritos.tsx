import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function favoritos() {
  return (
    <ScrollView className=" flex-1 "
    contentContainerClassName="flex-1 items-center justify-center">
      <Text className="text-white ">favoritos</Text>
    </ScrollView>
  )
}