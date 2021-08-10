//Home page
import TonyPic from '../images/tonymonceto.png'
import ChayPic from '../images/chaymadz.jpg'
import KirstenPic from '../images/kirsten.jpg'
import DallasPic from '../images/dallas.jpg'
import LucyPic from '../images/floe.jpg'
import WendyPic from '../images/wendy.jpg'
import questionMark from '../images/questionMark.jpg'
import artefactPlaceholder from '../images/artefactPlaceholder.jpg'
import shreddedletterPic from '../images/shreddedletter.png'
import errorcorrectionPic from '../images/errorcorrection.png'
import secretcodePic from '../images/secretcode.png'
import policestatementPic from '../images/policestatement.png'
import medicalreportPic from '../images/medicalreport.png'
import weightlifterPic from '../images/weightlifter.png'
import poisonpenPic from '../images/poison.png'
import receiptPic from '../images/receipt.png'



export const homePageData = {
    homeTitle: [`Death in the City`],
    homeSubtitle: [`Your mission: solve the crime`],
    homeCallToActionText: [`On the 27th of January 2021 at 3:06am the body of 25-year-old actor Lexington Grey was discovered on the sidewalk at the foot of the exclusive Kaplinsky Tower. 
    The police are calling it suicide...
    `],
    homeCallToActionTextBtn: [`Full story on page TWO!`],
    homeCallToActionTextBtn2: [`READY to turn detective?`],
    homePaperAltText: [`Newspaper article describing how Lexington Grey fell from the top of the tower block and how the police think it was suicide and his dad thinks it was murder.`]
}

export const startPageBlurb = {
    teaserText: [`In ${homePageData['homeTitle']} you are the detecive. Interview witnesses, break codes, discover evidence, complete challenges,
    and hopefully bring a killer to justice!`],
    academicText: [`${homePageData['homeTitle']} is a language-based detective game aimed at Intermediate (B1) or higher learners of English. Skills covered include reading, grammar, collocations and prepositions`]
}

//Backstory page
export const backStoryData = {
    backStorySubtitle: [`Here's the backstory`],
    backStoryText: [`I'm Terence Grey. So you think you're ready to turn detective? I hope so, because you've got work to do! 
Lexington Grey wasn't just anyone. That boy was my son, and he was murdered! Don't believe the rubbish the police said. Your job is to find out who killed him. First you need to show me you're capable.
 Get this vocabulary right and then we're in business!`]
}

export const clientData = {
    clientTitle: [`Mr Grey`],
    clientText: [`OK, great! Now I know you speak the lingo, get to work! If you want my advice, the first thing to do is to speak to Tony Monceto. He's the janitor at Kaplinsky Tower and an old friend of mine.
    Good luck! And remember, if you don't solve the crime you don't get paid! `]
}

//character names
export const characterNames = {
    characterNames: [
        'Tony Monceto',
        'Chay Madz',
        'Kirsten Wenstein',
        'Dallas Franks',
        'Lucy Light',
        'Wendy Rose'
    ]
}
export const characterFirstNames = {
    characterFirstNames: [
        'Tony',
        'Chay',
        'Kirsten',
        'Dallas',
        'Lucy',
        'Wendy'
    ]
}

// Vocab Page
export const vocabData = {
    'vocabA': [
        'sidewalk',
        'find out',
        'janitor',
        'delicate',
        'unfaithful',
        'tough',
        'cry',
        'weird',
        'weak',
        'fall',
    ],
    'vocabB': [
        'pavement',
        'discover',
        'caretaker',
        'fragile',
        'adulterous',
        'strong',
        'weep',
        'strange',
        'feeble',
        'plummet',
    ],
    'bubbleText1': [
        `All I want you to do is click on a word and then click on its synonym. When you get a pair right, they will disappear. 
        Don't worry, you will see the full word list again at the end so you can take notes.`
    ],
    'bubbleText2': [
        `Great, you passed the test! Here are the words/synonyms side-by-side if you want to take notes. Now head over to the office and I'll show you what's what.`
    ]
}

//office specific
export const officeBubbleText = `This is your desk. New witnesses, evidence and challenges will appear here as they become available. 
When you are ready to interview a witness, just click on their image and you will be guided to their house. 
`

