import React from 'react'
import HOSPITAL_IMAGE from '../../../../assets/images/medeor_logo.png';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

function SearchedHospitals({ searchedHospitals }) {

    const { searchedHospitals: allSearchedHospitals } = searchedHospitals && searchedHospitals;
    const history = useHistory();

    return (
        <>
            {allSearchedHospitals.length > 0 && allSearchedHospitals?.map(hospital => (
                <div class="media mb-2 shadow-lg mb-2" style={{ padding: "0px 15px", boxShadow: "1px 1px 10px 2px lightgray" }}>
                    <img src={hospital?.image ? hospital?.image : HOSPITAL_IMAGE} style={{ width: '150px !important', height: '125px !important', borderRadius: '10px !important', objectFit: 'cover !important', border: '1px solid #D3D3D3 !important', cursor: 'pointer' }} onClick={() => { history.push(`/hospitals/${hospital._id}`) }} class="mr-3 py-4" alt="hospital_logo" />
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
