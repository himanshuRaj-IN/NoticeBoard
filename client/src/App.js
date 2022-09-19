import './App.css';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer';
import { Route, Routes } from 'react-router-dom';
import HomeBody from './components/homeBody/HomeBody';
import LoginBody from './components/loginBody/LoginBody';
import AdminBody from './components/AdminBody/AdminBody';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeBody/>}></Route>
        <Route path="/Home" element={<HomeBody/>}></Route>
        <Route path="/Login" element={<LoginBody/>}></Route>
        <Route path="/Admin" element={<AdminBody/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
