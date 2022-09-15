import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Link } from 'react-router-dom';

const Car = () => {
  const [stdate, onChange] = useState(new Date());
  const [enddate, onChangedrop] = useState(new Date());
  const [location, setLocation] = useState({ pick: '', drop: '' });
  const { pick, drop } = location;

  const changeHandler = (e) => {
    setLocation({ ...location, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div id='features' className='text-center'>
        <div className='container'>
          <div className='col-md-10 col-md-offset-1 section-title'>
            <h2>Make your trip</h2>
          </div>
          <div className='row'>
            <div className='col-md-4 d-flex align-items-center'>
              <form action='#' className='request-form '>
                <div className='form-group'>
                  <label htmlFor='' className='label'>
                    Pick-up location
                  </label>
                  <input
                    type='text'
                    name='pick'
                    className='form-control'
                    placeholder='City, Airport, Station, etc'
                    value={pick}
                    onChange={changeHandler}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='' className='label'>
                    Drop-off location
                  </label>
                  <input
                    type='text'
                    name='drop'
                    className='form-control'
                    placeholder='City, Airport, Station, etc'
                    value={drop}
                    onChange={changeHandler}
                  />
                </div>
                <div className='d-flex'>
                  <div className='form-group mr-2'>
                    <label htmlFor='' className='label'>
                      Pick-up date time
                    </label>
                    <DateTimePicker
                      onChange={onChange}
                      value={stdate}
                      id='book_pick_date'
                    />
                  </div>
                  <div className='form-group ml-2'>
                    <label htmlFor='' className='label'>
                      Drop-off date time
                    </label>
                    <DateTimePicker
                      onChange={onChangedrop}
                      value={enddate}
                      id='book_drop_date'
                      className='form-control'
                    />
                  </div>
                </div>

                <div className='form-group'>
                  <p>
                    <Link
                      to='/booking'
                      state={{
                        from: pick,
                        to: drop,
                        dt1: stdate,
                        dt2: enddate,
                      }}
                      className='btn btn-primary py-3 px-4'
                    >
                      Rent A Car Now
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            <div className='col-md-8 d-flex align-items-center'>
              <div className='services-wrap rounded-right w-100'>
                <h3 className='heading-section mb-4'>
                  Better Way to Rent Your Perfect Cars
                </h3>
                <div className='row d-flex mb-4'>
                  <div className='col-md-4 d-flex align-self-stretch ftco-animate'>
                    <div className='services w-100 text-center'>
                      <div className='icon d-flex align-items-center justify-content-center'>
                        <span className='flaticon-route'></span>
                      </div>
                      <div className='text w-100'>
                        <h3 className='heading mb-2'>
                          Choose Your Pickup Location
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 d-flex align-self-stretch ftco-animate'>
                    <div className='services w-100 text-center'>
                      <div className='icon d-flex align-items-center justify-content-center'>
                        <span className='flaticon-handshake'></span>
                      </div>
                      <div className='text w-100'>
                        <h3 className='heading mb-2'>Select the Best Deal</h3>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 d-flex align-self-stretch ftco-animate'>
                    <div className='services w-100 text-center'>
                      <div className='icon d-flex align-items-center justify-content-center'>
                        <span className='flaticon-rent'></span>
                      </div>
                      <div className='text w-100'>
                        <h3 className='heading mb-2'>
                          Reserve Your Rental Car
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  <a href='#' className='btn btn-primary py-3 px-4'>
                    Reserve Your Perfect Car
                  </a>
                </p>
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Car;
