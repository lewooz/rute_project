import styled from "styled-components"
import { Animated } from "react-animated-css"
import { FC } from "react"

const MainDiv = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
`

interface AnimatedCrossfadeProps {
    showFirstComponent: boolean
    components: Array<JSX.Element>
    animationTime?: number
}

const AnimatedCrossFade: FC<AnimatedCrossfadeProps> = (props) => {
    return (
        <>
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={props.animationTime ?? 500} isVisible={props.showFirstComponent} animateOnMount={false}>
                <MainDiv>
                    {props.components[0]}
                </MainDiv>
            </Animated>
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={props.animationTime ?? 500} isVisible={!props.showFirstComponent} animateOnMount={false}>
                <MainDiv>
                    {props.components[1]}
                </MainDiv>
            </Animated>
        </>
    )

}

export default AnimatedCrossFade