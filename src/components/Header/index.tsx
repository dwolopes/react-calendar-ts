import React, { memo } from 'react';

import './style.scss';


interface HeaderProps {
    period: string,
    setPeriod: any
}

const Header = ({period, setPeriod}: HeaderProps) => (
    <div className="caledar__page--header">
        <button
            onClick={() => setPeriod('monthly')}
            id="monthly"
        >
            Mês
        </button>
        <button
            onClick={() => setPeriod('yearly')}
            id="yearly"
        >
            Ano
        </button>
    </div>
);



export default memo(Header);