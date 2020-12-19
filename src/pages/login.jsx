import React from 'react';
import Heading5 from '../components/home/heading5'
import TCorner from '../images/app/lfcr.png'
import BCorner from '../images/app/btcr.png';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import logo from '../images/logovtq.png';
import { Formik, Form, Field } from 'formik';
import * as Bootstrap from 'react-bootstrap'
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
import { useSelector, useDispatch } from 'react-redux';
import { Login, saveToken } from '../redux/actionMethodes/User/index'

let cstErrors;

const DisplayingErrorMessagesSchema = Yup.object().shape({

    password: Yup.string()
        .required('Required'),
        //.matches(
        //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        // ),
        username: Yup.string()
        .required('Required'),
});

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
export default () => {
    const classes = useStyles();
    const dispatch=useDispatch();
    const postCat =async (datapost) => {
        const { data, status } = await repository.login(datapost).then(x => x).then(x => x)
    
        console.log(data, status)
        if (data && data.status == 200 && data.success == true) {
            if (data.response.user) {
                dispatch(Login(data.response.user));
                dispatch(saveToken(data.response.user.token));
            }
     
        }
        else {
    
        }
    
    }
    
return <div>
        <img src={TCorner} className="topCorner-img" />
        <img src={BCorner} className="btCorner-img" />
        <div className="center-element">
            <img src={logo} className="mb-4" />
            <Card className="px-md-5 px-2 pb-2 pt-3 txt-algn-lft">
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    validationSchema={DisplayingErrorMessagesSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        await postCat(values)
                    }}
                >
                    {({ errors, touched, getFieldProps }) => {
                        cstErrors = errors;

                        return (
                            <Form>

                                <Heading5 classes="headlogin" title="Login" />
                                <Heading5 classes="headloginsub mt-5" title="Username/Email" />
                                <input {...getFieldProps("username")} className="form-control max-width" />
                                {touched.username && errors.username && <div style={{ color: 'red', marginTop: 10 }}>{errors.password}</div>}

                                <div className="dsp-flex dsp-justify-space-btw mt-3 ">
                                    <Heading5 classes="headloginsub" title="Password" />
                                    <Heading5 classes="headloginsub color-prmry4" title="Forget Password?" />
                                </div>
                                <input  {...getFieldProps("password")} className="form-control max-width" />
                                {touched.password && errors.password && <div style={{ color: 'red', marginTop: 10,maxWidth:320 }}>{errors.password}</div>}

                                <Bootstrap.Form.Group controlId="formBasicCheckbox">
                                    <Bootstrap.Form.Check type="checkbox" className="mt-2 color-prmry2" label="Keep me signed in" />
                                </Bootstrap.Form.Group>
                                <button type="submit" className="btn btn-info themeBackgroundColor listingbtn w-100">Sign in</button>
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