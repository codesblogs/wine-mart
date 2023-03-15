
import Bargraphs from './Components/Bargraphs/Bargraphs';
import Scatter from './Components/Scatterplots/Scatter';
import FetchJSONdata from './Components/FetchJSONdata/FetchJSONdata';
function App() {
  return (
    <div className="App" style={{textAlign: 'center'}}>
      <h1>Welcome to winemart</h1>
      <div className='fetch-data'>
          <FetchJSONdata />
      </div>
      
      <div className='bargraphs' style={{height: '100vh', width:  '100%'}}>
        <Bargraphs/>
        
      </div>
      <h1>Scatter plot of Hue-Color Intensity</h1>
      <div className='scatterch' style={{height: '90vh'}}>
        <Scatter/>
      </div>
    </div>
  );
}

export default App;
