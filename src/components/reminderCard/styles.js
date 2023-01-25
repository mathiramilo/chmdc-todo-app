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
  cardTime: {
    color: colors.secondary,
    fontFamily: fonts.bold,
    fontSize: fonts.md,
    textTransform: 'uppercase'
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
  alarmText: {
    color: colors.yellow,
    fontFamily: fonts.regular,
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
  },
  notificationsIcon: {
    tintColor: colors.yellow
  }
})
