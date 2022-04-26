import React from 'react'
import Header from "./Header_About_Us"
import Miniheader from "../Home/Miniheader"
import BodyA from "./BodyA"
import BodyB from "./BodyB"
import BodyC from "./BodyC"
import Join_Waitlist from "../Our_services/Join_Waitlist_Services"

function About_Us() {
	return (
		<>
			<Header />
			<Miniheader />
			<BodyA />
			<BodyB />
			<BodyC />
			<Join_Waitlist/>
		</>
	)
}

export default About_Us