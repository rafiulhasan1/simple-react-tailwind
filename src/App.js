import './App.css';
import Card from './components/Card/Card';
import NavBer from './components/NavBer/NavBer';
import ReachartMart from './components/RechartMart/ReachartMart';

function App() {
  return (
    <div className="App">
      <NavBer></NavBer>
      <h1 className='text-3xl font-bold'>hi there this is me</h1>
      <Card></Card>
      <ReachartMart></ReachartMart>
    </div>
  );
}

export default App;
