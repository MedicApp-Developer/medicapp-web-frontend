import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthApi from '../../../../api/Auth';
import { useHistory, Link, useParams } from 'react-router-dom';
import { redirectTo } from '../../../../Utills/redirectTo';
import { RootContext } from '../../../../contextApi/index';
import { toast } from 'react-toastify';
import { LOGIN_ROUTE, SELECT_REGISTERATION_TYPE_ROUTE } from '../../../../constants/Redirects';
import { usePromiseTracker } from "react-promise-tracker";
import HashLoader from "react-spinners/HashLoader";
import LOGO from '../../../../assets/images/logo.png';
import { href } from '../../../../constants/extra';

const ResetPassword = () => {

	const { user } = useContext(RootContext);
	const { userToken } = useParams();
	const [selectedUser, setSelectedUser] = useState(null);

	useEffect(() => {
		if ((user && user.role) || !userToken) {
			history.push(redirectTo(user?.role));
		}
	}, []);

	const { promiseInProgress } = usePromiseTracker();

	const history = useHistory();
	const formik = useFormik({
		initialValues: {
			password: "",
			confirmPassword: ""
		},
		validationSchema: Yup.object({
			password: Yup.string().required('Required'),
			confirmPassword: Yup.string().required().when("password", {
				is: val => (val && val.length > 0 ? true : false),
				then: Yup.string().oneOf(
					[Yup.ref("password")],
					"Both password need to be the same"
				)
			})
		}),
		onSubmit: async values => {
			const formData = {
				newPass: values.password,
				resetLink: userToken
			};
			AuthApi.resetPassword(formData).then(res => {
				toast.success("Password updated successfully");
				history.push(LOGIN_ROUTE);
			})
		},
	});

	return (
		<section class="user-account">
			<div class="container">
				<div class="row">
					<div class="col-md-12 action-icon">
						<a href={href}><span class="icon-close"></span></a>
					</div>
				</div>
				<div class="row justify-content-center align-items-center">
					<div class="col-sm-8 col-md-7 col-lg-5 text-center">
						<img class="logo" src={LOGO} alt="logo" />
						<form onSubmit={formik.handleSubmit}>
							<div class="form-group">
								<input type="password" {...formik.getFieldProps('password')} class={(formik.touched.password && formik.errors.password) ? "form-control is-invalid" : "form-control"} placeholder="Password" />
								{formik.touched.password && formik.errors.password ? (
									<div class="invalid-feedback text-right-aligned">{formik.errors.password}</div>
								) : null}
							</div>

							<div class="form-group">
								<input type="password" {...formik.getFieldProps('confirmPassword')} class={(formik.touched.confirmPassword && formik.errors.confirmPassword) ? "form-control is-invalid" : "form-control"} placeholder="Confirm Password" />
								{formik.touched.confirmPassword && formik.errors.confirmPassword ? (
									<div class="invalid-feedback text-right-aligned">{formik.errors.confirmPassword}</div>
								) : null}
							</div>

							<Link to={LOGIN_ROUTE} class="forgot-pass">Back To Login</Link>
							<div class="form-group mt-4">
								<button type="submit" disabled={promiseInProgress} style={promiseInProgress ? { padding: '20px' } : {}} class="btn btn-primary">
									{promiseInProgress ? (
										<HashLoader color="#fff" loading={true} size={15} />
									) : (
										<>Reset Password</>
									)}
								</button>
							</div>
							<p>Don’t have an account? <Link to={SELECT_REGISTERATION_TYPE_ROUTE}>Register Here</Link></p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ResetPassword;