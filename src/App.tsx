import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import { ContentWrapper } from './components/ContentWrapper'
import { Header } from './components/Header'
import { HeaderContent } from './components/HearderContent'
import { Search } from './components/Search'
import { Content } from './Content'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.wrapperContent}>
          <Search />
          <ContentWrapper />
          <HeaderContent />
          <Content />
        </div>
      </div>
    </div>
  )
}

export default App
