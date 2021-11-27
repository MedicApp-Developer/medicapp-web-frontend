import React from 'react'
import QRCode from 'qrcode.react';

function GenerateQrCode({ selectedResult, setSelectedResult }) {
    return (
        <div class="modal fade" id="qrCode" tabindex="-1" aria-labelledby="qrCodeLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => setSelectedResult(null)}>
                        <span class="icon-close"></span>
                    </button>
                    <div style={{textAlign: 'center'}}>
                      { selectedResult?.data && (
                          <QRCode value={selectedResult?.data} />
                      )} 
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default GenerateQrCode
