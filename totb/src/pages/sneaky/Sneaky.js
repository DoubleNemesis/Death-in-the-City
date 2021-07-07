import styled, {keyframes} from 'styled-components'
import bin from '../../images/bin.png'
import binlid from '../../images/binlid.png'
import PageContainer from '../../containers/PageContainer'
import Title from '../../generalComponents/Title'
import NextPageButton from '../../generalComponents/NextPageButton'
import { clientData } from '../../data/lessonData'


const openBinLid = keyframes`
0% { top: -44px; left: 0px; }
100% { top: -450px; left: -80px; }

`
const rotateBin = keyframes`
from { transform: rotateZ(0deg); }
to { transform: rotateZ(90deg); }
`

const StyledBin = styled.div`
width: 200px;
min-width: 200px;
height: 240px;
min-height: 240px;
background-image: url(${bin});
background-size: contain;
background-repeat: no-repeat;

@media(min-width: 1000px){
    animation: ${rotateBin} 2s;
animation-delay: 2s;
animation-fill-mode: forwards;
}


-webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
transform-origin: bottom right;
`

const StyledBinLid = styled.div`
top: -44px;
left: 0px;
position: absolute;
width: 200px;
min-width: 200px;
height: 50px;
min-height: 50px;
background-image: url(${binlid});
background-size: contain;
background-repeat: no-repeat;
animation: ${openBinLid} 4s;
animation-delay: 2s;
transform-origin: left;
animation-fill-mode: forwards;
-webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
`

const StyledBinContainer = styled.div`
position: relative;
margin: 30vh auto;
display: flex;
flex-direction: column;
align-items: center;
`

function Sneaky(props){
    // const {clientTitle, clientText} = clientData
    // <NextPageButton destination={props.destination}>Go to office</NextPageButton>

    return(
        <>
            <PageContainer>
            <StyledBinContainer>
            <StyledBinLid/>

            <StyledBin/>
            </StyledBinContainer>
            </PageContainer>
        </>
    )
}

export default Sneaky