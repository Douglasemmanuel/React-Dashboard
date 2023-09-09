import React from 'react'
import './Rightside.css'
import CustomerReview  from '../Customer Review/CustomerReview'
import Updates from '../Updates/Updates'
const Rightside = () => {
  return (
   <div className="Rightside">
    <div>
        <h3>Updates</h3>
        <Updates/>
        <div>
            <h3>Customers Review</h3>
            <CustomerReview/>
        </div>
    </div>
   </div>
  )
}

export default Rightside