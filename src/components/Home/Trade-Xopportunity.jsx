// IMAGE IMPORTS
import Star from "../../../images/star.svg"
import Involved from "../../../images/Involved.svg"

const styles = {
	textColor: {
		color: '#A5A5A5',
	},
	mck: {
		height: "150%",
		paddingBottom: "40px",
		paddingLeft: "10px"
	},

	img: {
		marginLeft: "auto",
		marginRight: "auto",
		display: "block",
		"@media (minWidth: 768px)": {
			width: "10px",	
		}
		

	}
}

const TradeXopportunity = () => {
	return (
		<>
			<div className="bg-[#252425] mt-12" style={styles.mck}>
				<div className="lg:ml-36 pt-16">
					<h1 className="text-left font-sans" style={styles.textColor}>TRADE-X OPPORTUNITY</h1>
					<h1 className="text-white lg:text-3xl text-left pt-8 font-sans font-semibold">40% of the Global</h1>
					<h1 className="text-white lg:text-3xl text-left font-sans font-semibold">Consumer population</h1>
					<div className="pt-5">
						<p className="text-white font-sans text-left font-semibold">According to Mckinsey and company, Forbes</p>
						<p className="text-white font-sans text-left font-semibold">and other recongnizable sites, we are:</p>
					</div>
					<div className="pt-5">
						<div className="flex space-x-2">
							<div>
								<img src={Star} alt="" className="pt-1.5" />
							</div>
							<div>
								<p className="text-white font-sans text-left pt-0.5">A very loyal consumer class</p>
							</div>
						</div>
						<div className="flex space-x-2">
							<div>
								<img src={Star} alt="" className="pt-2" />
							</div>
							<div>
								<p className="text-white font-sans text-left pt-0.5">We have an indirect spending power of $600 Billion</p>
							</div>
						</div>
						<div className="flex space-x-2">
							<div>
								<img src={Star} alt="" className="pt-3" />
							</div>
							<div>
								<p className="text-white font-sans text-left pt-1">We will be entering the workforce and would spend even more</p>
							</div>
						</div>
						<div className="flex space-x-2">
							<div>
								<img src={Star} alt="" className="pt-3" />
							</div>
							<div>
								<p className="text-white font-sans text-left pt-1">We are the next generation of consumers</p>
							</div>
						</div>
						<div className="flex space-x-2">
							<div>
								<img src={Star} alt="" className="pt-3" />
							</div>
							<div>
								<p className="text-white font-sans text-left pt-1">Our influence is unmatched</p>
							</div>
						</div>
					</div>

				</div>

			</div>
			<div className=" lg:w-100% lg:h-28 md:h-10 sm:pb-28 bg-[#252425]" >
				<img src={Involved} alt="" style={styles.img} className=""/>
			</div>
		</>
	)
}

export default TradeXopportunity