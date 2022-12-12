import styles from './Create.module.css'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'

export function Create({ todoList, createItem }) {
  const [itemText, setItemText] = useState('')

  function handleChange(event) {
    setItemText(event.target.value)
  }
  return (
    <form className={styles.createForm}>
      <input
        placeholder='Adicione uma nova tarefa'
        id="createItem"
        onChange={handleChange}
        value={itemText}
      />
      <button type='submit' onSubmit={() => createItem(itemText)}>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}