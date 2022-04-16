// IMAGE IMPORTS
import oupoint from "../../../images/oupoint.svg"
const Ouropportunity = () => {
	return (
		<>
			<div className="pt-24">
				<h1 className="text-white lg:text-5xl md:text-xl sm:text-xl font-sans">Our Opportunity</h1>
			</div>
			<div>
				<h1 className="text-zinc-700 pt-5 lg:text-xl  font-mormal md:text-base  font-sans sm:text-xs">
					Our vision is to be the consumer's best friend.
				</h1>
				<h1 className="text-zinc-700 lg:text-xl font-mormal md:text-base font-sans sm:text-xs">
					We want to create products and services that seek to meet consumer's taste
				</h1>
			</div>
		<div className="mt-28 flex justify-center">
			<img src={oupoint} alt="" className="lg:w-50% lg:h-auto md:w-80% md:h-auto sm:w-80% sm:h-auto" />
		</div>
		</>
	)
}

export default Ouropportunity