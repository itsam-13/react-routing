import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {

    const navigate = useNavigate()
    
    const buttonHandler = (name) => {
        navigate(`/product/detail/${name}`)
    }


    return (
        <div>
            <h1 className='text-5xl font-thin mb-5'>Product</h1>
            <div>
                <h1 className='font-thin text-2xl mb-2'>Product 1</h1>
                <button onClick={()=> buttonHandler("Product 1")} className='bg-white text-black  px-4 py-2 rounded mb-3'>See details</button>
            </div>
            <div>
                <h1 className='font-thin text-2xl mb-2'>Product 2</h1>
                <button onClick={()=> buttonHandler("Product 2")} className='bg-white text-black  px-4 py-2 rounded mb-3'>See details</button>
            </div>
            <div>
                <h1 className='font-thin text-2xl mb-2'>Product 3</h1>
                <button onClick={()=> buttonHandler("Product 3")} className='bg-white text-black  px-4 py-2 rounded mb-3'>See details</button>
            </div>
        </div>
    )
}

export default Product
