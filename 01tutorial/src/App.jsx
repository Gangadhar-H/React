import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const skill = ['C', 'C++', 'Python', 'JavaScript']

  return (
    <>
      <h1 className='text-3xl bg-green-700 p-3 rounded-md'>Vite with tailwind</h1>
      <Card username='hitesh' location='Delhi' role='Software Engineer' />
      <Card username='Gangadhar' location='Belgaum' role='Web developer' skills={skill} />

    </>
  )
}

export default App
