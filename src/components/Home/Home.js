import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import AwardList from '../AwardList/AwardList';

const Home = () => {
	return (
		<div>
			<Sidebar />
			<div className="content">
				<AwardList awards={this.state.awards} />
			</div>
		</div>
	);
}

export default Home;