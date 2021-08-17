import styled from 'styled-components'

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
border-radius: .3em;
background-color: whitesmoke; 
color: black;
font-size: 1rem;
margin: 1em 0;
padding: 2em;

p{
    font-weight: 700;
    font-size: 1.3rem;
}

@media(max-width:900px){
    margin-top: 1em;
    width: 100%;
    min-height: unset;
    flex-direction: column;
    border-radius: unset;
    border: unset;
}
@media(min-width:1025px){
    border: unset;
    margin-top: 0;

}

`



function Credits() {


    return (
        <StyledContainer>
            <h1>Credits</h1>
            <p>With great thanks to the following people who are kind enough to allow their work to be used in projects like this!</p>
            <div>
                lexi Photo by <a href="https://unsplash.com/@nathanmortn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">nate</a> on <a href="https://unsplash.com/s/photos/man?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                skyscraper Photo by <a href="https://unsplash.com/@jtylernix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tyler Nix</a> on <a href="https://unsplash.com/s/photos/skyscraper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                crimescene Photo by <a href="https://unsplash.com/@visuals_by_campbell?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Campbell Jensen</a> on <a href="https://unsplash.com/s/photos/crime-scene?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                chay house Photo by <a href="https://unsplash.com/@sinzianasusa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sinziana Susa</a> on <a href="https://unsplash.com/s/photos/urban-house?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                dallas house Photo by <a href="https://unsplash.com/@webaliser?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ярослав Алексеенко</a> on <a href="https://unsplash.com/s/photos/house?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                tonyyard Photo by <a href="https://unsplash.com/@jtylernix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tyler Nix</a> on <a href="https://unsplash.com/s/photos/skyscraper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                house 5Photo by <a href="https://unsplash.com/@scottwebb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Scott Webb</a> on <a href="https://unsplash.com/s/photos/house?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                brick Photo by <a href="https://unsplash.com/@neonbrand?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NeONBRAND</a> on <a href="https://unsplash.com/s/photos/brick?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                woodbg codebox Photo by <a href="https://unsplash.com/@adijoshi11?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aditya Joshi</a> on <a href="https://unsplash.com/s/photos/wood-texture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                wallbg codebox Photo by <a href="https://unsplash.com/@enginakyurt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">engin akyurt</a> on <a href="https://unsplash.com/s/photos/brick-texture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                wendyYard Photo by <a href="https://unsplash.com/@greg_nunes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Greg & Lois Nunes</a> on <a href="https://unsplash.com/s/photos/yard?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                lucy yard Photo by <a href="https://unsplash.com/@dakotalim?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dakota Lim</a> on <a href="https://unsplash.com/s/photos/yard?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                Photo by <a href="https://unsplash.com/@feiffert?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Frank Eiffert</a> on <a href="https://unsplash.com/s/photos/yard?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                kersten yard Photo <a href="https://unsplash.com/@dougvos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Doug Vos</a> on <a href="https://unsplash.com/s/photos/yard?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                bodybuilder Photo by <a href="https://unsplash.com/@johnarano?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">John Arano</a> on <a href="https://unsplash.com/s/photos/weight-lifting?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
            secret code Symbols by <a href="https://imgur.com/HqBBy">HqBBy</a> on <a href="https://imgur.com">imgur</a>
            </div>
            <div>
                door sign <a href='https://www.freepik.com/vectors/work'>Work vector created by freepik - www.freepik.com</a>
            </div>
            <div>
                scroll <a href="https://www.freepik.com/vectors/ribbon">Ribbon vector created by upklyak - www.freepik.com</a>
            </div>
            <div>
                window view Photo by <a href="https://unsplash.com/@jannerboy62?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Fewings</a> on <a href="https://unsplash.com/s/photos/view-from-window?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                kitehcn Photo by <a href="https://unsplash.com/@sidekix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sidekix Media</a> on <a href="https://unsplash.com/s/photos/kitchen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                chay yard Photo by <a href="https://unsplash.com/@dlrmco?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniel Thiele</a> on <a href="https://unsplash.com/s/photos/brickwall?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                bin by <a href="https://www.freevector.com/metal-trash-bins#">FreeVector.com</a>
            </div>
            <div>
                mr grey Photo by <a href="https://unsplash.com/@samanta1225?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Samanta Barba Alcalá</a> on <a href="https://unsplash.com/s/photos/older-man?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                kirsten Photo by <a href="https://unsplash.com/@merittthomas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Meritt Thomas</a> on <a href="https://unsplash.com/s/photos/woman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                dallas Photo by <a href="https://unsplash.com/@julianwan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Julian Wan</a> on <a href="https://unsplash.com/s/photos/man?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                floe Photo by <a href="https://unsplash.com/@matheusferrero?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Matheus Ferrero</a> on <a href="https://unsplash.com/s/photos/woman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <div>
                wendy Photo by <a href="https://unsplash.com/@princearkman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Prince Akachi</a> on <a href="https://unsplash.com/s/photos/woman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
        </StyledContainer>
    )
}

export default Credits