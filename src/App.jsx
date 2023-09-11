import './App.css'
import { useState, useEffect } from 'react';

function App() {

  const[verse, setVerse] = useState("")
  const[reference, setReference] = useState("")

  useEffect(() => {
    fetch('https://beta.ourmanna.com/api/v1/get?format=json&order=random')
    .then(response => response.json())
    .then(data => {
        setVerse(data.verse.details.text)
        setReference(data.verse.details.reference)
    })
    .catch(err => console.error(err));
  }, [])
  return (
    <div className='container'>
        <h1>"{verse}"</h1>
        <h3>{reference}</h3>
    </div>
  )
}

export default App
