import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import AppointmentSlip from './AppointmentSlip'

function AppointmentSlipPDF() {
	return (
		<PDFViewer>
			<AppointmentSlip />
		</PDFViewer>
	)
}

export default AppointmentSlipPDF
