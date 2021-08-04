import React from 'react';

const End = ({quizStartAgain}) => {
    return(
        <div className="card has-background-info-dark has-text-primary-light">
            <div className="card-content">
                <div className="content">
                    <h1 className="is-2 has-text-primary-light">Спасибо что прошли наш опрос!</h1>
                    <p className="is-size-4">В ближайшее время с вами свяжется наш менеджер.</p>
                    <button className="glow-on-hover" type="button" onClick={quizStartAgain}>Пройти заново</button>
                </div>
            </div>
        </div>
    )
}

export default End;