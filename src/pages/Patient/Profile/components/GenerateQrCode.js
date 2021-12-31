import React, { useState } from 'react'
import QRCode from 'qrcode.react';

function GenerateQrCode({ selectedResult, setSelectedResult }) {
    const [qrCode, setQrCode] = useState(false);
    return (
        <div class="modal fade" id="qrCode" tabindex="-1" aria-labelledby="qrCodeLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => setSelectedResult(null)}>
                        <span class="icon-close"></span>
                    </button>
                    <h5>QR Prescriprion</h5>
                    <hr/>
                    { ( selectedResult?.data && qrCode ) ? (
                            <div style={{textAlign: 'center'}}>
                                { selectedResult?.data && (
                                    <QRCode value={selectedResult?.data} />
                                )} 
                            </div>
                    ) : (
                        <div style={{textAlign: 'center'}}>
                            <p>{selectedResult?.data}</p>
                        </div>
                    )}
                </div>
                <button className="btn btn-primary" onClick={(e) => setQrCode(!qrCode)}>{ qrCode ? "Show Prescription" : "Generate QR Code" }</button>
                </div>
            </div>
        </div>
    )
}

export default GenerateQrCode
