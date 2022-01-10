import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';
function Navbar() {
    return (
        <header>
            <nav className='container-fluid'>
                <div className='dsmovie-nav-content'>
                    <h1>DsMovie</h1>
                    <a href="https://github.com/devsuperior/sds-dsmovie/tree/main/episodio1">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/devSuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;