export const officeCards = {
    'witnesses': [
        {
            'name': [`Tony Monceto`],
            'id': [1],
            'image': [TonyPic],
            'altName': ['Witness'],
            'altImage': [questionMark],
        },
        {
            'name': [`Chay Madz`],
            'id': [2],
            'image': [ChayPic],
            'altName': ['Suspect'],
            'altImage': [questionMark],
        },
        {
            'name': [`Kirsten Stein`],
            'id': [3],
            'image': [KirstenPic],
            'altName': ['Suspect'],
            'altImage': [questionMark],
        },
        {
            'name': [`Dallas Franks`],
            'id': [4],
            'image': [DallasPic],
            'altName': ['Suspect'],
            'altImage': [questionMark],
        },
        {
            'name': [`Lucy Light`],
            'id': [5],
            'image': [LucyPic],
            'altName': ['Suspect'],
            'altImage': [questionMark],
        },
        {
            'name': [`Wendy Rose`],
            'id': [6],
            'image': [WendyPic],
            'altName': ['Suspect'],
            'altImage': [questionMark],
        },
    ],
    'artefacts': [
        {
            'name': [`Shredded Letter challenge`], //bin
            'id': [1],
            'image': shreddedletterPic,
            'destination': 'shreddedletter',
            'destinationComplete' : '',
        },
        {
            'name': [`Error Correction challenge`],
            'id': [2],
            'image': errorcorrectionPic,
            'destination': 'errorcorrection',
            'destinationComplete' : '',
        },
        {
            'name': [`Love Letter challenge`], //bin
            'id': [3],
            'image': secretcodePic,
            'destination': 'loveletter',
            'destinationComplete' : '',
        },
        {
            'name': [`Police Statement Challenge`],
            'id': [4],
            'image': policestatementPic,
            'destination': 'orderevents',
            'destinationComplete' : '',
        },
        {
            'name': [`Redacted Statement Challenge`],
            'id': [5],
            'image': medicalreportPic,
            'destination': 'redacted',
            'destinationComplete' : '',
        },
        {
            'name': [`Photo of Lucy`], // wendy's bin
            'id': [6],
            'image': weightlifterPic,
            'destination': 'foundArtefacts',
            'destinationComplete' : 'A membership card showing Lucy Light at a weightlifting Gym',
        },
        {
            'name': [`Poison Pen`], // dallas' bin
            'id': [7],
            'image': poisonpenPic,
            'destination': 'foundArtefacts',
            'destinationComplete' : 'A letter that says "I know what you did"',
        },
        {
            'name': [`Rolex Receipt`], //kirsten's bin
            'id': [8],
            'image': receiptPic,
            'destination': 'foundArtefacts',
            'destinationComplete' : '',
            'altText' : 'A receipt for a $1500 Rolex Oyster Perpetual watch',
        },
    ],
    'links': [
        {

        }
    ]

}



export const officeTitle = "Office"

//map

export const mapFeatureData = {
    'features': [{
        'key': [1],
        'label': ["Kaplinksy Tower"],
        'id': ['witness1'],
        'top': [56],
        'right': [35]
    },
    {
        'key': [2],
        'label': ["Chay Madz"],
        'id': ['witness2'],
        'top': [16],
        'right': [15]
    },
    {
        'key': [3],
        'label': ["Dallas Franks"],
        'id': ['witness3'],
        'top': [36],
        'right': [35]
    },
    {
        'key': [4],
        'label': ["Sara West"],
        'id': ['witness4'],
        'top': [76],
        'right': [75]
    },
    {
        'key': [5],
        'label': ["Lucy Light"],
        'id': ['witness5'],
        'top': [76],
        'right': [75]
    },
    {
        'key': [6],
        'label': ["Wendy Rose"],
        'id': ['witness6'],
        'top': [76],
        'right': [75]
    },
    ]
}

