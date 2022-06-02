import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import TextInput from '../../../../components/forms/TextInput'
import CodesApi from '../../../../api/Codes'
import { RootContext } from '../../../../contextApi'
import { toast } from 'react-toastify';

function VerifyCode({ selectedAppointment }) {
	const { t } = useTranslation()
	const { user, setUser } = useContext(RootContext);

	return (
		<Formik
			initialValues={{
				code: "",
			}}
			validationSchema={Yup.object({
				code: Yup.string().required(t('required'))
			})}
			onSubmit={async (values, { setSubmitting, resetForm }) => {
				const data = { slotId: selectedAppointment._id, code: values.code, patientId: user._id }
				CodesApi.verifyCode(data).then(res => {
					setUser({ ...user, points: user.points + 20 })
					toast.success("You have recieved 20 points");
				}).catch(err => {
					toast.error("Your code is Invalid OR Expired");
				})
				resetForm();
			}}
		>
			<div class="modal fade" id="verifyCode" tabindex="-1" aria-labelledby="verifyCodeLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-body text-center">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span class="icon-close"></span>
							</button>
							<h4 className="text-center">Get Points</h4>
							<p>{t("claim_code_content")}</p>
							<Form>
								<div class="form-group">
									<TextInput type="text" name="code" placeholder={t("code")} />
								</div>
								<button type="submit" class="btn btn-primary mt-2">{t("claim_code")}</button>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</Formik>
	)
}

export default VerifyCode