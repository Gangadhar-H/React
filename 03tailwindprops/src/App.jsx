import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card';
import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card channel='chai' price={24} />
      <Card channel='code' price={30} sno={346} />
    </>
  )
}

export default App
