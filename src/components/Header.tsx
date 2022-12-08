import styles from './Header.module.css'
import logo from '../assets/logo.svg'

export function Header() {
  return (
    <div className={styles.headerWrapper}>
      <img src={logo} alt="todo list" />
    </div>
  )
}