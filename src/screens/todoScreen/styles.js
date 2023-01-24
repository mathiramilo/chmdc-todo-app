import { StyleSheet } from 'react-native'
import { colors } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    paddingTop: 48,
    paddingHorizontal: 24
  },
  listContainer: {
    flex: 1
  },
  noContentContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noContentText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '500'
  }
})
