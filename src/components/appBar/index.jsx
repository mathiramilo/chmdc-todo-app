import { styles } from './styles'
import { TouchableWithoutFeedback, Text, View } from 'react-native'

const AppBar = ({ modalVisible, setModalVisible }) => {
  return (
    <View style={styles.appBar}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.appBarButton}>
          <Text style={styles.buttonText}>Add</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default AppBar
