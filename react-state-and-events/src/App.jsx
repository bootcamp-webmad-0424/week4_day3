import { useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter'
import LikeButton from './components/LikeButton/LikeButton'

function App() {

  const [activeTheme, setActiveTheme] = useState('light')

  const handleThemeUpdate = event => {
    console.log(event)
    const selectedTheme = event.currentTarget.value
    setActiveTheme(selectedTheme)
  }

  return (
    <div className={`App ${activeTheme}`}>

      <select onChange={handleThemeUpdate}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
        <option value="highContrast"> High contrast </option>
      </select>

      <hr />

      <Counter />

      <hr />

      <LikeButton />

    </div>
  )
}

export default App
