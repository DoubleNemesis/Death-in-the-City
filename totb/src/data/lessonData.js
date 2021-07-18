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
    homeTitle: [`Murder in the City`],
    homeSubtitle: [`Your mission: solve the crime`],
    homeCallToActionText: [`On the 27th of January 2021 at 3:06am the body of 25-year-old actor Lexington Grey was discovered on the sidewalk at the foot of the exclusive Kaplinsky Tower. 
    The police are calling it suicide...
    `],
    homeCallToActionTextBtn: [`Full story on page TWO!`],
    homeCallToActionTextBtn2: [`READY to turn detective?`],
}

//Backstory page
export const backStoryData = {
    backStorySubtitle: [`Here's the backstory`],
    backStoryText: [`I'm Terence Grey. So you think you're ready to turn detective? I hope so, because you've got work to do! 
Lexington Grey wasn't just anyone. That boy was my son, and he was murdered. Your job is to find out who killed him. First you need to show me you're capable.
 Get this vocabulary right and then we're in business!`]
}

export const clientData = {
    clientTitle: [`Mr Grey`],
    clientText: [`OK, great! Now I know you speak the lingo, get to work! I'll send what I've got over to your office for you to look at. 
    But if you want my advice, the first thing to do is to speak to Tony Monceto. He's the janitor at Kaplinsky Tower and an old friend of mine.
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
        'arid',
        'comouflage',
        'asset',
        'breed',
        'beast',
        'curse',
        'inscription',
        'row(vb)',
        'thrive',
        'trample',
    ],
    'vocabB': [
        'dry',
        'disguise',
        'property',
        'reproduce',
        'creature',
        'jinx',
        'carved text',
        'propel',
        'grow',
        'tread on',
    ],
    'bubbleText1': [
        `All I want you to do is Click on a word and then click on its synonym. When you get a pair right, they will disappear. 
        Don't worry, you will see the full word list again at the end.`
    ],
    'bubbleText2': [
        `Great, you passed the test! Here are the words/synonyms side-by-side if you want to take notes. Now head over to the office and I'll show you what's what.`
    ]
}

//office specific
export const officeCards = {
    'witnesses': [
        {
            'name': [`Tony Monceto`],
            'id': [1],
            'image': [TonyPic],
            'altName':['unknown'],
            'altImage':[questionMark],
        },
        {
            'name': [`Chay Madz`],
            'id': [2],
            'image': [ChayPic],
            'altName': ['Unknown'],
            'altImage':[questionMark],
        },
        {
            'name': [`Kirsten Stein`],
            'id': [3],
            'image': [KirstenPic],
            'altName': ['Unknown'],
            'altImage':[questionMark],
        },
        {
            'name': [`Dallas Franks`],
            'id': [4],
            'image': [DallasPic],
            'altName': ['Unknown'],
            'altImage':[questionMark],
        },
        {
            'name': [`Lucy Light`],
            'id': [5],
            'image': [LucyPic],
            'altName': ['Unknown'],
            'altImage':[questionMark],
        },
        {
            'name': [`Wendy Rose`],
            'id': [6],
            'image': [WendyPic],
            'altName': ['Unknown'],
            'altImage':[questionMark],
        },
    ],
    'artefacts': [
        {
            'name': [`Shredded Letter challenge`], //bin
            'id': [1],
            'image': shreddedletterPic,
            'destination': 'shreddedletter',
        },
        {
            'name': [`Error Correction`],
            'id': [2],
            'image': errorcorrectionPic,
            'destination': 'errorcorrection',
        },
        {
            'name': [`Love Letter challenge`], //bin
            'id': [3],
            'image': secretcodePic,
            'destination': 'loveletter',
        },
        {
            'name': [`Ordered Statement`],
            'id': [4],
            'image': policestatementPic,
            'destination': 'orderevents',
        },
        {
            'name': [`Redacted Statement`],
            'id': [5],
            'image': medicalreportPic,
            'destination': 'redacted',
        },
        {
            'name': [`Photo of Lucy`], // wendy's bin
            'id': [6],
            'image': weightlifterPic,
            'destination': 'redacted',
        },
        {
            'name': [`Poison Pen`], // dallas' bin
            'id': [7],
            'image': poisonpenPic,
            'destination': 'redacted',
        },
        {
            'name': [`Rolex Receipt`], //kirsten's bin
            'id': [8],
            'image': receiptPic,
            'destination': 'redacted',
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
        "More questions? I told the police everything. I don't have time for this!",
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
    ]
}

//witness 3 kirsten wenstein
export const questionsWitness3 = {
    questionsWitness3: [
        ['Please tell me everything on the evening Lexington died', 'fail'],
        ['Please tell me everything for the evening Lexington died', 'fail'],
        ['Please tell me everything about the evening Lexington died.', 'success'],
        ['Please tell me everything over the evening Lexington died', 'fail'],
        ['Please tell me everything around the evening Lexington died', 'fail']
    ],
    questionsWitness3_2: [
        ['I know your feeling. Don\'t worry, I\'ll help you.', 'fail'],
        ['I know how you feel. Don\'t worry, I\'ll help you.', 'success'],
        ['I know how you feel. Don\'t worry, I\'m helping you.', 'fail'],
        ['I know your feelings. Don\'t worry, I\'ll help you.', 'fail'],
        ['I know what you feel. Don\'t worry, I\'ll help you.', 'fail']
    ],
    witnessConversationArray3: [
        "Oh! More questions about Lexi? Well, OK then. I'll help if I can.",
        "Please tell me everything about the evening Lexington died.",
        "My English is really bad. ",
        "I know how you feel. Don't worry, I'll help you.",
        "OK, correct my sentences please, else I will never learn this language!"
    ],
    trialURL3: [
        'errorcorrection'
    ],
    exitMessage3: [
        'Help her!'
    ]
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
        ["Yes. That can be useful", 'fail'],
        ["Thank you. That would be useful", 'success'],
        ["That would being useful", 'fail'],
        ["Thanks. That was useful", 'fail'],
        ["They are useful", 'fail']
    ],
    witnessConversationArray4: [
        "I'm so bored of you people. What do you want to know?",
        "I want to ask about the party.",
        "I was drunk, ok? I don't remember much. You can read my police statement, if you want.",
        "Thank you. That would be useful",
        "OK, here it is. Now please leave me alone!"
    ],
    trialURL4: [
        'orderevents'
    ],
    exitMessage4: [
        'Read the statement'
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
    ]
}

