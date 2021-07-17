import { useState } from 'react'
import PageContainer from '../containers/PageContainer'
import Title from '../generalComponents/Title'
import NextPageButton from '../generalComponents/NextPageButton'
import * as lessonData from '../data/lessonData'



function EndPage() {

    const [chosenOption, setChosenOption] = useState('default')
    const [textInputText, setTextInputText] = useState('')
    const [suspectIsCorrect, setSuspectIsCorrect] = useState(false)
    const [reasonIsCorrect, setReasonIsCorrect] = useState(false)
    const { characterNames } = lessonData['characterNames'];

    function handleSelectInput(e) {
        setChosenOption(e.target.value)
    }
    function handleTextInput(e) {
        setTextInputText(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        const splitInput = textInputText.toLowerCase().split(' ')
        console.log(splitInput);
        if (chosenOption === characterNames[3]) {
            setSuspectIsCorrect(true)
        }
        if (splitInput.indexOf('mother') > -1 || splitInput.indexOf('mum') > -1) {
            if (splitInput.indexOf('corona') > -1 || splitInput.indexOf('covid') > -1) {
                setReasonIsCorrect(true)
            }
            console.log('success');
        }
    }

    console.log(suspectIsCorrect);
    console.log(reasonIsCorrect);


    return (
        <>
            <PageContainer>
                <form>
                    <select value={chosenOption} onChange={handleSelectInput}>
                        <option disabled selected value="default"> -- select a suspect -- </option>
                        <option value={characterNames[1]}>{characterNames[1]}</option>
                        <option value={characterNames[2]}>{characterNames[2]}</option>
                        <option value={characterNames[3]}>{characterNames[3]}</option>
                        <option value={characterNames[4]}>{characterNames[4]}</option>
                        <option value={characterNames[5]}>{characterNames[5]}</option>
                    </select>
                    <textarea onChange={handleTextInput} name="textInput" value={textInputText} />
                    <button onClick={handleSubmit}></button>
                </form>
                {suspectIsCorrect && reasonIsCorrect ? <p>You did it!</p> : 
                suspectIsCorrect && !reasonIsCorrect ? <p>Right person wrong reason!</p> :  
                !suspectIsCorrect && reasonIsCorrect ? <p>Wrong person right reason!</p> :  
                <p>Completely Wrong</p>
                }


            </PageContainer>
        </>
    )
}

export default EndPage