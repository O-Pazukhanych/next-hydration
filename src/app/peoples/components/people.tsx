"use client"

import {PeopleComponentProps} from "@/type/peoples";
import {FC, useState} from "react";

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
                    backgroundColor: '#000'
                }}
                type={'text'}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </div>
    )
}