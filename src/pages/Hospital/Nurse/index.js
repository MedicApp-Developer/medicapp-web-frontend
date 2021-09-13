import React, { useEffect, useState } from 'react'
import NurseApi from '../../../api/Nurse';
import { href } from '../../../constants/extra'
import DashboardLayout from '../../../layout/DashboardLayout'
import NURSE_PLACEHOLDER from '../../../assets/images/nurse_placeholder.png'
import AddNurse from './components/AddNurse';
import { toast } from 'react-toastify';

function Nurse() {

    const [nurses, setNurses] = useState([]);

    useEffect(() => {
        NurseApi.getAllNurses().then(res => {
            setNurses(res.data.data);
        })
    }, []); 

    const deleteNurse = (nurse) => {
        NurseApi.deleteNurse(nurse._id).then(res => {
            toast.success("Successfully deleted Nurse")
        }).catch(err => {
            toast.error("Problem while deleting the nurse")
        })
    }

    return (
        <DashboardLayout>
            <div className="row align-items-center add-list">
               <div className="col-6">
                  <h4>Nurse List</h4>
               </div>
               <div className="col-6 text-right">
                  <a href={href} data-toggle="modal" data-target="#addNurse" className="btn btn-primary px-3">+ ADD NURSE</a>
               </div>
            </div>
            <div className="row list-block">
                { nurses?.length > 0 && nurses.map(nurse => (
                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                        <div className="card">
                        <div className="card-body">
                            <div className="media">
                                <img src={nurse?.image ? nurse?.image : NURSE_PLACEHOLDER} alt="doctor" />
                                <div className="media-body">
                                    <h5 className="mt-0">{nurse.firstName + " " + nurse.lastName}</h5>
                                    <p>Nurse</p>
                                </div>
                            </div>
                            <div className="contact-info">
                                <a href={href}><span className="icon-email"></span></a>
                                <a href={href}><span className="icon-phone"></span></a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="icon-dots"></span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item delete-item" href={href} onClick={(e) => { e.preventDefault(); deleteNurse(nurse) }}>Delete</a>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
               <div className="col-md-12">
                  <nav>
                     <ul className="pagination justify-content-center align-items-center my-md-2">
                        <li className="page-item"><a href="#">Prev</a></li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a href="#">Next</a></li>
                     </ul>
                  </nav>
               </div>
            </div>

            {/* Add Nurse */}
            <AddNurse />
        </DashboardLayout>
    )
}

export default Nurse
