import { useState } from "react";

export default function useModal<T>(): [{
    isOpen: boolean;
    data: T | null;
}, () => void, () => void, (data: T) => void] {
    const [modalState, setModalState] = useState<{ isOpen: boolean, data: T | null }>({
        isOpen: false,
        data: null,
    });
    const open = () => {
        setModalState(state => ({ ...state, isOpen: true }));
    };
    const close = () => {
        setModalState(state => ({ ...state, isOpen: false }));
    };
    const setModalData = (data: T) => {
        setModalState(state => ({ isOpen: true, data }));
    }
    return [modalState, open, close, setModalData];
}
