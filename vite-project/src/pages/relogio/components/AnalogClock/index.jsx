/* eslint-disable react/prop-types */
import { ClockBody, ClockCircle } from "./styles"

export const AnalogClock = ({children}) => {
    return (
        <ClockBody>
            {children}
            <ClockCircle/>
        </ClockBody>
    )
}