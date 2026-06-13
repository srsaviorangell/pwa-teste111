import { useContext } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { FavoritesContext } from '../../../src/conext/FavoritesContext'
import { EventContext } from '../../../src/conext/EventContext'
import CardsParaPageProgamacao from '../../../src/components/cardsParaPageProgamacao'

export default function favoritos() {
  const { favorites } = useContext(FavoritesContext)
  const { eventos } = useContext(EventContext)
  const favoritosEventos = eventos.filter((e) => favorites.includes(e.id))

  return (
    <ScrollView className="flex-1">
      {favoritosEventos.length === 0 ? (
        <View className="flex-1 items-center justify-center mt-20">
          <Text className="text-gray-400 text-lg">Nenhum favorito ainda</Text>
        </View>
      ) : (
        <View className="p-2 gap-3">
          <CardsParaPageProgamacao diaSelecionado={null} eventos={favoritosEventos} />
        </View>
      )}
    </ScrollView>
  )
}
