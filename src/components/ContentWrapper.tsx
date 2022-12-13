import styles from './ContentWrapper.module.css'
import { Content } from './Content'
import { HeaderContent } from './HearderContent'

interface ContentWrapperProps {
  todoList: [];
  handleCheck: void;
  checked: [];
}
export function ContentWrapper({ todoList, handleCheck, checked }: ContentWrapperProps) {
  return (
    <div className={styles.wrapper}>
      <HeaderContent checked={checked} todoList={todoList} />
      <Content todoList={todoList} handleCheck={handleCheck} />
    </div>
  )
}