import { useEffect, useState } from "react";
import { AnalogClock } from "./components/AnalogClock";
import { PageContainer } from "../exercise4/styles";
import ClockPointer from "./components/ClockPointer";
import { DigitalClock } from "./components/DigitalClock";

  

export default function Relogio() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000);
    }, [])

    const hourAngle = date.getHours() % 12 /12 * 360;
    const minuteAngle = date.getMinutes() / 60 * 360;
    const secondAngle = date.getSeconds() / 60 * 360;
    

    return (
        <>
            <PageContainer>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}>
                    <AnalogClock>
                        <ClockPointer angle={hourAngle} width={100} heigth={6} color="black"/>
                        <ClockPointer angle={minuteAngle} width={135} heigth={5} color="black"/>
                        <ClockPointer angle={secondAngle} width={165} heigth={2} color="red" />
                    </AnalogClock>
                    <DigitalClock time={date}></DigitalClock>
                </div>
            </PageContainer>
        </>
    )
}