import { Input } from "reactstrap"
import "./style.css"

export const HInput: React.FC<any> = (props: any) => {
    return <Input {...props} className={`${props.className} bs-input-custom`} />
}