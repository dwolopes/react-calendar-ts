import React, { memo } from 'react';
import classnames from 'classnames';
import moment from 'moment';

import { months, daysOfTheweek } from '../../utils/calendar';

import './style.scss';

interface HeaderProps {
	period: string;
	setPeriod: any;
	initialDate: string;
}

const Header = ({ period, setPeriod, initialDate }: HeaderProps) => (
	<div className="caledar__page--header">
		<div className="info">
			<div className="date">
				<b>{months[moment(initialDate).get('month')]}</b>
				{moment(initialDate).get('year')}
			</div>
		</div>
		<button
			className={classnames({ active: period === 'monthly' })}
			onClick={() => setPeriod('monthly')}
			id="monthly"
		>
			Mês
		</button>
		<button className={classnames({ active: period === 'yearly' })} onClick={() => setPeriod('yearly')} id="yearly">
			Ano
		</button>
	</div>
);

export default memo(Header);
