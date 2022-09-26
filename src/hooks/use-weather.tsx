import {useState, useEffect} from "react";
import {api, weatherAll} from "../const";
import dateBuilder from "../utils";


const useCartWeather = (s: string) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState({weatherAll});


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

export default useCartWeather;