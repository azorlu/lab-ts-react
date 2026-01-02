import { Card } from './components/Card'
import './App.css'

function App() {
  return(

    <>
      <Card imageUrl = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" />
      <Card content = "This is a text." width={300} height={100} />
    </>

  ) 
}

export default App
