import React from "react";

import classes from "./EmailForm.css";
import rightArrow from "../../../assets/svg/right-arrow.svg";

const EmailForm = () => {
  return (
    <div className={classes.EmailForm}>
      <ul>
        <li>
          <div className={classes.nfInput}>
            <label>
              <input type="text" />
              <label className={classes.placeLabel}>メールアドレス</label>
            </label>
          </div>
        </li>
      </ul>
      <div className={classes.ctaLink}>
        <button>
          <span className={classes.btnText}>メンバー登録する</span>
          <span className={classes.btnArrow}>></span>
        </button>
      </div>
    </div>
  );
};

export default EmailForm;
