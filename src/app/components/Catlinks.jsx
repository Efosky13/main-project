import React from 'react'


export default function CatLinks(props) {
  return (
    <span className={`inline-block py-2 px-3 ${props.bg } m-3 uppercase `}>{props.title} </span>
  )
}
 