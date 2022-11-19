import React from "react";
import { Button } from "antd";
import useTranslate from "../Hooks/useTranslate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Steps({ index, children, back }: { index: number, children: JSX.Element[], back: () => void }) {
    const t = useTranslate();
    return (
        <div className='relative'>
            {
                index === 0 ||
                <Button className='!rounded-full' size='large' onClick={() => back()} icon={<FontAwesomeIcon icon={t(faArrowRight, faArrowLeft)} />} />
            }
            {children[index]}
        </div>
    )
}
