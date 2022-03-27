import React from 'react'
import './Style.css'


const SingleCard = ({ MenuAsProps }) => {
    // console.log(MenuAsProps)
    return (
        <>
            <div className='big'>
                {MenuAsProps.map((curElement, index) => {
                    {/* const {id, name, category , image ,desc} = curElement ; */ }
                    {/* /* Above line is for destructuring ; now we donet need to write curElement.xyz etc. you can directly use xyz here. */ }
                    return (
                        <>
                            <div className="card" key={curElement.id}>
                                <h2>{curElement.category}</h2>
                                <img src={curElement.image} alt="foodphoto"/>
                                <div>{curElement.name}</div>
                                <p className="price">{curElement.price}</p>
                                <p className='itemdetails'>{curElement.desc}</p>
                                <p><button>Buy Now</button></p>
                            </div>

                        </>
                    )
                })}
            </div>

        </>

    )
}

export default SingleCard

