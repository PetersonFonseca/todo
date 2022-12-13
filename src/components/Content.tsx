import React from 'react';
import styles from './Content.module.css'
import { Item } from './Item'

interface ContentProps {
  todoList: string;
  handleCheck: void;
}

interface Item {
  item: String;
  handleCheck: void;
}


export function Content({ todoList, handleCheck }: ContentProps) {
  return (
    <div className={styles.wrapper}>
      {todoList.map((item: Item, index: React.Key) => (
        <Item item={item} key={index} handleCheck={handleCheck} />
      ))}
    </div>
  )
}