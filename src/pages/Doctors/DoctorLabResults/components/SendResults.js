import React from 'react'

function SendResults({ selectedLabResult }) {
    return (
        <div class="modal fade" id="labResults" tabindex="-1" aria-labelledby="labResultsLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
               <div class="modal-body">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span class="icon-close"></span>
                  </button>
                  <br/>
                  <div>
                     {Object.keys(selectedLabResult).length > 0 && (
                        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                           <thead>
                              <tr>
                                 <th style={{border: "1px solid #dddddd", textAlign: "left", padding: "8px"}}>Test</th>
                                 <th style={{border: "1px solid #dddddd", textAlign: "left", padding: "8px"}}>Result</th>
                                 <th style={{border: "1px solid #dddddd", textAlign: "left", padding: "8px"}}>Reference Range</th>
                              </tr>
                           </thead>
                           <tbody>
                              {selectedLabResult.tests.map(item => (
                                 <tr>
                                    <td style={{border: "1px solid #dddddd", textAlign: "left", padding: "8px"}}>{item.test}</td>
                                    <td style={{border: "1px solid #dddddd", textAlign: "left", padding: "8px"}}>{item.result}</td>
                                    <td style={{border: "1px solid #dddddd", textAlign: "left", padding: "8px"}}>{item.range}</td>
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
