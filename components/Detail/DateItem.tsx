import { Moment } from 'moment';
import React, { FC, useState } from 'react';
import { buildTime } from '../../../application/util/datetime';

interface Props {
    id: number;
    date: Moment;
    day: Moment | string;
    active: boolean;
    addTime(value: string): void;
    addDate(value: Moment): void;
    activeHandler(id: number): void;
}

const DateItem: FC<Props> = (props) => {
    const { id, date, day, active, activeHandler, addTime, addDate } = props;
    const times = buildTime(date);

    return (
        <div className="detail-date-item">
            <div className={active ? "date-title-box active_date" : "date-title-box"} onClick={() => { activeHandler(id); addDate(date) }}>
                <p className="date">{date.format("Do MMMM")}</p>
                <p className="day">{typeof day == 'string' ? day : day.format('LLLL').split(',')[0]}</p>
            </div>
            {
                active
                    ?
                    <div className="date-time-box">
                        <select onChange={(e) => addTime(e.target.value)}>
                            <option selected>Saat Seçiniz</option>
                            {
                                times.map((item, index) => {
                                    return <option key={index} >{item.from + "-" + item.to}</option>
                                })
                            }
                        </select>
                    </div>
                    : <></>
            }

        </div>
    );
};

export default DateItem;