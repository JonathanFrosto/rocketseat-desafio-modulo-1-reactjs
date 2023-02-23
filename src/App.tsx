import { Header } from './components/Header'
import { Input } from './components/Input'

import styles from './App.module.css'
import { Button } from './components/Button'
import { Task } from './components/Task'
import { FormEvent, useState } from 'react'

import clipboard from './assets/clipboard.svg'

interface Task {
  id: number;
  content: string;
  done: boolean;
}

let id = 0;

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  const [taskValue, setTaskValue] = useState('');

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTasks = [...tasks, { id: ++id, content: taskValue, done: false }]
    setTasks(newTasks);

    setCreatedTasks(newTasks.length)
  }

  function handleDelete(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);

    setCreatedTasks(filteredTasks.length);
  }

  function handleDone(id: number, isDone: boolean) {
    tasks.forEach(task => {
      if (task.id === id) {
        task.done = isDone;
      }
    });

    setTasks([...tasks]);
  }

  const [createdTasks, setCreatedTasks] = useState(0);
  const doneCount = tasks.filter(task => task.done).length;


  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask} >
          <Input passValueToParent={setTaskValue} />
          <Button />
        </form>

        <div className={styles.infoBox}>
          <header>
            <div className={styles.createdTasksBox}>
              <strong>Tarefas criadas</strong>
              <span>{createdTasks}</span>
            </div>

            <div className={styles.doneTasksBox}>
              <strong>Concluídas</strong>
              <span>{doneCount}</span>
            </div>
          </header>

          <div style={tasks.length !== 0 ? { display: 'none' } : {}} className={styles.emptyBox} >
            <img src={clipboard} alt="empty taks icon" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>

          <div className={styles.tasksBox}>
            {
              tasks.map(task => {
                return <Task key={task.id}
                  done={task.done}
                  id={task.id}
                  onDelete={handleDelete}
                  onDone={handleDone}
                  content={task.content}
                />
              })
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
