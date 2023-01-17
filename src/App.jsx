import { useState, useRef } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import uuid from 'react-native-uuid'
import { TaskCard, AddTaskModal, AppBar, Header } from './components'
import { useDropdown } from './hooks'

const dropdownItems = [
  { label: 'Critical', value: 'critical' },
  { label: 'High', value: 'high' },
  { label: 'Medium', value: 'medium' },
  { label: 'Low', value: 'low' }
]

const App = () => {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState({
    id: '',
    title: '',
    description: '',
    priority: '',
    done: false
  })
  const [error, setError] = useState(null)

  const [modalVisible, setModalVisible] = useState(false)

  const {
    dropdownOpen,
    setIsDropdownOpen,
    dropdownValue,
    setDropdownValue,
    items,
    setItems
  } = useDropdown(dropdownItems)

  const handleChangeTitle = value => setTask({ ...task, title: value })
  const handleChangeDesc = value => setTask({ ...task, description: value })
  const handleCancel = () => {
    setModalVisible(!modalVisible)
    setTask({
      id: '',
      title: '',
      description: '',
      priority: '',
      done: false
    })
    setDropdownValue(null)
  }
  const handleAddTask = () => {
    if (
      task.title === '' ||
      task.description === '' ||
      dropdownValue === null
    ) {
      setError('Please fill all fields')
      setTimeout(() => {
        setError(null)
      }, 3000)
      return
    }

    setTasks([...tasks, { ...task, priority: dropdownValue, id: uuid.v4() }])
    setModalVisible(!modalVisible)
    setTask({
      id: '',
      title: '',
      description: '',
      priority: '',
      done: false
    })
    setDropdownValue(null)
    setError(null)

    if (tasks.length > 1) flatList.current.scrollToEnd()
  }
  const handleCheck = id => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    setTasks(newTasks)
  }
  const handleEdit = id => {
    console.warn('Not implemented yet')
  }
  const handleDelete = id => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  const renderItem = ({ item }) => (
    <TaskCard
      item={item}
      handleCheck={handleCheck}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )

  const flatList = useRef()

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Header
          title="CHMDC Task List"
          subtitle="Add, delete or mark as done a task"
        />

        <View style={styles.listContainer}>
          {tasks.length === 0 ? (
            <View style={styles.noContentContainer}>
              <Text style={styles.noContentText}>No tasks</Text>
            </View>
          ) : (
            <FlatList
              ref={flatList}
              data={tasks}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              style={styles.itemList}
            />
          )}
        </View>

        <AppBar modalVisible={modalVisible} setModalVisible={setModalVisible} />

        <AddTaskModal
          open={modalVisible}
          handleChangeTitle={handleChangeTitle}
          handleChangeDesc={handleChangeDesc}
          task={task}
          dropdownOpen={dropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          dropdownValue={dropdownValue}
          setDropdownValue={setDropdownValue}
          items={items}
          setItems={setItems}
          error={error}
          handleCancel={handleCancel}
          handleAddTask={handleAddTask}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFFFD',
    paddingTop: 48,
    paddingHorizontal: 24
  },
  listContainer: {
    flex: 1
  },
  itemList: {
    marginBottom: 86
  },
  noContentContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noContentText: {
    color: '#323031',
    fontSize: 16,
    fontWeight: '500'
  }
})

export default App
