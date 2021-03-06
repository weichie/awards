import React from 'react';
import './Award.css';

class Award extends React.Component{
	constructor(props){
		super(props);
		this.handleOnClick = this.handleOnClick.bind(this);

		this.state = {
			active: false
		}
	}

	componentDidMount() {
		const awardObject = document.querySelector('.award-list');
		awardObject.classList.add('active');

		//REMOVE LOADING ANIMATION
	}

	handleOnClick = e => {
		e.preventDefault();
		this.setState({active: true});
	}

	render(){
		const a = this.props.award;
		let type = (a.award_type === 'client: Client Work') ? 'Subcontract' : 'Self Made';
		let rel = (a.allow_follow === '1') ? 'noopener noreferrer' : 'noopener noreferrer noindex nofollow';

		return(
			<li className={this.state.active ? 'award active' : 'award'} style={{background: `url(${a.featured_img_src})`}} onClick={this.handleOnClick}>
				<a className="project-link" href={a.award_url} target="_blank" rel={rel}>
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
				</a>
			</li>
		);
	}
}

export default Award;