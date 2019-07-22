import React, { useEffect, useState } from 'react';
import moment from 'moment';
import classnames from 'classnames';
import { animated, useSpring } from 'react-spring';

import { months, daysOfTheweek } from '../../utils/calendar';
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
                    onClick={() => console.log('Cliquei no passado')} 
                >
                    Ontem
                </button>
                <button type="button" onClick={() => console.log('Cliquei no hoje')}>
                    Hoje
                </button>
                <button type="button" onClick={() => console.log('Cliquei no futuro ')}>
                    Amanhã
                </button>
            </div>
        </animated.div>
    );

}

export default Monthly;
