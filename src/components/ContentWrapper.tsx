import styles from './ContentWrapper.module.css'
import { Content } from './Content'
import { HeaderContent } from './HearderContent'
export function ContentWrapper() {
  return (
    <div className={styles.wrapper}>
      <HeaderContent />
      <Content />
    </div>
  )
}