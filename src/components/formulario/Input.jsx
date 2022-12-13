import React, {useState}from "react";
import './Input.css'

export default props => {

    function quandoMudar(e){
        setValor(e.target.value)
    }

    const [valor, setValor] = useState('Inicial')
    return (
        <div className="Input">
            <input value={valor} onChange={quandoMudar}/>
        </div>)
}