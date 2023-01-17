import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(44, 42, 43, 0.437)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    backgroundColor: '#FAFFFD',
    width: '90%',
    padding: 24,
    borderRadius: 16,
    elevation: 5
  },
  modalHeading: {
    color: '#323031',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 42
  },
  modalForm: {},
  modalFormGroup: {
    marginBottom: 24
  },
  modalFormLabel: {
    color: '#323031',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 12
  },
  modalFormInput: {
    backgroundColor: '#FAFFFD',
    color: '#323031',
    fontSize: 16,
    fontWeight: '300',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#acacac'
  },
  modalFormError: {
    marginBottom: 24,
    backgroundColor: '#e1564f',
    padding: 12,
    borderRadius: 12,
    zIndex: -1
  },
  modalFormErrorText: {
    color: '#FAFFFD',
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
    backgroundColor: '#FA824C'
  },
  secondaryButton: {
    backgroundColor: '#FAFFFD',
    borderWidth: 1,
    borderColor: '#FA824C'
  },
  modalFormActionText: {
    color: '#FAFFFD',
    textTransform: 'uppercase',
    fontWeight: '500',
    textAlign: 'center'
  }
})
