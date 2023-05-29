import React, { useEffect, useState } from 'react'

type AppState = {
    auth: boolean,
    lang: string,
    flashMessage: {
        message: string,
        type: "success" | "info" | "warning" | "error",
    } | null,
}

export const ContextApi = React.createContext<[AppState, React.Dispatch<React.SetStateAction<AppState>>] | null>(null);

export default function AppContext({ children }: { children: JSX.Element }) {
    const [appState, setAppState] = useState<AppState>({
        auth: false,
        lang: 'en',
        flashMessage: null,
    })
    useEffect(() => {
        const lang = localStorage.getItem('lang')
        if (lang) {
            setAppState((state) => ({ ...state, lang }))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('lang', appState.lang)
        document.documentElement.lang = appState.lang
    }, [appState.lang])


    return (
        <ContextApi.Provider value={[appState, setAppState]}>
            {children}
        </ContextApi.Provider>
    )
}
