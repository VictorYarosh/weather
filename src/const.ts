
export const api = {
    key: "717d96b0ffbd98f7df5938fac7f277c6",
    base: "https://api.openweathermap.org/data/2.5/",
};

export const months = [
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
export const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

export const weatherAll = {
    main: { temp: NaN, feels_like: NaN, humidity: null },
    visibility: null,
    name: null,
    sys: { country: null },
    wind: { speed: NaN, deg: null },
    weather: [{ main: null, description: null}],
}