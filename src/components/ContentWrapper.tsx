import styles from './ContentWrapper.module.css'
import { Content } from './Content'
import { HeaderContent } from './HearderContent'
import { useState } from 'react'
export function ContentWrapper({ todoList, handleCheck, checked }) {
  return (
    <div className={styles.wrapper}>
      <HeaderContent checked={checked} todoList={todoList} />
      <Content todoList={todoList} handleCheck={handleCheck} />
    </div>
  )
}