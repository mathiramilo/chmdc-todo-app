import { StyleSheet } from 'react-native'
import { colors } from '../../theme'

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.modalBackground,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    backgroundColor: colors.backgroundLight,
    width: '90%',
    padding: 24,
    borderRadius: 16,
    elevation: 5
  },
  modalHeading: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 42
  },
  modalForm: {},
  modalFormGroup: {
    marginBottom: 24
  },
  modalFormLabel: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 12
  },
  modalFormInput: {
    backgroundColor: colors.backgroundLight,
    color: colors.text,
    fontSize: 16,
    fontWeight: '300',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.textLight
  },
  modalFormError: {
    marginBottom: 24,
    backgroundColor: colors.red,
    padding: 12,
    borderRadius: 12,
    zIndex: -1
  },
  modalFormErrorText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '500'
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
    textTransform: 'uppercase',
    fontWeight: '500',
    textAlign: 'center'
  },
  modalFormActionTextSecondary: {
    color: colors.primary
  }
})
