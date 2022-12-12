import { useEffect, useState } from 'react'
import './global.css'
import styles from './App.module.css'
import { ContentWrapper } from './components/ContentWrapper'
import { Header } from './components/Header'
import { Search } from './components/Search'
function App() {
  const [count, setCount] = useState(0)
  const [todoList, setTodoList] = useState([])

  const todoListArray = [
    "1 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    "2 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    "3 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    "4 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    "5 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  ]

  useEffect(() => {
    setTodoList(todoListArray)
  }, [])



  return (
    <div className="App">
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.wrapperContent}>
          <Search todoListProps={todoList} />
          <ContentWrapper todoListProps={todoList} />
        </div>
      </div>
    </div>
  )
}

export default App
