import { useState } from 'react';
import './App.css';
import NavBar from './NavBar';

function App() {
  const tagName = "Main";
  const nestedString = "< NavBar/>"

  const buttonClicked = () => {
    document.getElementById("clicktextTag").innerHTML = "Button Clicked! Thank You!"
  }

  // UseStates
  const [name, setName] = useState('John');
  const nameClick = () => {
    setName('Doe')
  }

  return (
    <main>
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Lesson one: General</h2>  
        <p>Varibale Data:  { tagName }</p>
        <br />

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Lesson one: Nesting</h2>  
        <p>Have a look at the code to see how <span>{ nestedString }</span> 👇 was nested.</p>
        <NavBar />
        <br />

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Lesson Three: Click Events</h2>  
        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={buttonClicked}>Click Me</button>
        <p id='clicktextTag'></p>
        <br />

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Lesson Four: UseState</h2>  
        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={nameClick}>Change Name</button>
        <p id='clicktextTag'>{ name }</p>
        <br />
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Lesson Five: List</h2>  
        
        <br />
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Lesson Six: Props</h2>  
        <p>See Image on props tutorial folder</p>
        <br />
        
      </div>
    </main>
  );
}

export default App;
