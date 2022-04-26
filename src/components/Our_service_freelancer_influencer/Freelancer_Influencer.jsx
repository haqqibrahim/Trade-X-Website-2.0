import React from 'react'
import Features_Freelancer from './Features_Freelancer'
import Header_Freelancer_influencer from './Header_Freelancer_influencer'
import Join_Waitlist from "../Our_services/Join_Waitlist_Services"
import Freelance_ToolA from './Freelance_ToolA'
import Freelance_ToolB from './Freelance_ToolsB'
import ToolC from "../Our_services/ToolsC"

function Freelancer_Influencer() {
	return (
		<>
			<Header_Freelancer_influencer />
			<Features_Freelancer />
			<Join_Waitlist />
			<Freelance_ToolA />
			<Freelance_ToolB />
			<ToolC />
			<Join_Waitlist />
		</>
	)
}

export default Freelancer_Influencer