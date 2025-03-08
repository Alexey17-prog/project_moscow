import './Header.css';
import logo from '../../assets/images/logo.jpg';


export const Logo = () => {
    return (
        <div className="logo-container">
            <div className="logo">
                <img src={logo} alt="Логотип" style={{ width: "250px", height: "60px", borderRadius: "5px" }} />
            </div>
        </div>
    );
};