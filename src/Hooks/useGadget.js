import axios from "axios"
import { useEffect, useState } from "react"

const useGadgets = () => {
    const [gadgets, setGadgets] = useState([])
    useEffect(() => {

        (async () => {
            try {
                const url = 'https://frozen-springs-79370.herokuapp.com/gadgets'
                const { data } = await axios.get(url)
                setGadgets(data)
            }
            catch (error) {
                console.log(error);

            }
        })()
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setGadgets(data))
    }, [])

    return [gadgets, setGadgets]
}

export default useGadgets