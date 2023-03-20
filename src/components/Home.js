import React from 'react';
import { Carousel, Card, Stack, Button } from "react-bootstrap";


import img1 from '../img/carousel1.jpg';
import img2 from '../img/carousel2.jpg';

import img3 from '../img/about-1.jpg';
import img4 from '../img/about-2.jpg';
import img5 from '../img/about-3.jpg';
import img6 from '../img/about-4.jpg';

import img7 from '../img/com-logo1.jpg';
import img8 from '../img/com-logo2.jpg';
import img9 from '../img/com-logo3.jpg';
import img10 from '../img/com-logo4.jpg';
import img11 from '../img/com-logo5.jpg';

import img12 from '../img/testimonial-1.jpg';
import img13 from '../img/testimonial-2.jpg';
import img14 from '../img/testimonial-3.jpg';

export default function Home() {
    return (
        <>
            {/* <!-- Carousel Start --> */}
            <Carousel fade>
                <Carousel.Item interval={7000}>
                    <img
                        className="img-fluid"
                        src={img1}
                        alt=""
                    />
                    <Carousel.Caption>
                        <h2 className="display-5 animated slideInDown mb-4" style={{ color: '#FFF', textShadow: '2px 2px #00B074 ' }}>Encontre o Emprego Perfeito que Você Merece</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={7000}>
                    <img
                        className="img-fluid"
                        src={img2}
                        alt=""
                    />
                    <Carousel.Caption>
                        <h2 className="display-5 animated slideInDown mb-4" style={{ color: '#FFF', textShadow: '2px 2px #00B074 ' }}>Encontre o Trabalho perfeito para você em uma Startup</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* <!-- Carousel End --> */}

            {/* <!-- Search Start --> */}
            <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: '35px' }}>
                <div className="container">
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <input type="text" className="form-control border-0" placeholder="Palavra Chave" />
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0">
                                        <option value="">Categoria</option>
                                        <option value="1">Tecnologia</option>
                                        <option value="2">Recursos Humano</option>
                                        <option value="3">Marketing</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0">
                                        <option value="" >Local</option>
                                        <option value="1">Bahia</option>
                                        <option value="2">São Paulo</option>
                                        <option value="3">Rio de Janeiro </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-dark border-0 w-100">Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Search End --> */}

            {/* <!-- Category Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore por Categoria</h1>
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                                <h6 className="mb-3">Marketing</h6>
                                <p className="mb-0">123 Vagas</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                                <h6 className="mb-3">Atendimento ao Clinte</h6>
                                <p className="mb-0">123 Vagas</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                <h6 className="mb-3">Recursos Humanos</h6>
                                <p className="mb-0">123 Vagas</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-tasks text-primary mb-4"></i>
                                <h6 className="mb-3">Gerenciamento de Projeto</h6>
                                <p className="mb-0">123 Vagas</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-chart-line text-primary mb-4"></i>
                                <h6 className="mb-3">Desenvolvimento de Negócios</h6>
                                <p className="mb-0">123 Vagas</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-hands-helping text-primary mb-4"></i>
                                <h6 className="mb-3">Vendas & Comunicação</h6>
                                <p className="mb-0">123 Vagas</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-book-reader text-primary mb-4"></i>
                                <h6 className="mb-3">Ensino & Educação</h6>
                                <p className="mb-0">123 Vagas</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-drafting-compass text-primary mb-4"></i>
                                <h6 className="mb-3">Design & Creatividade</h6>
                                <p className="mb-0">123 Vagas</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Category End --> */}

            {/* <!-- About Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="row g-0 about-bg rounded overflow-hidden">
                                <div className="col-6 text-start">
                                    <img className="img-fluid w-100" src={img3} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid" src={img4} style={{ width: '85%', marginTop: '15%' }} />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid" src={img5} style={{ width: '85%' }} />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid w-100" src={img6} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="mb-4">Te Ajudamos a Encontrar o melhor Talento ou o melhor Emprego</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
                            <a className="btn btn-primary py-3 px-5 mt-3" href="">Leia Mais</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}

            {/* <!-- Jobs Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Lista de Vagas</h1>
                    <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                        <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                            <li className="nav-item">
                                <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                    <h6 className="mt-n1 mb-0">Destaques</h6>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                    <h6 className="mt-n1 mb-0">Tempo Integral</h6>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                    <h6 className="mt-n1 mb-0">Meio Período</h6>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src={img7} alt="" style={{ width: '80px', height: '80px' }} />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Engenheiro de Software</h5>
                                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Tempo Integral</span>
                                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Candidatar-se</a>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Data: 18 Mar, 2023</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src={img8} alt="" style={{ width: '80px', height: '80px' }} />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Gerente de Marketing</h5>
                                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Tempo Integral</span>
                                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Candidatar-se</a>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Data: 18 Mar, 2023</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src={img9} alt="" style={{ width: '80px', height: '80px' }} />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Designer de Produto</h5>
                                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Tempo Integral</span>
                                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Candidatar-se</a>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Data: 18 Mar, 2023</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src={img10} alt="" style={{ width: '80px', height: '80px' }} />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Diretor Criativo</h5>
                                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Tempo Integral</span>
                                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Candidatar-se</a>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Data: 18 Mar, 2023</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src={img11} alt="" style={{ width: '80px', height: '80px' }} />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Desenvolvedor WordPress</h5>
                                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Tempo Integral</span>
                                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Candidatar-se</a>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Data: 18 Mar, 2023</small>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-primary py-3 px-5" href="">Mais Vagas</a>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src={img7} alt="" style={{ width: '80px', height: '80px' }} />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Engenheiro de Software</h5>
                                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Tempo Integral</span>
                                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Candidatar-se</a>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Data: 18 Mar, 2023</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src={img8} alt="" style={{ width: '80px', height: '80px' }} />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Gerente de Marketing</h5>
                                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Tempo Integral</span>
                                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Candidatar-se</a>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Data: 18 Mar, 2023</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src={img9} alt="" style={{ width: '80px', height: '80px' }} />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Designer de Produto</h5>
                                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Tempo Integral</span>
                                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Candidatar-se</a>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Data: 18 Mar, 2023</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src={img10} alt="" style={{ width: '80px', height: '80px' }} />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Diretor Criativo</h5>
                                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Tempo Integral</span>
                                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Candidatar-se</a>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Data: 18 Mar, 2023</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src={img11} alt="" style={{ width: '80px', height: '80px' }} />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Desenvolvedor WordPress</h5>
                                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Tempo Integral</span>
                                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Candidatar-se</a>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Data: 18 Mar, 2023</small>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-primary py-3 px-5" href="">Mais Vagas</a>
                            </div>
                            <div id="tab-3" className="tab-pane fade show p-0">
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src={img7} alt="" style={{ width: '80px', height: '80px' }} />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Engenheiro de Software</h5>
                                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Meio Período</span>
                                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Candidatar-se</a>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Data: 18 Mar, 2023</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src={img8} alt="" style={{ width: '80px', height: '80px' }} />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Gerente de Marketing</h5>
                                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Meio Período</span>
                                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Candidatar-se</a>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Data: 18 Mar, 2023</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src={img9} alt="" style={{ width: '80px', height: '80px' }} />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Designer de Produto</h5>
                                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Meio Período</span>
                                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Candidatar-se</a>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Data: 18 Mar, 2023</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src={img10} alt="" style={{ width: '80px', height: '80px' }} />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Diretor Criativo</h5>
                                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Meio Período</span>
                                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Candidatar-se</a>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Data: 18 Mar, 2023</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src={img11} alt="" style={{ width: '80px', height: '80px' }} />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Desenvolvedor WordPress</h5>
                                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Meio Período</span>
                                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Candidatar-se</a>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Data: 18 Mar, 2023</small>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-primary py-3 px-5" href="">Mais Vagas</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Jobs End --> */}



            {/* <!-- Cliente --> */}
            <div className="row g-3 px-3" >
                <h2 className="text-center mb-3">Nosso Objetivo é sua Satisfação !!!</h2>
                <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-light p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded" src={img12} style={{ width: '50px', height: '50px' }} />
                            <div className="ps-3">
                                <h5 className="mb-1">Sarah Miller</h5>
                                <small>Desenvolvedora WordPress</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-light p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded" src={img13} style={{ width: '50px', height: '50px' }} />
                            <div className="ps-3">
                                <h5 className="mb-1">Carlos Lacerda</h5>
                                <small>Full Stack Developer</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-light p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded" src={img14} style={{ width: '50px', height: '50px' }} />
                            <div className="ps-3">
                                <h5 className="mb-1">Henrique Nascimento</h5>
                                <small>CEO BluePhlare</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Cliente End --> */}


            {/* <!-- Testimonial Start --> */}
            {/* <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="text-center mb-5">Nosso Objetivo é sua Satisfação !!!</h1>
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item bg-light rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src={img12} style={{ width: '50px', height: '50px' }} />
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-light rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src={img13} style={{ width: '50px', height: '50px' }} />
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-light rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src={img14} style={{ width: '50px', height: '50px' }} />
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-light rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src={img15} style={{ width: '50px', height: '50px' }} />
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Testimonial End --> */}




        </>
    );
}