import React from 'react'
import DOCTOR_SHIFTING_IN_FRONT from '../../../../assets/images/doctor.png'
import ImageUploading from "react-images-uploading"
import DoctorApi from '../../../../api/Doctors'
import { toast } from 'react-toastify'

function DoctorInfo({ doctor }) {
   console.log(doctor)
   const [images, setImages] = React.useState([])
   const maxNumber = 1

   const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex)
      setImages(imageList)
   }

   const uploadProfilePic = () => {
      if (images.length > 0) {
         let formData = new FormData()
         formData.append('image', images[0].file)
         DoctorApi.uploadProfilePic(doctor._id, formData).then(res => {
            toast.success("Profile picture uploaded")
         }).catch(err => {
            toast.error("Problem while uploading the picture")
         })
      }
   }

   return (
      <>
         <div class="row align-items-start add-list hospital-info">
            <div class="col-12 text-right">
               <a href="javascript:void(0)" data-toggle="modal" data-target="#updateDoctor" class="btn btn-primary px-5">Update</a>
            </div>
         </div>
         <div class="row mt-4">
            <div class="col-md-4">
               <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
               >
                  {({
                     imageList,
                     onImageUpload,
                     onImageRemoveAll,
                     onImageUpdate,
                     onImageRemove,
                     isDragging,
                     dragProps
                  }) => (
                     // write your building UI
                     <>
                        <img
                           className="img-fluid"
                           src={doctor?.image ? doctor?.image : DOCTOR_SHIFTING_IN_FRONT}
                           alt="doctor"
                           style={{ maxWidth: '200px', maxHeight: '230px' }}
                           // onClick={imageList[0]?.data_url ? onImageUpdate.bind(this, 0) : onImageUpload}
                           {...dragProps}
                        />
                        {/* <hr style={{ visibility: 'hidden' }} />
                        <div>
                           <a href="" style={{ pointerEvents: imageList.length < 1 && 'none' }} onClick={(e) => { e.preventDefault(); onImageRemoveAll() }}>Remove</a>
                           <a href="" style={{ pointerEvents: imageList.length < 1 && 'none', marginLeft: "15px", border: '1px solid dodgerblue', padding: '5px', fontWeight: 'bold' }} onClick={(e) => { e.preventDefault(); uploadProfilePic() }}>Upload</a>
                        </div> */}
                     </>
                  )}
               </ImageUploading>
               {/* <img class="img-fluid" src={DOCTOR_SHIFTING_IN_FRONT} alt="doctor" /> */}
            </div>
            <div class="col-md-8">
               <h4 class="mb-0"><strong>Dr. {doctor.firstName + " " + doctor.lastName}</strong></h4>
               <p class="mt-2 mb-2"><i class="icon-hospital"></i> {doctor.hospitalId.name}</p>
               <p>{doctor.about || "lorem Ipsem lorem Ipsem lorem Ipsem lorem Ipsem"}</p>
               <h5><strong>Speciality</strong></h5>
               <p class="mb-1">{doctor?.specialityId?.map((item, index) => index === doctor?.specialityId.length - 1 ? item['name_en'] : item['name_en'] + ", ")}</p>
               <h5><strong>Experience</strong></h5>
               <p>{doctor.experience}</p>
            </div>
         </div>
      </>
   )
}

export default DoctorInfo
