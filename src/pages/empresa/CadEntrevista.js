import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';




function CadEntrevista() {

    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);

    return (
        <>
            <Button onClick={() => setLgShow(true)}>Cadastrar Entrevista</Button>

            <Modal
                size="xl"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Cadastrar Entrevista</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <!-- Job Detail Start --> */}
                    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="container">
                            <div className="row gy-5 gx-4">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <Form.Select id="disabledSelect">
                                                    <option value="1">Engenheiro de Software</option>
                                                    <option value="2">Desenvolvedor .Net Senior</option>
                                                    <option value="3">Desenvolvedor BackEnd</option>
                                                </Form.Select>
                                                <label for="cargo">Cargo</label>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <Form.Select id="disabledSelect">
                                                    <option value="1">João Henrique</option>
                                                    <option value="2">Bruno Reis</option>
                                                    <option value="3">Arthur Costa</option>
                                                </Form.Select>
                                                <label for="cargo">Candidato</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="date" className="form-control" id="data" placeholder="Data" required />
                                                <label for="subject">Data</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="horario" placeholder="Horário" required />
                                                <label for="descricao">Horário</label>
                                            </div>
                                        </div>                                        
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Cadastrar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Job Detail End --> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default CadEntrevista;