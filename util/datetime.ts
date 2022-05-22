import moment, { Moment } from "moment";
import { ITime } from "../models/models";

interface ITimeArray {
    from: string;
    to: string;
}

const currentDate = moment();
const timeArray: ITimeArray[] = [
    {
        from: '09:00',
        to: '11:00'
    },
    {
        from: '11:00',
        to: '13:00'
    },
    {
        from: '13:00',
        to: '15:00'
    },
    {
        from: '15:00',
        to: '17:00'
    },
    {
        from: '17:00',
        to: '19:00'
    },
    {
        from: '19:00',
        to: '21:00'
    }
]

export const buildCalendar = (value: Moment) => {
    value = value.clone().subtract(1, 'day');
    const startDay = value.clone().startOf('month').startOf('week');
    const endDay = value.clone().endOf('month').endOf('week');
    const day = startDay.clone().subtract(1, 'day');
    const calendar = []

    while (day.isBefore(endDay, 'day')) {
        calendar.push(
            Array(7)
                .fill(0)
                .map(() => {
                    if (day.isBefore(value, 'day')) {
                        day.add(1, 'day').clone();
                        return '';
                    } else {
                        return day.add(1, 'day').clone();
                    }


                })
        );
    }

    return calendar;
}

export const buildTime = (value: Moment | string) => {
    const result: ITime[] = []
    if (typeof value != 'string') {
        const currentTime = value.format('LT');
        if (currentDate.isSame(value, 'day')) {
            timeArray.map((item) => {
                if (item.from > currentTime) {
                    result.push({
                        from: item.from,
                        to: item.to
                    })
                }

            });
        }
        else {
            timeArray.map((item) => {
                result.push({
                    from: item.from,
                    to: item.to
                })

            });
        }
    }

    return result;
}