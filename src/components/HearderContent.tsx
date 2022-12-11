import styles from './HeaderContent.module.css'
export function HeaderContent() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.pLeft}>Tarefas criadas<span>5</span></p>
      <p className={styles.pRight}>Concluídas<span>2 de 5</span></p>
    </div>
  )
}