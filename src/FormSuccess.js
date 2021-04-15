import React from "react";
import { connect } from "react-redux";


const FormSuccess = ({ formData }) => {
  const { firstName, midleName, email } = formData;
  return (
    <div className="modal-container isOpen">
      <div className="modal-content">
        <h4>
          Поздравляю {firstName} {midleName} вы успешно зарегистрировались ваш
          eamil: {email}

        </h4>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
 
  return { formData: state.formData };
};

export default connect(mapStateToProps) (FormSuccess);
