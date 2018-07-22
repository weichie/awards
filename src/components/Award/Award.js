import React from 'react';
import './Award.css';

class Award extends React.Component{
	render(){
		const a = this.props.award;
		
		return(
			<li className="award" style={{background: `url(${a.featured_img_src})`}}>
				<strong>{a.title}</strong>
			</li>
		);
	}
}

export default Award;