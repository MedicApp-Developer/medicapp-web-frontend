import React, { useState } from 'react';
import className from 'classnames';
import { searchDoctorsByText } from '../../../../store/actions/patient/searchedDoctorsActions';
import { searchHospitalByText } from '../../../../store/actions/patient/searchedHospitalsActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

function SearchHospitalOrDoctor({ searchDoctorsByText, searchHospitalByText }) {

    const [selectedTab, setSelectedTab] = useState("hospital");
    const [searchText, setSearchText] = useState("");

    const history = useHistory();

    const onHospitalOrDoctorSearch = (e) => {
        e.preventDefault();
        if(selectedTab === "hospital"){
            if(searchText !== ""){
                searchHospitalByText(searchText);
                localStorage.setItem("hospitalSearchText", searchText);
                history.push("/patient/hospital");
            }
        }else {
            if(searchText !== ""){
                searchDoctorsByText(searchText);
                localStorage.setItem("doctorSearchText", searchText);
                history.push("/patient/doctor");
            }
        }
    }

    return (
        <>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation" onClick={(e) => setSelectedTab("hospital")}>
                                        <a className={className("nav-link", { active: selectedTab === "hospital" })} id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected={`${selectedTab === "hospital"}`}>Hospital</a>
                                    </li>
                                    <li class="nav-item" role="presentation" onClick={(e) => setSelectedTab("doctor")}>
                                        <a className={className("nav-link", { active: selectedTab === "doctor" })} id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected={`${selectedTab === "doctor"}`}>Doctor</a>
                                    </li>
                                </ul>
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <form onSubmit={onHospitalOrDoctorSearch}>
                                            <div class="form-group position-relative">
                                                <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="form-control" />
                                                <button class="btn btn-light" type="submit">Search</button>
                                                <span class="icon-search"></span>
                                            </div>
                                        </form>
                                </div>
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    searchDoctorsByText,
    searchHospitalByText
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHospitalOrDoctor) 
