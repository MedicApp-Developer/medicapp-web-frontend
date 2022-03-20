import React, { useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthApi from '../../../../api/Auth';
import { useHistory, Link } from 'react-router-dom';
import { redirectTo } from '../../../../Utills/redirectTo';
import { RootContext } from '../../../../contextApi/index';
import { toast } from 'react-toastify';
import { LOGIN_ROUTE, SELECT_REGISTERATION_TYPE_ROUTE } from '../../../../constants/Redirects';
import { usePromiseTracker } from "react-promise-tracker";
import HashLoader from "react-spinners/HashLoader";

const ForgetPasswordForm = () => {

	const { user } = useContext(RootContext);

	useEffect(() => {
		if (user && user.role) {
			history.push(redirectTo(user?.role));
		}
	}, []);

	const { promiseInProgress } = usePromiseTracker();

	const history = useHistory();
	const formik = useFormik({
		initialValues: {
			email: ""
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email address').required('Required')
		}),
		onSubmit: async values => {
			AuthApi.forgetPassword(values).then(res => {
				toast.success("Reset password link sent to your email")
				history.push(LOGIN_ROUTE)
			});
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<div class="form-group">
				<input type="email" {...formik.getFieldProps('email')} class={(formik.touched.email && formik.errors.email) ? "form-control is-invalid" : "form-control"} placeholder="Email" />
				{formik.touched.email && formik.errors.email ? (
					<div class="invalid-feedback text-right-aligned">{formik.errors.email}</div>
				) : null}
			</div>

			<Link to={LOGIN_ROUTE} class="forgot-pass">Back To Login</Link>
			<div class="form-group mt-4">
				<button type="submit" disabled={promiseInProgress} style={promiseInProgress ? { padding: '20px' } : {}} class="btn btn-primary">
					{promiseInProgress ? (
						<HashLoader color="#fff" loading={true} size={15} />
					) : (
						<>Forget Password</>
					)}
				</button>
			</div>
			<p>Don’t have an account? <Link to={SELECT_REGISTERATION_TYPE_ROUTE}>Register Here</Link></p>
		</form>
	);
};

export default ForgetPasswordForm;