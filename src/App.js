import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import PlayerList from './Components/PlayerList';
import PlayerInfo from './Components/PlayerInfo';



function App() {
  
  return ( 
  
    <Router>
      
      

       <main>
      <Routes>
     <Route path='/' element={<Header />} />
     <Route path='/PlayerList' element={<PlayerList/>} />
     <Route path='/PlayerInfo' element={<PlayerInfo/>} />
     </Routes>
   </main>
   </Router>
  );
}

export default App;
