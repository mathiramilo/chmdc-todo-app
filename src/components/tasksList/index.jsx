import { FlatList, Text, View, Image } from 'react-native'
import TaskCard from '../taskCard'
import { styles } from './styles'

const TasksList = ({ tasks, flatListRef, triggerEditTask, handleCheck, handleDelete }) => {
  const renderItem = ({ item }) => (
    <TaskCard item={item} triggerEditTask={triggerEditTask} handleCheck={handleCheck} handleDelete={handleDelete} />
  )

  return (
    <View style={styles.listContainer}>
      {tasks.length === 0 ? (
        <View style={styles.noContentContainer}>
          <Image style={styles.noContentImg} source={require('../../assets/warning.png')} />
          <Text style={styles.noContentText}>No tasks</Text>
        </View>
      ) : (
        <FlatList
          ref={flatListRef}
          data={tasks}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  )
}

export default TasksList
