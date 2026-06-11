import { View, Image, Text } from 'react-native'

export default function MapaGeral() {
  const [zoom, setZoom] = useState(1);

  return (
    <>
    <View aria-checkedlassName="flex-1 relative">

      <View className='bg-red-500/30 absolute w-[77%] h-20 z-10  left-[4rem] top-[86%] rounded-[10rem] flex items-center justify-center'>
        <Text>ola</Text>
      </View>

      <View className=' '>
        <Image source={require("../../assets/images/mapa4x.png")}
          style={{
            height: 673,
            width:500,
          }} className='z-0'
          resizeMode="cover" />
      </View>
    </View>
    </>
  )
}



    