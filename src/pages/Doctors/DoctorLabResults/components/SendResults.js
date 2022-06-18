import React from 'react'
import { useTranslation } from "react-i18next"

function SendResults({ selectedLabResult }) {

   const { t } = useTranslation()

   const downloadReport = (file) => {
      const newWindow = window.open(file, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
   }

   return (
      <div class="modal fade" id="labResults" tabindex="-1" aria-labelledby="labResultsLabel" aria-hidden="true">
         <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
               <div class="modal-body">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span class="icon-close"></span>
                  </button>
                  <br />
                  <div>
                     {selectedLabResult && Object.keys(selectedLabResult).length > 0 && (
                        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                           <thead>
                              <tr>
                                 <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Test</th>
                                 <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Result</th>
                                 <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Reference Range</th>
                                 <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Report</th>
                              </tr>
                           </thead>
                           <tbody>
                              {selectedLabResult.tests.map(item => (
                                 <tr>
                                    <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{item.test}</td>
                                    <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{item.result}</td>
                                    <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{item.range}</td>
                                    <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px", alignContent: "center" }}>{item.file !== null ? (<a href="javascript:void(0)" class="btn btn-primary px-3 py-2  text-center cursor-pointer" onClick={downloadReport.bind(this, item.file)}>{t("download_report")}</a>) : "Not Available"}</td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>

                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SendResults
