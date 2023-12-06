import { Link } from "react-router-dom"

export const HomePage = () => {
  return (
    <section className='  bg-cyan-950 '>
      <article className='flex justify-between  h-screen'>
      
        <div className='text-white text-4xl md:text-5xl xl:text-7xl  font-bold   p-10 flex items-center justify-center flex-1 md:flex '>
       
          <div>
            <p><span className="text-cyan-300">Explore </span>the World:</p>
            <p >Find and <span className="text-cyan-300">Discover</span></p>
            <p>Countri<span className="text-cyan-300">es</span></p>
            <Link to="/countries" className="  inline-flex w-auto gap-3 items-center text-2xl font-normal mt-8  text-white bg-cyan-950 p-2 rounded-md transition ease-in-out delay-50 border hover:border-cyan-500 hover:text-cyan-500 ">
            <i className='bi bi-globe-europe-africa text-white-900 text-3xl ' />
              Get Started
            </Link>
          </div>
        

        </div>
        <div className="hidden md:block md:flex-1" style={{backgroundImage: 'url(/public/gif/gif1280.gif)', }}>  </div>
      </article>
    
     
    </section>
  )
}
