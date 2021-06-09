//Home page
export const homeTitle = "Death in the City"
export const homeSubtitle = "Your mission: solve the crime"
export const homeCallToActionText = "On the 27th of January 2021 at 3:06am the body of 25-year-old actor Lexington Grey was discovered on the sidewalk at the foot of the exclusive Kaplinsky Tower. The police say it was suicide..."

//Backstory page
export const backStorySubtitle = "Here's the backstory"

//character names

export const characterNames = {
    characterNames: [
        'Tony Monceto',
        'Chay Madz',
        'Kirsten Wenstein',
        'Dallas Franks',
        'Floe Light',
        'Wendy Rose'
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
    ]
}

//office specific

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
        'label': ["Floe Light"],
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
        "Hey! I'm Toni Monceto. What can I do for you?",
        "I was wondering if I could ask you some questions.",
        "A friend of Grey is a friend of mine! What do you want to know?",
        "I need to know who was at the party with Lexington Grey.",
        "Whooa! That's going to be hard. Let me see what I can do...come this way..."
    ],
    trialURL1: [
        'codebox'
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
        "OK, so I'm Chay Madz. People call me Madz. What do you want to know?",
        "Can you describe what happened at the party?",
        "We were having a good time just relaxing, eating, drinking. The lights went, there was a scream and that was the end of Lexington Grey.",
        "What happened when the lights came back on?",
        "We all rushed to the kitchen. Look, I told all this to the police. Get out of here!"
    ],
    trialURL2: [
        'tornletter'
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
        "So you want to ask me something?",
        "Please tell me everything about the evening Lexington died.",
        "I don't mind talking to you. But my English is really bad",
        "I know how you feel. Don't worry, I'll help you.",
        "OK, correct my sentences please, else I will never learn this language!"
    ],
    trialURL3: [
        'tornletter'
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
        ["Not to say anything?", 'fail'],
        ["Not even two questions?", 'success'],
        ["Two questions by me?", 'fail'],
        ["Barely two questions?", 'fail'],
        ["Roughly two questions?", 'fail']
    ],
    witnessConversationArray4: [
        "What do you want?",
        "I want to ask about the party.",
        "Get out of here! I'm not talking to you!",
        "Not even two questions?",
        "No! Get lost or I'll call the cops!"
    ],
    trialURL4: [
        'tornletter'
    ]
}

//witness 5 floe lights
export const questionsWitness5 = {
    questionsWitness5: [
        ['', 'fail'],
        ['', 'fail'],
        ['', 'success'],
        ['', 'fail'],
        ['', 'fail']
    ],
    questionsWitness5_2: [
        ['', 'fail'],
        ['', 'success'],
        ['', 'fail'],
        ['', 'fail'],
        ['', 'fail']
    ],
    witnessConversationArray5: [
        "Hey I want to talk to you but Dallas told me not to.",
        "I promise I won't tell him. He won't speak to me anyway.",
        "If you should happen to read my messages you might learn something.",
        "How would I do that?",
        "I'll leave you with a clue....no I must go and powder my nose...."
    ],
    trialURL5: [
        'tornletter'
    ]
}

//witness 6 wendy rose

export const questionsWitness6 = {
    questionsWitness6: [
        ["", 'fail'],
        ["", 'fail'],
        ["", 'success'],
        ["", 'fail'],
        ["", 'fail']
    ],
    questionsWitness6_2: [
        ["", 'fail'],
        ["", 'success'],
        ["", 'fail'],
        ["", 'fail'],
        ["", 'fail']
    ],
    witnessConversationArray6: [
        "Lexi told me in an email he was feeling suicidal.",
        "Really? When did he say that?",
        "Just before the party. I didn't take it seriously. Now I wish I had.",
        "What did he say exactly?",
        "I'll show you!"
    ],
    trialURL6: [
        'tornletter'
    ]
}

//trials

export const TornLetterPiecesData = [
    "When the lights went out, we ",
    "were all sitting round the table",
    "I heard a chair being moved",
    "It was Lexi's first dinner party",
    "since recovering from Covid19",
    "but I don't know who moved it",
    "I heard Lexi and Dallas",
    "arguing earlier in the evening",
    "Floe's eyes were red as if she'd",
    "been crying before she arrived",
    "Lexi Grey went into the kitchen",
    "to get everyone some drinks",
]

export const ErrorCorrectionData = {
    instructions: [
        ["This is what I want you to do"],
    ],
    sentences: [
        ["I live here in the city.", "0", false],
        ["I have live here for many years.", "1", false],
        ["I have no moneys.", "2", false],
        ["I don't know what happened to Lexi.", "3", false],
        ["He was a good man.", "4", false],
        ["I didn't see nothing.", "5", false],
    ],
    incorrectSentences: [
        ["1", "2", "5"]
    ],
    incorrectAndCorrected : [
        ["I have live here for many years.", "0", "I have lived here for many years", false],
        ["I have no moneys.", "1", "I have no money", false],
        ["I didn't see nothing.", "2", "I didn't see anything", false], 
    ]
}

export const loveLetterData = {
    instructions: ['Break the word code'],
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
    ]
}
