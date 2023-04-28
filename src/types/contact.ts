export type Contact = {
    firstName?: string,
    lastName?: string,
    email?: string,
    birthday?: Date,
}

export type ContactBook = {[key: string]: Contact[]}
