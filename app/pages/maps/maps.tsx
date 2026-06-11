import { ScrollView, View } from 'react-native';
import MapaGeral from '../../../src/mapaComponent/mapsGeral';

export default function Maps() {
  return (
    <ScrollView  className=""
    contentContainerClassName="items-center justify-center">
      <View className="">
        <MapaGeral />
      </View>
    </ScrollView>
  )
}


