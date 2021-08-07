import React, { useRef, useEffect, useState } from "react";
import {gsap } from "gsap";
import {
  Input,
  SignUpButton,
  SignUpContainer,
  SignUpForm,
  SignUpFormElement,
} from "./SignUp.css";
import { FFL } from "../../../styles/Typography";

const SignUp = () => {
  let form = useRef(null)
  const [visable, setVisable] = useState(false)
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [signUp, setSignup] = useState(true);
  const [thankyou, setThankyou] = useState(false);

  useEffect(() => {
    gsap.fromTo(form, 1, { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, delay: .75 });
    setTimeout(() => {
      setVisable(true)
    }, 750);
  }, []);

  const handleChange = (event) => {
    setEmail(event.target.value);
    !email.includes(".") || !email.includes("@")
      ? setEmailErr(true)
      : setEmailErr(false);
  };
  const handleSubmit = (e) => {
      
    e.preventDefault();
    console.log('submit')
    const timestamp = Date.now();
    if ((email && email.includes(".")) || email.includes("@")) {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer 25183d2e-1266-4207-a9d3-a5d9422d94b0"
      );
      myHeaders.append("Timestamp", { timestamp });
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        data: {
          email: email,
        },
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://api.sproutsend.com/contacts?", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .then(setSignup(false))
        .then(setThankyou(true))

        .catch((error) => console.log("error", error));
    } else {
      setEmailErr(true);
    }

  };


let intro = useRef(null)
  return (
    <SignUpContainer onSubmit={handleSubmit}
    ref={(element) => {
      form = element;
    }}
    visable={visable}
    >
      {signUp ? (
        <SignUpForm onSubmit={handleSubmit}>
   
          <SignUpFormElement>
            <FFL>EMAIL ADDRESS</FFL>
            <Input
              placeholder="Please enter your email address"
              name="email"
              type="text"
              value={email}
              onChange={handleChange}
              err={emailErr}
            />
          </SignUpFormElement>
          <SignUpButton err={emailErr} type="submit">
            SUBSCRIBE
          </SignUpButton>
  
        </SignUpForm >
      ) : (
        <SignUpFormElement>Thank you for subscribing</SignUpFormElement>
      )}
    </SignUpContainer>
  );
};

export default SignUp;
