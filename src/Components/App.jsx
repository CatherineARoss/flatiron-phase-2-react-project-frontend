import { useState } from 'react'
import Header from './Header'
import Main from './Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
