import React, { useContext, useRef, useState } from 'react'
import AppointmentApi from '../../../../api/Appointment'
import { RootContext } from '../../../../contextApi'
import { toast } from 'react-toastify'
import moment from 'moment'
import { useTranslation } from "react-i18next"

function CreatePCRAppointment({ selectedSlot, slotRef, onSlotCalandarClose }) {
	const { user } = useContext(RootContext)
	const [description, setDescription] = useState("")
	const [familyMemberId, setFamilyMemberId] = useState(null)
	const familyMembers = JSON.parse(localStorage.getItem("familyMembers"))
	const { t } = useTranslation()

	const onConfirmAppointment = () => {
		const appoint = {
			patientId: user._id,
			familyMemberId,
			description,
			from: new Date(selectedSlot?.start),
			to: new Date(selectedSlot?.end)
		}

		if (selectedSlot.status === "BOOKED" || selectedSlot.status === "APPROVED") {
			AppointmentApi.cancelMedicappAppointment(selectedSlot._id).then(res => {
				toast.success("Your appointment cancelled successfully")
				setTimeout(() => {
					window.location.reload()
				}, 1000)
			});
		} else {
			AppointmentApi.createMedicappAppointment(appoint).then(res => {
				toast.success("Your appointment created successfully")
				setTimeout(() => {
					window.location.reload()
				}, 1000)
			}).catch(err => {
				toast.error("Problem while creating appointment")
			})
		}
	}

	return (
		<div ref={slotRef} class="modal fade" id="setMedicappAppointment" tabindex="-1" aria-labelledby="setMedicappAppointmentLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content" style={{ border: "2px solid lightgray", margin: '10%', textAlign: 'center' }}>
					<div class="modal-body">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={onSlotCalandarClose}>
							<span class="icon-close"></span>
						</button>
						<h4 class="text-center"> {t('book_appointment')}</h4>
						{selectedSlot?.status === "BOOKED" ? (
							<p>{`${t('Please confirm your appointment')} `} <span style={{ fontSize: '1rem', fontWeight: 'bold' }}> {t("cancellation")} </span> {t("with")} <span style={{ fontSize: '1rem', fontWeight: 'bold' }}> MEDICAPP </span> on <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{selectedSlot?.title}</span></p>
						) : (
							<p>{`${t('Please confirm your appointment')} with `} <span style={{ fontSize: '1rem', fontWeight: 'bold' }}> MEDICAPP </span> {t('on')} <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{selectedSlot?.title}</span></p>
						)}
						<hr />
						{!(moment(selectedSlot?.end).isAfter() && selectedSlot?.status === "BOOKED") && (
							<form className="form-group">
								{familyMembers?.length > 0 && (
									<>
										<label for="familyMember">{t('family_member')}</label>
										<select value={familyMemberId} onChange={(e) => setFamilyMemberId(e.target.value)} style={{ width: '100%' }} className="form-control" id="familyMember">
											<option value={null}>{t('select_family_member')} ( {t('optional')} )</option>
											{familyMembers?.map(member => (
												<option value={member._id}>{`${member.firstName}  ${member.lastName} ( ${member.relation} )`}</option>
											))}
										</select>
										<br />
									</>
								)}
								<div className="mt-2">
									<label for="description">{t('what_do_you_feel')} ?</label>
									<textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder={`${t('tell_something_about_your_condition')} ? ( ${t('optional')} )`} id="description" className="form-control" />
								</div>
							</form>
						)}
						<div className="form-group text-center mb-0">
							<button className={`btn ${selectedSlot?.status === "BOOKED" ? "btn-danger" : "btn-primary"}`} onClick={onConfirmAppointment}>{selectedSlot?.status === "BOOKED" ? "Cancel" : "Book"}</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreatePCRAppointment
