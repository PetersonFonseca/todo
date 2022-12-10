import styles from './HeaderContent.module.css'
export function HeaderContent() {
  return (
    <div className={styles.wrapper}>
      <p>Tarefas criadas<span>5</span></p>
      <p>Concluídas<span>2 de 5</span></p>
    </div>
  )
}