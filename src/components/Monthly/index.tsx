import React, { useEffect, useState } from 'react';
import moment, { weekdays } from 'moment';
import classnames from 'classnames';
import { animated, useSpring } from 'react-spring';

import { months, daysOfTheweek, getDaysBetweenMonths } from '../../utils/calendar';
import { ReactComponent as Arrowhead } from '../../assets/icons/arrowheads-of-thin-outline-to-the-left.svg';
import './style.scss';

interface MonthlyProps {
	initialDate: string;
	year: number;
	holidays: [];
	handleDate: (value: string) => void;
	setPeriod: (value: string) => void;
}

const Monthly = ({ initialDate, holidays, handleDate }: MonthlyProps) => {
	const [arrayMonth, setObjectMonth] = useState<any>([]);
	const [month, setMonth] = useState<number>(moment(initialDate).get('month'));
	const [todayDate, setTodayDate] = useState<string>(moment().format('YYYY-MM-DD'))

	const handleMonth = (date: string) => {
		setMonth(moment(date).get('month'));
		handleDate(date);
	};

	useEffect(() => {
		const detailedMonth = getDaysBetweenMonths(initialDate, holidays);
		setObjectMonth(detailedMonth.detailedDaysArray);
	}, [month, holidays, initialDate]);

	const props = useSpring({
		from: {
			opacity: 0,
			transform: 'translate3d(0,150px,0)',
		},
		to: {
			opacity: 1,
			transform: 'translate(0,0,0)',
		},
	});

	return (
		<animated.div className="calendar__page--content" style={props}>
			<div className="actions">
				<button
					type="button"
					onClick={() =>
						handleMonth(
							moment(initialDate)
								.subtract(1, 'months')
								.format('YYYY-MM-DD')
						)
					}
				>
					<Arrowhead />
				</button>
				<button type="button" onClick={() => handleMonth(moment().format('YYYY-MM-DD'))}>
					Hoje
				</button>
				<button
					type="button"
					onClick={() =>
						handleMonth(
							moment(initialDate)
								.add(1, 'months')
								.format('YYYY-MM-DD')
						)
					}
				>
					<Arrowhead />
				</button>
			</div>
			<div className="calendar__page--month">
				<div className="week">
					{daysOfTheweek.map(day => (
						<div className="day" key={day}>
							{day}
						</div>
					))}
				</div>
				<div className="month">
					{arrayMonth.map(
						(
							day: {
								disabled: any;
								formatedDate: string;
								date: string;
								weekDay: number;
								holiday: { name: string; type: string };
							},
							index: number
						) => {
							return (
								<div
									key={`${day.formatedDate}-${index}`}
									className="day"
								>
									<div className={classnames({ content: true, disabled: day.disabled })}>
                                        <div className={classnames({ date: true, disabled: day.weekDay === 7 })}>
											<div>
												<p>{daysOfTheweek[day.weekDay === 7 ? 0 : day.weekDay].slice(0, 3)}</p>
											</div>
											<div className={classnames({today: moment(todayDate).isSame(day.date)})}>
                                            	<p>{day.formatedDate}</p>
											</div>
                                        </div>
                                    </div>
								</div>
							);
						}
					)}
				</div>
			</div>
		</animated.div>
	);
};

export default Monthly;
