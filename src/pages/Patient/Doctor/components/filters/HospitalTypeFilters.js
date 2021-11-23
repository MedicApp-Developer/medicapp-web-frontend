import React from 'react'

function HospitalTypeFilters({ hospitalTypes, setHospitalTypes }) {

    const onHospitalCheckboxChange = () => {
        if(hospitalTypes.filter(item => item === "HOSPITAL").length > 0){
            setHospitalTypes(hospitalTypes.filter(item => item !== "HOSPITAL"))
        } else {
            setHospitalTypes([...hospitalTypes, "HOSPITAL"])
        } 
    }

    const onClinicCheckboxChange = () => {
        if(hospitalTypes.filter(item => item === "CLINIC").length > 0){
            setHospitalTypes(hospitalTypes.filter(item => item !== "CLINIC"))
        } else {
            setHospitalTypes([...hospitalTypes, "CLINIC"])
        } 
    }

    return (
        <>
            <div class="form-group form-check">
                <input type="checkbox" onChange={onHospitalCheckboxChange} class="form-check-input" id="Hospital" />
                <label class="form-check-label" for="Hospital">Hospital</label>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" onChange={onClinicCheckboxChange} class="form-check-input" id="Clinic" />
                <label class="form-check-label" for="Clinic">Clinic</label>
            </div>
        </>
    )
}

export default HospitalTypeFilters
