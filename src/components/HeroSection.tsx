
const HeroSection = () => {
  return (
    <>
       <div className='grid grid-cols-2 p-4 bg-primary/20  items-center gap-4 h-80 overflow-hidden'>
      <div className='flex flex-row gap-2 lg:p-16 md:p-4 bg-primary '>
        <div className='flex flex-col gap-4'>
        <h1 className="font-bold lg:text-4xl text-2xl">Sublimez votre élégance</h1>
        <p className="text-sm lg:text-xl">Bijoux raffinés, montres élégantes, sacs tendance <br />
        et chaussures de luxe pour la femme moderne.</p>
       
        <div className='flexflex-row flex-col gap-2 md:gap-3'>
            <button className='btn btn-primary text-white'>Découvrir la collection</button>
             <button className='btn btn-secondary/300  text-primary border border-primary/50'>Nous contacter</button>
        </div>
         </div>
      </div>
      <img src="/images/hero.png" alt="hero" 
      className="w-full h-80 object-cover bg-secondary  " />
    </div>
    </>
  )
}

export default HeroSection

