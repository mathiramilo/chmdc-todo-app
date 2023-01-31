import { Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TodoScreen, RemindersScreen, SettingsScreen } from '../screens'
import { colors, fonts } from '../theme'

const Tab = createBottomTabNavigator()

const TabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Tasks" screenOptions={screenOptions}>
      <Tab.Screen name="Tasks" component={TodoScreen} />
      <Tab.Screen name="Reminders" component={RemindersScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused }) => {
    switch (route.name) {
      case 'Tasks':
        return (
          <Image
            style={[styles.buttonIcon, focused && { tintColor: colors.primary }]}
            source={require('../assets/todos.png')}
          />
        )

      case 'Reminders':
        return (
          <Image
            style={[styles.buttonIcon, focused && { tintColor: colors.primary }]}
            source={require('../assets/reminders.png')}
          />
        )

      case 'Settings':
        return (
          <Image
            style={[styles.buttonIcon, focused && { tintColor: colors.primary }]}
            source={require('../assets/settings.png')}
          />
        )

      default:
        break
    }
  },
  tabBarStyle: styles.tabBar,
  tabBarItemStyle: styles.tabBarItem,
  tabBarLabelStyle: styles.tabBarLabel,
  headerShown: false,
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.textLight
})

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.backgroundLight,
    height: 68,
    borderTopWidth: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowColor: colors.shadow,
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 5
  },
  tabBarItem: {
    marginVertical: 10
  },
  tabBarLabel: {
    fontFamily: fonts.medium,
    fontSize: fonts.xxs
  },
  buttonIcon: {
    tintColor: colors.textLight,
    width: 32,
    height: 32
  }
})

export default TabsNavigator
