import { useContext, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Modal, Linking } from 'react-native'
import Svg, { Path, Circle } from 'react-native-svg'
import { ThemeContext } from '../../../src/theme/ThemeContext'

type Rede = {
  nome: string
  url: string
  icon: (color: string) => React.ReactNode
}

type Servico = {
  id: string
  nome: string
  numero: string
  descricao: string
  icon: (color: string) => React.ReactNode
  redes?: Rede[]
}

function IconAlerta({ color }: { color: string }) {
  return (
    <Svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </Svg>
  )
}

function IconEscudo({ color }: { color: string }) {
  return (
    <Svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </Svg>
  )
}

function IconFogo({ color }: { color: string }) {
  return (
    <Svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.048 8.287 8.287 0 0 0 9 9.6a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
      <Path d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
    </Svg>
  )
}

function IconCadeado({ color }: { color: string }) {
  return (
    <Svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </Svg>
  )
}

function IconTelefone({ color }: { color: string }) {
  return (
    <Svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </Svg>
  )
}

function IconCodigo({ color }: { color: string }) {
  return (
    <Svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </Svg>
  )
}

function IconLinkedin({ color }: { color: string }) {
  return (
    <Svg width={32} height={32} viewBox="0 0 24 24" fill={color}>
      <Path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </Svg>
  )
}

function IconInstagram({ color }: { color: string }) {
  return (
    <Svg width={32} height={32} viewBox="0 0 24 24" fill={color}>
      <Path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </Svg>
  )
}

const servicos: Servico[] = [
  {
    id: "samu",
    nome: "SAMU",
    numero: "192",
    descricao: "Serviço de Atendimento Móvel de Urgência. Gratuito, funciona 24h. Ligue em caso de emergências médicas, acidentes com vítimas, problemas cardiorrespiratórios, intoxicações, queimaduras graves, AVC, infarto e outras situações de risco à vida.",
    icon: (color) => <IconAlerta color={color} />,
  },
  {
    id: "policia-militar",
    nome: "Polícia Militar",
    numero: "190",
    descricao: "Emergência policial. Ligue em casos de crimes em andamento, violência, perturbação da ordem, acidentes de trânsito com feridos e situações que exijam presença imediata da polícia.",
    icon: (color) => <IconEscudo color={color} />,
  },
  {
    id: "bombeiros",
    nome: "Corpo de Bombeiros",
    numero: "193",
    descricao: "Emergência com fogo, resgate e salvamento. Ligue em casos de incêndios, acidentes de trânsito com vítimas presas nas ferragens, desabamentos, enchentes, salvamento aquático, captura de animais agressivos e vazamentos de gás.",
    icon: (color) => <IconFogo color={color} />,
  },
  {
    id: "policia-civil",
    nome: "Polícia Civil",
    numero: "197",
    descricao: "Responsável por investigações criminais, registro de boletins de ocorrência e apuração de delitos. Utilize para denúncias e ocorrências que não exigem atendimento emergencial imediato.",
    icon: (color) => <IconCadeado color={color} />,
  },
  {
    id: "disque-denuncia",
    nome: "Disque Denúncia",
    numero: "181",
    descricao: "Serviço para denúncias anônimas de crimes como tráfico de drogas, violência doméstica, crimes ambientais, entre outros. O anonimato é garantido.",
    icon: (color) => <IconTelefone color={color} />,
  },
  {
    id: "desenvolvedor",
    nome: "Desenvolvedor",
    numero: "Savio Rangel",
    descricao: "Este aplicativo foi desenvolvido por Savio Rangel. Em caso de sugestões, reporte de bugs ou informações sobre o evento, entre em contato através das redes sociais abaixo:",
    icon: (color) => <IconCodigo color={color} />,
    redes: [
      {
        nome: "LinkedIn",
        url: "https://www.linkedin.com/in/savio-rangell/",
        icon: (color) => <IconLinkedin color={color} />,
      },
      {
        nome: "Instagram",
        url: "https://www.instagram.com/srsaviorange/",
        icon: (color) => <IconInstagram color={color} />,
      },
    ],
  },
]

export default function Informacoes() {
  const { theme, dark } = useContext(ThemeContext)
  const [modalAberto, setModalAberto] = useState<string | null>(null)

  const servicoSelecionado = servicos.find((s) => s.id === modalAberto)

  return (
    <ScrollView
      className="flex-1"
      contentContainerClassName="p-4 pb-8"
      style={{ backgroundColor: theme.colors.background.primary }}
    >
      <View className="flex flex-row items-center gap-2 mb-6 pt-4">
        <Svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke={theme.colors.cards.show.primary} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <Circle cx="12" cy="12" r="10" />
          <Path d="M12 16v-4" />
          <Path d="M12 8h.01" />
        </Svg>
        <Text
          className="text-2xl font-bold"
          style={{ color: theme.colors.text.primary }}
        >
          Informações Úteis
        </Text>
      </View>

      <View className="flex flex-row flex-wrap gap-3">
        {servicos.map((servico) => (
          <TouchableOpacity
            key={servico.id}
            onPress={() => setModalAberto(servico.id)}
            activeOpacity={0.8}
            className="rounded-2xl p-5 items-center gap-3"
            style={{
              width: '48%',
              backgroundColor: dark ? theme.colors.cards.show.strong : theme.colors.cards.show.mustard,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 8,
              elevation: 5,
            }}
          >
            <View
              className="rounded-full p-3"
              style={{ backgroundColor: dark ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.25)' }}
            >
              {servico.icon(theme.colors.text.secondary)}
            </View>
            <Text
              className="text-base font-bold text-center"
              style={{ color: dark ? theme.colors.text.secondary : theme.colors.background.primarySoft }}
            >
              {servico.nome}
            </Text>
            <Text
              className="text-xl font-extrabold text-center"
              style={{ color: dark ? theme.colors.text.primary : '#fff' }}
            >
              {servico.numero}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        visible={!!modalAberto}
        transparent
        animationType="fade"
        onRequestClose={() => setModalAberto(null)}
      >
        <View className="flex-1 items-center justify-center px-4" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setModalAberto(null)}
            className="absolute inset-0"
          />
          <View
            className="w-full rounded-3xl p-6"
            style={{
              backgroundColor: dark ? theme.colors.cards.show.strong : theme.colors.cards.show.primary,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 12,
              elevation: 10,
            }}
          >
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-xl font-bold text-white">{servicoSelecionado?.nome}</Text>
              <TouchableOpacity onPress={() => setModalAberto(null)}>
                <Svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <Path d="M6 18 18 6M6 6l12 12" />
                </Svg>
              </TouchableOpacity>
            </View>

            <Text className="text-white/90 leading-relaxed mb-4">
              {servicoSelecionado?.descricao}
            </Text>

            {servicoSelecionado?.redes ? (
              <View className="flex-row justify-center gap-6 mt-2">
                {servicoSelecionado.redes.map((rede) => (
                  <TouchableOpacity
                    key={rede.nome}
                    onPress={() => Linking.openURL(rede.url)}
                    className="items-center gap-1"
                  >
                    {rede.icon('#fff')}
                    <Text className="text-white/80 text-xs">{rede.nome}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <View
                className="rounded-xl p-4 items-center"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
              >
                <Text className="text-white/70 text-sm">Telefone:</Text>
                <Text className="text-3xl font-extrabold tracking-wide text-white">
                  {servicoSelecionado?.numero}
                </Text>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  )
}
