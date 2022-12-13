import React from "react";

export default props => {
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                function () {
                    props.quandoClicar('João', 45, true)
                }
            }>
                Fornecer Informações
            </button>
        </div>
    )
}