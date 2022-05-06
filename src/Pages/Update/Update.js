import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams()
    const [gadget, setGadget] = useState({})
    const { name, supplier, quantity, description, price, _id, image } = gadget
    console.log(quantity);
    console.log(name);



    useEffect(() => {
        (async () => {
            const url = `http://localhost:5000/gadget/${id}`
            try {
                const { data } = await axios.get(url)
                setGadget(data)
            }
            catch (error) {
                console.log(error);
            }
        })()
    }, [id, gadget])


    const handleRestock = async (e) => {
        e.preventDefault()
        const reQuantity = parseInt(e.target.quantity.value)
        if (reQuantity >= 1) {
            const newQuantity = reQuantity + quantity
            console.log(reQuantity, quantity);

            console.log(newQuantity);
            const url = `http://localhost:5000/restockGadget/${id}`
            try {
                const { data } = await axios.put(url, { newQuantity })
                if (data.modifiedCount === 1 || data.matchedCount === 1) {
                    toast.success(`Successfully restock ${name}`)
                }
            }

            catch (error) {
                console.log(error)
            }
        }
        e.target.reset()
    }

    const handleDeliver = () => {
        (async () => {
            const newUpdate = { quantity }
            const url = `http://localhost:5000/deliverUpdate/${_id}`
            try {
                const { data } = await axios.put(url, newUpdate)
                if (data.modifiedCount) {
                    toast.success('Happy Delivered', { id: 'test' })
                }
            }
            catch (error) {
                console.log(error);

            }
        })()
    }


    return (

        <div>
            <div className="mt-3 flex flex-col  items-center mx-auto">
                <h4 className='text-center text-2xl text-green-900 font-sans font-medium m-2'>Your are updating the {gadget?.name}</h4>
                <Card className='hover:shadow-2xl' style={{ width: '18rem' }}>
                    <Card.Img className='card-img' variant="top" src={image} />
                    <Card.Body className='mb-0'>
                        <div className='d-flex justify-between'>
                            <Card.Title>{name}</Card.Title>
                            <Card.Title>{supplier}</Card.Title>
                        </div>
                        <Card.Text>
                            <strong>id: {_id}</strong>
                        </Card.Text>
                        <Card.Title> ${price}</Card.Title>
                        <Card.Text className='mb-0'>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body >
                        <Card.Title>Stock: {quantity}</Card.Title>

                        <div className='flex flex-col'>
                            <button onClick={handleDeliver} className='btn btn-primary'>Deliver</button>
                            <form className='flex flex-col' onSubmit={handleRestock}>
                                <input className='m-1 rounded-lg border-2 border-green-900' type="number" placeholder='restock quantity' name="quantity" id="" />
                                <input className='bg-green-700 text-slate-100 rounded-lg w-15 d--block p-1.5 mx-auto' type="submit" value="Restock" />
                            </form>
                        </div>
                    </Card.Body>
                </Card>
            </div>

        </div>



    );
};

export default Update;