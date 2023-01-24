import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../theme'

export const styles = StyleSheet.create({
  itemCard: {
    backgroundColor: colors.cardBg,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: 12,
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginBottom: 12,
    elevation: 5
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  cardTitle: {
    color: colors.text,
    fontFamily: fonts.semiBold,
    fontSize: fonts.md
  },
  cardPriority: {
    color: colors.text,
    fontFamily: fonts.bold,
    fontSize: fonts.xs,
    textTransform: 'uppercase'
  },
  critical: {
    color: colors.critical
  },
  high: {
    color: colors.high
  },
  medium: {
    color: colors.medium
  },
  low: {
    color: colors.low
  },
  cardDescription: {
    color: colors.text,
    fontFamily: fonts.light,
    fontSize: fonts.xs,
    marginBottom: 28
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardStatus: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskDone: {
    color: colors.done,
    fontFamily: fonts.semiBold,
    fontSize: fonts.xs,
    marginLeft: 8
  },
  taskPending: {
    color: colors.pending,
    fontFamily: fonts.semiBold,
    fontSize: fonts.xs,
    marginLeft: 8
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardActionButton: {
    marginLeft: 16
  },
  cardActionIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain'
  }
})
