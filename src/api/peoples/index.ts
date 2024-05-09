import {PeopleResponse, PeoplesResponse} from "@/type/peoples";

class PeoplesApi {
    getPeoples(): Promise<PeoplesResponse> {
        return fetch('https://www.swapi.tech/api/people/')
            .then((res) => res.json());
    }

    getPeople(id: number): Promise<PeopleResponse> {
        return fetch(`https://www.swapi.tech/api/people/${id}/`)
            .then((res) => res.json());
    }
}

export const peoplesApi = new PeoplesApi();