import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react';


function App() {
  const [Count,setCount] = useState(0);
  return (
    <div>
    <p className='bg-red-500 text-white text-center'>Lecture: 107 =&gt; Hooks and State in React</p>
    <Navbar/>
    <div className="min-h-auto p-4"> <p>This is Counter: </p> 
      <div>{Count}</div>
        <button className="bg-slate-500 p-2 rounded-md" onClick={() => {setCount(Count+1)}}>Click</button>
      </div>
    <Footer/>
    <br />
    <p className='bg-red-500 text-white text-center'>Lecture: 108 =&gt; useEffect Hook in React</p>

    </div>
  )
}

export default App
