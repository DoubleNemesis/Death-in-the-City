//Home page
export const homeTitle = "Death in the City"
export const homeSubtitle = "Your mission: solve the crime"
export const homeCallToActionText = "On the 27th of January 2021 at 3:06am the body of 25-year-old actor Lexington Grey was discovered on the sidewalk at the foot of the exclusive Kaplinsky Tower. The police say it was suicide..."

//Backstory page
export const backStorySubtitle = "Here's the backstory"

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
        'label': ["Nigel Franks"],
        'id': ['witness2'],
        'top': [16],
        'right': [15]
    },
    {
        'key': [3],
        'label': ["Brain Dodds"],
        'id': ['witness2'],
        'top': [36],
        'right': [35]
    },
    {
        'key': [4],
        'label': ["Sarah West"],
        'id': ['witness2'],
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
        'title': ["Suspect 1"],
        'name': ["James Grey"],
        'image': ["https://images.unsplash.com/photo-1614331589242-a02c24b5f564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=318&q=80"],
    },
        {
        'key': [3],
        'id': [2],
        'title': ["Suspect 2"],
        'name': ["James Grey"],
        'image': ["https://images.unsplash.com/photo-1614331589242-a02c24b5f564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=318&q=80"],
    },
        {
        'key': [4],
        'id': [3],
        'title': ["Suspect 3"],
        'name': ["James Grey"],
        'image': ["https://images.unsplash.com/photo-1614331589242-a02c24b5f564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=318&q=80"],
    },
        {
        'key': [5],
        'id': [4],
        'title': ["Suspect 4"],
        'name': ["James Grey"],
        'image': ["https://images.unsplash.com/photo-1614331589242-a02c24b5f564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=318&q=80"],
    },
        {
        'key': [6],
        'id': [5],
        'title': ["Suspect 5"],
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
//stored here then passed to context as appears in story


// Witness 1
export const questionsWit1 = [
    ['I was wondered if I can ask you some questions.', 'fail'],
    ['I am wonder if I can ask you some questions.', 'fail'],
    ['I wonder I can ask you some questions. ', 'fail'],
    ['I was wondering if I could ask you some questions.', 'success'],
    ['I am wondering I can asking you some questions.', 'fail']
]
export const questionsWit1_2 = [
    ['I need knowing who was at the party with Lexington Grey.', 'fail'],
    ['I need to know who was at the party with Lexington Grey.', 'success'],
    ['I need know who was at the party with Lexington Grey. ', 'fail'],
    ['I am needing to know who was at the party with Lexington Grey.', 'faul'],
    ['I need to know who was being at the party with Lexington Grey.', 'fail']
]

export const conversationArray = [
    "Hey! I'm Toni Monceto. What can I do for you?",
    "I was wondering if I could ask you some questions.",
    " A friend of Grey is a friend of mine! What do you want to know?",
    "I need to know who was at the party with Lexington Grey.",
    "Whooa! That's going to be hard. Let me see what I can do...come this way..."
]






