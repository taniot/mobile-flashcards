import { AsyncStorage } from 'react-native'
export const APP_STORAGE_KEY = 'MobileFlashCards:KEY';

//database

export const data = {
    Countries: {
        title: 'Countries',
        questions: [
            {
                question: 'What is the diameter of Earth?',
                answer: '8,000 miles'
            },
            {
                question: 'What is the capital city of Spain?',
                answer: 'Madrid'
            },
            {
                question: 'Which country is Prague in?',
                answer: 'Czech Republic'
            }
        ]
    },
    Sports: {
        title: 'Sports',
        questions: [
            {
                question: 'Which sport does Constantino Rocca play?',
                answer: 'Golf'
            },
            {
                question: 'Which chess piece can only move diagonally?',
                answer: 'A bishop'
            }
        ]
    }
}


function initialize() {
    AsyncStorage.setItem(APP_STORAGE_KEY, JSON.stringify(data))
    return data
}

export function formatDeckResults(results) {
    return results === null ? initialize() : JSON.parse(results)
}