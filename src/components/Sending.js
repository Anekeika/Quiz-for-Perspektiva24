import React, {useState} from 'react';

const End = (results) => {
    const [customerData, setCustomerData] = useState([])
    const [communication, setCommunication] = useState('')


    const sendClickHandler = (results, customerData) => {
        console.log(customerData)
        console.log(results)
        console.log(communication)
    }

    function changeHandler(index, e) {
        setCustomerData([...customerData.slice(0, index), e.target.value, ...customerData.slice(index + 1)]);
    }

    const changeCommunicationHandler = (e) => {
        setCommunication(e.target.value);
    }

    return (
        <div className="card">
            <div className="card-content">
                <div className="content ">
                    <h2 className="mb-5">Заполните данные для отправки</h2>
                    <div className="control">
                        <input className="input is-rounded input-end" name='name' type='text'
                               onChange={event => changeHandler(0, event)} placeholder='Введите имя....'/>
                    </div>
                    <div className="control">
                        <input className="input is-rounded input-end" name='surname' type='text'
                               onChange={event => changeHandler(1, event)}
                               placeholder='Введите фамилию (не обязательно)....'/>
                    </div>
                    <div className="control">
                        <input className="input is-rounded input-end" type="email"
                               onChange={event => changeHandler(2, event)} placeholder="Введите почту...."
                               required/>
                    </div>
                    <div className="control">
                        <input className="input is-rounded input-end" name='phone' type='num'
                               onChange={event => changeHandler(3, event)}
                               placeholder='Введите телефон....'/>
                    </div>
                    <div className="control">
                        <p>Как свами лучше связаться?</p>
                        <label className="radio">
                            <input type="radio" name="foobar" value='Mail' onChange={changeCommunicationHandler}/>По почте
                        </label>
                        <label className="radio">
                            <input type="radio" name="foobar" value='Phone'onChange={changeCommunicationHandler}/>По телефону
                        </label>
                        <label className="radio">
                            <input type="radio" name="foobar" value='WhatsApp'onChange={changeCommunicationHandler}/>По вацапу
                        </label>
                    </div>

                    {/*<div className="has-text-danger">error</div>*/}
                    <button className="button is-link is-medium is-fullwidth mt-4 glow-on-hover" type="submit"
                            onClick={() => sendClickHandler(results, customerData, communication)}>Отправить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default End;