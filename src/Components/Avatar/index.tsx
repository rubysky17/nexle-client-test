import { useState } from "react";

import { Popover, PopoverBody } from "reactstrap";
import AvatarImg from "../../assets/images/avatar.png";

function HAvatar(props) {
    const { name, status, action } = props;
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" role="button">
                <div className="me-3">
                    <p className="m-0" style={{
                        fontSize: "14px",
                        color: '#6E6B7B'
                    }}>{name}</p>
                    <p className="m-0" style={{
                        fontSize: "12px",
                        color: '#B9B9C3'
                    }}>{status}</p>
                </div>

                <img src={AvatarImg} alt="avatar-user" id="avatar"
                    onClick={() => {
                        setIsVisible(!isVisible)
                    }} />
            </div>

            <Popover
                isOpen={isVisible}
                placement="bottom"
                flip
                target="avatar"
            >
                <PopoverBody >
                    <div className="d-flex justify-content-center align-items-center" role="button" onClick={() => {
                        action && action()
                    }}>
                        <span className="me-2" style={{
                            fontSize: "14px",
                            color: "#6E6B7B"
                        }}>Logout</span>
                        <span>{svgLogout}</span>
                    </div>
                </PopoverBody>
            </Popover>
        </>
    )
}

export default HAvatar;

const svgLogout = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.6704 7.99996C8.6704 8.39996 8.40423 8.66663 8.00498 8.66663C7.60573 8.66663 7.33957 8.39996 7.33957 7.99996V1.33329C7.33957 0.933293 7.60573 0.666626 8.00498 0.666626C8.40423 0.666626 8.6704 0.933293 8.6704 1.33329V7.99996ZM8.00477 15.3333C9.73485 15.3333 11.3984 14.6666 12.7292 13.4C15.3243 10.8 15.3243 6.53329 12.6627 3.93329C12.3965 3.66662 11.9973 3.66662 11.7311 3.93329C11.4649 4.19996 11.4649 4.59996 11.7311 4.86662C13.7939 6.93329 13.7939 10.3333 11.7311 12.4C9.66831 14.4666 6.27469 14.4666 4.2119 12.4C2.14912 10.3333 2.14912 6.93329 4.2119 4.86662C4.47807 4.59996 4.47807 4.19996 4.2119 3.93329C3.94574 3.66662 3.54649 3.66662 3.28032 3.93329C0.685205 6.53329 0.685205 10.8 3.28032 13.4C4.61115 14.6666 6.27469 15.3333 8.00477 15.3333Z" fill="black" />
    <mask id="mask0_13_3996" maskUnits="userSpaceOnUse" x="1" y="0" width="14" height="16">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.6704 7.99996C8.6704 8.39996 8.40423 8.66663 8.00498 8.66663C7.60573 8.66663 7.33957 8.39996 7.33957 7.99996V1.33329C7.33957 0.933293 7.60573 0.666626 8.00498 0.666626C8.40423 0.666626 8.6704 0.933293 8.6704 1.33329V7.99996ZM8.00477 15.3333C9.73485 15.3333 11.3984 14.6666 12.7292 13.4C15.3243 10.8 15.3243 6.53329 12.6627 3.93329C12.3965 3.66662 11.9973 3.66662 11.7311 3.93329C11.4649 4.19996 11.4649 4.59996 11.7311 4.86662C13.7939 6.93329 13.7939 10.3333 11.7311 12.4C9.66831 14.4666 6.27469 14.4666 4.2119 12.4C2.14912 10.3333 2.14912 6.93329 4.2119 4.86662C4.47807 4.59996 4.47807 4.19996 4.2119 3.93329C3.94574 3.66662 3.54649 3.66662 3.28032 3.93329C0.685205 6.53329 0.685205 10.8 3.28032 13.4C4.61115 14.6666 6.27469 15.3333 8.00477 15.3333Z" fill="white" />
    </mask>
    <g mask="url(#mask0_13_3996)">
        <rect width="16" height="16" fill="#6E6B7B" />
    </g>
</svg>