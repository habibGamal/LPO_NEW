import React, { useContext } from 'react';
import { ContextApi } from '../Contexts/AppContext';
export default function useTranslate() {
    const [appState] = useContext(ContextApi)!
    const t = (ar:any, en:any) => {
        return appState.lang  === 'en' ? en : ar;
    }
    return t;
}
