import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import EmpresaVaga from './EmpresaVaga';
import EmpresaEntrevista from './EmpresaEntrevista'

function Empresa() {
        return (
                <>
                        <p className="text-primary float-end m-2" >Bem vindo: TechCom</p>
                        <Tabs
                                defaultActiveKey="empresavaga"
                                id="uncontrolled-tab-example"
                                className="my-5 px-1"
                        >
                                <Tab eventKey="empresavaga" title="Vagas">
                                        <EmpresaVaga />
                                </Tab>
                                <Tab eventKey="empresaentrevista" title="Entrevistas">
                                        <EmpresaEntrevista />
                                </Tab>
                        </Tabs>
                </>
        );
}
export default Empresa;