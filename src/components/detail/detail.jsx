import React from 'react';

const Detail = (props) => {
  console.log('#############' + props);
  console.log('#############' + JSON.stringify(props));

  return (
    <div className='text-center'>
      <h3>{props.data.title}</h3>
      <div className='container'>
        <div className='ftco-section ftco-car-details'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-12'>
                <div className='car-details'>
                  <div className='img rounded'>
                    <img
                      alt=''
                      src={props.data.img}
                      width='100%'
                      height='500px'
                    ></img>
                  </div>
                  <div className='text-center'>
                    <span className='subheading'>Cheverolet</span>
                  </div>
                  <br></br>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-sm-2 d-flex align-self-stretch ftco-animate'>
                <div className='media block-6 services'>
                  <div className='media-body py-md-4'>
                    <div className='d-flex mb-3 align-items-center'>
                      <div className='icon d-flex align-items-center justify-content-center'>
                        <span className='flaticon-dashboard'></span>
                      </div>
                      <div className='text'>
                        <h3 className='heading mb-0 pl-3'>
                          Mileage
                          <span>{props.data.mileage}</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-3 d-flex align-self-stretch ftco-animate'>
                <div className='media block-6 services'>
                  <div className='media-body py-md-4'>
                    <div className='d-flex mb-3 align-items-center'>
                      <div className='icon d-flex align-items-center justify-content-center'>
                        <span className='flaticon-pistons'></span>
                      </div>
                      <div className='text'>
                        <h3 className='heading mb-0 pl-3'>
                          Transmission
                          <span>{props.data.type}</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-2 d-flex align-self-stretch ftco-animate'>
                <div className='media block-6 services'>
                  <div className='media-body py-md-4'>
                    <div className='d-flex mb-3 align-items-center'>
                      <div className='icon d-flex align-items-center justify-content-center'>
                        <span className='flaticon-car-seat'></span>
                      </div>
                      <div className='text'>
                        <h3 className='heading mb-0 pl-3'>
                          Seats
                          <span>{props.data.seat} Adults</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-2 d-flex align-self-stretch ftco-animate'>
                <div className='media block-6 services'>
                  <div className='media-body py-md-4'>
                    <div className='d-flex mb-3 align-items-center'>
                      <div className='icon d-flex align-items-center justify-content-center'>
                        <span className='flaticon-backpack'></span>
                      </div>
                      <div className='text'>
                        <h3 className='heading mb-0 pl-3'>
                          Luggage
                          <span>4 Bags</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-3 d-flex align-self-stretch ftco-animate'>
                <div className='media block-6 services'>
                  <div className='media-body py-md-4'>
                    <div className='d-flex mb-3 align-items-center'>
                      <div className='icon d-flex align-items-center justify-content-center'>
                        <span className='flaticon-diesel'></span>
                      </div>
                      <div className='text'>
                        <h3 className='heading mb-0 pl-3'>
                          Fuel
                          <span>{props.data.fuel}</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12 pills'>
                <div>
                  <div className='d-flex justify-content-center'>
                    <ul
                      className='nav nav-pills mb-3'
                      id='pills-tab'
                      role='tablist'
                    >
                      <li className='nav-item'>
                        <a
                          className='nav-link active'
                          id='pills-description-tab'
                          data-toggle='pill'
                          href='#pills-description'
                          role='tab'
                          aria-controls='pills-description'
                          aria-expanded='true'
                        >
                          Features
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className='nav-link'
                          id='pills-manufacturer-tab'
                          data-toggle='pill'
                          href='#pills-manufacturer'
                          role='tab'
                          aria-controls='pills-manufacturer'
                          aria-expanded='true'
                        >
                          Description
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className='nav-link'
                          id='pills-review-tab'
                          data-toggle='pill'
                          href='#pills-review'
                          role='tab'
                          aria-controls='pills-review'
                          aria-expanded='true'
                        >
                          Review
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className='tab-content' id='pills-tabContent'>
                    <div
                      className='tab-pane active'
                      id='pills-description'
                      role='tabpanel'
                      aria-labelledby='pills-description-tab'
                    >
                      <div className='row'>
                        <div className='col-md-4'>
                          <ul className='features'>
                            <li className='check'>
                              <span className='ion-ios-checkmark'></span>
                              Airconditions
                            </li>
                            <li className='check'>
                              <span className='ion-ios-checkmark'></span>Child
                              Seat
                            </li>
                            <li className='check'>
                              <span className='ion-ios-checkmark'></span>GPS
                            </li>
                            <li className='check'>
                              <span className='ion-ios-checkmark'></span>Luggage
                            </li>
                            <li className='check'>
                              <span className='ion-ios-checkmark'></span>Music
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-4'>
                          <ul className='features'>
                            <li className='check'>
                              <span className='ion-ios-checkmark'></span>Seat
                              Belt
                            </li>
                            <li className='remove'>
                              <span className='ion-ios-close'></span>Sleeping
                              Bed
                            </li>
                            <li className='check'>
                              <span className='ion-ios-checkmark'></span>Water
                            </li>
                            <li className='check'>
                              <span className='ion-ios-checkmark'></span>
                              Bluetooth
                            </li>
                            <li className='remove'>
                              <span className='ion-ios-close'></span>Onboard
                              computer
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-4'>
                          <ul className='features'>
                            <li className='check'>
                              <span className='ion-ios-checkmark'></span>Audio
                              input
                            </li>
                            <li className='check'>
                              <span className='ion-ios-checkmark'></span>Long
                              Term Trips
                            </li>
                            <li className='check'>
                              <span className='ion-ios-checkmark'></span>Car Kit
                            </li>
                            <li className='check'>
                              <span className='ion-ios-checkmark'></span>Remote
                              central locking
                            </li>
                            <li className='check'>
                              <span className='ion-ios-checkmark'></span>Climate
                              control
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
