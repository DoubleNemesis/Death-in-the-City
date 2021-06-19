import PageContainer from '../containers/PageContainer'
import Title from '../generalComponents/Title'
import NextPageButton from '../generalComponents/NextPageButton'
import { clientData } from '../data/lessonData'

function CrimeScene(){
    const {clientTitle, clientText} = clientData

    return(
        <>
        <Title>{clientTitle}</Title>
            <PageContainer>
                {clientText}
                <NextPageButton destination="office">Go to office</NextPageButton>
                In your office you will find three things:
                <ul>
                    <li>a map - you can use this to navigate the city</li>
                    <li>an ideas board - you can see the suspects you have spoken to and arrange your ideas</li>
                    <li>A notebook - you can view your notes and get other ideas and suggestions</li>
                    </ul>
            </PageContainer>
        </>
    )
}

export default CrimeScene