import React from 'react'
import PLACEHOLDER_LARGE from '../../../../assets/images/placeholder-lg.png';
import PLACEHOLDER_SMALL from '../../../../assets/images/placeholder-sm.png';
import MEDOR_LOGO from '../../../../assets/images/medeor_logo.png';
import DENTAL_IMAGE from '../../../../assets/images/dental.png';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

function SearchedHospitals({ searchedHospitals }) {
    
    const { searchedHospitals: allSearchedHospitals } = searchedHospitals && searchedHospitals;
    const history = useHistory();
    
    return (
        <>
            {allSearchedHospitals.length > 0 && allSearchedHospitals?.map(hospital => (
                <div class="media mb-2">
                    <img src={MEDOR_LOGO} style={{ cursor: "pointer" }} onClick={() => { history.push(`/patient/hospital/${hospital._id}`) }} class="mr-3 py-4" alt="medeor_logo" />
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
