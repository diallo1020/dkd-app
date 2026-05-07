type CardImages ={
    image: string
    title: string
    description: string
    price: string
}

const Card = ({image, title, description, price} : CardImages) => {
  return (
    <div className='flex flex-col shadow-md rounded-xl overflow-hidden w-full max-w-sm h-[420px]'>
        <img src={image} alt=""
         className='w-full h-full object-cover border border-b-0.5 rounded-t-xl' />
         <div className='flex flex-col p-4 gap-2'>
           <h2 className='font-bol text-xl'>{title}</h2>
           <p>{description}</p>
           <p className='font-bold text-2xl text-primary'>{price}</p>
           <div className='flex gap-4'>
            <button className='btn border border-primary text-primary'>Panier</button>
            <button className='btn btn-primary text-white'>Achèter</button>
           </div>
         </div>
      
    </div>
  )
}

export default Card
