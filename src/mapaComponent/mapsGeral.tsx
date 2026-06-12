import { useContext, useState, useRef } from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../theme/ThemeContext';
import { HomerIcon, ZoomMais, ZoomMenos } from '../components/Icons'


const pontos = [
  {
    id: 1,
    tipo: "alimentacao",
    top: 120,
    left: -120,
    icone: require("../../assets/images/alimentacao.png")
  },
  {
    id: 2,
    tipo: "sanitarios",
    top: 70,
    left: -550,
    icone: require("../../assets/images/sanitarios.png")
  },
  {
    id: 3,
    tipo: "palcoPrincipal",
    top: -30 * 5,
    left: -425,
    icone: require("../../assets/images/palco-P.png")
  },
  {
    id: 4,
    tipo: "PalcoZeBigode",
    top: -10 * 5,
    left: -550,
    icone: require("../../assets/images/zi-b.png")
  },
  {
    id: 5,
    tipo: "camarote",
    top: -30 * 5,
    left: -350,
    icone: require("../../assets/images/camarote.png")
  },



];

export default function MapaGeral() {
  const { dark, theme } = useContext(ThemeContext)


  const [larguraTela, setLarguraTela] = useState(0)

  const cardLargura = larguraTela * 0.98

  const [zoom, setZoom] = useState(1);
  const [posicao, setPosicao] = useState({
    x: 0,
    y: 0,
  })


  const intervalo = useRef<NodeJS.Timeout | null>(null);

  const iniciarMovimento = (
    eixo: "x" | "y",
    direcao: 1 | -1
  ) => {
    intervalo.current = setInterval(() => {
      setPosicao((p) => ({
        ...p,
        [eixo]: p[eixo] + direcao * 85,
      }));
    }, 80); 
  };

  const pararMovimento = () => {
    if (intervalo.current) {
      clearInterval(intervalo.current);
      intervalo.current = null;
    }
  };



  return (
    <>
      <View className="flex-1 relative" onLayout={(event) => {
        const largura = event.nativeEvent.layout.width
        console.log("largura e " + largura);
        setLarguraTela(largura)
      }}>

        <View style={{ left: cardLargura / 6.5, borderColor: theme.colors.text.disabled }} className=' absolute w-[70%] h-20 z-10   top-[76%] rounded-[10rem] flex items-center justify-center border-[3px]' >
          <View style={{
            width: cardLargura - 145,
            left: cardLargura - 490,

            backgroundColor: dark ? `${theme.colors.cards.zeBigode}50` : `${theme.colors.cards.zeBigode2}80`
          }} className=' h-[75px] rounded-[10rem] flex flex-row items-center justify-center gap-3' >
            {pontos.map((ponto) => (
              <TouchableOpacity key={ponto.id} style={{ backgroundColor: dark ? `${theme.colors.text.secondary}` : `${theme.colors.text.secondary}` }} className='border w-13 h-12 rounded-full flex items-center justify-center'
                onPress={() => {
                  setZoom(3.5)

                  setPosicao({
                    x: ponto.left,
                    y: ponto.top,
                  })
                }}
              >
                <Image className='' source={ponto.icone} style={{ tintColor: dark ? theme.colors.text.disabled : theme.colors.background.primarySoft, width: 55, height: 50 }} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={{
          opacity: zoom > 1 ? 1 : 0,
          position: "absolute",
          bottom: 171,
          right: 370,
          zIndex: 50,
          width: 50,
          height: 50,
          borderColor: theme.colors.text.disabled,
          backgroundColor: dark ? `${theme.colors.text.secondary}` : `${theme.colors.text.secondary}`
        }}
          className='border rounded-full flex items-center justify-center'
        >

          <TouchableOpacity className=' '
            onPress={() => {
              setZoom(1)
              setPosicao({
                x: 0,
                y: 0,
              })
            }}>
            <HomerIcon color='black' />
          </TouchableOpacity>
        </View>

        <View id='componete-botão' style={{
          position: "absolute",
          top: 350,
          left: 370,
          zIndex: 50,
          width: 40,
          height: 100,
          gap: 20,
          borderColor: theme.colors.text.disabled,
          backgroundColor: dark ? `${theme.colors.text.secondary}` : `${theme.colors.text.secondary}`
        }} className='z-10  left-[77%] top-[65%]  flex items-center justify-center border-[3px] rounded-[10rem] ' >


          <TouchableOpacity
            onPress={() => {
              setZoom((valorAtual) => Math.min(valorAtual + 0.5, 5));
            }}
          >
            <ZoomMais />
          </TouchableOpacity>

          <TouchableOpacity
            disabled={zoom <= 1}
            onPress={() => {

              setZoom((valorAtual) => Math.max(valorAtual - 0.5, 1));
            }}
          >
            <ZoomMenos />
          </TouchableOpacity>


        </View>
        {zoom > 1 && (
          <>
            {/* CIMA */}
            <TouchableOpacity
              activeOpacity={0}
              style={{
                position: "absolute",
                top: 0,
                left: "33%",
                width: "34%",
                height: "40%",
                zIndex: 100,
                opacity: 0,
                backgroundColor: "red", // remova depois dos testes
              }}
              onPressIn={() => iniciarMovimento("y", -1)}
              onPressOut={pararMovimento}
            />

            {/* BAIXO */}
            <TouchableOpacity
              activeOpacity={0}
              style={{
                position: "absolute",
                bottom: 170,
                left: "33%",
                width: "34%",
                height: "33%",
                zIndex: 100,
                opacity: 0,
                backgroundColor: "blue", // remova depois dos testes
              }}
              onPressIn={() => iniciarMovimento("y", 1)}
              onPressOut={pararMovimento}
            />

            {/* ESQUERDA */}
            <TouchableOpacity
              activeOpacity={0}
              style={{
                position: "absolute",
                left: 0,
                bottom: "35%",
                width: "33%",
                height: "55%",
                zIndex: 100,
                opacity: 0,
                backgroundColor: "green", // remova depois dos testes
              }}
              onPressIn={() => iniciarMovimento("x", -1)}
              onPressOut={pararMovimento}
            />

            {/* DIREITA */}
            <TouchableOpacity
              activeOpacity={0}
              style={{
                position: "absolute",
                right: 0,
                bottom: "48%",
                width: "33%",
                height: "35%",
                zIndex: 100,
                opacity: 0,
                backgroundColor: "yellow", // remova depois dos testes
              }}
              onPressIn={() => iniciarMovimento("x", 1)}
              onPressOut={pararMovimento}
            />
          </>
        )}

        <View id='mapa' style={{
          width: 500,
          height: 663,
          overflow: "hidden",
        }}
        >
          <Animated.View
            style={{
              transform: [
                { translateX: -posicao.x },
                { translateY: -posicao.y },
                { scale: zoom },
              ],
            }}
          >
            <Image source={require("../../assets/images/mapa4x.webp")}
              style={{
                height: 663,
                width: 500,
              }} className='z-0'
              resizeMode="cover" />
          </Animated.View>
        </View>

      </View >
    </>
  )
}



