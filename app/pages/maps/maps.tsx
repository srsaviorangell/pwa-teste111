import { ScrollView, View, ActivityIndicator } from 'react-native';
import React, { Suspense } from 'react';

const MapaGeral = React.lazy(() => import('../../../src/mapaComponent/mapsGeral'));

export default function Maps() {
  return (
    
      <View className="flex ">
        <Suspense fallback={<ActivityIndicator size="large" color="#ff6600" className="mt-20" />}>
          <MapaGeral />
        </Suspense>
      </View>
    
  )
}


