import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../theme'

export const styles = StyleSheet.create({
  listContainer: {
    flex: 1
  },
  noContentContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noContentImg: {
    tintColor: colors.yellow,
    width: 36,
    height: 36,
    marginBottom: 12
  },
  noContentText: {
    color: colors.text,
    fontFamily: fonts.medium,
    fontSize: fonts.sm
  }
})
