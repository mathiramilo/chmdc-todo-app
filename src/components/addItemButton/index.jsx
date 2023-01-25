import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { styles } from './styles'

const AddItemButton = ({ modalVisible, setModalVisible }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default AddItemButton