//witness 6 wendy rose

export const questionsWitness6 = {
    questionsWitness6: [
        ["Really? When did he tell that?", 'fail'],
        ["Really? When does he say that?", 'fail'],
        ["Really? Why did he say about that?", 'fail'],
        ["Really? Who did he say that to?", 'fail'],
        ["Really? When did he say that?", 'success']
    ],
    questionsWitness6_2: [
        ["What does he say exactly?", 'fail'],
        ["What did he say exactly?", 'success'],
        ["What did he want to say exactly?", 'fail'],
        ["What did he speak exactly?", 'fail'],
        ["What did he exactly say?", 'fail']
    ],
    witnessConversationArray6: [
        "Lexi told me in an email he was feeling depressed after suffering from Covid.",
        "Really? When did he say that?",
        "Just before the party. I didn't take it seriously. Now I wish I had.",
        "What did he say exactly?",
        "I'll show you! But the solicitor cut some bits out of it. I think I can help you understand it."
    ],
    trialURL6: [
        'redacted'
    ],
    exitMessage3: [
        'Go and help her!'
    ]
}

//trials
const BubbleText3 = () => {
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
    bubbleText1: [`Ok, I am gonna need your help! The record of who enters and leaves the building is kept locked
    up in a safe and I don't know the code.
    But maybe you will be able to work it out.`],
    bubbleText2: [`So here's the deal. I know that to break the code you need to know the first letter of some verbs. 
    I don't know the verbs but I do know the words they collocate with. For example if the clue is "TV", you would take 
    "W", the first letter of the verb "watch", as that collocates with the noun "TV". 
    `],
    bubbleText3: <BubbleText3 />,
    bubbleTextX: [`These are the words in the right order. 1 "friends" and "your bed". 2 "homework" and "housework". 
    3 "fun" and "a good time". 4 "your time" and "a break". 5 "a ball" and "a cold". Put the correct letters in and spin the dial!`
    ],
    bubbleText4: [`Excellent! Click on the book, and when you go back to your office you'll be able to see who was at the party and where they live. 
    But before you go, I should show you the crime scene!`
    ],
}

export const CrimeSceneData = {
    bubbleText1: [`This is the kitchen and that is the window he went through. As you can see, he can't have done it by accident.`],
    bubbleText2: [`He used to stand by the window smoking. I think someone probable came up behind him and pushed him out.`],
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
    ],
    eventsCorrectOrder: [
        "were all sitting round the table",
        "When the lights went out, we ",
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
}

//error correction kirsten

export const ErrorCorrectionData = {
    instructions: [
        ["OK, I need you to tell me which sentences are incorrect. Just click on them, and in a moment I will ask you to show me how they should be written."],
    ],
    instructions2: [
        ["Great! Now type out the sentences so they are correct and hit go."],
    ],
    instructions3: [
        ["Perfect! Thank you so much for your help!"],
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
    ]
}

//loveletter Lucy : Chay: i will kill any man you go out with
export const loveLetterData = {
    instructions: ['Break the word code'],
    successMessageText: ['Amazing! Click here to see the full letter!'],
    loveLetterCode: [`Dear Lucy, I need to see you. I hate being away from you. I will kill a man who goes near you.`],
    loveLetterFull: [`Dear Lucy I need to see you. I hate being without you. I will kill any man who goes near you. I love you. Chay.`],
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
    instructions: [`Hmmm there's a problem here. I can't read some of the words. It looks like they're mostly prepositions and verbs.`],
    missingWords: ['with', 'by', 'up', 'avoid', 'to'],
}


export const RedactedComp = (props) => {
    return (
        <div>
            I first met Chay when he came into my clinic. He was having problems <input id={props.id1} name={props.name1} value={props.value1} onChange={props.onchange} /> his back.
            I diagnosed a serious slipped disk in his upper spine. When he lifts anything heavy he is cripled <input id={props.id2} name={props.name2} value={props.value2} onChange={props.onchange} /> pain.
            He probably sustained this injury by working out in the gym without warming <input id={props.id3} name={props.name3} value={props.value3} onChange={props.onchange} />.
            Although he looks strong, he is physically too weak to lift much more than a dinner plate. He should <input id={props.id4} name={props.name4} value={props.value4} onChange={props.onchange} /> alcohol
            - he is addicted <input id={props.id5} name={props.name5} value={props.value5} onChange={props.onchange} /> painkillers, and they don't mix.
        </div>
    )
}