export const BoardIdeaData = {
    'idea': [
        {
            'key': [1],
            'id': [0],
            'title': ["The Victim"],
            'name': ["Lexington Grey"],
            'image': ["https://images.unsplash.com/photo-1614331589242-a02c24b5f564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=318&q=80"],
        },
        {
            'key': [2],
            'id': [1],
            'title': ["Suspect"],
            'name': ["Chay Madz"],
            'image': ["https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1926&q=80"],
        },
        {
            'key': [3],
            'id': [2],
            'title': ["Suspect"],
            'name': ["Dallas Franks"],
            'image': ["https://images.unsplash.com/photo-1614331589242-a02c24b5f564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=318&q=80"],
        },
        {
            'key': [4],
            'id': [3],
            'title': ["Suspect"],
            'name': ["James Grey"],
            'image': ["https://images.unsplash.com/photo-1614331589242-a02c24b5f564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=318&q=80"],
        },
        {
            'key': [5],
            'id': [4],
            'title': ["Suspect"],
            'name': ["James Grey"],
            'image': ["https://images.unsplash.com/photo-1614331589242-a02c24b5f564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=318&q=80"],
        },
        {
            'key': [6],
            'id': [5],
            'title': ["Suspect"],
            'name': ["James Grey"],
            'image': ["https://images.unsplash.com/photo-1614331589242-a02c24b5f564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=318&q=80"],
        },
    ]
}


export const NoteItemData = {
    'idea': [{
        'key': [1],
        'text': ["Call Mr Grey asap"],
    },
    ]
}


//character specific
export const questionsWitness1 = {
    questionsWitness1: [
        ['I was wondered if I can ask you some questions.', 'fail'],
        ['I am wonder if I can ask you some questions.', 'fail'],
        ['I wonder I can ask you some questions. ', 'fail'],
        ['I was wondering if I could ask you some questions.', 'success'],
        ['I am wondering I can asking you some questions.', 'fail']
    ],
    questionsWitness1_2: [
        ['I need knowing who was at the party with Lexington Grey.', 'fail'],
        ['I need to know who was at the party with Lexington Grey.', 'success'],
        ['I need know who was at the party with Lexington Grey. ', 'fail'],
        ['I am needing to know who was at the party with Lexington Grey.', 'faul'],
        ['I need to know who was being at the party with Lexington Grey.', 'fail']
    ],
    witnessConversationArray1: [
        "Yeah! I'm Toni Monceto! Terry Grey told me you might come. What can I do for you?",
        "I was wondering if I could ask you some questions.",
        "A friend of Grey is a friend of mine! What do you want to know?",
        "I need to know who was at the party with Lexington Grey.",
        "Whooa! That's going to be hard. Let me see what I can do...come this way..."
    ],
    trialURL1: [
        'codebox'
    ],
    sneaky: [
        'sneaky1'
    ],
    exitMessage1: [
        'Follow Tony'
    ],
    speechBubbleText1: [
        `Hi! I'm investigating the death of Lexington Grey. Are you the janitor here at Kaplinsky Tower?`
    ],
    witnessInfo1: [
        `Tony Monceto is the janitor at Kaplinksy Tower, where Lexington Grey lived and died.`
    ]
}

//witness 2 chay madz

export const questionsWitness2 = {
    questionsWitness2: [
        ['Can you describe me what happened at the party?', 'fail'],
        ['Can you tell what happened at the party?', 'fail'],
        ['Can you describe to me what happen at the party?', 'fail'],
        ['Could you described what happened at the party?', 'fail'],
        ['Can you describe what happened at the party?', 'success']
    ],
    questionsWitness2_2: [
        ['What happened when the lights came back on?', 'success'],
        ['What happened when the lights come back on?', 'fail'],
        ['What was happening when the lights were coming back on?', 'fail'],
        ['What has happened when the lights came back on?', 'fail'],
        ['What happened while the lights came back off?', 'fail']
    ],
    witnessConversationArray2: [
        "More questions? I told the police everything. I don't have time for this right now! You people are so annoying!",
        "Can you describe what happened at the party?",
        "We were having a good time, eating, drinking. The lights went out, there was a scream and that was that. That's all I know. Ok?",
        "What happened when the lights came back on?",
        "Look, I told all this to the police. Get out of here! Leave me alone! I'm done with this!"
    ],
    trialURL2: [
        'sneaky1'
    ],
    exitMessage2: [
        'Hmm...I need to try something different.'
    ],
    witnessInfo2: [
        `Chay Madz is an old friend of Lexington and was at the dinner party the night he died.`
    ]
}

