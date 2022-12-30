import './App.css'
import { Navbar } from './layout/navbar'
import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/home';
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />} />
      </Routes>
      </Provider>
    </div>



  )
}

export default App
