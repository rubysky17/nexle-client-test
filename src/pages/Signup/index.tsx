/* eslint-disable no-useless-escape */
// ! Hooks
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

// ! Components
import { Button, Toast, ToastHeader } from 'reactstrap';
import { HLabel } from 'Components/Label';
import { HInput } from 'Components/Input';
import HCheckbox from 'Components/Checkbox';
import HDivider from 'Components/Divider';
import SocialGroup from 'Components/SocialAuth';

// !! Actions
import { signupCreater, toggleMessagePopupCreater } from '../../redux/actions/auth';


interface IProps {

}

type IDefaultValues = {
    email: string
    password: string
    firstName: string
    lastName: string
    isApprovePolicy: boolean
}

const schema = yup
    .object({
        firstName: yup.string()
            .required("The first name is required"),
        lastName: yup.string()
            .required("The last name is required"),
        email: yup.string()
            .required("The email is required")
            .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "The email is not valid"),
        password: yup.string()
            .required("The password is required")
            .min(6, "The password must be between 6-18 characters")
            .max(18, "The password must be between 6-18 characters")
            .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*()-_+=])[a-zA-Z0-9!@#$%^&*()-_+=]{8,}$/, "The password must contain at least one digit, one special character, and one letter"),
    })
    .required()


export const SignUpPage: React.FC<IProps> = (props: IProps) => {
    const { isLoadingSignup, isShowMessage, errorSignup } = useSelector((state: any) => state.AuthReducer);
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitted },
    } = useForm<IDefaultValues>({
        resolver: yupResolver(schema),
    } as any);

    useEffect(() => {
        if (isShowMessage) {
            // ! Toast auto close after 3 second
            setTimeout(() => {
                console.log("run")
                dispatch(toggleMessagePopupCreater(false))
            }, 3000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isShowMessage])


    const onSubmit: SubmitHandler<IDefaultValues> = (data) => {
        // ! Submit Data With Register Action
        dispatch(signupCreater(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className="text-start d-flex flex-column align-items-center justify-content-center w-100 h-100 px-5">

            <p className='w-100 mb-2 fw-medium'
                style={{
                    fontSize: "18px"
                }}>
                Adventure starts here
            </p>

            <p
                className='w-100 mb-4'
                style={{
                    fontSize: "14px"
                }}
            >
                Make your app management easy and fun!
            </p>

            <div className='w-100 text-start'>
                <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) =>
                        <>
                            <HLabel isRequired={true}>First Name</HLabel>
                            <HInput {...field} placeholder="John" />
                            {errors.firstName && <p className='error-message'>{errors.firstName.message}</p>}
                        </>
                    }
                />

                <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) =>
                        <>
                            <HLabel className="mt-3" isRequired={true}>Last Name</HLabel>
                            <HInput {...field} placeholder="Doe" />
                            {errors.lastName && <p className='error-message'>{errors.lastName.message}</p>}
                        </>
                    }
                />

                <Controller
                    name="email"
                    control={control}
                    render={({ field }) =>
                        <>
                            <HLabel className="mt-3" isRequired={true}>Email</HLabel>
                            <HInput {...field} placeholder="johndoe@email.com" />
                            {errors.email && <p className='error-message'>{errors.email.message}</p>}
                        </>
                    }
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field }) =>
                        <>
                            <HLabel className="mt-3" isRequired={true}>Password</HLabel>
                            <HInput className="mb-3" {...field} type='password' />
                            {errors.password && <p className='error-message'>{errors.password.message}</p>}
                        </>
                    }
                />

                <Controller
                    name="isApprovePolicy"
                    control={control}
                    render={({ field }) =>
                        <>
                            <HCheckbox label={<span>i agree to <span style={{
                                color: "#7367F0"
                            }} role="button" >privacy policy & terms</span></span>} />

                            {errors.isApprovePolicy && <p className='error-message'>{errors.isApprovePolicy.message}</p>}
                        </>
                    }
                />

                <Button
                    style={{
                        background: "#7367F0",
                        padding: "10px 0",
                        fontWeight: 500
                    }}
                    block
                    disabled={isLoadingSignup || (isSubmitted && !isValid)}
                >
                    Sign Up
                </Button>

                <Toast
                    fade
                    className='w-100 mt-3'
                    isOpen={isShowMessage}
                >
                    <ToastHeader icon={errorSignup?.length ? "error" : "success"}>
                        {errorSignup?.length ? errorSignup : "Create Account Successfully!"}
                    </ToastHeader>
                </Toast>

                <p
                    className='text-center w-100 mt-3'
                    style={{
                        fontSize: "14px",
                        color: "#6E6B7B"
                    }}
                >
                    Already have an account?
                    {` `}
                    <span style={{
                        color: "#7367F0"
                    }} role="button" onClick={() => {
                        navigate("/sign-in")
                    }}>
                        Sign in instead
                    </span>
                </p>

                <HDivider text="or" className="mt-3" />
                <SocialGroup />
            </div>
        </form>
    )
}