//witness 3 kirsten wenstein
export const questionsWitness3 = {
    questionsWitness3: [
        ['I know your feeling. Don\'t worry, I\'ll help you.', 'fail'],
        ['I know how you feel. Don\'t worry, I\'ll help you.', 'success'],
        ['I know how you feel. Don\'t worry, I\'m helping you.', 'fail'],
        ['I know your feelings. Don\'t worry, I\'ll help you.', 'fail'],
        ['I know what you feel. Don\'t worry, I\'ll help you.', 'fail']
    ],
    questionsWitness3_2: [
        ['I have to ask a simply question. Was Lexi being unfaithful to you? ', 'fail'],
        ['I have to ask a basic questions. Was Lexi being unfaithful to you? ', 'fail'],
        ['I have to ask a delicate question. Was Lexi being unfaithful to you? ', 'success'],
        ['I had to ask a harsh question. Was Lexi being unfaithful to you? ', 'fail'],
        ['I ask a delicate question. Was Lexi being unfaithful to you? ', 'fail']
    ],
    witnessConversationArray3: [
        "I'll help if I can, but my English is really very bad.",
        "I know how you feel. Don't worry, I'll help you.",
        "Great! Thanks! That's so kind of you. I find this language so hard! And now I am on my own...",
        "I have to ask a delicate question. Was Lexi being unfaithful to you? ",
        "Well, I'll tell you about that. But first you have to help me. Correct these sentences to help me learn this crazy language. When you've done it, I will answer."
    ],
    trialURL3: [
        'errorcorrection'
    ],
    exitMessage3: [
        'Help her!'
    ],
    witnessInfo3: [
        `kirsten Wenstein was romantically involved with Lexington.`
    ],
    speechBubbleText3: [
        `Hi! I'm investigating the death of Lexington Grey. I'm really sorry for your loss. Do you mind me asking a few questions?'`
    ],
}

//witness 4 dallas franks

export const questionsWitness4 = {
    questionsWitness4: [
        ["I am wanting to ask about the party.", 'fail'],
        ["I'll want to ask about the party.", 'fail'],
        ["I wanted to ask about the party.", 'success'],
        ["I was asking about the party.", 'fail'],
        ["I want ask about the party.", 'fail']
    ],
    questionsWitness4_2: [
        ["Yes. That can be useful.", 'fail'],
        ["Thank you. That would be useful.", 'success'],
        ["That would being useful.", 'fail'],
        ["Thanks. That was useful.", 'fail'],
        ["They are useful.", 'fail']
    ],
    witnessConversationArray4: [
        "I'm so bored of you people always asking questions. The whole thing was a tragic accident. Can't you understand that? What more is there to say?",
        "I wanted to ask about the party.",
        "I was drunk, ok? I don't remember much and I really don't want to talk about it. If you really insist, you can read my police statement.",
        "Thank you. That would be useful",
        "OK, here it is. Now please leave me alone. I'm a very busy man!"
    ],
    trialURL4: [
        'orderevents'
    ],
    exitMessage4: [
        'Read the statement'
    ],
    witnessInfo4: [
        `Dallas Franks met Lexington while filming. They have known each other ever since.`
    ]
}

//witness 5 Lucy lights
export const questionsWitness5 = {
    questionsWitness5: [
        ["I promise I won't tell him you spoke to me.", 'success'],
        ["I promise I won't tell to him you spoke to me.", 'fail'],
        ["I am promise I won't tell him you spoke to me.", 'fail'],
        ["I promised I won't tell him you spoke to me.", 'fail'],
        ["I have promised I won't tell him you spoke to me.", 'fail']
    ],
    questionsWitness5_2: [
        ["Not to say anything?", 'fail'],
        ["Not even two questions?", 'success'],
        ["Two questions by me?", 'fail'],
        ["Barely two questions?", 'fail'],
        ["Roughly two questions?", 'fail']
    ],
    witnessConversationArray5: [
        "Chay told me not to speak to you. He doesn't like me speaking to other men. Especially not detectives.",
        "I promise I won't tell him you spoke to me.",
        "No. It's too dangerous. I can't help you.",
        "Not even two questions?",
        "No! Now go away or I'll call Chay!"
    ],
    trialURL5: [
        'sneaky4'
    ],
    exitMessage5: [
        'We need another plan!'
    ],
    witnessInfo5: [
        `Lucy Light is often said to be a flirt and an attention seeker. Wives and girlfriends hate her.`
    ],
    speechBubbleText5: [
        `Hi! I'm investigating the death of Lexington Grey. I want to ask you about your relationship with him.`
    ],
}

//witness 6 wendy rose

