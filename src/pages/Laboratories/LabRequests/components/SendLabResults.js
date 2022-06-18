import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import LaboratoryApi from '../../../../api/Laboratory';
import { useFormik } from 'formik'
import * as Yup from 'yup'

function SendLabResults({ selectedRequest }) {

   const [requests, setRequests] = useState([]);
   const [files, setFiles] = useState([])
   const [filesError, setFilesError] = useState([]);

   useEffect(() => {
      setRequests(selectedRequest?.tests?.map(obj => ({ ...obj, result: "", range: "" })));
   }, [selectedRequest?.tests]);


   const onFileUpload = (index, e) => {
      console.log("index ===>  ", index);
      var upld = e.target.files[0].type;
      const size = (e.target.files[0].size / (1024 * 1024)).toFixed(2)
      if (upld == "application/pdf") {
         if (size <= 20) {
            const newSelectedArray = files;
            newSelectedArray[index] = e.target.files[0]
            setFiles(newSelectedArray)
            const errors = filesError;
            errors[index] = ""
            setFilesError(errors);
            const tempResults = JSON.parse(JSON.stringify(requests));
            tempResults.forEach((item, i) => {
               if (i === index) {
                  tempResults[index].file = e.target.files[0].name
               }
            });
            setRequests(tempResults);
            console.log("Request =>>>> ", tempResults)
         } else {
            const errors = filesError;
            errors[index] = "Max size should be 20 MB"
            setFilesError(errors);
            const tempResults = JSON.parse(JSON.stringify(requests));
            setRequests(tempResults);
         }
      } else {
         const errors = filesError;
         errors[index] = "Only pdf files are allowed"
         console.log("Errors =>>>> ", errors)
         setFilesError(errors);
         const tempResults = JSON.parse(JSON.stringify(requests));
         setRequests(tempResults);
      }
   }

   const onFormSubmit = (e) => {
      e.preventDefault();
      if (requests.length === 0) {
         toast.error("Test results not completed");
         return false;
      }

      const shouldUpload = requests.every((item, index) => {
         console.log("FILEEEE ", item.file);
         if ((item.result === "" || item.range === "") && item.file === undefined) {
            toast.error("Please add result and range or select file for test " + item.test);
            return false;
         } else {
            return true;
         }
      })


      if (shouldUpload) {
         let formData = new FormData();
         formData.append("id", selectedRequest._id);
         formData.append("data", JSON.stringify(requests));
         files.forEach(file => {
            if (file !== undefined) {
               formData.append("files", file);
            }
         })
         LaboratoryApi.updateLabRequest(formData).then(res => {
            toast.success("Result sent successfully");
         }).catch(err => {
            toast.error("Problem while sending the result");
         });
      }

   }

   const onResultChange = (index, e) => {
      const tempResults = JSON.parse(JSON.stringify(requests));
      tempResults.forEach((item, i) => {
         if (i === index) {
            tempResults[index].result = e.target.value
         }
      });

      setRequests(tempResults);
   }

   const onRangeChange = (index, e) => {
      const tempResults = JSON.parse(JSON.stringify(requests));
      tempResults.forEach((item, i) => {
         if (i === index) {
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
                                 <div class="col-md-12">
                                    <div class="form-group">
                                       <h5>OR</h5>
                                    </div>
                                 </div>
                                 <div class="col-md-12">
                                    <div class="form-group">
                                       <input type="file" class="form-control custom-file-input" id="validatedCustomFile" onChange={onFileUpload.bind(this, index)} />
                                       <label class="custom-file-label form-control" for="validatedCustomFile">{files[index] ? files[index].name + ` - ${(files[index].size / (1024 * 1024)).toFixed(2)} MB` : "Upload Lab Result File"} </label>
                                       {filesError[index] ? (
                                          <div style={{ color: "red", float: 'right', paddingTop: '0.7rem', paddingBottom: '0.7rem', fontSize: "0.9rem" }}>{filesError[index]}</div>
                                       ) : null}

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
         </div >
      </>
   )
}

export default SendLabResults
