import { useEffect, useState } from 'react'
import './global.css'
import styles from './App.module.css'
import { ContentWrapper } from './components/ContentWrapper'
import { Header } from './components/Header'
import { Create } from './components/Create'
function App() {
  const [todoList, setTodoList] = useState([])
  const [checked, setChecked] = useState([])

  // const todoListArray = [
  //   "1 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  //   "2 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  //   "3 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  //   "4 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  // ]

  useEffect(() => {

  }, [todoList])

  function handleCheck(event) {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value]
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1)
    }
    setChecked(updatedList)
  }

  function createItem(itemText) {

    let updatedTodoList = [...todoList, itemText]
    setTodoList(updatedTodoList)

  }



  return (
    <div className="App">
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.wrapperContent}>
          <Create todoList={todoList} createItem={createItem} />
          <ContentWrapper todoList={todoList} handleCheck={handleCheck} checked={checked} />
        </div>
      </div>
    </div>
  )
}

export default App
