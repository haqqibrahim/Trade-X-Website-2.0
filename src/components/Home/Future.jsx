
const Future = () => {
	return (
		<>
			<h1 className="text-white lg:text-3xl md:text-4xl font-semibold font-sans pt-20 sm:text-3xl lg:pt-18">We are the Future</h1>
			<h1 className="text-zinc-700 lg:text-xl font-mormal md:text-base font-sans sm:text-xs">
				Join our waitlist as we put Gen-Z first
			</h1>
			
			<div className="flex space-x-10 lg:max-w-screen-{425}:flex-col items-center justify-center pt-8 sm:columns-2">
				<div className="bg-[#ffff] py-2 w-36 rounded-lg cursor-pointer border-2 hover:bg-[#ffff]">
				<a href="https://trade-x-waitlist.herokuapp.com/customers">Join as a customer</a>
				</div>
				<div className="bg-[#1A191A] py-2 w-36 text-white border-white border-2 rounded-lg cursor-pointer hover:bg-[#1A191A]">
				<a href="https://trade-x-waitlist.herokuapp.com/">Join as a user</a>
				</div>
			</div>

		</>

	)
}

export default Future