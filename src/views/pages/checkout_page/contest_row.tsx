import { FC } from "react"
import styled from "styled-components"
import ContestModel from "../../../models/contest_model"
import AppColors from "../../../utils/color"
import { MdClose } from "react-icons/md";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../hooks/use_stores";

const ImageDiv = styled.div`
width: 100%;
height: 200px;
padding-left: 1.5rem;
display: flex;
align-items: center;
justify-content: center;
position: relative;
`
const ContestImage = styled.img`
width: 100%;
object-fit: contain;
`
const DescriptionDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`
const ContestName = styled.div`
font: ${props => props.theme.subtitle2};
color: ${AppColors.GREY70};
`
const ContestDescription = styled.div`
font: ${props => props.theme.body2};
color: ${AppColors.GREY70};
margin-top: 15px;
`
const ContestPrice = styled.div`
font: ${props => props.theme.body2};
color: ${AppColors.GREY70};
margin-top: 15px;
text-align: end;
padding-right: 1.5rem;
`
const Divider = styled.div`
height: 1px;
grid-column: 1 / span 3;
background-color: ${AppColors.GREY40};
`
const RemoveContestDiv = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: rgba(0,0,0,0.1);
position: absolute;
top: 10px;
left: 10px;
display: flex;
justify-content: center;
align-items: center;
z-index: 1;
cursor: pointer;
transition: background-color 0.5s;
:hover{
    background: ${AppColors.ALERT};
}
:hover svg{
    color:${AppColors.WHITE};
}
`
const StyledCloseIcon = styled(MdClose)`
color:${AppColors.GREY70};
transition: color 0.5s;
`

interface ContestRowProps {
    contestModel: ContestModel
}

const ContestRow: FC<ContestRowProps> = observer((props) => {
    const { applicationFormStore } = useStores()

    const removeAppliedContest = () => {
        applicationFormStore.removeAppliedContest(props.contestModel.contestId)
    }

    return (
        <>
            <ImageDiv>
                <ContestImage src={props.contestModel.contestImage} />
                <RemoveContestDiv
                    onClick={removeAppliedContest}
                >
                    <StyledCloseIcon
                        size={18}
                    />
                </RemoveContestDiv>
            </ImageDiv>
            <DescriptionDiv>
                <ContestName>
                    {props.contestModel.contestName}
                </ContestName>
                <ContestDescription>
                    {props.contestModel.contestDescription}
                </ContestDescription>
            </DescriptionDiv>
            <ContestPrice>
                {props.contestModel.contestEntryPrice}₺
            </ContestPrice>
            <Divider />
        </>
    )
})

export default ContestRow