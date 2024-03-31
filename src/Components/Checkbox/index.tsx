import { FormGroup, Input, Label } from 'reactstrap'

function HCheckbox(props: any) {
    const { label } = props;

    return (
        <FormGroup
            check
            inline
            className={`${props.className}`}
        >
            <Input {...props} type='checkbox' />

            <Label type="checkbox" style={{
                color: "#6E6B7B",
                fontSize: "14px"
            }}>
                {label}
            </Label>
        </FormGroup>

    )
}

export default HCheckbox