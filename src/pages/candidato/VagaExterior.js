import { useState } from 'react';
import InformacaoVaga from './InformacaoVaga';
import img7 from '../../img/com-logo1.jpg';
import img8 from '../../img/com-logo2.jpg';
import img9 from '../../img/com-logo3.jpg';
import img10 from '../../img/com-logo4.jpg';
import img11 from '../../img/com-logo5.jpg';


function VagasExterior() {  

    const [vagas, setVagas] = useState([
        { id: 1, cargo: 'Software Engineer', src: img7, local: 'New York, USA', horario: 'Full Time', valor: '$ 8,000', status: false },
        { id: 2, cargo: 'Programador Web', src: img8, local: 'Braga, Portugal', horario: 'Full Time', valor: '2 000€', status: false },
        { id: 3, cargo: 'Web Developer', src: img9, local: 'Lisboa, Portugal', horario: 'Full Time', valor: '2 500€', status: false },
        { id: 4, cargo: 'Programador Android', src: img10, local: 'Madri, Espanha', horario: 'Full Time', valor: '3 500€', status: false },
        { id: 5, cargo: 'Java/J2EE Developer', src: img11, local: 'Paris, França', horario: 'Full Time', valor: '3 000€ ', status: false }
    ]);

    const mudarStatusVaga = (vagaId) => {
        const updatedVaga = vagas.map((vaga) => {
            if (vaga.id === vagaId) {
                return { ...vaga, status: !vaga.status };
            }
            return vaga;
        });
        setVagas(updatedVaga);
    };

    return (

        <div className="container-xxl ">
            <div className="container">
                <h2 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Vagas no Exterior</h2>
                <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                    <div id="tab-1" className="tab-pane fade show p-0 active">

                        {vagas.map((vaga) => (
                            <div key={vaga.id} className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-6 col-md-4 d-flex align-items-center mb-2">
                                        <img className="flex-shrink-0 img-fluid border rounded" src={vaga.src} alt="" style={{ width: '80px', height: '80px' }} />
                                        <div className="text-start ps-4">
                                            <h5 className="mb-3">{vaga.cargo}</h5>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>{vaga.local}</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>{vaga.horario}</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>{vaga.valor}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center" style={{ marginTop: '-5px' }} >
                                        <div className="d-flex">
                                            <InformacaoVaga vaga={[vaga.cargo,vaga.src,vaga.local,vaga.horario,vaga.valor]} />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center" >
                                        <div className="d-flex mb-3">
                                            {vaga.status ? <button className="btn btn-danger" onClick={() => mudarStatusVaga(vaga.id)} href="">Retirar Candidatura</button> : <button className="btn btn-primary" onClick={() => mudarStatusVaga(vaga.id)} href="">Candidatar-se</button>}
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Data: 18 Mar, 2023</small>
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

export default VagasExterior;