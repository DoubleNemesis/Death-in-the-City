import PageContainer from '../containers/PageContainer'
import Title from '../components/Title'
import MainContainer from '../containers/MainContainer'
import SubTitle from '../components/SubTitle'
import Button from '../components/Button'
import styled from 'styled-components'
import { history, useHistory } from 'react-router-dom'


const BoardOuter = styled.div`
display: flex;
width: 100%;
height: 100%;
padding: 1em;
justify-content: space-around;
@media(max-width: 900px){
    flex-direction: column;
    align-items: center;
    gap: 1em;
}

`


const IdeasBoardItem = styled.div`
transform: rotate(354deg);
padding: .5em .5em;
text-align: center;
p{
    font-size: .8rem;
font-family: cursive;


margin: 0;
padding: .2em;
}

img{
    max-width: 90px;
    border: 1px solid #999;
    box-shadow: 2px 2px 1px #999;
    margin-top: .2em;
}
`
const PostIt = styled.div`
background-color: pink;
padding: .4em;
`

function IdeasBoard() {

    let history = useHistory()

    function handleClick(e) {
        const destinationPage = e.target.id
        history.push(destinationPage)
    }

    return (
        <>
            <div className="title">
                <Title>Office</Title>
            </div>
            <MainContainer>
                <PageContainer>
                    <BoardOuter>
                    <IdeasBoardItem>
                        <PostIt>
                        <p>The Victim</p>
                        <p>Lexington Grey</p>
                        </PostIt>
                        <img src="https://images.unsplash.com/photo-1614331589242-a02c24b5f564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=318&q=80"/>
                    </IdeasBoardItem>
                    <IdeasBoardItem>
                        <PostIt>
                        <p>The Victim</p>
                        <p>Lexington Grey</p>
                        </PostIt>
                        <img src="https://images.unsplash.com/photo-1614331589242-a02c24b5f564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=318&q=80"/>
                    </IdeasBoardItem>
                    <IdeasBoardItem>
                        <PostIt>
                        <p>The Victim</p>
                        <p>Lexington Grey</p>
                        </PostIt>
                        <img src="https://images.unsplash.com/photo-1614331589242-a02c24b5f564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=318&q=80"/>
                    </IdeasBoardItem>
</BoardOuter>

                </PageContainer>
            </MainContainer>
        </>

    )
}

export default IdeasBoard