import { FC } from 'react'

import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div<{ color: string, size: string, borderWidth: string }>`
width: ${props => props.size}px;
height: ${props => props.size}px;
position: relative;
::before{
    content: '';
    position: absolute;
    right:0;
    left:0;
    top: 0;
    bottom: 0;
    margin-top: -10px;
}
:not(:required):before {
    content: '';
    border-radius: 50%;
    border-top: ${props => props.borderWidth}px solid ${props => props.color};
    border-right: ${props => props.borderWidth}px solid transparent;
    animation: ${spinner} .6s linear infinite;
    -webkit-animation: ${spinner} .6s linear infinite;
  }
`

interface ProgressProps {
    size: number
    color: string
}

const ProgressIndicator: FC<ProgressProps> = (props) => {

    return (
        <Spinner
            color={props.color}
            size={props.size.toString()}
            borderWidth={(props.size / 35).toString()}
        />
    )
}

export default ProgressIndicator
