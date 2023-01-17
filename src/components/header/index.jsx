import { Text, View } from 'react-native'
import { styles } from './styles'

const Header = ({ title, subtitle }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerHeading}>{title}</Text>
      <Text style={styles.headerSubheading}>{subtitle}</Text>
    </View>
  )
}

export default Header
