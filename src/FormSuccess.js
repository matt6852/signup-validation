import React from "react";

const FormSuccess = ({ data }) => {
  const { firstName, midleName } = data;
  return (
    <div className="modal-container isOpen">
      <div className="modal-content">
        <h4>
          Поздравляю {firstName} {midleName} вы успешно зарегистрировались{" "}
        </h4>
      </div>
    </div>
  );
};

export default FormSuccess;
