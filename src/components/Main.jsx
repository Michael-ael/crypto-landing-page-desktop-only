import React from 'react'
import Bitcoin from '../images/bitcoin-logo.png'
import { ReactComponent as Text } from '../images/nextgen.svg'

const Main = () => {
    return (
        <>
          <div className="main">
              <div className="container1">
               <div className="grid"> 
                <div className="left-side">
                    <p className='top'> The future of crypto trading </p>

                    <h3> The <span className='next'> <Text /> </span> crypto trading, the fibre of traders </h3>

                    <p className='bottom'> Enjoy better rates when you trade your bitcoin with <span className='text'>waves</span></p>
                </div>

                <div className="right-side">
                    <img src={Bitcoin} alt="" />
                </div>
                </div>  
              </div> 
          </div>  
        </>
    )
}

export default Main
