import React from 'react';
function Alert(props)
{
  return(
    <div style={{height:"43px"}}>
      {props.alert && <div className="alert alert-success d-flex align-items-center" role="alert">
      {props.alert.type} : {props.alert.msg}
      </div>}
    </div>
  );
}
export default Alert;