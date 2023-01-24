import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../theme'

export const styles = StyleSheet.create({
  header: {
    marginBottom: 42
  },
  headerHeading: {
    color: colors.text,
    fontFamily: fonts.semiBold,
    fontSize: fonts.lg,
    marginBottom: 12
  },
  headerSubheading: {
    color: colors.text,
    fontFamily: fonts.extraLight,
    fontSize: fonts.sm
  }
})
