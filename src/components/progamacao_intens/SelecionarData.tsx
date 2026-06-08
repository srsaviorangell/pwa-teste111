import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../../../src/theme/ThemeContext';

type SelecionarDataProps = {
  setDiaSelecionado: React.Dispatch<React.SetStateAction<string | null>>;
};


export default function SelecionarData({setDiaSelecionado}: SelecionarDataProps) {
    const { dark, theme } = useContext(ThemeContext)
   
  return (
    <>
      <View className='flex flex-row gap-1  justify-center  items-center '>

        <TouchableOpacity className='border rounded-full flex justify-center  items-center w-[15%] h-8' style={{backgroundColor: dark ? theme.colors.cards.show.mustard : theme.colors.cards.show.strong}}
                        activeOpacity={0.3} onPress={() => setDiaSelecionado("19")
                          
                        }
>

          <Text className='font-extrabold text-xs '
                style={{color: dark ? theme.colors.text.disabled : theme.colors.background.primarySoft}}

          >SEX-19</Text>

        </TouchableOpacity>

        <TouchableOpacity className='border rounded-full flex justify-center  items-center w-[16%] h-8' style={{backgroundColor: dark ? theme.colors.cards.show.mustard : theme.colors.cards.show.strong}}
                                activeOpacity={0.3} onPress={() => {
  console.log("clicou no dia 20");
  setDiaSelecionado("20");
}}
>

          <Text className='font-extrabold text-xs'
                style={{color: dark ? theme.colors.text.disabled : theme.colors.background.primarySoft}}

          >SAB-20</Text>

        </TouchableOpacity>

        <TouchableOpacity className='border rounded-full flex justify-center  items-center w-[16.5%] h-8' style={{backgroundColor: dark ? theme.colors.cards.show.mustard : theme.colors.cards.show.strong}}
                                activeOpacity={0.3} onPress={() => setDiaSelecionado("21")}
>

          <Text className='font-extrabold text-xs'
                style={{color: dark ? theme.colors.text.disabled : theme.colors.background.primarySoft}}

          >DOM-21</Text>

        </TouchableOpacity>

        <TouchableOpacity className='border rounded-full flex justify-center  items-center w-[15.3%] h-8' style={{backgroundColor: dark ? theme.colors.cards.show.mustard : theme.colors.cards.show.strong}}
                                activeOpacity={0.3} onPress={() => setDiaSelecionado("22")}
>

          <Text className='font-extrabold text-xs'
                style={{color: dark ? theme.colors.text.disabled : theme.colors.background.primarySoft}}

          >SEG-22</Text>

        </TouchableOpacity>

        <TouchableOpacity className='border rounded-full flex justify-center  items-center w-[15.5%] h-8' style={{backgroundColor: dark ? theme.colors.cards.show.mustard : theme.colors.cards.show.strong}}
                                activeOpacity={0.3} onPress={() => setDiaSelecionado("23")}
>

          <Text className='font-extrabold text-xs'
                style={{color: dark ? theme.colors.text.disabled : theme.colors.background.primarySoft}}

          >TER-23</Text>

        </TouchableOpacity>

        <TouchableOpacity className='border rounded-full flex justify-center  items-center w-[15%] h-8' style={{backgroundColor: dark ? theme.colors.cards.show.mustard : theme.colors.cards.show.strong}}
                                activeOpacity={0.3} onPress={() => setDiaSelecionado("24")}
>

          <Text className='font-extrabold text-xs '
                style={{color: dark ? theme.colors.text.disabled : theme.colors.background.primarySoft}}

          >QUA-24</Text>

        </TouchableOpacity>

      </View>

    </>
  )
}