import React, { useEffect } from 'react'
import moment from 'moment'
const AccountDelete = ({date}) => {
    var countDownDate = moment(date).format('YYYY-MM-DD hh:mm A');
 
    
  return (
            <div class="container-fluid text-center bg-danger mb-2">
                <div class="text-white text-center d-flex justify-content-center p-2">
                    Your Account Will be deleted on: {countDownDate}
                     {/* {new Date(date).getDate()}:{new Date(date).getHours()}:{new Date(date).getSeconds()} */}
                </div>
            </div>
  )
}

export default AccountDelete;