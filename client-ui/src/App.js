import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
const [res,setRes] = useState('')

useEffect(()=>{
axios.get('http://localhost:3001/').then(res=>setRes(res.data))
},[])

  return (
    <div className="App">
message from / : {res}
    </div>
  );
}

export default App;
