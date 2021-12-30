import React, { useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { href } from '../../../../constants/extra';
import AuthApi from '../../../../api/Auth';
import { useHistory } from 'react-router-dom';
import { redirectTo } from '../../../../Utills/redirectTo';
import { RootContext } from '../../../../contextApi/index'; 
import { toast } from 'react-toastify';
import { selectNav } from '../../../../Utills/selectNav';
import { Link } from 'react-router-dom';
import { SELECT_REGISTERATION_TYPE_ROUTE } from '../../../../constants/Redirects';
import instance from '../../../../axios';
import { usePromiseTracker } from "react-promise-tracker";
import HashLoader from "react-spinners/HashLoader";
import { HOSPITAL } from '../../../../constants/Roles';

 const LoginForm = () => {
  
   const { user, setUser, setSelectedNav } = useContext(RootContext);

   useEffect(() => {
    if(user && user.role){
      history.push(redirectTo(user?.role));
    }
   }, []);

   const { promiseInProgress } = usePromiseTracker();

   const history = useHistory();
   const formik = useFormik({
     initialValues: {
       email: "",
       password: ""
     },
     validationSchema: Yup.object({
       email: Yup.string().email('Invalid email address').required('Required'),
       password: Yup.string().required("Required")
     }),
     onSubmit: async values => {
        await AuthApi.login(values).then(res => {
          toast.success("Logged In Successfully");
          if(res?.data?.data?.user.role === HOSPITAL) {
            setUser({...res?.data?.data?.user, PCRDPI: res?.data?.data?.hospital.PCRDPI});
          }else {
            setUser(res?.data?.data?.user);
          }
          
          instance.defaults.headers.common['authorization'] = "Bearer" + " " +  res?.data?.data?.token;

          setSelectedNav(selectNav(res?.data?.data?.user?.role));
          localStorage.setItem("auth", res?.data?.data?.token);
          localStorage.setItem("user", res?.data?.data?.user);
          localStorage.setItem("familyMembers", JSON.stringify(res?.data?.data?.familyMembers));
          history.push(redirectTo(res?.data?.data?.user?.role));
        }).catch(err => {
          console.log("Err => ", err);
          toast.error("Invalid Credentials")
        })
     },
   });

   return (
     <form onSubmit={formik.handleSubmit}>
        <div class="form-group">
            <input type="email" {...formik.getFieldProps('email')} class={ (formik.touched.email && formik.errors.email) ? "form-control is-invalid" : "form-control"} placeholder="Email" />
            {formik.touched.email && formik.errors.email ? (
              <div class="invalid-feedback text-right-aligned">{formik.errors.email}</div>
            ) : null}
        </div>

        <div class="form-group mb-2">
            <input type="password" {...formik.getFieldProps('password')} class={ (formik.touched.password && formik.errors.password) ? "form-control is-invalid" : "form-control"} placeholder="Password" />
            {formik.touched.password && formik.errors.password ? (
              <div class="invalid-feedback text-right-aligned">{formik.errors.password}</div>
            ) : null}
        </div>
    
       <a href={href} class="forgot-pass">Forgot Password?</a>
            <div class="form-group mt-4">
                <button type="submit" disabled={promiseInProgress} style={promiseInProgress ? { padding: '20px' } : {}} class="btn btn-primary">
                {promiseInProgress ? (
                    <HashLoader color="#fff" loading={true} size={15} />
                  ) : (
                    <>Sign in</> 
                )}
                </button>
            </div>
            <p>Don’t have an account? <Link to={SELECT_REGISTERATION_TYPE_ROUTE}>Register Here</Link></p>
     </form>
   );
 };

 export default LoginForm;