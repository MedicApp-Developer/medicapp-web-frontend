import React from 'react'
import { hospitalList } from '../../../../../constants/extra'

function HospitalTypeFilters({ onHospitalCheckboxChange, hospitalTypes }) {
    return (
        <>
            {hospitalList?.map(type => (
                <div class="form-group form-check">
                    <input type="checkbox" checked={hospitalTypes.includes(type)} onChange={onHospitalCheckboxChange.bind(this, type)} class="form-check-input" id={type} />
                    <label class="form-check-label" for={type}>{type}</label>
                </div>   
            ))}
        </>
    )
}

export default HospitalTypeFilters
