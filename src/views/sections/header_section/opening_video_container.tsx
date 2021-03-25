import styled, { keyframes } from "styled-components"
import OpeningVideoFile from "../../../assets/mp4/opening.mp4"

const initialAnim = keyframes`
  0% {
    transform: translate(0px,50vh) scale(5);
  }
  100% {
    transform: translate(0px,0px) scale(1);
  }
`

const OpeningVideo = styled.video`
height: 80px;
width: 200px;
transform: translate(0px,50vh) scale(5);
animation: 0.5s ${initialAnim} ease-out 4500ms forwards;
object-fit: cover;
`
const OpeningVideoContainer = () => {
  return (
    <OpeningVideo
      src={OpeningVideoFile}
      autoPlay
      muted
      playsInline
      preload="auto"
      loop={false} />
  )
}

export default OpeningVideoContainer