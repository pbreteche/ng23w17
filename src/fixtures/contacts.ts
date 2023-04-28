import { ContactBook } from "src/types/contact";

export const contacts: ContactBook = {
    'amis': [
        {
            firstName: 'Bob',
            lastName: 'Lenon',
            email: 'bobby@beatles.uk',
            birthday: new Date('1957-03-24')
        },
        {
            firstName: 'Bob',
            lastName: 'Marley',
            email: 'bobby@reggae.ja',
            birthday: new Date('1972-11-03')
        },
        {
            firstName: 'Karl',
            lastName: 'Lewis',
            email: 'karl@lewis.us',
            birthday: new Date('1964-06-11')
        },
    ],
    'travail': [
        {
            firstName: 'Bob',
            lastName: 'Léponge',
            email: 'bobby@ocean.net',
            birthday: new Date('2010-09-24')
        },
        {
            firstName: 'Jack',
            lastName: 'Sparrow',
            email: 'jack@ocean.net',
            birthday: new Date('1972-11-03')
        },
    ],
}
