

export default function Contato() {
    return (
        <>            
        {/* <!-- Contact Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Fale Conosco</h1>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="d-flex align-items-center bg-light rounded p-4">
                                    <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{width: '45px', height: '45px'}}>
                                        <i className="fa fa-map-marker-alt text-primary"></i>
                                    </div>
                                    <span>123 Centro, Salvador-BA, Brasil</span>
                                </div>
                            </div>
                            <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="d-flex align-items-center bg-light rounded p-4">
                                    <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{width: '45px', height: '45px'}}>
                                        <i className="fa fa-envelope-open text-primary"></i>
                                    </div>
                                    <span>info@jobentry.com</span>
                                </div>
                            </div>
                            <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="d-flex align-items-center bg-light rounded p-4">
                                    <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{width: '45px', height: '45px'}}>
                                        <i className="fa fa-phone-alt text-primary"></i>
                                    </div>
                                    <span>+55 71 99999-9999</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <iframe className="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2053.9606942695987!2d-38.513299501868886!3d-12.979138253486552!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1679179252769!5m2!1spt-BR!2sbr"
                            frameborder="0" style={{minHeight: '400px', border:0}} allowfullscreen="" aria-hidden="false"
                            tabindex="0"></iframe>
                    </div>
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.5s">
                            <p className="mb-4">Oferecemos diversos canais de comunicação. Converse com a gente sempre que quiser.</p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Seu Nome" />
                                            <label for="name">Seu Nome</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Seu E-mail" />
                                            <label for="email">Seu E-mail</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Assunto" />
                                            <label for="subject">Assunto</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '150px'}}></textarea>
                                            <label for="message">Mensagem</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Enviar Mensagem</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact End --> */}        
        </>
    );
}