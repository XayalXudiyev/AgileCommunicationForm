import Logo from '/Logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className=''>Agile Communication Framework<sup>™ </sup><span>(BETA)</span></div>
            <div>
                <p>for Digital Transformation by </p>
                <span>
                    <img src={Logo} style={{ width: '100px' }} alt="" />
                </span>
            </div>
            <div>Cheweek Project Sample for Frontend</div>
        </div>
    )
}

export default Header