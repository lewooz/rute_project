import { observer } from "mobx-react-lite"
import { useHistory } from "react-router"
import styled, { keyframes } from "styled-components"
import { useStores } from "../../../hooks/use_stores"
import AppColors from "../../../utils/color"

const FabAnim = keyframes`
from{
    transform: scale(1);
}
to{
    transform: scale(1.1);
}
`

const MainDiv = styled.div<{ display: string }>`
position: fixed;
bottom:2vh;
right: 2vw;
width: 75px;
height: 75px;
background: linear-gradient(#19b2d3 0%, #576de9 34.3%, #8a40f8 70.71%, #9b31fd 100%);
border-radius: 50%;
z-index:2;
display: ${props => props.display};
justify-content: center;
align-items: center;
cursor: pointer;
`
const FabText = styled.div`
position: absolute;
left: 0;
right: 0;
top: 12px;
text-align: center;
font: ${props => props.theme.body1};
font-size: 13.5px;
color: ${AppColors.WHITE};
`
const RelativeDiv = styled.div`
position: relative;
animation: ${FabAnim} 1s ease-in alternate infinite;
`

const PaymentFab = observer(() => {
    const { applicationFormStore } = useStores()
    let history = useHistory()

    const goCheckoutPage = () => {
        history.push("/checkout")
    }

    return (
        <MainDiv
            onClick={goCheckoutPage}
            display={applicationFormStore.appliedContests.length > 0 ? "flex" : "none"}
        >
            <RelativeDiv>
                <svg xmlns="http://www.w3.org/2000/svg" width="41.419" height="53.5" viewBox="0 0 41.419 53.5">
                    <g id="trophy" transform="translate(-8 -1)">
                        <path id="Path_1" d="M47.4,13.944H34.509L30.664,2.407a2.061,2.061,0,0,0-3.909,0L22.91,13.944H10.019a2.018,2.018,0,0,0-1.231,3.619l10.3,7.925L15.944,36.5a1.748,1.748,0,0,0,2.6,1.969L20.8,37.086l1.692,8.785h-5.41l-3.9,4.875V54.5H44.242V50.746l-3.9-4.875h-5.41l1.694-8.785,2.255,1.388a1.749,1.749,0,0,0,2.6-1.97L38.331,25.487l10.3-7.925A2.019,2.019,0,0,0,47.4,13.944ZM22.365,36.119l1.926-1.186,1.687,10.937H24.245ZM20.944,47.6H36.476v.863a.864.864,0,0,1-.863.863H21.806a.864.864,0,0,1-.863-.863Zm6.781-1.726L25.886,33.953l2.823-1.738,2.823,1.737L29.7,45.871Zm14.792,5.48v1.423H14.9V51.351l3-3.754h1.312v.863a2.592,2.592,0,0,0,2.589,2.589H35.613A2.592,2.592,0,0,0,38.2,48.46V47.6h1.312Zm-9.342-5.48H31.442l1.686-10.937,1.926,1.186ZM47.579,16.2,36.348,24.835,39.784,37,28.71,30.189,17.6,36.979l3.47-12.144L9.841,16.2a.294.294,0,0,1,.179-.526H24.154L28.392,2.955a.348.348,0,0,1,.635,0l4.238,12.715H47.4a.294.294,0,0,1,.179.526Z" transform="translate(0 0)" fill="#fff" />
                    </g>
                </svg>
                <FabText>{applicationFormStore.appliedContests.length}</FabText>
            </RelativeDiv>
        </MainDiv>
    )
})

export default PaymentFab