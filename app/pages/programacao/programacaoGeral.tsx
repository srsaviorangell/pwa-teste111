import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import  Programacao  from '../inicio/programacao'
import SelecionarData   from '../../../src/components/progamacao_intens/SelecionarData'
import AtracoesPorPalco from './AtracoesPorPalco'

export default function ProgamacaoGeral() {
const [diaSelecionado, setDiaSelecionado] = useState<string | null>(null);

  return (
    <View className=" relative " >
      <View className=" justify-center items-center  bottom-[1.3rem]">
        <View className=' w-full h-[38.5%] flex justify-center items-center   '> 
          <Programacao />        
        </View> 
        <View className=' m-8 w-[98%] flex justify-center  bottom-[1rem] '>
          <SelecionarData   setDiaSelecionado={setDiaSelecionado}/>
        </View>
        <View className='absolute flex justify-center  w-full top-[72%] h-[32rem]  '>
          <AtracoesPorPalco   diaSelecionado={diaSelecionado} />
      </View>
        
      </View>
    
    </View>
  )
}