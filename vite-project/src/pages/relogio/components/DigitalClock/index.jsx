/* eslint-disable react/prop-types */
import { Screen, Border } from "./styles"
import './styles.css'

export const DigitalClock = ({time}) => {

    return(
        <>
            <Border>
                <Screen>
                    {time.toLocaleTimeString()}
                </Screen>
            </Border>
        </>
    )
}