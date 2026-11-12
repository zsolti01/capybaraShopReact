import ProductCard from "../../components/ProductCard/ProductCard"
import React, { useState } from 'react'

export default function Product() {

  const [capybaras, setCapybaras] = useState([])


  fetch("/data.json")
  .then(response => response.json())
  .then(data => {
    setCapybaras(data)
  })

  return (
    <div>
      {capybaras.map((item) => {
        return <ProductCard imgUrl={item.imgUrl} name={item.name} description={item.description}/>
      })}
    </div>
  )
}
