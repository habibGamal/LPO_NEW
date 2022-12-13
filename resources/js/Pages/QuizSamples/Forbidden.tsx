import React from 'react'
import MessagePage from '../../Components/MessagePage'
import useTranslate from '../../Hooks/useTranslate'

export default function Forbidden() {
    const t = useTranslate();
    return (
        <MessagePage imgSrc='/images/forbidden.png'>
            <h2 className='resizable-title text-red-500'>
                {t('لا يمكنك دخول الامتحان في الوقت الحالي', 'You can\'t access the quiz right now')}
            </h2>
        </MessagePage>
    )
}
