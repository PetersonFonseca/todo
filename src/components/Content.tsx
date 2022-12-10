import styles from './Content.module.css'
import { Item } from './Item'
export function Content() {
  return (
    <div className={styles.wrapper}>
      <Item />
    </div>
  )
}