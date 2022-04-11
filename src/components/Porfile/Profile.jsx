import React from 'react'
import "./Profile.css"

const Profile = () => {
  return (
    <>
      <form action="">
        <div className='ProfileUPD'>
          <label htmlFor="FirstName">FirstName</label>
          <input type="text"  name='FirstName' id='FirstName'/>
        </div>
        <div className='ProfileUPD'>
          <label htmlFor="LastName">LastName</label>
          <input type="text"  name='LastName' id='LastName'/>
        </div>
        <div className='ProfileUPD'>
          <label htmlFor="Designation">Designation</label>
          <select name="Designation" id="Designation">
            <option value="MEAN Developer">MEAN Developer</option>
            <option value="DevOps engineer">DevOps engineer</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className='ProfileUPD'>
          <label htmlFor="My Website">My Website</label>
          <input type="text" name='My Website' id='My Website'/>
        </div>
        <div className='ProfileUPD'>
          <label for="Sex">Sex</label>
          <select name="Sex" id="Sex">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">other</option>
          </select>
        </div>
        <div className='ProfileUPD'>
          <label for="Birthday">Birthday</label>
          <input type="date" name="Birthday" id="Birthday"/>
        </div>
        <div className='ProfileUPD'>
          <label htmlFor="City">City</label>
          <input type="text"name='City' id='City' />
        </div>
        <div className='ProfileUPD'>
        <label for="State">State</label>
          <select name="State" id="State">
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
        <div className='ProfileUPD'>
          <label htmlFor="Pincode">Pincode</label>
          <input type="number" maxLength={6} />
        </div>
        <div className='ProfileUPD'>
          <input type="submit" value="submit"/>
        </div>
        <div className='ProfileUPD'>
          <button type="reset">Reset All</button>
        </div>
      </form>
    </>
  )
}

export default Profile