import './App.css';
import chuckImg from '../src/res/chuck.jpg';

function App() {
  return (
    <div className="container">
      <div className="row">
        
        <div className="col-6">
          <h1 className="title">Chuck Norris API</h1>
          <img src={chuckImg} alt="chuck_norris_image"/>
        </div>

        <div className="col-6 searchJoke">
          <div className="card">
            <div className="card-header">
              Search for a word
            </div>
            <div className="card-body">
              <input type="text" />
            </div>
          </div>
          <div>
              <button className="btn btn-warning btn-lg">Generate Joke</button>
            </div>
        </div>

      </div>

      <h2 className="subTitle">Here is the joke</h2>
      <h4>Chuck Norris Joke:</h4>

    </div>
  );
}

export default App;
