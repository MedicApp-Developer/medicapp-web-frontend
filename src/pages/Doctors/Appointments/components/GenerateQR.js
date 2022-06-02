import React from 'react'
import QR_CODE from '../../../../assets/images/qr-code.png'

function GenerateQR() {
    return (
        <div class="modal fade" id="qrCode" tabindex="-1" aria-labelledby="qrCodeLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
               <div class="modal-body">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span class="icon-close"></span>
                  </button>
                  <img class="img-fluid mt-4" src={QR_CODE} alt="qr" />
               </div>
            </div>
         </div>
      </div>
    )
}

export default GenerateQR
