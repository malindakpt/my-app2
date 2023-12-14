import './banner.scss';
import { FC } from 'react';

export const Banner: FC<{ title: string; body: string, leftImage: any, rightImage: any }> = ({ title, body, leftImage, rightImage }) => <>
    <div>
        {leftImage && <div className='image'>
            <img src={leftImage} />
        </div>}
        <div className='content'>
            <div className='title'>
                {title}
            </div>
            <div className='body'>
                {body}
            </div>
            <div className='button'>

            </div>
        </div>
        {rightImage && <div className='image'>
            <img src={rightImage} />
        </div>}
    </div>
</>