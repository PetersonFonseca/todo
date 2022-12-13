import styles from './HeaderContent.module.css'

interface HeaderContentProps {
  checked: [];
  todoList: [];
}
export function HeaderContent({ checked, todoList }: HeaderContentProps) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.pLeft}>Tarefas criadas<span>{todoList.length}</span></p>
      <p className={styles.pRight}>Concluídas<span>{checked.length} de {todoList.length}</span></p>
    </div>
  )
}