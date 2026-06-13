import { useContext, useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FavoritesContext } from '../../../src/conext/FavoritesContext'
import CardsParaPageProgamacao from '../../../src/components/cardsParaPageProgamacao'
import type { Evento } from '../../../src/requisicao/listaProgamacao'

export default function favoritos() {
  const { favorites } = useContext(FavoritesContext)
  const [favoritosEventos, setFavoritosEventos] = useState<Evento[]>([])

  useEffect(() => {
    AsyncStorage.getItem("eventos_completos").then((data) => {
      if (data) {
        const todos: Evento[] = JSON.parse(data)
        setFavoritosEventos(todos.filter((e) => favorites.includes(e.id)))
      }
    })
  }, [favorites])

  return (
    <ScrollView className="flex-1">
      {favoritosEventos.length === 0 ? (
        <View className="flex-1 items-center justify-center mt-20">
          <Text className="text-gray-400 text-lg">Nenhum favorito ainda</Text>
        </View>
      ) : (
        <View className="p-2 gap-2">
          <CardsParaPageProgamacao diaSelecionado={null} eventos={favoritosEventos} />
        </View>
      )}
    </ScrollView>
  )
}
