import './App.scss'
import titleLogo from './assets/online-shopping-concept.svg';

function App() {
  return (
    <>
      <nav>
        <h1>Sudo</h1>
        <div>
          <a href="/">Start</a>
          <a href="/#services">Usługi</a>
          <a href="/#about">O nas</a>
          <a href="/#contact">Kontakt</a>
        </div>
      </nav>
      <div id="title">
        <div className="fancy-vector"></div>
        <div className='intro'>
          <h2>Witaj w Sudo</h2>
          <div>Twoim partnerze w cyfrowej przyszłości!</div>
        </div>
        <img src={titleLogo}/>
      </div>
    </>
  )
}

export default App
