

export default function Footer() {
    return (
        <>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Conheça-nos</h5>
                            <a className="btn btn-link text-white-50" href="">Sobre</a>
                            <a className="btn btn-link text-white-50" href="">Fale Conosco</a>
                            <a className="btn btn-link text-white-50" href="">Serviços</a>
                            <a className="btn btn-link text-white-50" href="">Política de Privacidade</a>
                            <a className="btn btn-link text-white-50" href="">Termos & Condições</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Links</h5>
                            <a className="btn btn-link text-white-50" href="">Sobre</a>
                            <a className="btn btn-link text-white-50" href="">Fale Conosco</a>
                            <a className="btn btn-link text-white-50" href="">Serviços</a>
                            <a className="btn btn-link text-white-50" href="">Política de Privacidade</a>
                            <a className="btn btn-link text-white-50" href="">Termos & Condições</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Contato</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Centro, Salvador-BA, Brasil</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+55 71 99999-9999</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@jobentry.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Newsletter</h5>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative mx-auto" style={{maxWidth: '400px'}}>
                                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Seu e-mail" />
                                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Inscrever-se</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-bottom" href="#">JobEntry - Portal de Empregos</a>, All Right Reserved.                               
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Ajuda</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End-- > */ }


    {/* < !--Back to Top-- > */ }
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </>
    );
}