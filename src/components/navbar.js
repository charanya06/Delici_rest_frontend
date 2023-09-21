import React from "react";

const Navigation = () => {
  return (
    <div style={{backgroundColor:"rgb(222, 142, 244)"}} >
      <nav className='navbar navbar-expand-md navbar-light  w-100' 
         >
        <div className='container-fluid af-max-width'>
          <a href='/Delici_rest_frontend' className='navbar-brand af-brand-font fs-2 py-0 my-0'>
            <i className='fa fa-bullseye text-danger mr-2'></i>
            DELICI Restobar
          </a>
          <button
            className='navbar-toggler collapsed'
            type='button'
            data-toggle='collapse'
            data-target='#navbar'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-end'
            id='navbarNavAltMarkup'
          >
            <ul className=' navbar-nav mx-auto ' >
              <li className='nav-item px-5 nav-link navbar-icon navbar-font'>
                <a href='/Delici_rest_frontend' className='nav-link'>
                  Home
                </a>
              </li>
              <li className='nav-item px-5 nav-link navbar-icon navbar-font'>
                <a href='/Delici_rest_frontend/menu' className='nav-link'>
                  Menu
                </a>
              </li>
              <li className='nav-item px-5 nav-link navbar-icon navbar-font'>
                <a href='/Delici_rest_frontend/reservation' className='nav-link'>
                  Reservation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
