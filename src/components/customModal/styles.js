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
  }
})
