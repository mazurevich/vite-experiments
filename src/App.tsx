import { useState } from 'react'
import reactLogo from './assets/react.svg'
import classes from './App.module.css'
import { Counter } from './features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={classes.app} data-test='asdfasdf'>
      <header className={classes.header}>
        Header
      </header>
      <Counter></Counter>
    </div>
  )
}

export default App
