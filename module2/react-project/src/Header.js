const Header = ()=>{
    return (
        <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <a href="" className="navbar-brand">The Steaping Stone</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/"> Home</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/"> About</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/"> Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header