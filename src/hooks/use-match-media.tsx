import {useLayoutEffect, useState} from "react";

export const useMatchMedia = (query: string) => {
    const mediaQuery = matchMedia(query)

    const getValue = () => mediaQuery.matches

    const [matchState, setMatchState] = useState<boolean>(getValue())

    useLayoutEffect(() => {
        mediaQuery.onchange = () => {
            setMatchState(getValue())
        }

        return () => {
            mediaQuery.onchange = null
        }
    })

    return matchState
}