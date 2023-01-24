import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../theme'

export const styles = StyleSheet.create({
  appBar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 42,
    backgroundColor: colors.backgroundLight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 34,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowColor: colors.shadow,
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 5
  },
  appBarButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    height: 42
  },
  buttonIcon: {
    tintColor: colors.textLight,
    width: 32,
    height: 32,
    marginBottom: 4
  },
  buttonText: {
    color: colors.textLight,
    fontFamily: fonts.medium,
    fontSize: fonts.xxs
  }
})
