import { useState } from 'react';
import { View, Image, Pressable, Text, ScrollView } from 'react-native';
import TotalSvg from '../../assets/images/total.svg';

export default function MapaGeral() {
  const [zoom, setZoom] = useState(1);

  return (
    <View >
      <View className='border top-[]'>
        <Pressable
          onPress={() => setZoom(z => Math.max(0.5, z - 0.2))}
        >
          <Text style={{ fontSize: 24 }}>➖</Text>
        </Pressable>

        <Pressable
          onPress={() => setZoom(z => Math.min(5, z + 0.2))}
        >
          <Text style={{ fontSize: 24 }}>➕</Text>
        </Pressable>

     </View>

      <ScrollView
        horizontal
        maximumZoomScale={5}
        minimumZoomScale={1}
      >
        <ScrollView>
          <TotalSvg
            width={400}
            height={485}
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
}