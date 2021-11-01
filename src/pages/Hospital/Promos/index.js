import React, { useContext, useEffect, useState } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import { getPromos, deletePromo, setPageNumber } from '../../../store/actions/promosActions'
import { getPagesArray } from '../../../Utills/functions';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { href } from '../../../constants/extra';
import AddPromo from './components/AddPromo';
import ShowVideo from './components/ShowVideo';
import ReactPlayer from 'react-player';
import LIKE_IMAGE from '../../../assets/images/like.png';

function Promos({ promos, getPromos, deletePromo, setPageNumber }) {

    const [selectedPromo, setSelectedPromo] = useState({});
    const { pageNumber, numberOfPages, promos: allPromos } = promos && promos;

    useEffect(() => {
      getPromos(pageNumber || 0);
    }, [getPromos, pageNumber]);

    const deletePromosHandler = (id) => {
      deletePromo(id);
    }

    const pages = getPagesArray(numberOfPages);

    return (
        <DashboardLayout>
            <div class="row align-items-center add-list">
               <div class="col-6">
                  <h4>Promo Videos</h4>
               </div>
               <div class="col-6 text-right">
                     <a href="javascript:void(0)" data-toggle="modal" data-target="#addPromo" class="btn btn-primary px-3">+ ADD PROMO VIDEO</a>
               </div>
            </div>
            <div className="row list-block patient-list">
               { allPromos?.map(promo => (
                  <div key={promo?._id} className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                     <div className="card">
                        <div className="card-body">
                           <div className="media" onClick={() => setSelectedPromo(promo)} data-toggle="modal" data-target="#video-wrapper" >
                                    <ReactPlayer 
                                        url={promo.url}
                                        width="260px"
                                        height="250px"
                                    />
                              <div className="media-body">
                                 <ul>
                                    <li>
                                       <h6>Name</h6>
                                       <p>{promo.name}</p>
                                       <p style={{ fontSize: "1rem" }}>{ promo?.likes } <span> <img style={{ paddingTop: '7px', paddingLeft: '2px' }} src={LIKE_IMAGE}></img> </span></p>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="dropdown">
                           <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <span className="icon-dots"></span>
                           </a>
                           <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item delete-item" href={href} onClick={(e) => { e.preventDefault(); deletePromosHandler(promo?._id) }}>Delete</a>
                           </div>
                        </div>
                     </div>
                  </div>
               )) }
            </div>
            <div className="row">
                    <div className="col-md-12">
                            {allPromos?.length > 0 ? (
                                <nav>
                                    <ul className="pagination justify-content-center align-items-center my-md-2">
                                        <li className="page-item" style={{ pointerEvents: +pageNumber <= 0 && "none"  }}><a href={href} onClick={(e) => {e.preventDefault(); setPageNumber(pageNumber - 1)}}>Prev</a></li>
                                        {pages.map((pageIndex) => (
                                            <li className={classNames("page-item", { "active": +pageIndex === pageNumber })} key={pageIndex} onClick={() => setPageNumber(pageIndex)}><a className="page-link" href={href} onClick={(e) => e.preventDefault()}>{pageIndex + 1}</a></li>
                                        ))}
                                        <li className="page-item" style={{ pointerEvents: +pageNumber === +numberOfPages - 1 && "none"  }}><a href={href} onClick={(e) => {e.preventDefault(); setPageNumber(pageNumber + 1)}}>Next</a></li>
                                    </ul>
                                </nav>
                            ): (
                                <p>No promo videos found</p>
                            )}
                            
                        </div>
                    </div>
                    <AddPromo />
                    <ShowVideo selectedPromo={selectedPromo} />
        </DashboardLayout>
    )
}

const mapStateToProps = state => ({
   promos: state.promos
})

const mapDispatchToProps = {
   getPromos,
   deletePromo,
   setPageNumber
}

export default connect(mapStateToProps, mapDispatchToProps)(Promos);