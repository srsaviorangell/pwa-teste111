import { useContext, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../theme/ThemeContext';
import { getStyles } from "../../src/styles/style";

const pontos = [
  {
    id: 1,
    tipo: "palcoPrincipal",
    top: 540,
    left: 250,
    icone: require("../../assets/images/alimentacao.png")
  },
  {
    id: 2,
    tipo: "sanitarios",
    top: 540,
    left: 250,
    icone: require("../../assets/images/sanitarios.png")
  },
  {
    id: 3,
    tipo: "palcoPrincipal",
    top: 540,
    left: 250,
    icone: require("../../assets/images/palco-P.png")
  },
  {
    id: 4,
    tipo: "PalcoZeBigode",
    top: 540,
    left: 250,
    icone: require("../../assets/images/zi-b.png")
  },
  {
    id: 5,
    tipo: "camarote",
    top: 540,
    left: 250,
    icone: require("../../assets/images/camarote.png")
  },
 

 
];

export default function MapaGeral() {
    const { dark, theme } = useContext(ThemeContext)
  const styles = getStyles(theme, dark)

   const [larguraTela, setLarguraTela] = useState(0)
  
  const cardLargura = larguraTela * 0.98
  const cardAltura = 220

  return (
    <>
    <View className="flex-1 relative" onLayout={(event) => {
      const largura = event.nativeEvent.layout.width
      console.log("largura e "+largura);
      setLarguraTela(largura)
}}>

      <View style={{left: cardLargura /6.5,borderColor: theme.colors.text.disabled }} className=' absolute w-[70%] h-20 z-10   top-[85%] rounded-[10rem] flex items-center justify-center border-[3px]' >
        <View style={{ width: cardLargura - 145,
        left: cardLargura - 490 ,
                        
                        backgroundColor: dark ?`${theme.colors.cards.zeBigode}50` : `${theme.colors.cards.zeBigode2}80`}} className=' h-[75px] rounded-[10rem] flex flex-row items-center justify-center gap-3' >
          {pontos.map((ponto) => (
            <TouchableOpacity key={ponto.id} style={{backgroundColor: dark ?`${theme.colors.text.secondary}` : `${theme.colors.text.secondary}`}}  className='border w-13 h-12 rounded-full flex items-center justify-center' >
              <Image className='' source={ponto.icone} style={{tintColor: dark ? theme.colors.text.disabled : theme.colors.background.primarySoft, width: 55, height: 50 }} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

       <View style={{borderColor: theme.colors.text.disabled }}  className=' absolute w-[7%] h-[5rem] z-10  left-[77%] top-[65%]  flex items-center justify-center border-[3px] rounded-[10rem] ' >
        <View style={{backgroundColor: dark ?`${theme.colors.cards.zeBigode}80` : `${theme.colors.cards.zeBigode2}80`}} className='w-full h-full  flex items-center justify-center gap-3' >
          <Text  className="border">
            +
          </Text>
          <Text className="border">
            -
          </Text>
          
          
        </View>
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



    