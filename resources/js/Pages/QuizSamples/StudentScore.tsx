import { Progress } from 'antd';
import React from 'react'
import MessagePage from '../../Components/MessagePage';
import useTranslate from '../../Hooks/useTranslate';

export default function StudentScore({score}:{score:number}) {
    const t = useTranslate();
    return (
        <MessagePage imgSrc={`/images/${score>10 ? 'success':'failure'}_score.png`}>
            <h2 className='resizable-title'>
                {t('درجتك', 'You score')}
            </h2>
            <Progress type="circle" percent={(score/20)*100} format={()=>score} />
        </MessagePage>
    )
}
