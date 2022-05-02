// const ShowGadgets = ({ gadget }) => {
//     const navigate = useNavigate()
//     const { name, price, image, supplier, quantity, _id } = gadget
//     console.log('quantity', quantity);
//     const [deliver, setDeliver] = useState(quantity)
//     console.log('deliver', deliver);

//     console.log(deliver);


//     useEffect(() => {
//         (async () => {
//             const newUpdate = { deliver }
//             const url = `http://localhost:5000/deliverUpdate/${_id}`
//             try {
//                 const { data } = await axios.put(url, newUpdate)
//                 if (data.modifiedCount) {
//                     toast.success('Happy Delivered', { id: 'test' })
//                 }
//             }
//             catch (error) {
//                 console.log(error);

//             }
//         })()
//     }, [deliver, _id, quantity])



//     const handleAdd = deliver => {
//         (async () => {
//             const newUpdate = { deliver }
//             const url = `http://localhost:5000/addUpdate/${_id}`
//             try {
//                 const { data } = await axios.put(url, newUpdate)
//                 if (data.modifiedCount) {
//                     toast.success('successfully added', { id: 'test' })
//                 }
//             }
//             catch (error) {
//                 console.log(error);

//             }
//         })()
//     }

{/* <button onClick={() => handleAdd(deliver)} className="bg-sky-800 rounded p-1 text-white truncate">
add  */}

{/* <button onClick={() => setDeliver(deliver - 1)} className="bg-sky-800 rounded p-1 text-white truncate">
                            Deliver
                        </button> */}