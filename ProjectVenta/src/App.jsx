import { useState } from 'react'
import './App.css'
import './Components/Navbar'
import Navbar from './Components/Navbar'
import ProductSection from './Components/ProductSection'

export default function App() {
  return (
 <div className="App">
  <Navbar></Navbar>
  <ProductSection></ProductSection>
  </div>
  )
}


