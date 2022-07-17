import React, { useEffect } from 'react'
import { href } from '../../../constants/extra'
import DashboardLayout from '../../../layout/DashboardLayout'
import { getInsurances, deleteInsurance } from '../../../store/actions/insurancesActions'
import { connect } from 'react-redux'
import CATEGORY_PLACEHOLDER_IMAGE from '../../../assets/images/cateogries_placeholder.png'
import { useState } from 'react'
import AddInsurance from './components/AddInsurance'

function Insurances({ getInsurances, insurances, deleteInsurance }) {
    const { insurances: allInsurances } = insurances && insurances
    const [selectedInsurance, setSelectedInsurance] = useState(null);


    useEffect(() => {
        console.log('INSURANCES', allInsurances);
        getInsurances()
    }, [getInsurances])

    const deleteInsuranceHandler = (insurance) => {
        deleteInsurance(insurance._id)
    }

    return (
        <div>
            <DashboardLayout>
                <div className="row align-items-center add-list">
                    <div className="col-6">
                        <h4>Insurances</h4>
                    </div>
                    <div className="col-6 text-right">
                        <a href={href} data-toggle="modal" data-target="#addInsurance" onClick={() => setSelectedInsurance(null)} className="btn btn-primary px-3">+ ADD Insurance</a>
                    </div>
                </div>
                <div className="row list-block">
                    {allInsurances?.length > 0 ? allInsurances?.map((spec, key) => (
                        <div key={key} className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <img className="pointer" src={spec?.logo ? spec?.logo : CATEGORY_PLACEHOLDER_IMAGE} alt="doctor" />
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
                                        <a className="dropdown-item delete-item" href={href} onClick={(e) => { e.preventDefault(); deleteInsuranceHandler(spec) }}>Delete</a>
                                        <a className="dropdown-item delete-item" style={{ backgroundColor: "#417EBF" }} href={href} onClick={(e) => { e.preventDefault(); setSelectedInsurance(spec) }} data-toggle="modal" data-target="#addInsurance">Update</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <p>No insurances added yet</p>
                    )}
                </div>
                {/* Add Doctor Modal */}
                <AddInsurance selectedInsurance={selectedInsurance} />
                {/* Set Doctor Schedule */}
            </DashboardLayout>
        </div>
    )
}

const mapStateToProps = (state) => ({
    insurances: state.insurances
})

const mapDispatchToProps = {
    getInsurances,
    deleteInsurance,
}

export default connect(mapStateToProps, mapDispatchToProps)(Insurances)
