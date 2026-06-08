import { View, Text, TouchableOpacity  } from 'react-native';
import React from 'react';
import { HomerIcon, ProgramacaoIcon, MapIcon, FavoritoIcon } from './Icons';
import { Link, usePathname } from 'expo-router'
import { ThemeContext } from "../theme/ThemeContext";
import { useContext } from "react";


export default function NavBottom({ active, setActive }) {
  
  const pathname = usePathname();


  //declaramos e pegamos o tema 
    const { theme } = useContext(ThemeContext);

    const isActive = (path) => pathname.includes(path);


    
  return (
    <View style={{ backgroundColor: theme.colors.background.secondary, borderTopColor: theme.colors.details.border,  borderTopWidth: 4 }} className="flex flex-row justify-around  items-center h-[4.rem] pb-2 pt-1  mx-auto w-full   ">

{/* Inicio */}

        <Link href="/" asChild>
          <TouchableOpacity className="flex-1 flex items-center justify-center transition-all" onPress={() => setActive("home")} >

              <HomerIcon color={pathname === "/" ? "#E85D04" : "#6B7280"} />

              <Text className={  pathname === "/"
        ? "text-[#E85D04] text-xs mt-1"
        : "text-gray-500 text-xs mt-1  font-semibold"} >Inicio  </Text>

          </TouchableOpacity>

        </Link>

{/* progamação */}

        <Link href="/pages/programacao/programacaoGeral" asChild>

          <TouchableOpacity className="flex-1 flex items-center justify-center transition-all" onPress={() => setActive("Progamação")}>

              <ProgramacaoIcon color={
              isActive('/pages/programacao')
                ? "#E85D04"
                : "#6B7280"
            } />

              <Text  className={ isActive('/pages/programacao')
        ? "text-[#E85D04] text-xs mt-1"
        : "text-gray-500 text-xs mt-1  font-semibold "} >Progamação  </Text>

          </TouchableOpacity>

        </Link>

{/* mapas */}

         <Link href="/pages/maps/maps" asChild>

          <TouchableOpacity className="flex-1 flex items-center justify-center transition-all" onPress={() => setActive("Mapa")}>

              <MapIcon color={isActive('/pages/maps')
                ? "#E85D04"
                : "#6B7280"} />

              <Text  className={isActive('/pages/maps')
        ? "text-[#E85D04] text-xs mt-1"
        : "text-gray-500 text-xs mt-1"} >Mapa </Text>

          </TouchableOpacity>

        </Link>

{/* favorito */}

         <Link href="/pages/favoritos/favoritos" asChild>
        
          <TouchableOpacity className="flex-1 flex items-center justify-center transition-all" onPress={() => setActive("Favoritos")}  >

              <FavoritoIcon color={isActive('/pages/favoritos')
                ? "#E85D04"
                : "#6B7280"
              } />

              <Text  className={isActive('/pages/favoritos')
        ? "text-[#E85D04] text-xs mt-1"
        : "text-gray-500 text-xs mt-1"}>Favoritos
              </Text>

          </TouchableOpacity>

        </Link>

    </View>

  )
}