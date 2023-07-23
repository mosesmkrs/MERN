import { BrowserRouter, Routes, Route } from 'react-router-dom'




//pages & components
import Home from '../src/pages/home'
import Navbar from './components/navbar';
import Post from './components/workoutForm'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className='pages'>
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post' element={<Post />} />
          
         </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
