import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Pagina from "./Pagina";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pagina />
    </>
  )
}

export default App
