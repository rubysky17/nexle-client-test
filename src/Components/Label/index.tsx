import { ReactElement } from "react";

import { Label } from "reactstrap"

type IProps = {
    children: ReactElement | string
    isRequired?: boolean
    highFeature?: ReactElement | any
    className?: string | any
}
export const HLabel: React.FC<IProps> = (props: IProps) => {
    const { children, isRequired = false, highFeature, className } = props;

    return <Label
        style={{
            fontSize: "12px"
        }}
        className={`${className} mb-1 d-flex justify-content-between`}
    >
        <span>
            {children}

            {isRequired && <span className='text-danger'>*</span>}
        </span>

        {highFeature && highFeature()}
    </Label>
}