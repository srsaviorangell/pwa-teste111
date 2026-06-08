import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FavoritoIcon } from "../components/Icons";
import { EventContext } from '../conext/EventContext';
import { getStyles } from "../styles/style";
import { ThemeContext } from '../theme/ThemeContext';

type SelecionarDiaProps = {
  diaSelecionado: string | null;
};

export default function CardsParaPageProgamacao({diaSelecionado}: SelecionarDiaProps) {
    const { eventos } = useContext(EventContext);
    
      const { dark, theme } = useContext(ThemeContext)  
        const styles = getStyles(theme, dark)
        const eventosFiltrados = diaSelecionado ? eventos.filter(evento => evento.dia === diaSelecionado) : eventos;

console.log("========== DEBUG ==========");
console.log("Dia selecionado:", diaSelecionado);
console.log("Total eventos:", eventos.length);
console.log("Eventos filtrados:", eventosFiltrados.length);
console.log("========== fim do debug ==========");

  return (
    <>
    {eventosFiltrados.map((item) => (
        <View  key={item.id} id="card-conteiner" className='  w-full h-[10rem] rounded-[1.2rem] flex flex-row justify-between items-center ' style={[styles.card, styles.cssbuttonsIoButton]}>
    
            <View id="card-filho1" className=' border-r w-[22%] h-full flex justify-center items-center gap-2'>
    
              <Text  className=" font-semibold text-sm"
                style={[styles.textPadroes]}>SEX</Text>
    
              <Text className=" font-black text-3xl " 
                style={[styles.textDataChamativa]}>{item.dia}</Text>
    
    
              <Text  className=" font-semibold text-sm"
              style={[styles.textPadroes]}>JUN</Text>
    
              <Text   className=" font-semibold text-black "
              style={[styles.textPadroes]}>{item.horario}</Text>
    
            </View>
    
            <View id="card-filho2" className=' w-[75%] h-full flex justify-start  ml-2'>
                <View className=' flex flex-row justify-between  '>
                  <Text  className=" font-semibold text-sm mt-[15]"
                  style={[styles.textPadroes]}>SÃO JOÃO DO SECULO</Text>
                   
                  <TouchableOpacity className=' mr-3  mt-3 p-1 rounded-full bg-white/40'>
                    <FavoritoIcon size={25} color="rgba(0, 0, 0, 0.5)" />
                  </TouchableOpacity> 
                </View>
    
                <View className=' flex  justify-between  gap-5'>
    
                    <Text  className=" font-semibold text-3xl  w-full h-20  overflow-hidden "
                    style={[styles.textBandas]}>{item.artist}</Text>
    
                    <Text  className=" absolute font-semibold text-lg  top-[5rem]  "
                  style={[styles.textPadroes]}>{item.stage}</Text>
                  
                </View>
              
    
            </View>
    
        </View>
    ))}
    </>
  )
}
 // 
        

        
   //   ))}
     //   <Text key={item.id}>{item.artist}</Text>
