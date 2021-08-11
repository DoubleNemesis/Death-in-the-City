import styled from 'styled-components'



export const Form = styled.form`
font-family: 'Poppins';
/* margin: 0 auto; */
/* border: 1px solid red; */
max-width: 90%;
font-size: 1rem;

textarea{
    width: 100%;
}

select{
    width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
}

@media(min-width:1025px){

    background-color: white;
    padding: 1em;
    textarea{
    max-width: 80%;
}

select{
    max-width: 80%;
}

}

`