import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    paddingTop: 48,
    paddingHorizontal: 24
  },
  contentContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    tintColor: colors.yellow,
    width: 36,
    height: 36,
    marginBottom: 12
  },
  text: {
    color: colors.text,
    fontFamily: fonts.medium,
    fontSize: fonts.sm
  }
})
