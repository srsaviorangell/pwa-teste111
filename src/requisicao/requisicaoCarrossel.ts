import AsyncStorage from '@react-native-async-storage/async-storage'

interface Evento {
  id: string
  gallery: string[]
}

function filtrarEventos(eventos: Evento[]) {

  return eventos.filter(
    (item) =>
      item.gallery &&
      item.gallery.length === 2
  )
}
async function atualizarCarrossel(): Promise<Evento[]> {
  try {

    const response = await fetch(
      'https://api-para-alimenta-projeto.onrender.com/api/events'
    )

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`)
    }

    const json = await response.json()

    await AsyncStorage.setItem(
      "eventos",
      JSON.stringify(json.data)
    )

    return filtrarEventos(json.data)

  } catch (error) {
    return []
  }
}

export async function requisicaoCarrossel(): Promise<Evento[]> {

  const cache = await AsyncStorage.getItem("eventos")

  if (cache) {
    atualizarCarrossel().catch(() => {})

    return filtrarEventos(JSON.parse(cache))
  }

  return atualizarCarrossel()
}