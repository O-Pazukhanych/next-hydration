import {PeopleResponse, PeoplesResponse} from "@/type/peoples";
import {ErrorResponse} from "@/type/response";

class PeoplesApi {
    getPeoples(): Promise<PeoplesResponse | ErrorResponse> {
        return fetch('https://www.swapi.tech/api/people/', {
            next: {
                revalidate: 3
            }
        })
            .then(async (res) => {
                const data = await res?.json();
                return {
                    status: res.status,
                    data: data
                }
            })
            .catch((error) => {
                return {
                    message: error.toString()
                }
            })
    }

    getPeople(id: number): Promise<PeopleResponse> {
        return fetch(`https://www.swapi.tech/api/people/${id}/`)
            .then((res) => res.json());
    }
}

export const peoplesApi = new PeoplesApi();