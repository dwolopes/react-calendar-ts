import React, { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Header from '../../components/Header';


interface CalendarProps {
    calendar: {
        holidays: any
    },
    getHolidays: (value: number) => void,
};

const Calendar = ({calendar, getHolidays}: CalendarProps) => {
    const [period, setPeriod] = useState<string>('yearly');

    useEffect(() => console.log('period', period), [period]);

    return (
        <div>
            <Header period={period}  setPeriod={setPeriod} />
        </div>
    )

}

const mapState = (state: any) => ({
    calendar: state.calendar,
});

const mapDispatch = (dispatch: any) => ({
    getHolidays: (payload: any) => dispatch.calendar.getHolidaysAsync(payload),
});


export default connect(mapState, mapDispatch)(memo(Calendar));