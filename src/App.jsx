import React from "react";
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import Card from './components/layout/Card'
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Aluno from './components/repeticao/Alunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import './App.css';

export default () =>
(<div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
        <Card titulo='#010- Contador' color="#829079">
            <Contador numeroInicial={10}></Contador>
        </Card>

        <Card titulo='#09- Componente Controlado' color="#a8c66c">
            <Input />
        </Card>

        <Card titulo='#08- Comunicação Indireta' color="#26495c">
            <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo='#07- Comunicação Direta' color="#ecc19c">
            <DiretaPai></DiretaPai>
        </Card>

        <Card titulo='#06- Renderização Condicional' color="#e75874">
            <ParOuImpar numero={20}></ParOuImpar>
            <UsuarioInfo usuario={{ nome: "Wellyson" }}></UsuarioInfo>
            <UsuarioInfo usuario={{ email: "Wellyson" }}></UsuarioInfo>
        </Card>

        <Card titulo='#05- Tabela de Produtos' color="#3A9AD9">
            <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo='#04- Repetição' color="#FA6950">
            <Aluno></Aluno>
        </Card>

        <Card titulo='#03- Componente com Filhos' color="#FA6900">
            <Familia sobrenome="Marreiro">
                <FamiliaMembro nome="Pedro" />
                <FamiliaMembro nome='Wellyson' />
                <FamiliaMembro nome="Hivila" />
            </Familia>
        </Card>

        <Card titulo='#02- Desafio Aleatório' color="#080">
            <Aleatorio min={0} max={10} />
        </Card>

        <Card titulo='#01- Desafio Aleatório'>
            <Primeiro />
        </Card>
    </div>
</div>)
