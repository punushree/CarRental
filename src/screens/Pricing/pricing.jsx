import React, { useState } from 'react';

const Pricing = (props) => {


    
  return (
    <>
      <div id="pricing">
    <div className="container">
    <div className='col-md-10 col-md-offset-1 section-title'>
        <h2>Pricing</h2>
        </div>
				<div class="row ftco-section ftco-cart" >
    			<div class="col-md-12 ftco-animate">
    				<div class="car-list">
	    				<table class="table">
						    <thead class="thead-primary">
						      <tr class="text-center">
						        <th>&nbsp;</th>
						        <th>&nbsp;</th>
						        <th class="bg-primary heading">Per Hour Rate</th>
						        <th class="bg-dark heading">Per Day Rate</th>
						        <th class="bg-black heading">Leasing</th>
						      </tr>
						    </thead>
						    <tbody>
						      <tr class="">
						      	<td class="car-image"><div class="img" > <img src="img/hatchbag.jpg" width="200px" alt="" /></div></td>
						        <td class="product-name">
						        	<h3>Hatchback</h3>
						        	<p class="mb-0 rated">
						        		<span>Wagon-R, Indica or similar</span>
						        		
						        	</p>
						        </td>
						        
						        <td class="price">
						        	<div class="price-rate">
							        	<h3>
							        		<span class="num"><small class="currency">Rs</small> 10.99</span>
							        		<span class="per">/per hour</span>
							        	</h3>
							        	<span class="subheading">Rs3/hour fuel surcharges</span>
						        	</div>
						        </td>
						        
						        <td class="price">
						        	<div class="price-rate">
							        	<h3>
							        		<span class="num"><small class="currency">Rs</small> 60.99</span>
							        		<span class="per">/per day</span>
							        	</h3>
							        	<span class="subheading">Rs3/hour fuel surcharges</span>
						        </div>
						        </td>

						        <td class="price">
						        	<div class="price-rate">
							        	<h3>
							        		<span class="num"><small class="currency">Rs</small> 995.99</span>
							        		<span class="per">/per month</span>
							        	</h3>
							        	<span class="subheading">Rs3/hour fuel surcharges</span>
							        </div>
						        </td>
						      </tr>

						      <tr class="">
						      	<td class="car-image"><div class="img"> <img src="img/sedan.jpg" width="200px" alt="" /></div></td>
						        <td class="product-name">
						        	<h3>Sedan</h3>
						        	<p class="mb-0 rated">
						        		<span>Dzire, Etios or similar</span>
				
						        	</p>
						        </td>
						        
						        <td class="price">
						        	<div class="price-rate">
							        	<h3>
							        		<span class="num"><small class="currency">Rs</small> 10.99</span>
							        		<span class="per">/per hour</span>
							        	</h3>
							        	<span class="subheading">Rs3/hour fuel surcharges</span>
							        </div>
						        </td>
						        
						        <td class="price">
						        	<div class="price-rate">
							        	<h3>
							        		<span class="num"><small class="currency">Rs</small> 60.99</span>
							        		<span class="per">/per day</span>
							        	</h3>
							        	<span class="subheading">Rs3/hour fuel surcharges</span>
							        </div>
						        </td>

						        <td class="price">
						        	<div class="price-rate">
							        	<h3>
							        		<span class="num"><small class="currency">Rs</small> 995.99</span>
							        		<span class="per">/per month</span>
							        	</h3>
							        	<span class="subheading">Rs3/hour fuel surcharges</span>
							        </div>
						        </td>
						      </tr>

						      <tr class="">
						      	<td class="car-image"><div class="img"> <img src="img/suv.jpg" width="200px" alt="" /></div></td>
						        <td class="product-name">
						        	<h3>SUV	</h3>
						        	<p class="mb-0 rated">
						        		<span>Xylo, Ertiga or similar</span>
						        	
						        	</p>
						        </td>
						        
						        <td class="price">
						        	<div class="price-rate">
							        	<h3>
							        		<span class="num"><small class="currency">Rs</small> 10.99</span>
							        		<span class="per">/per hour</span>
							        	</h3>
							        	<span class="subheading">Rs3/hour fuel surcharges</span>
							        </div>
						        </td>
						        
						        <td class="price">
						        	<div class="price-rate">
							        	<h3>
							        		<span class="num"><small class="currency">Rs</small> 60.99</span>
							        		<span class="per">/per day</span>
							        	</h3>
							        	<span class="subheading">Rs3/hour fuel surcharges</span>
							        </div>
						        </td>

						        <td class="price">
						        	<div class="price-rate">
							        	<h3>
							        		<span class="num"><small class="currency">Rs</small> 995.99</span>
							        		<span class="per">/per month</span>
							        	</h3>
							        	<span class="subheading">Rs3/hour fuel surcharges</span>
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
  )
}

export default Pricing
