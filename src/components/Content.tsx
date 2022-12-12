import styles from './Content.module.css'
import { Item } from './Item'
export function Content({ todoListProps }) {
  return (
    <div className={styles.wrapper}>
      {todoListProps.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </div>
  )
}