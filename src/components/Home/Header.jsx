// CSS IMPORTS

const Header = () => {
  return (
    <>
     

      <h1 className="text-white lg:text-7xl md:text-4xl font-semibold font-sans pt-20 sm:text-3xl">We are a Gen-Z Consumer</h1>
      <h1 className="text-white lg:text-7xl md:text-4xl font-semibold font-sans sm:text-3xl">Company</h1>
      <h1 className="text-zinc-700 pt-4 lg:text-xl font-mormal md:text-base font-sans sm:text-xs">
        our mission is to create products and services
      </h1>
      <h1 className="text-zinc-700 lg:text-xl font-mormal md:text-base font-sans sm:text-xs">
        that put Gen-Z consumers first
      </h1>
      <div className="flex space-x-10 lg:max-w-screen-{425}:flex-col items-center justify-center pt-10 sm:columns-2">
        <div className="bg-[#ffff] py-2 w-36 rounded-lg cursor-pointer border-2 hover:bg-[#ffff]">
          Join as a customer
        </div>
        <div className="bg-[#1A191A] py-2 w-36 text-white border-white border-2 rounded-lg cursor-pointer hover:bg-[#1A191A]">
          Join as a user
        </div>
      </div>
    </>

  )
}

export default Header