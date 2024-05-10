"use client"

import {PeopleComponentProps} from "@/type/peoples";
import {FC, useState} from "react";
import {getCookieByName} from "@/utils/cookie";

export const People: FC<PeopleComponentProps> = (props) => {
    const {
        properties
    } = props;

    const [value, setValue] = useState<string>(properties.value);

    return (
        <div>
            <span>{properties.key}: </span>
            <input
                style={{
                    background: getCookieByName('theme') === 'light' ? '#fff' : '#000',
                    color: getCookieByName('theme') === 'light' ? '#000' : '#fff'
                }}
                type={'text'}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </div>
    )
}