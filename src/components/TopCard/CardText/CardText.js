import React from "react";

import classes from "./CardText.css";
import EmailForm from "../../UI/EmailForm/EmailForm";

const CardText = () => {
  return (
    <div className={classes.CardText}>
      <h1>映画やTV番組、アニメが見放題</h1>
      <h2>映画やドラマをもっと自由に。いつでもキャンセルOK。</h2>
      <from data-uia="email-form">
        <EmailForm />
        <h3>
          まもなくご視聴いただけます!メールアドレスを入力してメンバーシップを開始、または再開してください。
        </h3>
      </from>
    </div>
  );
};

export default CardText;
