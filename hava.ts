export class Hava{
    main_temp:number;
    main_pressure:number;
    main_humidity:number;
    main_temp_max:number;
    main_temp_min:number;
    wind_speed:number;
    wind_deg:number;
    name:string;
    Weather;
}

export class Weather{
    main:string;
    description:string;
    icon:string;
}