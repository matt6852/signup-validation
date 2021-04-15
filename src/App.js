
import "./App.css";
import Form from "./Form";
import FormSuccess from "./FormSuccess";





import { connect } from "react-redux";







function App({formData}) {
  return (
    <>
      {Object.keys(formData).length > 0 ? (
        <FormSuccess  />
      ) : (
        <Form />
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return { formData: state.formData };
};

export default connect(mapStateToProps) (App);
