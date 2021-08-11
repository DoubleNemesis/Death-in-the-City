import FooterContainer from '../containers/FooterContainer'
import { history, useHistory, Link, HashRouter as Router } from 'react-router-dom'

function Footer() {
    let date = new Date()
    let year = date.getFullYear()
    return (
        <>
            <FooterContainer>
                <Router>
                <Link to="/" >Home</Link>
                <a href="https://tomsclassroom.com/port/#/" >Contact/About Me</a>
                <Link to="/credits" >Credits</Link>
                <Link to="/" >Copyright &#160;{year}</Link>
                </Router>

            </FooterContainer>
        </>
    )
}

export default Footer