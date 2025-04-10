import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/clubs" Component={Clubs} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;