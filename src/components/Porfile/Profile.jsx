import React from 'react'
import "./Profile.css"
import coverimage from './pexels.jpg'
import Footer from '../Footer/Footer'
const Profile = () => {
  return (
    <>
    <div className="container">
      <img src={coverimage} className='img-thumbnail' alt="image" /><hr />
      <h2>sarah wood</h2>
    </div>
    
    <div class="container">
      <form  class= "form-inline" action="">
          <div className="row">
            <div class="col-md-6">
              <label for="FirstNAme">FirstName</label>
              <input class="form-control" id="FirstNAme" type="text" placeholder='First Name' /> </div>
            <div class="col-md-6">
              <label htmlFor="LastName">LastName</label>
              <input class="form-control" type="text" name='LastName' id='LastName' placeholder='Last Name'/>
            </div>
          </div>
          <div className=" row">
            <div className='col-md-6'>
              <label htmlFor="Designation">Designation</label>
              <select className='form-select' name="Designation" id="Designation">
                <option value="MEAN Developer">MEAN Developer</option>
                <option value="DevOps engineer">DevOps engineer</option>
                <option value="other">other</option>
              </select>
            </div>
            <div className='col-md-6'>
              <label htmlFor="My Website">My Website</label>
              <input class="form-control" type="text" name='My Website' id='My Website' placeholder='website.org'/>
            </div>
          </div>
          <div className=" row">
            <div className='col-md-6'>
              <label for="Gender">Gender</label>
              <select className='form-select' name="Gender" id="Gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">other</option>
              </select>
            </div>
            <div className='col-md-6'>
              <label for="Birthday">Birthday</label>
              <input class="form-control" type="date" name="Birthday" id="Birthday" />
            </div>
          </div>
          <div className=" row">
            <div className='col-md-6'>
              <label htmlFor="City">City</label>
              <input class="form-control" type="text" name='City' id='City' />
            </div>

            <div className='col-md-3'>
              <label for="State">State</label>
              <select className='form-select' name="State" id="State">
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>

            <div className='col-md-3'>
              <label htmlFor="Zip">Zip</label>
              <input class="form-control" type="number" maxLength={6} placeholder='201310' />
            </div>
            </div>
            <div className='container'>
              <button  type="submit" class="btn btn-primary me-5" >Save</button>
              
              <button className='btn btn btn-outline-primary' type="reset">Reset All</button>
            </div>
          
        </form>
      </div>
      <Footer />
      </>
  )
}

export default Profile