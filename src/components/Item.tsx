import styles from './Item.module.css'
import { Trash } from 'phosphor-react'

export function Item({ item, handleCheck }) {


  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <input type="checkbox" value={item} onChange={handleCheck} />
        <label>{item}</label>
        <Trash size={16} color="#F2F2F2" />
      </div>

    </div>
  )
}