export const questionsWitness6 = {
    questionsWitness6: [
        ["Really? When did he tell that?", 'fail'],
        ["Really? When does you say that?", 'fail'],
        ["Really? Why did you say about that?", 'fail'],
        ["Really? Who did he say that to?", 'fail'],
        ["Really? What makes you say that?", 'success']
    ],
    questionsWitness6_2: [
        ["Anything you can to share with me?", 'fail'],
        ["Anything you can share with me?", 'success'],
        ["Anything you can share to me?", 'fail'],
        ["Nothing you can share from me?", 'fail'],
        ["Something you can share me?", 'fail']
    ],
    witnessConversationArray6: [
        "Well, Chay was acting tough, as ever. But he's not so strong.",
        "Really? What makes you say that?",
        "Did you know I'm his ex-girlfriend? I know lots of things about him.",
        "Anything you can share with me?",
        "I've got a note from his doctor. Do you want to see that?"
    ],
    trialURL6: [
        'redacted'
    ],
    exitMessage3: [
        'Go and help her!'
    ],
    speechBubbleText6: [
        `Hi! I'd like to ask you some questions about Lexington Grey. Is it true your friend Chay threatened him?`
    ],
    witnessInfo6: [
        `Wendy Rose used to be in a relationship with Chay. Now she barely speaks to him.`
    ]
}

//trials
const BubbleText1 = () => {
    return (
        <>
            <p>
            Ok, I am gonna need your help! The record of who enters and leaves the building is kept locked
    up in a safe and I don't know the code. But maybe you will be able to work it out.
    </p>
    <p>
    To open the safe you need to use the right combination of letters. Each letter is the first letter of a verb.
    I don't know the verbs but I do know the nouns they collocate with. If I give you the nouns, perhaps you can work them out.
    So for example if the noun is "TV", the verb could be "watch", so you would take "W" and put it in the safe. Clear?            
    </p>
        </>
    )
}
const BubbleText2 = () => {
    return (
        <>
            <p>
                These are the verbs in the right order. There are two clue words for each verb.
            </p>
            <ol>
                <li>____ friends & your bed</li>
                <li>__ homework & housework</li>
                <li>____ fun & a good time</li>
                <li>____ your time & a break</li>
                <li>_____ a ball & a cold</li>
            </ol>
            <p>
                Put the first letters of the verbs into the code box and spin the wheel!
            </p>
        </>
    )
}


//codebox tony monceto
export const CodeBoxData = {
    bubbleText1: <BubbleText1/>,
    // bubbleText2: [`So here's the deal. I know that to break the code you need to know the first letter of some verbs. 
    // I don't know the verbs but I do know the words they collocate with. For example if the clue is "TV", you would take 
    // "W", the first letter of the verb "watch", as that collocates with the noun "TV". Clear?
    // `],
    bubbleText2: <BubbleText2 />,
    // bubbleTextX: [`These are the words in the right order. 1 "friends" and "your bed". 2 "homework" and "housework". 
    // 3 "fun" and "a good time". 4 "your time" and "a break". 5 "a ball" and "a cold". Put the correct letters in and spin the dial!`
    // ],
    bubbleText3: [`Excellent! Click on the book, and when you go back to your office you'll be able to see who was at the party and where they live. 
    But before you go, I should show you the crime scene!`
    ],
}

export const CrimeSceneData = {
    bubbleText1: [`This is the kitchen and that is the window he went through. As you can see, he can't have done it by accident. He either jumped or someone else was involved.`],
    bubbleText2: [`He used to stand by the window smoking. I think someone came up behind him and pushed him out. Apparently the lights went out when the building was struck by lightning.`],
    bubbleText3: [`Have a look out the window....that's an awfully long way down! Anyway, now you've seen where it all happened. Good luck! I hope you find the killer!`],
}


//tornLetter Chay madz

export const TornLetterPiecesData = [
    "When the lights went out, we ",
    "were all sitting round the table",
    "I heard a chair being moved",
    "It was Lexi's first dinner party",
    "since recovering from Covid19",
    "but I don't know who moved it",
    "I had heard Lexi and Chay",
    "arguing earlier in the evening",
    "Lucy's eyes were red as if she'd",
    "been crying before she arrived",
    "Lexi Grey went into the kitchen",
    "to get everyone some drinks",
    "You could tell that Chay was",
    "really angry for some reason."
]

