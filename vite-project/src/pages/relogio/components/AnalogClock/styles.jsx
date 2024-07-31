import styled from "styled-components";

export const ClockBody = styled.div`
    border-radius: 50%;
    width: 400px;
    aspect-ratio: 1 / 1;
    background-color: white;
    border: 2px solid brown;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: url("/clock.svg");
    position: relative;
`

export const ClockCircle = styled.div`
    border-radius: 50%;
    width: 15px;
    background-color: black;
    aspect-ratio: 1 / 1;
    border: 1px solid black;
    position: absolute;
    margin: auto auto;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    z-index: 0;
`