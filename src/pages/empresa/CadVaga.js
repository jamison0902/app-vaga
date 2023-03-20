import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




function CadVaga() {

    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);

    return (
        <>
            <Button onClick={() => setLgShow(true)}>Cadastrar Vaga</Button>

            <Modal
                size="xl"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Cadastrar Vaga</Modal.Title>
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
                                                <input type="text" className="form-control" id="cargo" placeholder="Digite o Cargo" required />
                                                <label for="cargo">Cargo</label>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="local" placeholder="Local" required />
                                                <label for="local">Local</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="cargahorario" placeholder="Carga Horária" required />
                                                <label for="subject">Carga Horária</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="descricao" placeholder="Descrição" required />
                                                <label for="descricao">Descrição</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Atribuição" style={{height: '100px'}}></textarea>
                                                <label for="atribuicao">Atribuição</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Qualificação" style={{minHeight: '100px'}}></textarea>
                                                <label for="qualificacao">Qualificação</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="salario" placeholder="Salário" required />
                                                <label for="salario">Salário</label>
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

export default CadVaga;