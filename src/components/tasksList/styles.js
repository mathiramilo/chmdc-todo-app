import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../theme'

export const styles = StyleSheet.create({
  listContainer: {
    flex: 1
  },
  itemList: {
    marginBottom: 86
  },
  noContentContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noContentText: {
    color: colors.text,
    fontFamily: fonts.medium,
    fontSize: fonts.sm
  }
})