export const ShreddedLetterPiecesData = {
    orderEventsText: [`I got the party at around 10. I was already drunk. 
    I had been drinking tequila since lunchtime with my old drama school friends in a club downtown - we've known eachother for years. If I'm honest, I have been drinking too much since my mum died two months ago.
    Lexi? I met him on the set of his first Movie just three months ago.
    It was the middle of the pandemic but we were still able to shoot scenes outside. Lexi and I have been friends ever since. 
    `],
    eventsToOrder: [
        `This was the first party for ages`, 
        `suddenly the lights went out.`, 
        `Someone moved - I don't know who.`, 
        `Lexi and Chay arguing. You could`, 
        `tell Chay was really angry! I also`, 
        `Then there was a scream...`, 
        `and everyone was supposed to be`, 
        `noticed that Kirsten's eye's were`,
        `and making the best of it when `, 
        `red as if she'd been crying. The`, 
        `atmosphere was tense but we were`,
        `sitting round the table drinking`, 
        `excited. But earlier I had heard`, 
    ],
    eventsCorrectOrder: [
        `This was the first party for ages`, 
        `and everyone was supposed to be`, 
        `excited. But earlier I had heard`, 
        `Lexi and Chay arguing. You could`, 
        `tell Chay was really angry! I also`, 
        `noticed that Kirsten's eye's were`, 
        `red as if she'd been crying. The`, 
        `atmosphere was tense but we were`,
        `sitting round the table drinking`, 
        `and making the best of it when `, 
        `suddenly the lights went out.`, 
        `Someone moved - I don't know who.`, 
        `Then there was a scream...`, 
    ],
    instructions : [`It looks like this letter has been shredded. Move the pieces around until you find the right order. I think the first one is already in the right place. You should be able to work it out from grammar and context.`]
}

//error correction kirsten

export const ErrorCorrectionData = {
    instructions: [
        [`OK, I wrote down these sentences but I think at least three of them are wrong! Please read them and click on them if you think they are incorrect. 
        In a moment I will ask you to show me how they should be written.`],
    ],
    instructions2: [
        ["Great! You found my mistakes! Now type out the sentences so they are correct and hit check. When all three are correct I will tell you what you want to know."],
    ],
    instructions3: [
        [`Perfect! Thank you so much for your help! I like you, so here's the information I promised you. I expect Lexi was unfaithful. You can never trust actors or tell when they are lying. But I don't know who he was unfaithful with. Lucy? Maybe! 
        There was certainly something strange going on that night. A weird atmosphere. It started off fine, but later, around when Lexi was telling us about having covid, Dallas was just staring up out of the window
         at the heavens. I think only Lexi was happy there that night. And maybe that was because Lucy was flirting with him!`],
    ],
    sentences: [
        ["I saw Lexi and Lucy holding hands under the table.", "0", false],
        ["I don't really knew Chay very well.", "1", false],
        ["Lexi seemed very relaxing and happy.", "2", false],
        ["Lexi made a joke about still having Covid when he coughed.", "3", false],
        ["Lexi was a good man. He was my friend.", "4", false],
        ["I didn't see nothing of the crime because it was dark.", "5", false],
    ],
    incorrectSentences: [
        ["1", "2", "5"]
    ],
    incorrectAndCorrected: [
        ["I don't really knew Chay very well", "0", "I don't really know Chay very well", false],
        ["Lexi seemed very relaxing and happy", "1", "Lexi seemed very relaxed and happy", false],
        ["I didn't see nothing of the crime because it was dark", "2", "I didn't see anything of the crime because it was dark", false],
    ]
}



//orderEvent dallas chay sat next to her....she treated him for bad shoulder, too weak to lift someone

export const orderEventsData = {
    orderEventsText: [`I got the party at around 10. I was already drunk. 
    I had been drinking tequila since lunchtime with my old drama school friends in a club downtown - we've known eachother for years. If I'm honest, I have been drinking too much since my mum died two months ago.
    Lexi? I met him on the set of his first Movie just three months ago.
    It was the middle of the pandemic but we were still able to shoot scenes outside. Lexi and I have been friends ever since. 
    `],
    eventsToOrder: [
        'Dallas arrived at the party',
        'Dallas met Lexi',
        'Dallas went to drama school',
        'Dallas lost his mother',
        'Dallas started drinking with his drama school friends',
        'Dallas started drinking a lot',
    ],
    eventsCorrectOrder: [
        'Dallas went to drama school',
        'Dallas met Lexi',
        'Dallas lost his mother',
        'Dallas started drinking a lot',
        'Dallas started drinking with his drama school friends',
        'Dallas arrived at the party',
    ],
    instructions: [
        `Read the statement and then put the summary below in the right order by moving the tiles up or down. Click "check" when you're done.`
    ]
}

