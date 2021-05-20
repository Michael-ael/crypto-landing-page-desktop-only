import React from 'react'
// import { ReactComponent as Logo } from '../images/Vector.svg'
import Logo from '../images/Vector.svg'
import { ReactComponent as Arrow } from '../images/Arrow.svg'

const Navigation = () => {
    return (
        <nav>
            <div className="container1">
                <div className="flex">
                    <div className="logo">
                        <img src={Logo} alt="" />
                        <h2>WAVES</h2>
                    </div>

                    <ul>
                       <li><a href="#"> Services <Arrow style={{marginLeft:'7px'}} /> </a></li> 
                       <li><a href="#"> Company <Arrow style={{marginLeft:'7px'}}/> </a></li> 
                       <li><a href="#"> Sign In </a></li> 
                       <li><a href="#" className='started'> Get Started </a></li> 
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
