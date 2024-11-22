import React from 'react'

export default function Product() {

    const list = [
        {name : "Apple"},
        {name : "Beetroot"},
        {name : "Carrot"},
    ]

  return (
    <div>
        <ul>
            {list.map((d) =>(
                <li key={d?.name}>{d?.name}</li>
            ))}
        </ul>
    </div>
  )
}
