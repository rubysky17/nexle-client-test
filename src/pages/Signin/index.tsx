/* eslint-disable no-useless-escape */
// ! Hooks
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

// ! Components
import { Button } from 'reactstrap';
import { HLabel } from 'Components/Label';
import { HInput } from 'Components/Input';
import HCheckbox from 'Components/Checkbox';
import SocialGroup from 'Components/SocialAuth';
import HDivider from 'Components/Divider';

// ! Actions
import { loginCreater } from '../../redux/actions/auth';

interface IProps {

}

type IDefaultValues = {
    email: string
    password: string
    isRemember: boolean
}
const schema = yup
    .object({
        email: yup.string()
            .required("The email is required")
            .matches(/^(([^<>()\≥≥[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "The email is not valid"),
        password: yup.string()
            .required("The password is required")
            .min(6, "The password must be between 6-18 characters")
            .max(18, "The password must be between 6-18 characters")
            .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*()-_+=])[a-zA-Z0-9!@#$%^&*()-_+=]{8,}$/, "The password must contain at least one digit, one special character, and one letter"),
    })
    .required()

export const SignInPage: React.FC<IProps> = (props: IProps) => {
    const {
        isLoadingLogin,
        user } = useSelector((state: any) => state.AuthReducer);

    const dispatch: any = useDispatch();
    const navigate = useNavigate()
    const { login }: any = useAuth()

    // ! Handle changed login status to true assign for AuthProvider know user is login success through user id
    useEffect(() => {
        if (user.id) {
            login()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user.id])

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IDefaultValues>({
        resolver: yupResolver(schema),
    } as any);


    const onSubmit: SubmitHandler<IDefaultValues> = (data) => {
        // ! Submit Data With Register Action
        dispatch(loginCreater(data))
    }

    const forgotPasswordXML = () => {
        return <span style={{
            color: "#7367F0"
        }} role="button">
            Forgot Password?
        </span>
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className="text-start d-flex flex-column align-items-center justify-content-center w-100 h-100 px-5"
        >
            <p className='w-100 mb-2 fw-medium'
                style={{
                    fontSize: "18px"
                }}>
                Welcome to Entrance Test Interview!
            </p>

            <p
                className='w-100 mb-4'
                style={{
                    fontSize: "14px"
                }}
            >
                Please sign-in to your account and start the adventure
            </p>

            <div className='w-100 text-start'>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) =>
                        <>
                            <HLabel isRequired={true}>Email</HLabel>
                            <HInput {...field} placeholder="johndoe@gmail.com" />
                            {errors.email && <p className='error-message'>{errors.email.message}</p>}
                        </>
                    }
                />

                <Controller
                    name="password"
                    control={control}
                    render={({ field }) =>
                        <>
                            <HLabel className="mt-3" isRequired={true} highFeature={forgotPasswordXML}>Password</HLabel>
                            <HInput className="mb-3"  {...field} type='password' />
                            {errors.password && <p className='error-message'>{errors.password.message}</p>}
                        </>
                    }
                />

                <Controller
                    name="isRemember"
                    control={control}
                    render={({ field }) =>
                        <HCheckbox label={"Remember me"} />

                    }
                />


                <Button
                    style={{
                        background: "#7367F0",
                        padding: "10px 0",
                        fontWeight: 500
                    }}
                    block
                    disabled={isLoadingLogin}
                    className='mt-2'
                >
                    Login
                </Button>


                <p
                    className='text-center w-100 mt-3'
                    style={{
                        fontSize: "14px",
                        color: "#6E6B7B"
                    }}
                >
                    New on our platform?
                    {` `}
                    <span style={{
                        color: "#7367F0"
                    }} role="button" onClick={() => {
                        navigate("/sign-up")
                    }}>
                        Create an account
                    </span>
                </p>

                <HDivider text="or" className="mt-3" />
                <SocialGroup />
            </div>
        </form>
    )
}