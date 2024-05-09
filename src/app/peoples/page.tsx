import {peoplesApi} from "@/api/peoples";
import {PeopleByArray} from "@/type/peoples";
import Link from "next/link";

async function getData(): Promise<PeopleByArray[]> {
    const response = await peoplesApi.getPeoples()
    return response.results;
}

export default async function FilmsPage() {
    const peopleList: PeopleByArray[] = await getData();

    return (
        <div>
            {peopleList.map((people: PeopleByArray) => (
                <Link
                    key={people.uid}
                    href={`/peoples/${people.uid}`}
                >
                    <span>{people.name}<br/></span>
                </Link>
            ))}
        </div>
    )
}