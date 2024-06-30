function Header() {
    return(
        <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

			<div className="container">
				<a className="navbar-brand">Furni<span>.</span></a>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsFurni">
					<ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
						<li className="nav-item active">
							<a className="nav-link">Home</a>
						</li>
						<li><a className="nav-link">Shop</a></li>
						<li><a className="nav-link">About us</a></li>
						<li><a className="nav-link">Services</a></li>
						<li><a className="nav-link">Blog</a></li>
						<li><a className="nav-link">Contact us</a></li>
					</ul>

					<ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
						<li><a className="nav-link"><img src="images/user.svg"/></a></li>
						<li><a className="nav-link"><img src="images/cart.svg"/></a></li>
					</ul>
				</div>
			</div>
				
		</nav>
    )
    
}

export default Header;