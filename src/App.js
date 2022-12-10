import './App.css';
import Header from './components/header';
import JobSection from './components/jobSection';
import MainHeader from './components/mainHeader';
// import JobsPage from './components/jobSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainHeader/>
      <JobSection/>

    </div>
  );
}

export default App;
