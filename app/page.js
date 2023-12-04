"use client"
import React, { useState } from 'react'


const page = () => {
  const [Number, setNumber] = useState('')


  function dis(e) {
    setNumber(Number + e)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setNumber(eval(Number))
    }
  };

  return (
    <>
      <div className='text-center m=0 '>
        <h2 className='text-xl font-bold m=0 align-center p-3 bg-black text-white'>Calculator</h2></div>
      <div className='flex justify-center'>
        <div className='mt-5 hover:shadow-black shadow-2xl '>
          <input type="text" className='text-xl text-white w-full p-3 m-0 font-bold rtl-grid border-2 border-white bg-[#333]'
            placeholder='0'
            value={Number}
            onChange={(e) =>
              setNumber(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter")
              setNumber(eval(Number))
              }}
          ></input>

          <div className=' w-fill text-center btn'>
            <div>

              <button type="button" value={Number}
                // onClick={(e)=>
                //   setNumber(e.target.value+7)
                // }
                className='noselect blue'
                onClick={() => dis('7')}
              >7</button>
              <button type="button" onClick={() => dis('8')} className='noselect red'
              >8</button>
              <button type="button" onClick={() => dis('9')} className='noselect green'
              >9</button>
              <button type="button" onClick={() => dis('/')} className='noselect purple'
              >/</button>
            </div>
            <div>
              <button type="button" onClick={() => dis('4')} className='noselect red'
              >6</button>
              <button type="button" onClick={() => dis('5')} className='noselect blue'
              >5</button>
              <button type="button" onClick={() => dis('6')} className='noselect red'
              >4</button>
              <button type="button" onClick={() => dis('*')} className='noselect green'
              >x</button>
            </div>
            <div>
              <button type="button" onClick={() => dis('1')} className='noselect blue'
              >1</button>
              <button type="button" onClick={() => dis('2')} className='noselect red'
              >2</button>
              <button type="button" onClick={() => dis('3')} className='noselect blue'
              >3</button>
              <button type="button" onClick={() => dis('-')} className='noselect red'
              >-</button>
            </div>
            <div>
              <button type="button" onClick={() =>
                setNumber("")} className='noselect purple'
              >C</button>
              <button type="button" onClick={() => dis('0')} className='noselect green'
              >0</button>
              <button type="button" onClick={() =>
                setNumber(eval(Number))
              } className='noselect red'
              >=</button>
              <button type="button" onClick={() => dis('+')} className='noselect blue'
              >+</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default page