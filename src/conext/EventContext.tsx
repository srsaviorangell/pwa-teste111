import { createContext, useState } from 'react';
import type { Evento } from '../requisicao/listaProgamacao';

interface EventContextType {
  eventos: Evento[];
setEventos: (eventos: Evento[]) => void;

}

export const EventContext = createContext({} as EventContextType);

export function EventProvider({ children}: any){
    const [eventos, setEventos] = useState<Evento[]>([]);

    return (
        <EventContext.Provider value={{ eventos, setEventos }}>
            {children}
        </EventContext.Provider>
    );
}