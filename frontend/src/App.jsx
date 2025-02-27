import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import ErrorBoundary from "./components/ErrorBoundary"

function App() {
  return (
  <div className="App">
    <ErrorBoundary>
    <ProductCard>

    </ProductCard>
    </ErrorBoundary>

  </div>     
  )
}

export default App
