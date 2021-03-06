import React from 'react';
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return <Wrap bgImage={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>

        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Fade>
        </Buttons>
    </Wrap>;
}

export default Section;

const Wrap = styled.div`
width: 100vw;
height: 100vh;
// background-image: url('/images/model-s.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: ${props => `url("/images/${props.bgImage}")`};
@media(max-width: 768px) {
    height: 60vh;
}
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
 
>p{
    padding: 10px;
}

@media(max-width: 768px) {
    padding-top: 8vh;
    >h1{
        font-size: 20px;
        color: black;
    }
}
`

const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;
@media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: -25px;
}
`
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 30px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 5px;
@media(max-width: 768px) {
    opacity: 1;
    width: 300px;
}
`
const RightButton = styled(LeftButton)`
background: white;
color: black;
opacity: 0.6;
@media(max-width: 768px) {
    opacity: 1;
}
`

const DownArrow = styled.img`
margin-top: 20px;
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`
text-align: center;
`