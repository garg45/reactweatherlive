import React, { useState, useEffect } from 'react';
import './css/style.css'
const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Mumbai');

    useEffect(() => {
        const fetchApi = async () => {
            const SECRET_key = '9c6ddd829034c8b63902b05fe160b33f';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${SECRET_key}`;
            const response = await fetch(url);
            const res = await response.json();
            console.log(res.main);
            setCity(res.main);

        }

        fetchApi();
    }, [search])

    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <input type='search' className='inputFeild' onChange={(event) => {
                        setSearch(event.target.value)
                    }} value={search} />
                </div>
                {!city ?
                    <p className='errorMsg'>No Data Found</p> :
                    <div>
                        <div className='info'>
                            <h2 className='location'>
                                <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className='temp'>{city.temp}°Cel</h1>
                            <h3 className='tempmin_max'>Min : {city.temp_min}°Cel Max : {city.temp_max}°Cel</h3>
                        </div>
                        <div className='wave'></div>
                        <div className='wave-two'></div>
                        <div className='wave-three'></div>
                    </div>}
            </div>
        </>
    )
}

export default Tempapp;
