import React from "react";
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

export default (props) =>
(<div>
    <h1>Fundamentos React</h1>
    <Card titulo='Desafio Aleatório'>
        <Aleatorio min={1} max={2} />
    </Card>
    <Card titulo='Desafio Aleatório'>
        <Aleatorio min={1} max={2} />
    </Card>
</div>)
