'use client'

import { useRouter } from 'next/navigation'

import {useEffect, useState} from "react";
import {ErrorResponse} from "@/type/response";

export default function NotData(props: ErrorResponse) {
    const {
        message
    } = props;

    const router = useRouter();

    const [timeToRedirect, setTimeToRedirect] = useState<number>(5);

    useEffect(() => {
        if (timeToRedirect < 0) router.replace('/');
        setTimeout(() => {
            setTimeToRedirect(timeToRedirect - 1);
        }, 1000)
    }, [timeToRedirect]);

    return (
        <div>
            <p>Something went wrong: <span style={{color: "lightcoral"}}>{message}</span></p>
            {timeToRedirect >= 0 ?
                <p>Redirect to main page: {timeToRedirect}...</p> :
                <p>Redirect to main page: loading...</p>
            }
        </div>
    )
}