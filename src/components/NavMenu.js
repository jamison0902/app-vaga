

export default function NavMenu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a href="/" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                    <h1 className="m-0 text-primary">JobEntry</h1>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="/" className="nav-item nav-link">Home</a>
                        <a href="/sobre" className="nav-item nav-link">Sobre</a>
                        <a href="/candidato" className="nav-item nav-link">Candidato</a>
                        <a href="/empresa" className="nav-item nav-link">Empresa</a>
                        <a href="/contato" className="nav-item nav-link">Contato</a>
                    </div>
                </div>
            </nav>
        </>
    );
}