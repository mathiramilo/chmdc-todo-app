import React from 'react'
import { View, TouchableWithoutFeedback, Modal, Keyboard } from 'react-native'
import { styles } from './styles'

const CustomModal = ({ open, children }) => {
  return (
    <Modal visible={open} transparent>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default CustomModal
