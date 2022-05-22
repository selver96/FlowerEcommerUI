import moment, { Moment } from 'moment';
import React, { FC, useEffect, useState } from 'react';
import DateItem from './DateItem';
import 'moment/locale/tr'
import DetailDate from './DetailDate';

interface DateData {
    id: number
    date: Moment;
    day: Moment | string;
}

interface Props {
    addTime(value: string): void;
    addDate(value: Moment): void;
}

const DatePicker: FC<Props> = (props) => {
    const { addTime, addDate } = props;
    const [activeId, setActiveId] = useState(1);
    const [data, setData] = useState<DateData[]>();
    const [dayCalendar, setDayCalendar] = useState('Takvim');
    const [dateCalendar, setDateCalendar] = useState<Moment | string>('');
    

    useEffect(() => {
        addDate(moment())
        setData([{
            id: 1,
            date: moment(),
            day: 'Bugün'
        },
        {
            id: 2,
            date: moment().add(1, 'days'),
            day: 'Yarın'
        },
        {
            id: 3,
            date: moment().add(2, 'days'),
            day: moment().add(2, 'days')
        },
        ]);
    }, [])

    const activeHandler = (id: number) => {
        setActiveId(id);
        addTime('');
        if (id != 4) {
            addDateCalendar('');
            addDayCalendar('Takvim');
        }
    }

    const addDateCalendar = (value: Moment | string) => {
        setDateCalendar(value);
    }

    const addDayCalendar = (value: string) => {
        setDayCalendar(value);
    }

    return (
        <div className="detail-date-picker">
            {
                data?.map((item, index) => {
                    if (item.id == activeId) {
                        return <DateItem
                            key={index}
                            id={item.id}
                            date={item.date}
                            day={item.day}
                            active={true}
                            addDate={addDate}
                            addTime={addTime}
                            activeHandler={activeHandler}
                        />
                    }
                    else {
                        return <DateItem
                            key={index}
                            id={item.id}
                            date={item.date}
                            day={item.day}
                            active={false}
                            addDate={addDate}
                            addTime={addTime}
                            activeHandler={activeHandler}
                        />
                    }

                })
            }
            {
                activeId == 4
                    ?
                    <DetailDate
                        key={4}
                        id={4}
                        day={dayCalendar}
                        date={dateCalendar}
                        active={true}
                        addDateCalendar={addDateCalendar}
                        addDayCalendar={addDayCalendar}
                        addDate={addDate}
                        addTime={addTime}
                        activeHandler={activeHandler}
                    />
                    :
                    <DetailDate
                        key={4}
                        id={4}
                        day={dayCalendar}
                        date={dateCalendar}
                        active={false}
                        addDateCalendar={addDateCalendar}
                        addDayCalendar={addDayCalendar}
                        addDate={addDate}
                        addTime={addTime}
                        activeHandler={activeHandler}
                    />
            }
        </div>
    );
};

export default DatePicker;