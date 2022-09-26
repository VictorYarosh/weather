import {days, months} from "./const";

const dateBuilder = (d: Date) => {
    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
};
export default dateBuilder;