   
   const Hero = ({title ='Are you looking for a job? ', subtitle ='Find the job that fits your skill set'}) => {
    return (
      // Hero section
     <section className="caf0f8 py-20 mb-4 mt-2">
        <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center "
        >
            <div className="text-center">
            <h1
                className="text-3xl font-extrabold text-[#03045e] sm:text-5xl md:text-6xl"
            >
                {title}
            </h1>
            <p className="my-4 text-xl text-[#023e8a]">
                {subtitle}
            </p>
            </div>
        </div>
     </section>
    )
  }
export default Hero   
