import { StyleSheet } from 'react-native'
import { colors } from '../../theme'

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
    fontSize: 20,
    fontWeight: '400'
  },
  cardPriority: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
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
    fontSize: 14,
    fontWeight: '300',
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
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8
  },
  taskPending: {
    color: colors.pending,
    fontSize: 14,
    fontWeight: '600',
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
