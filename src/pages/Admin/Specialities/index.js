import React, { useContext, useEffect } from 'react'
import { href } from '../../../constants/extra'
import DashboardLayout from '../../../layout/DashboardLayout'
import PLACEHOLDER_DOCTOR_IMAGE from '../../../assets/images/doctor_placeholder.png'
import AddSpecialities from './components/AddSpecialities'
import { getSpecialities, deleteSpeciality } from '../../../store/actions/specialitiesActions'
import { connect } from 'react-redux'
import { useState } from 'react'

function Specialities({ getSpecialities, specialities, deleteSpeciality }) {
    const { specialities: allSpecialities } = specialities && specialities
    const [selectedSpeciality, setSelectedSpeciality] = useState(null);

    useEffect(() => {
        getSpecialities()
    }, [getSpecialities])

    const deleteSpecialityHandler = (speciality) => {
        deleteSpeciality(speciality._id)
    }

    return (
        <div>
            <DashboardLayout>
                <div className="row align-items-center add-list">
                    <div className="col-6">
                        <h4>Specialities</h4>
                    </div>
                    <div className="col-6 text-right">
                        <a href={href} data-toggle="modal" data-target="#addSpeciality" onClick={() => setSelectedSpeciality(null)} className="btn btn-primary px-3">+ ADD Speciality</a>
                    </div>
                </div>
                <div className="row list-block">
                    {allSpecialities?.length > 0 ? allSpecialities?.map((spec, key) => (
                        <div key={key} className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <img className="pointer" src={spec?.logo ? spec?.logo : PLACEHOLDER_DOCTOR_IMAGE} alt="doctor" />
                                        <div className="media-body">
                                            <h5 className="mt-0">{spec.name_en}</h5>
                                            <p className="mt-0">{spec.name_ar}</p>
                                        </div>
                                    </div>
                                    <p style={{ textAlign: 'center' }}>{spec?.tags}</p>
                                </div>
                                <div className="dropdown">
                                    <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="icon-dots"></span>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item delete-item" href={href} onClick={(e) => { e.preventDefault(); deleteSpecialityHandler(spec) }}>Delete</a>
                                        <a className="dropdown-item delete-item" style={{ backgroundColor: "#417EBF" }} href={href} onClick={(e) => { e.preventDefault(); setSelectedSpeciality(spec) }} data-toggle="modal" data-target="#addSpeciality">Update</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <p>No specialities added yet</p>
                    )}
                </div>
                {/* Add Doctor Modal */}
                <AddSpecialities selectedSpeciality={selectedSpeciality} />
                {/* Set Doctor Schedule */}
            </DashboardLayout>
        </div>
    )
}

const mapStateToProps = (state) => ({
    specialities: state.specialities
})

const mapDispatchToProps = {
    getSpecialities,
    deleteSpeciality,
}

export default connect(mapStateToProps, mapDispatchToProps)(Specialities)
