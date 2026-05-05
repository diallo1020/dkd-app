import React from 'react'

const Card = () => {
  return (
    <>
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="/images/hero.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="flex gap-32">
      <button className="btn border border-primary text-primary">Panier</button>
      <button className="btn btn-primary text-white">Acheter</button>
    </div>
  </div>
</div>
</>
  )
}

export default Card
