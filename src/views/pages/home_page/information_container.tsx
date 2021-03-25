import styled from "styled-components"
import AppColors from "../../../utils/color"
import SizedBox from "../../components/sizedbox"

const MainDiv = styled.div`
width: 100%;
padding: 5vh 0;
background-color: rgb(247,247,247);
display: flex;
justify-content: center;
align-items: center;
`
const CenterDiv = styled.div`
max-width: 70%;
display: flex;
flex-direction: column;
`
const HeaderText = styled.text`
letter-spacing: 0.1em;
text-transform: uppercase;
font-size: 3rem;
background: linear-gradient(#fac66a 0%, #d6436c 29.9%, #9a529b 72.99%, #5b6cb2 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family: var(--header-font);
font-weight: 700;
`
const ContentText = styled.text`
font-weight: 400;
font-size: 1.1rem;
color: #5B6CB2;
margin: 20px 0px 30px;
`
const ButtonsContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const OutlinedButton = styled.div`
border: 1px solid ${AppColors.SUCCESS};
display: flex;
justify-content: center;
align-items: center;
font-weight: 600;
font-size: 1.1rem;
color:${AppColors.SUCCESS};
border-radius: 1.875rem;
padding: 10px 20px;
background-color: transparent;
cursor: pointer;
transition: all 0.5s;
:hover{
    color: ${AppColors.WHITE};
    background-color: ${AppColors.SUCCESS};
}
`
const TextButton = styled.text`
font-weight: 600;
font-size: 1.1rem;
color:${AppColors.SUCCESS};
margin-left: 20px;
cursor: pointer;
`

const InformationContainer = () => {
    return (
        <MainDiv>
            <CenterDiv>
                <HeaderText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </HeaderText>
                <ContentText>
                    Non odio euismod lacinia at quis risus sed vulputate odio. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Consectetur libero id faucibus nisl tincidunt eget. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Sed egestas egestas fringilla phasellus faucibus scelerisque. Tellus rutrum tellus pellentesque eu tincidunt.
                </ContentText>
                <SizedBox
                    height={"30px"}
                />
                <ButtonsContainer>
                    <OutlinedButton>
                        Button One
                    </OutlinedButton>
                    <TextButton>
                        Viverra suspendisse
                    </TextButton>
                </ButtonsContainer>
            </CenterDiv>
        </MainDiv>
    )
}

export default InformationContainer