const Header = () => {
  return (
    <>
      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              {' '}
              <span className='sr-only'>Toggle navigation</span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
            </button>
            <a className='navbar-brand page-scroll' href='/'>
              Bugendaitech Car Rental
            </a>{' '}
          </div>

          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='/' className='page-scroll'>
                  Home
                </a>
              </li>
              <li>
                <a href='/#about' className='page-scroll'>
                  About
                </a>
              </li>
              <li>
                <a href='/#services' className='page-scroll'>
                  Services
                </a>
              </li>
              <li>
                <a href='/#pricing' className='page-scroll'>
                  Pricing
                </a>
              </li>

              <li>
                <a href='/#features' className='page-scroll'>
                  Cars
                </a>
              </li>
              <li>
                <a href='/#contact' className='page-scroll'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
