import { StyleSheet } from "react-native";

export const getStyles = (theme, dark = false) => StyleSheet.create({
  corTextDiferente: {
    backgroundColor: "#F8B400",
    borderRadius: 20,
  },

  textPadroes: {
    color : dark ? theme.colors.text.primary : theme.colors.background.elevated, textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
   textBandas: {
    color : dark ? theme.colors.text.primary : theme.colors.background.elevated, textShadowColor: 'black',
    textShadowOffset: { width: 1.2, height: 1.2 },
    textShadowRadius: 1
  },
   textDataChamativa: {
    color : dark ? theme.colors.text.primary : theme.colors.text.disabled, textShadowColor: 'black',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1
  },
  card:{
    backgroundColor : dark ? theme.colors.cards.zeBigode2 : theme.colors.cards.show.primary
  }, 
  elevacao:{

  },

 cssbuttonsIoButton: {
    shadowColor: '#14a73e98',
    shadowOffset: { width: 0, height: 0.7 * 16 }, // 0.7em ≈ 11.2px
    shadowOpacity: 0.5,
    shadowRadius: 1.5 * 16, // 1.5em ≈ 24px
    letterSpacing: 0.05 * 16, // 0.05em ≈ 0.8px
  },
  cardGereis:{
    shadowColor: '#14a73e98',
    shadowOffset: { width: 0, height: 0.7 * 16 }, // 0.7em ≈ 11.2px
    shadowOpacity: 0.5,
    shadowRadius: 1.5 * 16, // 1.5em ≈ 24px
    letterSpacing: 0.05 * 16, // 0.05em ≈ 0.8px
  }
});