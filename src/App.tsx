import './App.scss'
import { Header } from './Header'
import { StartCard } from './cards/StartCard'

function App() {
  return (
    <>
      <Header/>
      <StartCard/>
      <div className='card'></div>
    </>
  )
}

export default App
