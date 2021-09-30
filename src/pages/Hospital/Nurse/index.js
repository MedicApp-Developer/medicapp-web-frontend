import React, { useEffect, useState } from 'react'
import { href } from '../../../constants/extra'
import DashboardLayout from '../../../layout/DashboardLayout'
import NURSE_PLACEHOLDER from '../../../assets/images/nurse_placeholder.png'
import AddNurse from './components/AddNurse';
import { connect } from 'react-redux';
import { getNurses, deleteNurse, searchNurse, setPageNumber } from '../../../store/actions/nurseActions';
import { getPagesArray } from '../../../Utills/functions';
import classNames from 'classnames';

function Nurse({ getNurses, deleteNurse, nurses, setPageNumber }) {

    const { pageNumber, numberOfPages, nurses: allNurses, searchedNurses, searchedText } = nurses && nurses;

    useEffect(() => {
        if(searchedText !== ""){
            searchNurse(pageNumber, searchedText);
        }else {
            getNurses(pageNumber || 0);
        }
    }, [getNurses, pageNumber, searchNurse, searchedText]);

    const deleteNurseHandler = (nurse) => {
        deleteNurse(nurse._id);
    }

    const pages = getPagesArray(numberOfPages);

    const nursesList = searchedNurses.length > 0 ? searchedNurses : allNurses;

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
                { nursesList?.length > 0 && nursesList?.map(nurse => (
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
                                <a href={`mailto:${nurse.email}`}><span className="icon-email"></span></a>
                                <a href={`tel:${nurse.mobile}`}><span className="icon-phone"></span></a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="icon-dots"></span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item delete-item" href={href} onClick={(e) => { e.preventDefault(); deleteNurseHandler(nurse) }}>Delete</a>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
               <div className="col-md-12">
                   {nursesList?.length > 0 ? (
                       <nav>
                            <ul class="pagination justify-content-center align-items-center my-md-2">
                                <li class="page-item" style={{ pointerEvents: +pageNumber <= 0 && "none"  }}><a href={href} onClick={(e) => {e.preventDefault(); setPageNumber(pageNumber - 1)}}>Prev</a></li>
                                    {pages.map((pageIndex) => (
                                        <li class={classNames("page-item", { "active": +pageIndex === pageNumber })} key={pageIndex} onClick={() => setPageNumber(pageIndex)}><a class="page-link" href={href} onClick={(e) => e.preventDefault()}>{pageIndex + 1}</a></li>
                                    ))}
                                <li class="page-item" style={{ pointerEvents: +pageNumber === +numberOfPages - 1 && "none"  }}><a href={href} onClick={(e) => {e.preventDefault(); setPageNumber(pageNumber + 1)}}>Next</a></li>
                            </ul>
                        </nav>
                   ): (
                       <p>No nurse found</p>
                   )}
                  
               </div>
            </div>

            {/* Add Nurse */}
            <AddNurse />
        </DashboardLayout>
    )
}

const mapStateToProps = (state) => ({
    nurses: state.nurses
});

const mapDispatchToProps = {
    getNurses,
    deleteNurse,
    setPageNumber
}

export default connect(mapStateToProps, mapDispatchToProps)(Nurse)
