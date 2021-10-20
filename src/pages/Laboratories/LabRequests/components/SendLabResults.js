import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import LaboratoryApi from '../../../../api/Laboratory';

function SendLabResults({ selectedRequest }) {

   const [requests, setRequests] = useState([]);

   useEffect(() => {
      setRequests(selectedRequest?.tests?.map(obj=> ({ ...obj, result: "", range: ""})));
   }, [selectedRequest?.tests]);

   const onFormSubmit = (e) => {
      e.preventDefault();
      if(requests.length === 0) {
         toast.error("Test results not completed");
         return false;
      }
      requests.map(item => {
         if(item.test === "" || item.result === "" || item.range === "") {
            toast.error("Test results not completed");
            return false;
         }
      })

      LaboratoryApi.updateLabRequest(selectedRequest._id, requests).then(res => {
         toast.success("Result sent successfully");
      }).catch(err => {
         toast.error("Problem while sending the result");
      });
   }

   const onResultChange = (index, e) => {
      const tempResults = JSON.parse(JSON.stringify(requests));
      tempResults.forEach((item, i) => {
         if(i === index){
            tempResults[index].result = e.target.value
         }
      });

      setRequests(tempResults);
   }

   const onRangeChange = (index, e) => {
      const tempResults = JSON.parse(JSON.stringify(requests));
      tempResults.forEach((item, i) => {
         if(i === index){
            tempResults[index].range = e.target.value
         }
      });

      setRequests(tempResults);
   }

    return (
        <>
            <div class="modal fade" id="sendResults" tabindex="-1" aria-labelledby="sendResultsLabel" aria-hidden="true">
               <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                     <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span class="icon-close"></span>
                        </button>
                        <h4 class="text-center">Send Result</h4>
                        <form onSubmit={onFormSubmit}>
                           <div class="row">
                              {requests?.map((request, index) => (
                                 <>
                                    <div class="col-md-12">
                                       <div class="form-group">
                                          <input type="text" disabled value={request.test} class="form-control" placeholder="Result" />
                                       </div>
                                    </div>
                                    <div class="col-md-12">
                                       <div class="form-group">
                                          <input type="text" class="form-control" value={request.result} onChange={onResultChange.bind(this, index)} placeholder="Result" />
                                       </div>
                                    </div>
                                    <div class="col-md-12">
                                       <div class="form-group">
                                          <input type="text" class="form-control" value={request.range} onChange={onRangeChange.bind(this, index)} placeholder="Reference range" />
                                       </div>
                                    </div>
                                 </>
                              ))}
                           </div>
                           <div class="form-group text-center mb-0">
                              <button type="submit" class="btn btn-primary">Confirm</button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
        </>
    )
}

export default SendLabResults
