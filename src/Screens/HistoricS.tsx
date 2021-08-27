
import { useState } from "react";

import { useHistory } from 'react-router-dom'


const HistoricS = () => {
  const [Start, setStart] = useState("")
  const [End, setEnd] = useState("")
  let history = useHistory();
  function HandleClick() {
    let newDate = new Date()
    var TD = newDate.getTime()
    var Ds = Date.parse(Start)
    var De = Date.parse(End)
    if (Ds > De || isNaN(Ds) || isNaN(De) || Ds > TD || De > TD) {
      alert("Please Input the date correctly!!!")
    }
    else {history.push(`/history/result?start=${Start}&end=${End}`)
    }
  
}
return (

  <div>
    <div className='text-center space-y-3 space-x-3'>
      <p className='text-2xl font-semibold'>Select historical range</p>
      <span>From date</span>
      <input type='date' onChange={e => setStart(e.target.value)}></input>
      <span>To date</span>
      <input type='date' onChange={e => setEnd(e.target.value)}></input>
      <br />
      <button onClick={HandleClick}>Get data</button>
    </div>
    <br />
  </div>

);
}

export default HistoricS;