//loveletter Lucy : Chay: i will kill any man you go out with
export const loveLetterData = {
    instructions: [`If we want to read this love letter from Lucy's bin, we need to break the word code. Tap a letter and then tap the symbol you think represents that letter. If you need a clue, think what four-letter word a letter usually starts with. Oh, it looks like the full stops and commas don't need to be decoded.`],
    successMessageText: ['Amazing! Click here to see the full letter!'],
    loveLetterCode: [`Dear Lucy, I need to see you. I hate being away from you. I will kill a man who goes near you.`],
    loveLetterFull: [`Dear Lucy I need to see you. I hate being without you. I will kill a man who goes near you. I love you. Chay.`],
    loveLetterFullPs: [`PS. I have come into some money! I will treat you to something.`],
    symbols: [
        ['a', '8955', false, false],
        ['b', '8706', false, false],
        ['c', '8937', false, false],
        ['d', '8709', false, false],
        ['e', '8710', false, false],
        ['f', '8711', false, false],
        ['g', '8712', false, false],
        ['h', '8713', false, false],
        ['i', '8718', false, false],
        ['j', '8719', false, false],
        ['k', '8720', false, false],
        ['l', '8721', false, false],
        ['m', '8733', false, false],
        ['n', '8734', false, false],
        ['o', '8738', false, false],
        ['p', '8743', false, false],
        ['q', '8747', false, false],
        ['r', '8751', false, false],
        ['s', '8756', false, false],
        ['t', '8762', false, false],
        ['u', '8766', false, false],
        ['v', '8773', false, false],
        ['w', '8782', false, false],
        ['x', '8791', false, false],
        ['y', '8800', false, false],
        ['z', '8812', false, false],
        ['.', '46', false, false],
        [',', '44', false, false],
    ],
    letters: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        '.',
        ',',
    ]
}




//wendy
export const redactedData = {
    instructions: [`Why do doctors always have such bad handwriting? I can't read some of the words. It looks like they're mostly prepositions and verbs. Fill in the gaps and click "check".`],
    missingWords: ['with', 'by', 'up', 'avoid', 'to'],
}


export const RedactedComp = (props) => {
    return (
        <div>
            <h3>Medical Report - Chay Maddison</h3>
            I first met Chay when he came into my clinic. He was having problems <input id={props.id1} name={props.name1} value={props.value1} onChange={props.onchange} /> his back.
            I diagnosed a serious slipped disk in his upper spine. When he lifts anything heavy he is cripled <input id={props.id2} name={props.name2} value={props.value2} onChange={props.onchange} /> pain.
            He probably sustained this injury by working out in the gym without warming <input id={props.id3} name={props.name3} value={props.value3} onChange={props.onchange} />.
            Although he looks strong, he is physically too weak to lift much more than a dinner plate. He should <input id={props.id4} name={props.name4} value={props.value4} onChange={props.onchange} /> alcohol
            - he is addicted <input id={props.id5} name={props.name5} value={props.value5} onChange={props.onchange} /> painkillers, and they don't mix.
        </div>
    )
}

export const endPageData = {
    bubbleText1: `So you think you know who killed my son? Just choose from the options below and tell me why in the box.`,
    bubbleText2: `OK, I can see I wasted my time with you. I should have gone to a professional. I'm not paying you a cent.`,
    bubbleText3: `So you worked out some of it and helped me to get justice for my son. I will pay half your fee, that's all.`,
    bubbleText4: `You're a great detective and I can't tell you how grateful I am! I'll double your pay! Congratulations!!!`,
    explanation: `They were a crazy bunch of people at that dinner party but only one was a killer. It was me, Dallas Franks. I had been struggling since 
    my mother died of coronavirus. But that night I discovered something made my blood boil. Lexington Gray hadn't isolated when he had
    coronavirus and has passed it on to me, and I gave it to my mother. When Lexi boasted about not isolating, I knew I had to take revenge. 
    When lightning struck and the lights went out, I took my chance.`,
    police1: `Thank you from the City Police Department for helping us catch this evil criminal! You will receive a cash reward!`,
    police2: `From the City Police Department, I would just like to say thanks for NOTHING. We will never catch him now!`,
}

