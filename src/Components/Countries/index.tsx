import { useState, useEffect } from 'react'

interface Country {
    continent: string;
}

const Countries = ({continent}: Country) => {

    const [countries, setCountries] = useState([])

    const fetchCountries = async () => {
        const response = await fetch('https://restcountries.com/v3.1/region/' + continent)
        const countryArray = await response.json()
        setCountries(countryArray)
    }

    useEffect(() => {
        fetchCountries()
    }, [continent])


    return(
        <>
            {
                countries.map((country: any, index) =>
                <div key={index} className='h-40 p-4 mr-6 mb-3 rounded-3xl border-2'>
                    <p>Country: {country['name']['common']}</p>
                    <p>Currency: {Object.values(country['currencies'])[0]['name']}</p>
                    <p>Capital: {country['name']['common'] !== 'Macau' ? country['capital'] : 'Macau'}
                    </p>
                    <p>Language: {Object.values(country['languages'])[0]}</p>
                </div>)
            }
        </>
    )
}

export default Countries