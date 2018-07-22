import React from 'react';
import './AwardList.css';

import Award from '../Award/Award';

class AwardList extends React.Component{

	renderAwards = key => {
		const award = this.props.awards[key];

		if(!award) return null;

		return(
			<Award key={award.id} award={award} />
		);
	}

	render(){
		const awardIds = Object.keys(this.props.awards);

		return (
			<ul className="award-list">
				{awardIds.map(this.renderAwards)}
			</ul>
		);
	}
}

export default AwardList;