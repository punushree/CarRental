import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Link, useHistory } from 'react-router-dom';

const Car = (props) => {
    const [stdate, onChange] = useState(new Date());
    const [enddate, onChangedrop] = useState(new Date());
    const [pick, setPick] = useState("");
    const [drop, setDrop] = useState("");


    return (
        <>
            <div id='features' className='text-center'>
                <div className='container'>
                    <div className='col-md-10 col-md-offset-1 section-title'>
                        <h2>Make your trip</h2>
                    </div>
                    <div className='row'>
                        <div class="col-md-4 d-flex align-items-center">
                            <form action="#" class="request-form ">
                                <div class="form-group">
                                    <label for="" class="label">Pick-up location</label>
                                    <input type="text" class="form-control" placeholder="City, Airport, Station, etc"
                                        value={pick}
                                        onChange={(e) => setPick(e.target.value)}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="" class="label">Drop-off location</label>
                                    <input type="text" class="form-control" placeholder="City, Airport, Station, etc"
                                        value={drop}
                                        onChange={(e) => setDrop(e.target.value)}
                                    />
                                </div>
                                <div class="d-flex">
                                    <div class="form-group mr-2">
                                        <label for="" class="label">Pick-up date time</label>
                                        <DateTimePicker onChange={onChange} value={stdate} id="book_pick_date" />
                                    </div>
                                    <div class="form-group ml-2">
                                        <label for="" class="label">Drop-off date time</label>
                                        <DateTimePicker onChange={onChangedrop} value={enddate} id="book_drop_date" class="form-control" />
                                    </div>
                                </div>

                                <div class="form-group">
                                <p><Link to="/booking" state={{ from: pick, to:drop,dt1:stdate,dt2:enddate}} class="btn btn-primary py-3 px-4">Rent A Car Now</Link></p>
                          
                                </div>
                            </form>
                        </div>
                        <div class="col-md-8 d-flex align-items-center">
                            <div class="services-wrap rounded-right w-100">
                                <h3 class="heading-section mb-4">Better Way to Rent Your Perfect Cars</h3>
                                <div class="row d-flex mb-4">
                                    <div class="col-md-4 d-flex align-self-stretch ftco-animate">
                                        <div class="services w-100 text-center">
                                            <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-route"></span></div>
                                            <div class="text w-100">
                                                <h3 class="heading mb-2">Choose Your Pickup Location</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-flex align-self-stretch ftco-animate">
                                        <div class="services w-100 text-center">
                                            <div class="icon d-flex align-items-center justify-content-center">
                                                <span class="flaticon-handshake"></span>
                                            </div>
                                            <div class="text w-100">
                                                <h3 class="heading mb-2">Select the Best Deal</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-flex align-self-stretch ftco-animate">
                                        <div class="services w-100 text-center">
                                            <div class="icon d-flex align-items-center justify-content-center">
                                                <span class="flaticon-rent"></span></div>
                                            <div class="text w-100">
                                                <h3 class="heading mb-2">Reserve Your Rental Car</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p><a href="#" class="btn btn-primary py-3 px-4">Reserve Your Perfect Car</a></p>
                            </div>	</div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Car
