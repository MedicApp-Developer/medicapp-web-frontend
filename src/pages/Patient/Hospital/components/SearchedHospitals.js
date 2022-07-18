import React, { useContext } from 'react'
import HOSPITAL_IMAGE from '../../../../assets/images/medeor_logo.png';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import classNames from 'classnames';
import { RootContext } from '../../../../contextApi'

function SearchedHospitals({ patient, searchedHospitals }) {

    const { searchedHospitals: allSearchedHospitals } = searchedHospitals && searchedHospitals;
    const { user, setUser } = useContext(RootContext)
    const history = useHistory();


    const containsInsurance = (hospital) => {
        console.log("FOUND PATIENT", user);
        var includes = false
        user.insurances.forEach(outerElement => {
            hospital.insurances.forEach(element => {
                if (outerElement._id === element._id) {
                    includes = true
                }
            });
        });
        return includes
    }

    return (
        <>
            {allSearchedHospitals.length > 0 && allSearchedHospitals?.map(hospital => (

                <div className={classNames("media  mb-4", { "green-border": containsInsurance(hospital) })} style={{ padding: "0px 15px", boxShadow: "0px 0px 16px 0px rgba(202,202,202,0.75)", borderRadius: "8px" }}>
                    <img src={hospital?.image ? hospital?.image : HOSPITAL_IMAGE} style={{ width: '150px !important', height: '125px !important', borderRadius: '10px !important', objectFit: 'cover !important', border: '1px solid #D3D3D3 !important', cursor: 'pointer' }} onClick={() => { history.push(`/hospitals/${hospital._id}`) }} class="mr-3" alt="hospital_logo" />
                    <div class="media-body">
                        <div class="d-flex flex-wrap justify-content-between align-items-center">
                            <h5 class="mt-0">{hospital?.name}</h5>
                            <span>
                                {/* <a href="javascript:void(0)" class="btn btn-success px-3 py-1 mr-1">Verified</a>
                        <a href="javascript:void(0)" class="btn btn-primary px-3 py-1">Since 2014</a> */}
                            </span>
                        </div>
                        <p class="rating mb-0">
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </p>
                        {/* <p class="my-1"><i class="icon-phone"></i>{hospital?.phoneNo}</p> */}
                        <p class="my-1"><i class="icon-map"></i> {hospital?.address}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

const mapStateToProps = (state) => ({
    searchedHospitals: state.searchedHospitals
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SearchedHospitals);
