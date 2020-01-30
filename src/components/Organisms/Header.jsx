import React from 'react'
import Branding from '../Molecules/Branding'
import MenuNavBar from '../Molecules/MenuNavBar'


const Header = () => (

<header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <Branding />
        <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
        <MenuNavBar />
          
        </div>
      </div>
    </header>

)
export default Header