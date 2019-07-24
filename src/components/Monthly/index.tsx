import React, { useEffect, useState } from 'react';
import moment from 'moment';
import classnames from 'classnames';
import { animated, useSpring } from 'react-spring';

import { months, daysOfTheweek, getDaysBetweenMonths } from '../../utils/calendar';
import { ReactComponent as Arrowhead } from '../../assets/icons/arrowheads-of-thin-outline-to-the-left.svg';
import './style.scss';

interface MonthlyProps {
    initialDate: string,
    year: number,
    holidays: [],
    handleDate: (value: string) => void,
    setPeriod: (value: string) => void
}

const Monthly = ({initialDate, holidays, handleDate}: MonthlyProps) => {
    const [arrayMonth, setObjectMonth] = useState<any>([]);
    const [month, setMonth] = useState<number>(moment(initialDate).get('month'));

    const handleMonth = (date: string) => {
        setMonth(moment(date).get('month'));
        handleDate(date);
    }
    
    useEffect(() => getDaysBetweenMonths(moment(initialDate).get('month'), moment(initialDate).get('year'), holidays), [month]);

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
                    onClick={() => handleMonth(moment(initialDate).subtract(1, 'months').format('YYYY-MM-DD'))} >
                    <Arrowhead/>
                </button>
                <button type="button" onClick={() => console.log('Cliquei no hoje')}>
                    Hoje
                </button>
                <button type="button" onClick={() => handleMonth(moment(initialDate).add(1, 'months').format('YYYY-MM-DD'))}>
                    <Arrowhead/>
                </button>
            </div>
        </animated.div>
    );

}

export default Monthly;
