import './App.css';
import Reddit from './components/reddit';
import Joke from './components/joke';
import { useState } from 'react';

function App() {
  const [redditVisible, setRedditVisible] = useState(false)
  const [jokeVisible, setJokeVisible] = useState(false)
  return (
    <div className="App">
      <button onClick = {()=> {
        setRedditVisible(prev=> !prev)
        //setJokeVisible(pre=>!pre)
        if(jokeVisible){
          setJokeVisible(false)
        }
        }}>Toggle Reddit</button>
      <button onClick = {()=> {
        setJokeVisible(prev=> !prev)
        if(redditVisible)
        {
          setRedditVisible(false)
        }
        //setRedditVisible(prev=> !prev)
        }}>Toggle Joke</button>

      <div>
        {redditVisible && <Reddit/>}
        {jokeVisible && <Joke/>}
      </div>
    </div>
  );
}

export default App;
