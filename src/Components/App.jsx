import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
