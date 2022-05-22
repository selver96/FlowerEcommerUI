import React, { FC, useState } from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import Calendar from './Calendar';
import { Moment } from 'moment';
import { buildTime } from '../../../application/util/datetime';

interface Props {
    id: number;
    day: string;
    date: Moment | string;
    active: boolean;
    addTime(value: string): void;
    addDate(value: Moment): void;
    addDayCalendar(value: string): void;
    addDateCalendar(value: Moment): void;
    activeHandler(id: number): void;
}

const DetailDate: FC<Props> = (props) => {
    const { id, day, active, activeHandler, date, addTime, addDate, addDayCalendar, addDateCalendar } = props;
    const [calendarOpen, setCalendarOpen] = useState(false);
    const times = buildTime(date);
    const openCalendar = (event: boolean) => {
        setCalendarOpen(event);
    }




    return (
        <div className="detail-date-item">
            <div className={active ? "date-title-box active_date" : "date-title-box"} onClick={() => { openCalendar(true); }}>
                <p className="date">{typeof date == 'string' ? <CalendarOutlined /> : date.format("Do MMMM")}</p>
                <p className="day">{day}</p>
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
            {
                calendarOpen
                    ?
                    <Calendar
                        addDayCalendar={addDayCalendar}
                        addDateCalendar={addDateCalendar}
                        addDate={addDate}
                        activeHandler={activeHandler}
                        openCalendar={openCalendar}
                    />
                    : <></>
            }

        </div>
    );
};

export default DetailDate;