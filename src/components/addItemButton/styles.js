import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../theme'

export const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20
  },
  button: {
    width: 55,
    height: 55,
    borderRadius: 100,
    backgroundColor: colors.backgroundDark,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.light,
    fontSize: fonts.xl
  }
})
