import React, {useState} from 'react'

const Slider = ({onSetStep}) => {

    const [value, setValue] = useState('6000000')

    const valueHandler = (e) => {setValue([e.target.value])}

    const nextClickHandler = (e) => {
        {
            onSetStep(4);
        }
    }



    return (
        <div className="card has-background-info-dark has-text-primary-light">
            <div className="card-content">
                <div className="content">
                    <h2 className="card-header-title mb-0 is-3 has-text-primary-light">Укажите примерную стоимость:</h2>
                    <div>
                    <input
                        value={value}
                        className="slider-input input is-rounded"
                        name='cost'
                        type='number'
                        min="6000000"
                        max="50000000"
                        step="100000"
                        onChange={e => valueHandler(e)}
                        placeholder={value}
                    />
                    </div>
                    <div>
                    <input
                        className="slider mt-4"
                        type="range"
                        min="6000000"
                        max="50000000"
                        step="100000"
                        onChange={e => valueHandler(e)}
                        value={value}
                    />
                    </div>
                </div>
                <button
                    className="glow-on-hover"
                    type="button"
                    onClick={nextClickHandler}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Slider;