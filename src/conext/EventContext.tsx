import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Evento } from '../requisicao/listaProgamacao';

interface EventContextType {
  eventos: Evento[];
setEventos: (eventos: Evento[]) => void;

}

export const EventContext = createContext({} as EventContextType);

export function EventProvider({ children}: any){
    const [eventos, setEventos] = useState<Evento[]>([]);

    useEffect(() => {
      AsyncStorage.getItem("eventos_completos").then((data) => {
        if (data) setEventos(JSON.parse(data));
      });
    }, []);

    return (
        <EventContext.Provider value={{ eventos, setEventos }}>
            {children}
        </EventContext.Provider>
    );
}