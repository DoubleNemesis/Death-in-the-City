import FooterContainer from '../containers/FooterContainer'
import { history, useHistory, Link, HashRouter as Router } from 'react-router-dom'

function Footer() {
    let history = useHistory()
    return (
        <>
            <FooterContainer>
                <Router>
                <Link to="/credits" >Credits</Link>
                {/* <Link to="/" >Copyright</Link> */}
                <Link to="/" >Home</Link>
                <a href="https://tomsclassroom.com/port/#/" >Contact/About Me</a>
                </Router>

            </FooterContainer>
        </>
    )
}

export default Footer