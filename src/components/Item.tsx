import styles from './Item.module.css'
import { Trash } from 'phosphor-react'

export function Item() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <input type="checkbox" />
        <label>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
        <Trash size={16} color="#F2F2F2" />
      </div>

    </div>
  )
}