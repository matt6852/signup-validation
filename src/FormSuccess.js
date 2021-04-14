import React from 'react'

const FormSuccess = ({data}) => {
    const { firstName, midleName } = data;
    return (
      <div className="modal-container isOpen">
        <div className="modal-content">

        <h4>
          Поздравляю {firstName} {midleName} вы успещно зарегистрировались{" "}
        </h4>
        </div>
      </div>
    );
}

export default FormSuccess
