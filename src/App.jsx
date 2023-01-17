import { useState, useRef } from 'react'
import {
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import uuid from 'react-native-uuid'
import { TaskCard, AddTaskModal } from './components'

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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [dropdownValue, setDropdownValue] = useState(null)
  const [items, setItems] = useState([
    { label: 'Critical', value: 'critical' },
    { label: 'High', value: 'high' },
    { label: 'Medium', value: 'medium' },
    { label: 'Low', value: 'low' }
  ])

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
        <View style={styles.header}>
          <Text style={styles.headerHeading}>CHMDC Task List</Text>
          <Text style={styles.headerSubheading}>
            Add, delete or mark as done a task
          </Text>
        </View>

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

        <View style={styles.appBar}>
          <TouchableWithoutFeedback
            onPress={() => setModalVisible(!modalVisible)}
          >
            <View style={styles.appBarButton}>
              <Text style={styles.buttonText}>Add</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <AddTaskModal
          open={modalVisible}
          handleChangeTitle={handleChangeTitle}
          handleChangeDesc={handleChangeDesc}
          task={task}
          dropdownOpen={isDropdownOpen}
          dropdownValue={dropdownValue}
          items={items}
          setIsDropdownOpen={setIsDropdownOpen}
          setDropdownValue={setDropdownValue}
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
  header: {
    marginBottom: 42
  },
  headerHeading: {
    color: '#323031',
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 12
  },
  headerSubheading: {
    color: '#323031',
    fontSize: 16,
    fontWeight: '200'
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
  },
  appBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 48,
    backgroundColor: '#FAFFFD',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 38,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowColor: '#323031',
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 5
  },
  appBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FA824C',
    borderRadius: 12,
    padding: 12,
    height: 44
  },
  buttonText: {
    color: '#FAFFFD',
    textTransform: 'uppercase',
    fontWeight: '700'
  }
})

export default App
