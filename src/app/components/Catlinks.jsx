import React from 'react'


export default function Catlinks({title, bg}) {
  return (
    <span className={`inline-block py-2 px-3 ${bg} m-2 uppercase `}>{title} </span>
  )
}
