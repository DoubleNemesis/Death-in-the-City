import { useState, useContext, useEffect } from 'react'
import PageContainer from '../../../containers/PageContainer'
import Title from '../../../generalComponents/Title'
import { history, useHistory } from 'react-router-dom'
import { SpeechBubbleLeft } from '../../witness/witnessComponents/Questions'
import { Instructions, Conversation, WitnessImage, TaskBox, InfoBox } from '../../witness/witnessComponents/Layout'
import ProfilePic from '../../../images/janitor.png'
import { orderEventsData } from '../../../data/lessonData'
import { EventsContainer, ParagraphContainer } from './orderEventsComponents/OrderEventsComponents'
import MoveableEvents from './MoveableEvents'


function OrderEvents() {
    const {orderEventsText} = orderEventsData
    return (
        <>

                <Conversation>
 
                <ParagraphContainer>
                    {orderEventsText}
                </ParagraphContainer>

                    <EventsContainer>
                    <MoveableEvents />
                    </EventsContainer>
                </Conversation>
 

        </>

    )
}

export default OrderEvents