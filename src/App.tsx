import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import { ContentWrapper } from './components/ContentWrapper'
import { Header } from './components/Header'
import { Search } from './components/Search'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.wrapperContent}>
          <Search />
          <ContentWrapper />
        </div>
      </div>
    </div>
  )
}

export default App
