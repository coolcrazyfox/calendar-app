import React from 'react';
import Tilt from 'react-parallax-tilt';

import {Calendar} from './components';
import {formatDate} from './utils/helpers/date';

import './static/css/global.css';

export const App: React.FC = () => {
    const [selectedDate, setSelectedDay] = React.useState(new Date());

    return (

        <div className='app__container'>
            <Tilt>
                <div className='date__container'>{formatDate(selectedDate, 'DDD DD MMM YYYY')}</div>

                <Calendar selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)}/>
            </Tilt>
        </div>

    );
};

export default App;
