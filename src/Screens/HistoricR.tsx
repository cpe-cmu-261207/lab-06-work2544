import { useLocation } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from "react";

function UseQuery() {
  return new URLSearchParams(useLocation().search);
}

const HistoricR = () => {
  let query = UseQuery();
  const [Myobject, setMyobject] = useState<Object>({})
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=${query.get("start")}&end=${query.get("end")}`)
      .then(resp => {
        setMyobject(resp.data.bpi)
        
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        setError(true)
      })
  }, []);
  const render = () => {
    if (loading)
      return <p className='text-2xl'>Loading ...</p>
    else if (error||Myobject==null)
			return <p className='text-2xl text-red-500'>There was an error. Please try again later.</p> 
    else{
var BitList=Object.entries(Myobject)
      return (
        
        <>
        <p className='text-xl font-semibold'>( From {query.get("start")} To {query.get("end")} )</p>
        {BitList.map(x=>{return <li>{x[1]}</li>})}
        </>
      )
    }
  }
  return (<div>
    <div className='text-center space-y-3'>
      <p className='text-2xl font-semibold'>Historical price</p>
      {render()}
    </div>
    <br />
  </div>);
}
export default HistoricR