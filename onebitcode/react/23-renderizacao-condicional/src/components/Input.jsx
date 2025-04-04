/* 
Se quisermos ainda podemos utilizar o prop-types para validação, como o ESLint recomenda. 
Para isso, instale a biblioteca:
npm install prop-types
*/

import PropTypes from "prop-types"

Input.propTypes = {
    passwordSize: PropTypes.number.isRequired,
    setPasswordSize: PropTypes.func.isre
}

export default function Input(props) {
    return (
        <input
            type="number"
            id="passwordSize"
            min={1}
            value={props.passwordSize}
            onChange={(ev) => props.setPasswordSize(ev.target.value)}
        />
    )
}