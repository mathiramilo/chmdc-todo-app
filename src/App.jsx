import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { RemindersScreen, TodoScreen } from './screens'
import { AppBar } from './components'

const App = () => {
  const [screen, setScreen] = useState('todos')

  const Screen = () => {
    switch (screen) {
      case 'todos':
        return <TodoScreen />
      case 'reminders':
        return <RemindersScreen />
      default:
        return <TodoScreen />
    }
  }

  return (
    <>
      <StatusBar style="dark" />

      <Screen />
      <AppBar screen={screen} setScreen={setScreen} />
    </>
  )
}

export default App
