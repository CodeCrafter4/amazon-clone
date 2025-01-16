import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/black-logo-rembg.png";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"; 
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [haveAccount, setHaveAccount] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const getFirebaseErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/invalid-credential':
        return 'Invalid credential provided. Please try again.';
      case 'auth/email-already-in-use':
        return 'This email is already in use. Please try signing in.';
      case 'auth/user-not-found':
        return 'No account found with this email. Please sign up.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
      case 'auth/weak-password':
        return 'The password is too weak. Please choose a stronger one.';
      default:
        return 'An unknown error occurred. Please try again later.';
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name && !haveAccount) {
      newErrors.name = "Enter your name";
    }
    if (!email) {
      newErrors.email = "Enter your email";
    }
    if (!password && !haveAccount) {
      newErrors.password = "Enter a password";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }



    if (!haveAccount) {
      // Sign-up logic
      try {
        // Create a new user
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
    
        // Update the user's profile to include a display name
        await updateProfile(user, {
          displayName: name 
        });
    
        console.log("User signed up: ", user.displayName);
        toast.success("Account created successfully!");
    
        navigate("/orders");
      } catch (error) {
        console.error("Error signing up: ", error.message);
        const errorMessage = getFirebaseErrorMessage(error.code); 
        toast.error(errorMessage); 
        setErrors({ ...errors, signUpError: error.message });
      }
    } else {
      // Sign-in logic
      try {
        // Sign the user in
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        
        console.log("User signed in: ", user.displayName || user.email);
        
        // Redirect to orders page
        navigate("/orders");
      } catch (error) {
        console.error("Error signing in: ", error.message);
        const errorMessage = getFirebaseErrorMessage(error.code); 
        toast.error(errorMessage);
        setErrors({ ...errors, signInError: error.message });
      }
    }


  };



  return (
    <div className="bg-white py-2 login-container">
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="centered-container px-2">
          {haveAccount ? (
            <h5 className="pt-2">Sign In</h5>
          ) : (
            <h5 className="pt-2">Create account</h5>
          )}
          <form className="form--input" onSubmit={handleSubmit}>
            {!haveAccount && (
              <>
                <label className="label" htmlFor="name">
                  Your name
                </label>
                <input
                  className={`mb-2 ${errors.name ? "error-border" : ""}`}
                  type="text"
                  placeholder="First and last name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <span className="error-text">{errors.name}</span>
                )}{" "}
                <br />
              </>
            )}
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className={`mb-2 ${errors.email ? "error-border" : ""}`}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}{" "}
            <br />
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className={`mb-2 ${errors.password ? "error-border" : ""}`}
              type="password"
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}{" "}
            <br />
            <button className="mb-3">Continue</button>
          </form>
          <p className="terms">
            {!haveAccount ? "By creating an account" : "By continuing"}, you
            agree to Amazon's <br />
            <span>Conditions of Use </span> and <span>Privacy Notice</span>.
          </p>
          {haveAccount && <p className="need--help">Need help?</p>}
          <hr className="custom-hr--top" />
          <p className="business">
            <b>Buying for work?</b> <br />
            {haveAccount ? (
              <span>Create a free business account</span>
            ) : (
              <span>Shop on Amazon Business</span>
            )}
          </p>
          {!haveAccount && (
            <>
              <hr className="custom-hr--top" />
              <p className="last-p">
                Already have an account?{" "}
                <span onClick={() => setHaveAccount(true)}>Sign in</span>
              </p>
            </>
          )}
        </div>
        {haveAccount && (
          <div className="text-center my-2 bottom--class">
            <div className="new-to-amazon-container">
              <div className="line"></div>
              <span className="new-to-amazon-text">New to Amazon?</span>
              <div className="line"></div>
            </div>
            <button onClick={() => setHaveAccount(false)}>
              Create your Amazon account
            </button>
          </div>
        )}
        <hr className="custom-hr" />
        <div className="text-center">
          <ul className="d-flex justify-content-center text-primary gap-3 last--li">
            <li>Conditions of Use</li>
            <li>Privacy Notice</li>
            <li>Help</li>
          </ul>
          <p className="last--p text-secondary">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
