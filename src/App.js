import './App.css';
import Header from './components/Header';
import LandingFooter from './components/LandingFooter';
import Main from './components/Main';

function App() {
  return (
    <div className="container">
      <Header />

      <Main />

      <LandingFooter />
    </div>
  );
}

export default App;
