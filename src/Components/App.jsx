import { useState } from 'react';
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';
import '../styles.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Main />
      <Footer />
    </>
  )
}

export default App
