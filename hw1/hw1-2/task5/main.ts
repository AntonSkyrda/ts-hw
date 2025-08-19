type DayWeather = {
    morning: number;
    noon: number;
    evening: number;
};

type WeekWeather =
| { monday: DayWeather }
| { tuesday: DayWeather }
| { wednesday: DayWeather }
| { thursday: DayWeather }
| { friday: DayWeather }
| { saturday: DayWeather }
| { sunday: DayWeather };

let weatherForWeek: WeekWeather[] = [
    {
        monday: {
            morning: 8,
            noon: 12,
            evening: 6,
        }
    },
    {
        tuesday: {
            morning: 8,
            noon: 12,
            evening: 6,
        }
    },
    {
        wednesday: {
            morning: 8,
            noon: 12,
            evening: 6,
        }
    },
    {
        thursday: {
            morning: 8,
            noon: 12,
            evening: 6,
        }
    },
    {
        friday: {
            morning: 8,
            noon: 12,
            evening: 6,
        }
    },
    {
        saturday: {
            morning: 8,
            noon: 12,
            evening: 6,
        }
    },
    {
        sunday: {
            morning: 8,
            noon: 12,
            evening: 6,
        }
    }
];

console.log(weatherForWeek[0]);
console.log(weatherForWeek[1]);
console.log(weatherForWeek[2]);
console.log(weatherForWeek[3]);
console.log(weatherForWeek[4]);
console.log(weatherForWeek[5]);
console.log(weatherForWeek[6]);