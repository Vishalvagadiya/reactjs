import './App.css';

function  Header(){
    return (
    <header>
        <div className="navbar">
            <div className="logo">
                <img src="image/logo.png.webp" alt="" />
            </div>
            <div className="nav-contain">
                <p>Home</p>
                <p>About</p>
                <p>Blog</p>
                <p>Pages</p>
                <p>Service</p>
                <p>Contact</p>

            </div>
        </div>
    </header>
    )
}

export default Header;