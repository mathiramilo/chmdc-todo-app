import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('database.db')

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, priority TEXT NOT NULL, done BIT NOT NULL);`
      )
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS reminders (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, time TEXT NOT NULL, notifications BIT NOT NULL);`
      ),
        [],
        () => {
          resolve()
        },
        (_, err) => {
          reject(err)
        }
    })
  })

  return promise
}

export const insertTask = data => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO tasks (title, description, priority, done) VALUES (?, ?, ?, ?);`,
        [data.title, data.description, data.priority, data.done],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const updateTask = (id, data) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE tasks SET title = ?, description = ?, priority = ?, done = ? WHERE id = ?;`,
        [data.title, data.description, data.priority, data.done, id],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const toggleDone = id => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE tasks SET done = NOT done WHERE id = ?;`,
        [id],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const deleteTask = id => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM tasks WHERE id = ?;`,
        [id],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const getTasks = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM tasks;`,
        [],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const insertReminder = data => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO reminders (title, description, time, notifications) VALUES (?, ?, ?, ?);`,
        [data.title, data.description, data.time, data.notifications],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const updateReminder = (id, data) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE reminders SET title = ?, description = ?, time = ?, notifications = ? WHERE id = ?;`,
        [data.title, data.description, data.time, data.notifications, id],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const toggleNotifications = id => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE reminders SET notifications = NOT notifications WHERE id = ?;`,
        [id],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const deleteReminder = id => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM reminders WHERE id = ?;`,
        [id],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const getReminders = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM reminders;`,
        [],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}
