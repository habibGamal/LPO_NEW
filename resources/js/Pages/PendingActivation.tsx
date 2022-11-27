import { faLock, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Inertia } from '@inertiajs/inertia'
import { Button } from 'antd'
import React from 'react'
import MessagePage from '../Components/MessagePage'
import useTranslate from '../Hooks/useTranslate'

export default function PendingActivation() {
    const t = useTranslate();
    return (
        <MessagePage imgSrc='/images/security_measure.png'>
           <h2 className='resizable-title text-red-500'>
                {t('برجاء انتظار تفعيل حسابك', 'Please wait the activation of your account')}
            </h2>
            <FontAwesomeIcon size='6x' className='text-red-600 ' icon={faLock} />
        </MessagePage>
    )
}
