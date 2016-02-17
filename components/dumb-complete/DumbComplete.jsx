import React from 'react';
import style from './style.css';
import classNames from 'classnames';



export default props => {

    let options = props.options.map((opt,i) => (
        <a
            key={i}
            className={style['option-item']}
            onClick={ props.onSelect }>
            { opt }
        </a>)
    );

    return (
        <div className={ style['auto-complete'] }>

            <label>{props.label}</label>

            <input
                type="text"
                placeholder={ props.placeholder }
                onKeyDown={ props.onInput }
                onChange={ props.onChange }
                onFocus={ props.onFocus }
                onBlur={ props.onBlur }
                value={ props.value }
                />

            <div>{options}</div>

        </div>

    );



}