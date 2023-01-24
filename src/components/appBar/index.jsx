import { styles } from './styles'
import { TouchableWithoutFeedback, Text, View, Image } from 'react-native'
import { colors } from '../../theme'

const AppBar = ({ screen, setScreen }) => {
  return (
    <View style={styles.appBar}>
      <TouchableWithoutFeedback onPress={() => setScreen('todos')}>
        <View style={styles.appBarButton}>
          <Image
            style={[styles.buttonIcon, screen === 'todos' && { tintColor: colors.primary }]}
            source={require('../../assets/todos.png')}
          />
          <Text style={[styles.buttonText, screen === 'todos' && { color: colors.primary }]}>Tasks</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => setScreen('reminders')}>
        <View style={styles.appBarButton}>
          <Image
            style={[styles.buttonIcon, screen === 'reminders' && { tintColor: colors.primary }]}
            source={require('../../assets/reminders.png')}
          />
          <Text style={[styles.buttonText, screen === 'reminders' && { color: colors.primary }]}>Reminders</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => setScreen('settings')}>
        <View style={styles.appBarButton}>
          <Image
            style={[styles.buttonIcon, screen === 'settings' && { tintColor: colors.primary }]}
            source={require('../../assets/settings.png')}
          />
          <Text style={[styles.buttonText, screen === 'settings' && { color: colors.primary }]}>Settings</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default AppBar
