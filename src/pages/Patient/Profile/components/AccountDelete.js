import React, { useRef } from 'react'
import moment from 'moment'
import { useTranslation } from "react-i18next"

const AccountDelete = ({ date, funDeactiveAccount }) => {

  const { t } = useTranslation()
  var countDownDate = moment(date).format('YYYY-MM-DD hh:mm A');
  const closeBtnRef = useRef();

  return (
    // <div class="container-fluid text-center bg-danger mb-2">
    //     <div class="text-white text-center d-flex justify-content-center p-2">
    //         Your Account Will be deleted on: {countDownDate}
    //          {/* {new Date(date).getDate()}:{new Date(date).getHours()}:{new Date(date).getSeconds()} */}
    //     </div>
    // </div>
    <div class="modal fade" id="deleteAccount" tabindex="-1" aria-labelledby="deleteAccountLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body text-center">
            <button ref={closeBtnRef} type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span class="icon-close"></span>
            </button>
            <h5 class="text-center mb-4">{t("accountDelete")}</h5>
            <a href="javascript:void(0)" class="btn btn-primary px-5 mx-2" onClick={() => { closeBtnRef.current.click(); funDeactiveAccount() }}>{t("yes")}</a>
            <a href="javascript:void(0)" style={{ color: "white" }} onClick={() => closeBtnRef.current.click()} class="btn btn-primary px-5 mx-2">{t("no")}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountDelete;