import React, { useContext, useState, useEffect } from "react";
import {
  Button,
  Wrapper,
  Container,
  Input,
  TextArea
} from "./form.style";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { addContact } from "../../store/actions/contactAction";
import * as Constants from "../../constants/Constant";
import Loader from "../../components/Loader/Loader";
import Alert from 'react-bootstrap/Alert';

const ContactForm = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fNError, setFNError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [regerror, setRegError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 

  const registerCallback = async(e) => {
    e.preventDefault();
    if ((Constants.email_reg.test(email)) === false || !email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if(fullName === ""){
      setFNError(true);
    } else {
      setFNError(false);
    }
    if(message === ""){
      setMessageError(true);
    } else {
      setMessageError(false);
    }

    if (fullName !== "" && !emailError && message != "") {
      setLoading(true);
      props.addContact({
        email: email,
        name: fullName,
        message: message
      });
    }
  };
  const validateEmail = async () => {
    if ((await Constants.email_reg.test(email)) === false || !email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  useEffect(() => {
    setRegError(props.responsemsg);
    setLoading(false);
    if(props.responsemsg){
      setSuccessMessage(props.responsemsg);
    }
    if(props.responsemsg){
      if(props.success){
        setSuccessMessage(props.responsemsg);
        setEmail("");
        setMessage("");
        setFullName("");
      } else {
        setErrorMessage(props.responsemsg);
      }
    }
  }, [props.responsemsg]);

  return (
    <Wrapper>
      <Container>
          
          {successMessage ? (
            <Alert variant='success'>
              {successMessage}
            </Alert>
          ) : null}

          {errorMessage ? (
            <Alert variant='danger'>
              {errorMessage}
            </Alert>
          ) : null}

        <form onSubmit={registerCallback}>
          <FormattedMessage id="fullNamePlaceholder" defaultMessage="Full Name*">
            {(placeholder) => (
              <Input
                type="text"
                placeholder={placeholder}
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            )}
          </FormattedMessage>
          {fNError == true ? (
            <span className="text-danger">Please enter your first name </span>
          ) : null}

          <FormattedMessage
            id="emailAddressPlaceholder"
            defaultMessage="Email Address*"
          >
            {(placeholder) => (
              <Input
                type="text"
                placeholder={placeholder}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onBlur={validateEmail}
              />
            )}
          </FormattedMessage>
          {emailError == true ? (
            <span className="text-danger">Please enter a valid Email</span>
          ) : null}
         

          <FormattedMessage
            id="messagePlaceholder"
            defaultMessage="Your message*"
          >
            {(placeholder) => (
              <TextArea
                type="text"
                placeholder={placeholder}
                value={message}
                rows="3"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            )}
          </FormattedMessage>
          {messageError === true ? (
            <span className="text-danger">Enter some message for us.</span>
          ) : null}

          <Button
            fullwidth
            type="submit"
            title={"Continue"}
            intlButtonId="continueBtn"
            style={{ color: "#fff", marginTop:"10px" }}
            disabled={loading}
            loader={<Loader />}
            isLoading={loading}
          />
        </form>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    success: state.contactReducer.success,
    error: state.contactReducer.error,
    responsemsg: state.contactReducer.payload
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (body) => addContact(body, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
