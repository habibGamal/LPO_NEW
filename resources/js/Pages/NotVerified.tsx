import { faClose, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Inertia } from '@inertiajs/inertia'
import { Button } from 'antd'
import React from 'react'
import MessagePage from '../Components/MessagePage'
import useTranslate from '../Hooks/useTranslate'

export default function NotVerified() {
    const t = useTranslate();
    return (
        <MessagePage imgSrc='/images/security_measure.png'>
            <h2 className='resizable-title text-red-500'>
                {t('بريدك الالكتروني لم يتم تأكيده بعد', 'Your email isn\'t verified yet')}
            </h2>
            <FontAwesomeIcon size='6x' className='text-red-600 ' icon={faQuestionCircle} />

            <Button className='text-xl my-4' onClick={() => Inertia.post('/email/verification-notification')} type='link'>{t('اعادة ارسال التأكيد', 'Resend email verification')} </Button>
        </MessagePage>
    )
}
