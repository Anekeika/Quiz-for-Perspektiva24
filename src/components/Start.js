import React from 'react';

const Start = ({onQuizStart}) => {
    return(

        <div className="card has-background-info-dark has-text-primary-light">
            <div className="card-content">
                <div className="content is-medium">
                    <h1 className="title is-2 has-text-primary-light">Выгодные предложения от застройщиков только у нас!</h1>
                    <p className="">Получите подбор новостроек под Ваши критерии в кратчайшие сроки</p>
                    <button className="glow-on-hover" type="button" onClick={onQuizStart}><p className="is-size-4">Начнем!</p></button>
                </div>
            </div>
        </div>
    )
}

export default Start;