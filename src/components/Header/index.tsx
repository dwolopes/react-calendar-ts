import React, { memo } from 'react';
import classnames from 'classnames';

import './style.scss';


interface HeaderProps {
    period: string,
    setPeriod: any
}

const Header = ({period, setPeriod}: HeaderProps) => (
    <div className="caledar__page--header">
        <button
            className={classnames({active: period === 'monthly'})}
            onClick={() => setPeriod('monthly')}
            id="monthly"
        >
            Mês
        </button>
        <button
            className={classnames({active: period === 'yearly'})}
            onClick={() => setPeriod('yearly')}
            id="yearly"
        >
            Ano
        </button>
    </div>
);



export default memo(Header);