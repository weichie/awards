import React from 'react';
import './Award.css';

class Award extends React.Component{
	render(){
		const a = this.props.award;
		let type = (a.award_type === 'client: Client Work') ? 'Subcontract' : 'Self Made';

		return(
			<li className="award" style={{background: `url(${a.featured_img_src})`}}>
				<div className="award-filter"></div>
				<div className="top">
					<strong>{type}</strong>
					<small>{a.award_duration}</small>
				</div>
				<span className="score">{a.award_score}</span>
				<div className="bottom">
					<h4>{a.title}</h4>
					<div className="author">
						<div className="author-img" style={{background: `url(${a.award_company_image})`}}>
						</div>
						<div className="text">
							<strong>{a.award_company_name}</strong>
							<small>{a.award_programming_language}</small>
						</div>
					</div>
				</div>
			</li>
		);
	}
}

export default Award;