import useSWR from 'swr'
import React, { useState, useEffect } from 'react';

export default function ServersList() {

    const [pageCounter, setPageCounter] = useState(1);
    const [portPagination, setPortPagination] = useState('');
    const [countryPagination, setCountryPagination] = useState('');

    const fetcher = () => fetch('https://shadowmere.akiel.dev/api/proxies/?format=json').then(res => res.json)

    const endpointURL = (counter, port, country) => {
        const endPoint = 'https://shadowmere.akiel.dev/api/proxies/?format=json&is_active=true' + '&location_country_code=' + country + '&port=' + port + '&page=' + counter.toString();
        return endPoint;
    }

    const { data, error } = useSWR('&is_active=true&location_country_code=' + countryPagination + '&port=' + portPagination + '&page=' + pageCounter.toString(), fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    

    return (
        <div>
            Success!!!
        </div>
    )
}