import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CandidatoEntrevista from './CandidatoEntrevista';
import VagasExterior from './VagaExterior';
import VagasBrasil from './VagasBrasil';



function Candidato() {
    return (
        <>
            <p className="text-primary float-end m-2" >Bem vindo: Carlos Henrique</p>
            <Tabs
                defaultActiveKey="vagabrasil"
                id="uncontrolled-tab-example"
                className="my-5 px-1"
            >
                <Tab eventKey="vagabrasil" title="Vagas Brasil">
                    <VagasBrasil />
                </Tab>
                <Tab eventKey="vagaexterior" title="Vagas Exterior">
                    <VagasExterior />
                </Tab>
                <Tab eventKey="entrevistas" title="Entrevista">
                    <CandidatoEntrevista />
                </Tab>
            </Tabs>
        </>
    )
}

export default Candidato;