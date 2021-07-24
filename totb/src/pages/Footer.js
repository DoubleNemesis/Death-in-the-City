import FooterContainer from '../containers/FooterContainer'
import { history, useHistory, Link, HashRouter as Router } from 'react-router-dom'

function Footer() {
    let history = useHistory()
    return (
        <>
            <FooterContainer>
                <Router>
                <Link to="/" >Credits</Link>
                <Link to="/" >Copyright</Link>
                <Link to="/" >Home</Link>
                <Link to="/" >Contact/About</Link>
                </Router>

            </FooterContainer>
        </>
    )
}

export default Footer