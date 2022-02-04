import React from 'react'
import MEDOR_LOGO from '../../../../assets/images/medeor_logo.png'

function HospitalServices({ services }) {
    return (
        <div class="tab-pane fade" id="pills-services" role="tabpanel" aria-labelledby="pills-services-tab">
            <div class="row">
                {services?.length > 0 && services.map(service => (
                    <div class="col-md-4">
                        <div class="media">
                            <img src={MEDOR_LOGO} class="mr-3" alt="dental" />
                            <div class="media-body">
                                <h5 class="mt-0">{service.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HospitalServices
