export interface PeoplesResponse {
    message: string
    total_records: number
    total_pages: number
    previous: any
    next: string
    results: PeopleByArray[]
}

export interface PeopleResponse {
    message: string
    result: PeopleType
}

export interface PeopleByArray {
    uid: string
    name: string
    url: string
}

export interface PeopleType {
    properties: Properties
    description: string
    _id: string
    uid: string
    __v: number
}

export interface Properties {
    height: string
    mass: string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
    created: string
    edited: string
    name: string
    homeworld: string
    url: string
}

export interface PeopleComponentProps {
    properties: {
        key: string,
        value: string
    }
}