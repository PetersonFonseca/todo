import styles from './ContentWrapper.module.css'
import { Content } from './Content'
import { HeaderContent } from './HearderContent'
import { useState } from 'react'
export function ContentWrapper({ todoListProps }) {
  return (
    <div className={styles.wrapper}>
      <HeaderContent />
      <Content todoListProps={todoListProps} />
    </div>
  )
}