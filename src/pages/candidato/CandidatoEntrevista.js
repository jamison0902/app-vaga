import { useState } from 'react';
import img7 from '../../img/com-logo1.jpg';
import img11 from '../../img/com-logo5.jpg';


function CandidatoEntrevista() {

    const [entrevistas, setEntrevistas] = useState([
        { id: 1, cargo: 'Engenheiro de Software', src: img7, local: 'Salvador-BA, Brasil', horario: 'Tempo Integral', valor: 'R$ 12.000,00',data:'22/03/2023',hora:'14:00', status: false },
        { id: 2, cargo: 'Full Stack Developer', src: img11, local: 'New York, USA', horario: 'Full Time', valor: '$ 8,000',data:'03/04/2023',hora:'09:00', status: false }        
    ]);

    const mudarStatusEntrevista = (entrevistaId) => {
        const updatedEntrevista = entrevistas.map((entrevista) => {
            if (entrevista.id === entrevistaId) {
                return { ...entrevista, status: !entrevista.status };
            }
            return entrevista;
        });
        setEntrevistas(updatedEntrevista);
    };

    return (

        <div className="container-xxl ">
            <div className="container">
                <h2 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Entrevistas</h2>
                <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                    <div id="tab-1" className="tab-pane fade show p-0 active">

                        {entrevistas.map((entrevista) => (
                            <div key={entrevista.id} className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-6 col-md-4 d-flex align-items-center mb-2">
                                        <img className="flex-shrink-0 img-fluid border rounded" src={entrevista.src} alt="" style={{ width: '80px', height: '80px' }} />
                                        <div className="text-start ps-4">
                                            <h5 className="mb-3">{entrevista.cargo}</h5>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>{entrevista.local}</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>{entrevista.horario}</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>{entrevista.valor}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center" style={{ marginTop: '-5px' }} >
                                        <div className="d-flex">
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Data: {entrevista.data}</small>
                                        </div>
                                        <div className="d-flex">
                                            <small className="text-truncate"><i className="far fa-clock text-primary me-2"></i>Horário: {entrevista.hora}</small>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center" >
                                        <div className="d-flex mb-3">
                                            {entrevista.status ? <button className="btn btn-danger" onClick={() => mudarStatusEntrevista(entrevista.id)} href="">Recusar</button> : <button className="btn btn-primary" onClick={() => mudarStatusEntrevista(entrevista.id)} href="">Aceitar</button>}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CandidatoEntrevista;