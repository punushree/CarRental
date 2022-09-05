import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import Detail from "../../components/detail/detail.jsx";
import { useLocation } from 'react-router-dom'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };
  const customStyles2 = {
    content: {
        position: 'absolute',
        top: '100px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
      
      
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
      }
  };
  
const Booking = (props) => {
  const location = useLocation()
  
  console.log("Assigning"+location.state+"OOORRR"+JSON.stringify(window.localStorage.getItem('state')));
  if(location.state)
  {
    window.localStorage.setItem('state',  JSON.stringify(location.state));
    console.log("Item store"+location.state);
  }
  const { from,to,dt1,dt2 } = JSON.parse(window.localStorage.getItem('state'));
  console.log("value taken"+ from,to,dt1,dt2);

 

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [detailOpen, setDetailOpen] = React.useState(false);
    const [data, setData] = useState("");

    function openModal() {
      
      setIsOpen(true);
    }
    function openDetail() {
        console.log("********"+JSON.stringify(data));
        setDetailOpen(true);
      }
      function closeDetail() {
        setDetailOpen(false);
      }
  
    function closeModal() {
      setIsOpen(false);
    }

  return (
    <div id="cars">
    <Modal  ariaHideApp={false}
        isOpen={detailOpen}
        onRequestClose={closeModal}
        style={customStyles2}
        contentLabel="Detail"
      >
      <div className="topright"><span  onClick={closeDetail} className="close-button topright">&times;</span></div>
<Detail data={data} />

      </Modal>

    <Modal ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Booking"
      >
      
      <div className="topright"><span  onClick={closeModal} className="close-button topright">&times;</span></div>
      <label >Book Now</label>

      <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Mobile no"
                                        
                                    />
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Get OTP" class="btn btn-primary py-3 px-4" />
                                </div>
      </Modal>
  <div class="row ">
  <div class=" col-sm-1 "></div>

<div class=" col-sm-4 timebar">
 {from?from:'Pick Location'}
 <span><i class="icon fa fa-arrow-right"></i>
 </span>{to?to:'Drop Location'}</div>

<div class=" col-sm-2 "></div>

<div class=" col-sm-4 timebar" >
 {dt1?dt1:'Start Time'}
 <span><i class="icon fa fa-arrow-right"></i></span>
 {dt2?dt2:' End Time'}
</div>
<div class=" col-sm-1 "></div>

</div>


<div class="car-list">
{props.data
          ? props.data.map((d, i) => (

            <div class="item">
<div class="info">
    <div class="carimg"><img src={d.img} width="400px" alt="" /></div>
    <div class="desc">
        <div className='carname'><strong>{d.title}</strong></div>
        <div className='seater'>
        {d.type}<div class="separator">.</div>
        {d.fuel}<div class="separator">.</div>
        {d.seat} Seats     
        </div>
        <div className='car-item-extras'>
            <div className='car-item-message'>       
            <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <div className='text'>4.9 (36) · 11k kms driven</div>
</div>
<div className='text'> <Link to="#"   onClick={() => {  setData(d);openDetail();}}>
View details
</Link></div>

        </div>
    </div>
</div>
<div class="price-book-ctr">
    <div class="price-bar ">{d.price} </div>
    <div class="book"> <button class="pointer" onClick={openModal}>Book</button></div>
</div>
</div>
            ))
          : 'loading'}

</div>
  </div>
  )
}



export default Booking
