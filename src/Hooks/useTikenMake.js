import axios from "axios"
import { useEffect, useState } from "react"


// token making 
const useTokenMake = (user) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const getToken = async () => {
            const email = user?.user?.email
            if (email) {
                const { data } = await axios.post('https://frozen-springs-79370.herokuapp.com/login', { email })
                console.log(data);
                const secretToken = data.secretToken
                setToken(secretToken)
                localStorage.setItem('your_Token', secretToken)
            }

        }
        getToken()
    }, [user])
    return [token]
}
export default useTokenMake