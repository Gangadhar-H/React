import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

  const [color, setColor] = useState('olive');

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <Button color='Red' onBgChange={changeColor} />
          <Button color='Green' onBgChange={changeColor} />
          <Button color='Yellow' onBgChange={changeColor} />
          <Button color='Blue' onBgChange={changeColor} />
          <Button color='Black' onBgChange={changeColor} />
          <Button color='Grey' onBgChange={changeColor} />
        </div>
      </div>
    </div>
  )
}

export default App
