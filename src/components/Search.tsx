import styles from './Search.module.css'
import { PlusCircle } from 'phosphor-react'

export function Search({ todoListProps }) {
  return (
    <form className={styles.searchForm}>
      <input placeholder='Adicione uma nova tarefa' />
      <button type='submit'>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}