import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { getSpecialities } from '../../../../store/actions/specialitiesActions';
import { connect } from 'react-redux';
import { searchDoctors } from '../../../../store/actions/patient/searchedDoctorsActions';
import { useHistory } from 'react-router-dom';

function FindSpecialist({ getSpecialities, specialities, searchDoctors }) {

    const { specialities: allSpecialities } = specialities && specialities;

    const history = useHistory();

    useEffect(() => {
        getSpecialities();
    }, [getSpecialities]);

    const searchDoctor = (speciality) => {
        searchDoctors(speciality._id);
        history.push("/patient/doctor");
    }

    return (
        <section class="find-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="text-center">Find Specialist</h2>
                        {allSpecialities.length > 0 && (
                            <OwlCarousel className='owl-theme' loop margin={10} nav>
                                {allSpecialities?.map((speciality, key) => (
                                    <div class="item" key={key} style={{ cursor: 'pointer' }} onClick={searchDoctor.bind(this, speciality)}>
                                        <div class="card">
                                            <div class="card-body">
                                                <img src={speciality?.logo} alt="dental" />
                                                <h5>{speciality.name}</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                                            </div>
                                        </div>
                                    </div>
                                ))} 
                            </OwlCarousel>
                        )}      
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    specialities: state.specialities
})

const mapDispatchToProps = {
    getSpecialities,
    searchDoctors
}

export default connect(mapStateToProps, mapDispatchToProps)(FindSpecialist);

