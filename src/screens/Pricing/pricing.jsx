const Pricing = (props) => {
  return (
    <>
      <div id='pricing'>
        <div className='container'>
          <div className='col-md-10 col-md-offset-1 section-title'>
            <h2>Pricing</h2>
          </div>
          <div className='row ftco-section ftco-cart'>
            <div className='col-md-12 ftco-animate'>
              <div className='car-list'>
                <table className='table'>
                  <thead className='thead-primary'>
                    <tr className='text-center'>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th className='bg-primary heading'>Per Hour Rate</th>
                      <th className='bg-dark heading'>Per Day Rate</th>
                      <th className='bg-black heading'>Leasing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=''>
                      <td className='car-image'>
                        <div className='img'>
                          {' '}
                          <img
                            src='img/hatchbag.jpg'
                            width='200px'
                            alt='hatchback car'
                          />
                        </div>
                      </td>
                      <td className='product-name'>
                        <h3>Hatchback</h3>
                        <p className='mb-0 rated'>
                          <span>Wagon-R, Indica or similar</span>
                        </p>
                      </td>

                      <td className='price'>
                        <div className='price-rate'>
                          <h3>
                            <span className='num'>
                              <small className='currency'>Rs</small> 80.99
                            </span>
                            <span className='per'>/per hour</span>
                          </h3>
                          <span className='subheading'>
                            Rs30/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className='price'>
                        <div className='price-rate'>
                          <h3>
                            <span className='num'>
                              <small className='currency'>Rs</small> 300.80
                            </span>
                            <span className='per'>/per day</span>
                          </h3>
                          <span className='subheading'>
                            Rs30/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className='price'>
                        <div className='price-rate'>
                          <h3>
                            <span className='num'>
                              <small className='currency'>Rs</small> 995.99
                            </span>
                            <span className='per'>/per month</span>
                          </h3>
                          <span className='subheading'>
                            Rs30/hour fuel surcharges
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr className=''>
                      <td className='car-image'>
                        <div className='img'>
                          {' '}
                          <img
                            src='img/sedan.jpg'
                            width='200px'
                            alt='sedan car'
                          />
                        </div>
                      </td>
                      <td className='product-name'>
                        <h3>Sedan</h3>
                        <p className='mb-0 rated'>
                          <span>Dzire, Etios or similar</span>
                        </p>
                      </td>

                      <td className='price'>
                        <div className='price-rate'>
                          <h3>
                            <span className='num'>
                              <small className='currency'>Rs</small> 80.99
                            </span>
                            <span className='per'>/per hour</span>
                          </h3>
                          <span className='subheading'>
                            Rs30/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className='price'>
                        <div className='price-rate'>
                          <h3>
                            <span className='num'>
                              <small className='currency'>Rs</small> 300.80
                            </span>
                            <span className='per'>/per day</span>
                          </h3>
                          <span className='subheading'>
                            Rs30/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className='price'>
                        <div className='price-rate'>
                          <h3>
                            <span className='num'>
                              <small className='currency'>Rs</small> 995.99
                            </span>
                            <span className='per'>/per month</span>
                          </h3>
                          <span className='subheading'>
                            Rs30/hour fuel surcharges
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr className=''>
                      <td className='car-image'>
                        <div className='img'>
                          {' '}
                          <img
                            src='img/suv.jpg'
                            width='200px'
                            alt='suv car..'
                          />
                        </div>
                      </td>
                      <td className='product-name'>
                        <h3>SUV </h3>
                        <p className='mb-0 rated'>
                          <span>Xylo, Ertiga or similar</span>
                        </p>
                      </td>

                      <td className='price'>
                        <div className='price-rate'>
                          <h3>
                            <span className='num'>
                              <small className='currency'>Rs</small> 80.99
                            </span>
                            <span className='per'>/per hour</span>
                          </h3>
                          <span className='subheading'>
                            Rs30/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className='price'>
                        <div className='price-rate'>
                          <h3>
                            <span className='num'>
                              <small className='currency'>Rs</small> 300.80
                            </span>
                            <span className='per'>/per day</span>
                          </h3>
                          <span className='subheading'>
                            Rs30/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className='price'>
                        <div className='price-rate'>
                          <h3>
                            <span className='num'>
                              <small className='currency'>Rs</small> 995.99
                            </span>
                            <span className='per'>/per month</span>
                          </h3>
                          <span className='subheading'>
                            Rs30/hour fuel surcharges
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
