import 'moment/locale/tr'
import moment, { Moment } from 'moment';
import React, { FC, useEffect, useState } from 'react';
import '../../../application/css/calendar.css'
import { useClickOutside } from '../../../application/hooks/useClickOutside';
import CalendarBody from './CalendarBody';
import { buildCalendar } from '../../../application/util/datetime';

interface Props {
    addDayCalendar(value: string): void;
    addDateCalendar(value: Moment): void;
    addDate(value: Moment): void;
    activeHandler(id: number): void;
    openCalendar(event: boolean): void; 
}

const Calendar: FC<Props> = (props) => {
    const { openCalendar, activeHandler, addDayCalendar, addDateCalendar, addDate } = props;
    const [month, setMonth] = useState(moment());
    const [year, setYear] = useState(moment().format("YYYY"));
    
    const [calendar, setCalendar] = useState<any[]>([]);
    const [value, setValue] = useState(moment());

    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value]);

    const getDays = (item: any) => {
        const currentDate = month;
        if(item.isSame(currentDate, 'day')){
            activeHandler(1);
            openCalendar(false);
            addDate(currentDate.clone());
        }else if(item.isSame(currentDate.add(1,'day').clone(), 'day')){
            activeHandler(2);
            openCalendar(false);
            addDate(currentDate.add(1,'day').clone());
        }
        else if(item.isSame(currentDate.add(1,'day').clone(), 'day')){
            activeHandler(3);
            openCalendar(false);
            addDate(currentDate.add(1,'day').clone());
        }else{
            activeHandler(4);
            openCalendar(false);
            addDayCalendar(item.format('LLLL').split(',')[0]);
            addDateCalendar(item);
            addDate(item);
        }
    }


    const addMonth = () => {
        setMonth(month.add(1, 'month'));
    }

    const subMonth = () => {
        setMonth(month.subtract(1, 'month'))
    }

    const domNode = useClickOutside(() => {
        openCalendar(false);
    });

    return (
        <div ref={domNode} className="calendar">

            <CalendarBody
                addMonth={addMonth}
                daysArray={calendar}
                getDays={getDays}
                currentDay={value}
                subMonth={subMonth}
                year={year}
            />
        </div>
    );
};

export default Calendar;