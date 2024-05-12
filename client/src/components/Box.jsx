import React from 'react'

const Box = (props) => {
    const {label, data} = props;

  return (
    <div className="w-72 h-24 py-[8px] px-[12px] bg-white">
        <p>{label}</p>
        <p className='mt-2 text-3xl text-center font-bold tracking-wide hover:tracking-widest'>{data}</p>
    </div>
  )
}

export default Box