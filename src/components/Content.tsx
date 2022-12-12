import styles from './Content.module.css'
import { Item } from './Item'
export function Content({ todoList, handleCheck }) {
  return (
    <div className={styles.wrapper}>
      {todoList.map((item, index) => (
        <Item item={item} key={index} handleCheck={handleCheck} />
      ))}
    </div>
  )
}