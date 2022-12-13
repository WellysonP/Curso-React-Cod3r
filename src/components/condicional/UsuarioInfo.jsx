import React from "react";
import If, {Else} from "./If";


export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
                <Else>
                Seja bem vindo <strong>My litle friend</strong>!
                </Else>
            </If>
            {/* <If test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>My litle friend</strong>!
            </If> */}
        </div>
    )
}