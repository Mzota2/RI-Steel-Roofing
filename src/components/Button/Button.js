import React from 'react'

function Button({title, styles, IconLeft, handleClick, IconRight}) {
  return (
    <button onClick={handleClick} className={`bg-primary text-center w-fit justify-center cursor-pointer text-white hover:scale-105 transition-transform rounded-md px-4 py-2 flex items-center gap-2 border-none outline-none  hover:animate-pulse focus:animate-pulse ${styles}`}>
        {IconLeft}
        {title}
        {IconRight}
    </button>
  )
}

export default Button