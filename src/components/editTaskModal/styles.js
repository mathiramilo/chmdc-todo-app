import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../theme'

export const styles = StyleSheet.create({
  modalHeading: {
    color: colors.text,
    fontFamily: fonts.semiBold,
    fontSize: fonts.md,
    marginBottom: 42
  },
  modalForm: {},
  modalFormGroup: {
    marginBottom: 24
  },
  modalFormLabel: {
    color: colors.text,
    fontFamily: fonts.medium,
    fontSize: fonts.sm,
    marginBottom: 12
  },
  modalFormInput: {
    backgroundColor: colors.backgroundLight,
    color: colors.text,
    fontFamily: fonts.regular,
    fontSize: fonts.sm,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.textLight
  },
  dropdownText: {
    color: colors.text,
    fontFamily: fonts.regular,
    fontSize: fonts.sm
  },
  dropdownLabel: {
    color: colors.text,
    fontFamily: fonts.regular,
    fontSize: fonts.sm
  },
  dropdownContainer: {
    backgroundColor: colors.backgroundLight,
    borderColor: colors.textLight
  },
  dropdownPlaceholder: {
    color: colors.textLight,
    fontFamily: fonts.regular,
    fontSize: fonts.sm
  },
  modalFormActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    zIndex: -1
  },
  modalFormAction: {
    width: 120,
    borderRadius: 12,
    padding: 12,
    marginLeft: 0
  },
  primaryButton: {
    backgroundColor: colors.primary
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary
  },
  modalFormActionText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: fonts.xs,
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  modalFormActionTextSecondary: {
    color: colors.primary
  }
})
