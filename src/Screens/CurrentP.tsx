
import { useEffect, useState } from 'react'
import axios from 'axios'

const CurrentP = () => {
    const [time, setTime] = useState<string>("");
    const [THB, setTHB] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const fetchApi = async () => {
        try {
            const resp =
                await axios.get(`https://api.coindesk.com/v1/bpi/currentprice/thb.json`)
            setTime(resp.data.time.updated)
            setTHB(resp.data.bpi.THB.rate)
            setLoading(false)
        }
        catch (err) {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchApi()
    }, [])
    const render = () => {
        if (loading)
            return <p className='text-2xl'>Loading ...</p>
        else
            return (
                <div>
                    <p className='text-2xl'>{THB}</p>
                    <p className='text-xl font-semibold'>( Last Updated {time} )</p>
                </div>
            )
    }
    return (<div>

        {/* template for /current */}
        <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Current price</p>
            {render()}
        </div>
        <br />
    </div>);
}
export default CurrentP;