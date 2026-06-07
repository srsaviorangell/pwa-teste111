import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { FlatList, Image, TouchableOpacity, View, ViewToken, Dimensions, Platform } from 'react-native';
import { SetaDireita, SetaEsquerda } from '../../../src/components/Icons';
import { requisicaoCarrossel } from "../../../src/requisicao/requisicaoCarrossel";
import { ThemeContext } from '../../../src/theme/ThemeContext';




export default function Carrossel() {

    const flatListRef = useRef<FlatList<any>>(null)

    const { dark, theme } = useContext(ThemeContext)

    const [indexAtual, setIndexAtual] = useState(0)
    const [data, setData] = useState<any[]>([])

    const [larguraTela, setLarguraTela] = useState(0)

    useEffect(() => {
        async function carregarEventos() {
            const eventos = await requisicaoCarrossel()
            setData(eventos)
        }
        carregarEventos()
    }, [])

    const nextSlide = useCallback(() => {
        if (data.length === 0) return
        const nextIndex = (indexAtual + 1) % data.length

        flatListRef.current?.scrollToIndex({
            index: nextIndex,
            animated: true,
        })

        setIndexAtual(nextIndex)
    }, [indexAtual, data])

    const prevSlide = useCallback(() => {
        if (data.length === 0) return

        const prevIndex = // pega o index ou o tamnaho e diminiu 

            indexAtual === 0
                ? data.length - 1
                : indexAtual - 1

        flatListRef.current?.scrollToIndex({
            index: prevIndex,
            animated: true,
        })

        setIndexAtual(prevIndex)
    }, [indexAtual, data])



    useEffect(() => {
        if (data.length === 0) return

        const interval = setInterval(() => {
            const nextIndex = (indexAtual + 1) % data.length
            nextSlide()
        }, 7000)
        return () => clearInterval(interval)
    }, [nextSlide, data])


    const cardLargura = larguraTela * 0.98
    const cardAltura = 220
    

    return (
        <>
            <View className='relative top-10' style={{
                width: "100%",
                marginTop: 5,

            }} onLayout={(event) =>{
                const largura = event.nativeEvent.layout.width
                setLarguraTela(largura)
            }}>
                {larguraTela > 0 && (
                <FlatList
                    style={{
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: 'transparent',
                        shadowColor: "rgba(245,73,0,0.6)",
                        shadowOffset: { width: 3, height: 3 },
                        shadowOpacity: 1,
                        shadowRadius: 4,
                        elevation: 8,
                        backgroundColor: 'transparent',
                        

                    }}
                    ref={flatListRef}
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    snapToInterval={cardLargura + 20} // 20 é o espaçamento entre os cards
                    snapToAlignment="center"
                    decelerationRate="fast"
                    getItemLayout={(_, index) => ({
                        length: cardLargura + 20,
                        offset: (cardLargura + 20) * index,
                        index,
                    })}
                    contentContainerStyle={{
                        paddingHorizontal: (larguraTela - cardLargura) /1, // centraliza o primeiro e o último card
                    }}
                    
                   
                    renderItem={({ item }) => (
                        <View style={{
                            width: cardLargura + 19.5,
                            height: 200,
                            

                        }} className=' '>
                            <View className='' >
                                <Image
                                    source={{ uri: dark ? item.gallery[1] : item.gallery[0] }}
                                    style={{
                                        right: 2,
                                        width: '100%',     
                                        height: 200,
                                        borderRadius: 12,
                                        borderWidth: 3,
                                        borderColor: dark ? 'rgba(245,73,0,0.3)' : 'rgba(0,0,0,0.5)',
                                    }} 
                                    resizeMode="cover"
                                    
                                />
                            </View>

                        </View>
                    )}
                     

                />
                )}
                <View className='flex-row justify-center  p-3'>

                    {data.map((_, index) => (
                        <View
                            key={index}
                            className={`mx-1 rounded-xl ${index === indexAtual
                                ? "w-4 h-2.0 bg-black"
                                : "w-1.5 h-1.5 bg-[#D1D5DB]"
                                }`}
                        />
                    ))}

                </View>

                

            </View>
            <TouchableOpacity
                onPress={nextSlide}
                className='absolute right-2 top-[55%] -translate-y-1/2 bg-black/20 p-2 rounded-full'
                activeOpacity={0.5}
            >
                <SetaDireita size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={prevSlide}
                className='absolute left-2 top-[55%] -translate-y-1/2 bg-black/20 p-2 rounded-full'
                activeOpacity={0.5}
            >
                <SetaEsquerda size={24} color="#fff" />
            </TouchableOpacity>
        </>
    )
}

