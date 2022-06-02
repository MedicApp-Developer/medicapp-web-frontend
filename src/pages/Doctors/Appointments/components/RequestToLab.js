import React, { useEffect, useState } from 'react'
import LaboratoryApi from '../../../../api/Laboratory';
import { toast } from 'react-toastify';

function RequestToLab({ appointment }) {

   const [tests, setTests] = useState([{ test: "" }]);
   const [selectedLab, setSelectedLab] = useState("");
   const [labs, setLabs] = useState([]);

   useEffect(() => {
      LaboratoryApi.getAllLaboratories(0, true, appointment.hospitalId).then(res => {
         setLabs(res.data.data.labs);
      })
   }, [appointment]);

   const onInputChange = (index, e) => {
      const allTests = JSON.parse(JSON.stringify(tests));

      allTests.forEach((item, i) => {
         if(i === index){
            item.test = e.target.value
         }
      });
      setTests(allTests);
   }

   const onSend = (e) => {
      e.preventDefault();

      if(tests.length === 1 && tests[0].test === ""){
         toast.error("No tests entered");
         return false;
      }

      LaboratoryApi.createLabRequest({
         appointmentId: appointment._id,
         doctorId: appointment.doctorId._id,
         patientId: appointment.patientId._id,
         laboratoryId: selectedLab,
         tests: tests.filter(item => item.test !== "")
      }).then(res => {
         toast.success("Laboratory Request Generated");
         setTests([{ test: "" }]);
      }).catch(err => {
         toast.error("Problem while generating request");
      });
   }

   const onAddMore = () => {
      const allTests = JSON.parse(JSON.stringify(tests));
      allTests.push({
         test: ""
      });
      setTests(allTests);
   }

    return (
        <div class="modal fade" id="requestLaboratory" tabindex="-1" aria-labelledby="requestLaboratoryLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
               <div class="modal-body">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span class="icon-close"></span>
                  </button>
                  <h4 class="text-center">Request for Laboratory</h4>
                  <form>
                     <div class="row align-items-end mb-4">
                        <div className="col-md-10">
                           <div className="form-group">
                              <select className="form-control" placeholder="Choose Laboratory" onChange={(e) => setSelectedLab(e.target.value)}>
                                 <option value="">Choose Laboratory</option>
                                 {labs?.map(item => (
                                    <option value={item._id}>{item.firstName + " " + item.lastName}</option>
                                 ))}
                              </select>
                           </div>
                        </div>
                        {tests.map((test, index) => (
                           <div class="col-md-10">
                              <div class="form-group">
                                 <input className="form-control" placeholder="Test Name" value={test.test} onChange={onInputChange.bind(this, index)} />
                              </div>
                           </div>
                        ))}
                        <div class="col-md-2">
                           <span class="fa fa-plus add-field" onClick={onAddMore}></span>
                        </div>
                     </div>
                     <div class="form-group text-center mb-0">
                        <button type="submit" class="btn btn-primary" onClick={onSend}>Send</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
    )
}

export default RequestToLab
