"use client"
import React, { useState } from 'react'


const page = () => {
  const [Number, setNumber] = useState('')


function dis(e){
setNumber(Number+e)
}


  return (
    <>
      <div className='text-center m=0 '>
        <h2 className='text-xl font-bold m=0 align-center p-3 bg-black text-white'>Calculator</h2></div>
    <div className='flex justify-center'>
      <div className='mt-5 hover:shadow-black shadow-2xl w-[40vw]'>
        <input type="text" className='text-xl text-white w-full p-3 m-0 font-bold rtl-grid bg-gray-700'
          placeholder='0'
        value={Number}
        onChange={(e)=>
          setNumber(e.target.value)
        }
        ></input>

        <div className=' w-fill text-center w-full  '>
          <div>

            <button type="button" value={Number}
        // onClick={(e)=>
        //   setNumber(e.target.value+7)
        // }
        onClick={()=>dis('7')}
                         >7</button>
            <button type="button" onClick={()=>dis('8')}
                         >8</button>
            <button type="button" onClick={()=>dis('9')}
                         >9</button>
            <button type="button" onClick={()=>dis('/')}
                         >/</button>
          </div>
          <div>
            <button type="button"  onClick={()=>dis('4')}
                         >6</button>
            <button type="button"  onClick={()=>dis('5')}
                         >5</button>
            <button type="button" onClick={()=>dis('6')}
                         >4</button>
            <button type="button" onClick={()=>dis('*')}
                         >x</button>
          </div>
          <div>
            <button type="button" onClick={()=>dis('1')}
                         >1</button>
            <button type="button" onClick={()=>dis('2')}
                         >2</button>
            <button type="button" onClick={()=>dis('3')}
                         >3</button>
            <button type="button" onClick={()=>dis('-')}
                         >-</button>
          </div>
          <div>
            <button type="button" onClick={()=>
            setNumber("")}
                         >C</button>
            <button type="button" onClick={()=>dis('0')}
                         >0</button>
            <button type="button" onClick={()=>
          setNumber(eval(Number))  
          }
                         >=</button>
            <button type="button" onClick={()=>dis('+')}
                         >+</button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default page