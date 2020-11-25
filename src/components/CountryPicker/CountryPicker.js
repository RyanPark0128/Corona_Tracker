import React, { useState, useEffect } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core'
import './CountryPicker.css'
import { fetchCountries } from '../../api/index'

const CountryPicker = ({ handleCountry }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [fetchedCountries])
    return (
        <FormControl className="formControl">



                <NativeSelect defaultValue="" onChange={(e) => handleCountry(e.target.value)}>
                    <option value="">
                        Global
                </option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
        </FormControl>
            )
        }
        
export default CountryPicker;