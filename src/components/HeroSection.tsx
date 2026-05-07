
const HeroSection = () => {
  return (
    <>
       <div className='grid grid-cols-2 pl-6 p-2   bg-primary/20  via-primary/10 to-transparent
        items-center lg:gap-4  h-full lg:h-90 overflow-hidden'>
      <div className='flex flex-row gap-2 lg:p-16 md:p-4 '>
        <div className='flex flex-col gap-2'>
        <h1 className="font-bold lg:text-4xl text-2xl">Sublimez votre élégance</h1>
        <p className="text-sm lg:text-xl">Bijoux raffinés, montres élégantes, sacs tendance <br />
        et chaussures de luxe pour la femme moderne.</p>
       
        <div className='flex lg:flex-row flex-col gap-2 '>
            <button className='btn btn-primary text-white '>Découvrir la collection</button>
      
        </div>
         </div>
      </div>
      <div className=" flex justify-center ">
      <img src="/images/img2.jpg" alt="hero" 
      className="object-cover w-50 h-40 lg:w-80 " />
      
      </div>
    </div>
    <div className="flex justify-center items-start gap-8 py-6 ">
      <div>
        <h3 className="font-bold text-sm">Bijoux</h3>
        <img src="/images/img2.jpg" alt="" className="w-30 h-20 object-cover rounded-3xl"/>
      </div>
      <div>
        <h3 className="font-bold text-sm">Sacs</h3>
        <img src="/images/sac.jpg" alt="" className="w-30 h-20 object-cover rounded-3xl"/>
      </div>
      <div>
        <h3 className="font-bold text-sm">Chaussures</h3>
        <img src="/images/chaussure.jpg" alt="" className="w-30 h-20 object-cover rounded-3xl"/>
      </div>
       <div>
        <h3 className="font-bold text-sm">Box</h3>
        <img src="/images/chaussure.jpg" alt="" className="w-30 h-20 object-cover rounded-3xl"/>
      </div>
    </div>
  
    </>
  )
}

export default HeroSection

