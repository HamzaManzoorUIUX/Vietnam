import React from 'react';
import Heading5 from '../components/home/heading5'
import TCorner from '../images/app/lfcr.png'
import BCorner from '../images/app/btcr.png';
import Card from '@material-ui/core/Card';
// import { makeStyles } from '@material-ui/core/styles';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import logo from '../images/logovtq.png';
import { Formik, Form } from 'formik';
import * as Bootstrap from 'react-bootstrap'
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
import { useDispatch } from 'react-redux';
import { Login, saveToken } from '../redux/actionMethodes/User/index'

// let cstErrors;

const DisplayingErrorMessagesSchema = Yup.object().shape({

    name: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    email: Yup.string()
        .required('Required').email(),
    phone: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('Required').matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),

    confirmPassword: Yup.string()
        .required('Required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

// const useStyles = makeStyles({
//     root: {
//         minWidth: 275,
//     },
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)',
//     },
//     title: {
//         fontSize: 14,
//     },
//     pos: {
//         marginBottom: 12,
//     },
// });
const Signup= () => {
    // const classes = useStyles();
    const dispatch = useDispatch();
    const postCat = async (datapost) => {
        const { data, status } = await repository.register(datapost).then(x => x).then(x => x)

        console.log(data, status)
        if (data && data.status === 200 && data.success === true) {
            if (data.response.user) {
                dispatch(Login(data.response.user));
                dispatch(saveToken(data.response.user.token));
            }

        }
        else {

        }

    }

    return <div>
        <img src={TCorner} className="topCorner-img" alt='img' />
        <img src={BCorner} className="btCorner-img" alt='img' />
        <div className="center-element">
            <img src={logo} className="mb-4" alt='img' />
            <Card className="px-md-5 px-2 pb-2 pt-3 txt-algn-lft">
                <Formik
                    initialValues={{
                        name: '',
                        username: '',
                        email: '',
                        phone: '',
                        password: '',
                        confirmPassword:'',
                        role:1
                    }}
                    validationSchema={DisplayingErrorMessagesSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        await postCat(values)
                    }}
                >
                    {({ errors, touched, getFieldProps }) => {
                        // cstErrors = errors;

                        return (
                            <Form>

                                <Heading5 classes="headlogin" title="Create New Account" />

                                <div className="row mt-5">
                                    <div className="col-md-6">
                                        <Heading5 classes="headloginsub" title="Name" />
                                        <input {...getFieldProps("name")} className="form-control" />
                                        {touched.name && errors.name && <div style={{ color: 'red', marginTop: 10,maxWidth:320 }}>{errors.name}</div>}

                                    </div>
                                    <div className="col-md-6">
                                        <Heading5 classes="headloginsub" title="User Name" />
                                        <input {...getFieldProps("username")} className="form-control" />
                                        {touched.username && errors.username && <div style={{ color: 'red', marginTop: 10,maxWidth:320 }}>{errors.username}</div>}

                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-6">
                                        <Heading5 classes="headloginsub" title="Email For Receiving Updates" />
                                        <input {...getFieldProps("email")} className="form-control" />
                                        {touched.email && errors.email && <div style={{ color: 'red', marginTop: 10,maxWidth:320 }}>{errors.email}</div>}

                                    </div>
                                    <div className="col-md-6">
                                        <Heading5 classes="headloginsub" title="Contact Number" />
                                        <input className="form-control" {...getFieldProps("phone")} />
                                        {touched.phone && errors.phone && <div style={{ color: 'red', marginTop: 10,maxWidth:320 }}>{errors.phone}</div>}

                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-6">
                                        <Heading5 classes="headloginsub" title="Password" />
                                        <input {...getFieldProps("password")} className="form-control" />
                                        {touched.password && errors.password && <div style={{ color: 'red', marginTop: 10,maxWidth:320 }}>{errors.password}</div>}

                                    </div>
                                    <div className="col-md-6">
                                        <Heading5 classes="headloginsub" title="Confirm Password" />
                                        <input {...getFieldProps("confirmPassword")} className="form-control" />
                                        {touched.confirmPassword && errors.confirmPassword && <div style={{ color: 'red', marginTop: 10,maxWidth:320 }}>{errors.confirmPassword}</div>}

                                    </div>
                                </div>
                               

                                <Bootstrap.Form.Group controlId="formBasicCheckbox">
                                    <Bootstrap.Form.Check type="checkbox" className="mt-2 color-prmry2" label="I agree to the term & conditions of VietQ" />
                                </Bootstrap.Form.Group>
                                <button className="btn btn-info themeBackgroundColor listingbtn w-100">Sign in</button>
                                <p className="color-prmry2 pt-1 txt-algn-center">Or</p>
                                <div className="dsp-flex dsp-justify-space-center">
                                    <FaFacebook color="#3c5a9a" size="30" className="mr-1" />
                                    <AiFillInstagram color="#d82c7e" size="30" className="mr-1" />
                                    <AiFillTwitterCircle color="#1ea1f1" size="30" />
                                </div>
                                <p className="pt-1 txt-algn-center"><span className="color-prmry2 ">Dont have an account?</span><span className="color-prmry4 h5">Create a New One</span></p>

                            </Form>
                        )

                    }}
                </Formik>

            </Card>
        </div>

    </div>
}
export default Signup;