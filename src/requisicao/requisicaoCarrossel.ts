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

    console.log("🌐 TENTANDO API")

    const response = await fetch(
      'https://api-para-alimenta-projeto.onrender.com/api/events'
    )

    console.log("✅ API RESPONDEU")

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`)
    }

    const json = await response.json()

    console.log("📊 EVENTOS RECEBIDOS:", json.data.length)

    await AsyncStorage.setItem(
      "eventos",
      JSON.stringify(json.data)
    )

    console.log("💾 CACHE SALVO")

    return filtrarEventos(json.data)

  } catch (error) {

    console.log("❌ FALHOU API")
    console.log(error)

    return []
  }
}

export async function requisicaoCarrossel(): Promise<Evento[]> {

  console.log("🚀 INICIOU REQUISIÇÃO CARROSSEL")

  const cache = await AsyncStorage.getItem("eventos")

  if (cache) {

    console.log("📦 VINDO DO CACHE")
    console.log("📦 TAMANHO CACHE:", JSON.parse(cache).length)

    // atualiza em segundo plano
    atualizarCarrossel().catch(console.log)

    return filtrarEventos(JSON.parse(cache))
  }

  console.log("🚫 CACHE NÃO ENCONTRADO")
  console.log("🌐 VAI BUSCAR NA API")

  return atualizarCarrossel()
}