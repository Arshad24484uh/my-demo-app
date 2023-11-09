import Image from 'next/image';
import '../app/css/navbar.css';
import logo from '../../public/type/logo.png';
const Homepage = ()=>{
  return(
    <>
     <div className="navbar">
  <div className='nav-image'>
    <Image src={logo}
    alt='logo'
    className='logo'
    />
  </div>
  <div className='select-location'>
  <span id='location-icon' className="material-symbols-outlined">
location_on
</span>
<span>Select Location</span>
  </div>
  <div className='account-icon'>
  <span id='account-icon' className="material-symbols-outlined">
account_circle
</span>
<span>My Account</span>
  </div>
     </div> 
    </>
  )
}
export default Homepage;