import {peoplesApi} from "@/api/peoples";
import {PeopleType} from "@/type/peoples";
import Link from "next/link";
import {People} from "@/app/peoples/components/people";

async function getData(id: number): Promise<PeopleType> {
    const response = await peoplesApi.getPeople(id)
    return response.result;
}

export default async function FilmsPage({params}: any) {
    const people: PeopleType = await getData(params.id);
    return (
        <div>
            {Object.entries(people.properties).map(([key, value], index) => (
                <People
                    key={index}
                    properties={{key, value}}
                />
            ))}
            <Link
                href="/peoples"
                className={'text-5xl'}
            >
                <h2>Go back</h2>
            </Link>
        </div>
    )
}