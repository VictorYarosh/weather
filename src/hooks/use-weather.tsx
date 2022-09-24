import {useState, useEffect} from "react";
import {api} from "../const";

const useFetch = (s: string) => {
    const dateBuilder = (d: Date) => {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];

        const day = days[d.getDay()];
        const date = d.getDate();
        const month = months[d.getMonth()];
        const year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    };
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState({
        main: { temp: NaN, feels_like: NaN, humidity: NaN },
        visibility: null,
        name: null,
        sys: { country: null },
        wind: { speed: NaN, deg: NaN },
        weather: [{ main: null, description: null }],
    });
    useEffect(() => {
        setLoading(true);
        fetch(`${api.base}weather?q=Kyiv,ua&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);

    return {dateBuilder,data,isLoading};
};

export default useFetch;