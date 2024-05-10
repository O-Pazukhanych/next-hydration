import {peoplesApi} from "@/api/peoples";
import {PeopleByArray} from "@/type/peoples";
import Link from "next/link";
import NotData from "@/app/peoples/components/not-data";

async function getData(): Promise<PeopleByArray[] | any> {
    const response = await peoplesApi.getPeoples();
    if ('status' in response) {
        if (response.status >= 200 && response.status < 300) {
            return {
                peopleList: response.data.results,
                message: response.data.message
            };
        } else if (response.status >= 300 && response.status < 400) {
            return {
                peopleList: response.data?.results || [],
                message: response.data.message
            };
        } else if (response.status >= 400 && response.status < 500) {
            return {
                peopleList: [],
                message: response.data.message
            };
        } else if (response.status >= 500 && response.status < 600) {
            return {
                peopleList: [],
                message: response.data.message
            };
        }
    } else {
        return {
            peopleList: [],
            message: response.message
        };
    }
}

export default async function FilmsPage() {
    const {
        peopleList,
        message
    } = await getData();

    return (
        <div>
            {peopleList.length > 0 ? peopleList.map((people: PeopleByArray) => (
                <Link
                    key={people.uid}
                    href={`/peoples/${people.uid}`}
                >
                    <span>{people.name}<br/></span>
                </Link>
            )) : <NotData message={message}/>}
            <br/>
            <Link
                href={'/'}
                className={'text-3xl'}
            >
                <h2>Go to home page</h2>
            </Link>
        </div>
    )
}