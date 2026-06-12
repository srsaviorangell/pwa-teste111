import React, { useContext } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from "../theme/ThemeContext";



export default function NavTop() {
  const { theme, dark, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <View className="flex flex-row items-center h-[0.1rem]  mx-auto w-full border border-[rgba(0,0,0,0.1)] pt-[4.5rem]"
        style={{
          backgroundColor: theme.colors.background.secondary,
          shadowColor: theme.colors.details.border,
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 10,
        }}>
        <View className="absolute left-0 right-0 items-center bottom-[-5.7rem]  ">
          <Image source={require("../../assets/images/logosobra11.webp")}
            style={{
              height: 220,
            }} 
            resizeMode="contain"/>
        </View>


        <TouchableOpacity onPress={toggleTheme} className="items-end border  ml-auto bottom-10 right-8 h-[2.0rem] w-[3.5rem]  rounded-full  border-t-[3px] border-l-[2px] border-black/10
  border-b-[1px] border-r-[1px] border-white/80" style={{ backgroundColor: dark ? theme.colors.background.elevanted : theme.colors.text.disabled }}>
          <View
            style={{
              transform: [{ translateX: dark ? 30 : 0 }],
            }}>
            <View className="  items-center   w-[4.8rem] h-[2.2rem]">
              {dark ? (
                <Image source={require("../../assets/images/lua-sem-fundo.png")}
                  style={{
                    height: 60,
                  }} className='bottom-[1rem] right-[0.2rem]'
                  resizeMode="contain" />
              ) : (
                <Image
                  source={require("../../assets/images/sol-sem-fundo.png")}
                  style={{
                    height: 45,
                  }} className='bottom-[0.5rem] '
                  resizeMode="contain"
                />

              )}

            </View>
          </View>
        </TouchableOpacity>

      </View>


    </>
  )
}