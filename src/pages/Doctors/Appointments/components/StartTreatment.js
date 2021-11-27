import React, { useState } from 'react'
import { href } from '../../../../constants/extra'
import QRCode from 'qrcode.react';
import { Form , Formik } from 'formik';
import * as Yup from 'yup';
import SelectInput from '../../../../components/forms/SelectInput';
import TextArea from '../../../../components/forms/TextArea';
import TextInput from '../../../../components/forms/TextInput';
import QrPrescriptionApi from '../../../../api/QrPrescription';
import { toast } from 'react-toastify';

function StartTreatment({ QRCodeValue, setQRCodeValue, patientId, doctorId }) {
   const generateQRCode = (values) => {
      setQRCodeValue(`
         Treatment Type is: ${values.treatmentType}.
         Prescription: ${values.prescription}.
         Dosage A Day: ${values.dosageADay}.
         Consumption Days: ${values.consumptionDays}
      `);
      QrPrescriptionApi.createQRPrescription({
         patientId,
         doctorId,
         date: new Date().toISOString(),
         data: `
            Treatment Type is: ${values.treatmentType}.
            Prescription: ${values.prescription}.
            Dosage A Day: ${values.dosageADay}.
            Consumption Days: ${values.consumptionDays}
         `
      }).then(res => {
         toast.success("QR Prescription Saved");
      }).catch(err => {
         toast.error("QR Prescription failed");
      })
   }
    return (

      <Formik
          initialValues={{
            treatmentType: "",
            prescription: "",
            dosageADay: "",
            consumptionDays: ""
          }}
          validationSchema={Yup.object({
            treatmentType: Yup.string().required('Required'),
            prescription: Yup.string().required('Required'),
            dosageADay: Yup.string().required('Required'),
            consumptionDays:  Yup.string().required('Required')
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            generateQRCode(values);
            resetForm();
          }}
        >
         <div class="modal fade" id="startTreatment" tabindex="-1" aria-labelledby="startTreatmentLabel" aria-hidden="true">
               <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                     <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span class="icon-close"></span>
                        </button>
                        <h4 class="text-center">Start Treatment</h4>
                        {QRCodeValue ? (
                           <div style={{textAlign: 'center'}}>
                              <QRCode value={QRCodeValue} />
                           </div>
                        ) : (
                           <Form>
                              <div class="row">
                                 <div class="col-md-12">
                                    <div class="form-group">
                                       <SelectInput name="treatmentType">
                                            <option value="">Treatment Type</option>
                                            <option value="Medication">Medication</option>
                                            <option value="Skin Desease">Skin Desease</option>
                                       </SelectInput>
                                    </div>
                                 </div>
                                 <div class="col-md-12">
                                    <div class="form-group">
                                       <TextArea name="prescription" rows="5" placeholder="Prescription" />
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-md-6">
                                    <div class="form-group">
                                       <TextInput type="text" name="dosageADay" placeholder="Dosage a day" />
                                    </div>
                                 </div>
                                 <div class="col-md-6">
                                    <div class="form-group">
                                       <TextInput type="text" name="consumptionDays" placeholder="Consumption Days" />
                                    </div>
                                 </div>
                              </div>
                              <div class="form-group text-center mb-0">
                                 <a href={href} data-toggle="modal" data-target="#requestLaboratory"  data-dismiss="modal" aria-label="Close" class="btn btn-primary px-3 mr-1">Request for Laboratory</a>
                                 <button type="submit" class="btn btn-primary px-3 ml-1">Generate QR Prescription</button>
                              </div>
                           </Form>
                        )}
                     </div>
                  </div>
               </div>
            </div>
        </Formik>
    )
}

export default StartTreatment
