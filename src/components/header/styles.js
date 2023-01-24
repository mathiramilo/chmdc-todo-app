import { StyleSheet } from 'react-native'
import { colors } from '../../theme'

export const styles = StyleSheet.create({
  header: {
    marginBottom: 42
  },
  headerHeading: {
    color: colors.text,
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 12
  },
  headerSubheading: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '200'
  }
})
