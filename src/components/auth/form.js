import Link from "next/link";
import { useRef } from "react";

export default function Form({ signin, onFormSubmit }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const firstname = firstnameRef.current?.value; 
    const lastname = lastnameRef.current?.value;   

    onFormSubmit(email, password, firstname, lastname);
  };

  return (
    <>
      <div>
        
        <div className="form-wrapper">
          <nav>
          <Link href="#">
            <img src="/logo.png" alt="logo" />
          </Link>
        </nav>
          <h2>Sign In</h2>
          <form action="#" onSubmit={onSubmitHandler}>
            {!signin && ( 
              <>
                <div>
                  <div className="form-control">
                    <input
                      id="firstname"
                      name="firstname"
                      type="text"
                      ref={firstnameRef}
                      autoComplete="given-name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 first-name-input"
                    />
                    <label htmlFor="firstname">Firstname</label>
                  </div>
                </div>

                <div>
                  <div className="form-control">
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      ref={lastnameRef}
                      autoComplete="family-name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 last-name-input"
                    />
                    <label htmlFor="lastname">Lastname</label>
                  </div>
                </div>


              </>
            )}
            <div className="form-control">
              <input type="email" autoComplete="email" id="email" name="email" ref={emailRef} required />
              <label>Email or phone number</label>
            </div>
            <div className="form-control">
              <input
                id="password"
                name="password"
                type="password"
                ref={passwordRef}
                autoComplete="current-password"
                required />
              <label>Password</label>
              <Link
                href={signin ? "/auth/signup" : "/auth/login"}
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                {signin
                  ? "Do not have an account? Signup"
                  : "Already have an account? Sign in"}
              </Link>
            </div>
            <button type="submit"> {signin ? "Sign in" : "Sign up"} </button>
            <div className="form-help">
              <div className="remember-me">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <a href="#">Need help?</a>
            </div>



          </form>
          <p>New to Personal Blogs? <a href={signin ? "/auth/signup" : "/auth/login"}> {signin ? "Sign in to your account" : "Signup for new account"}</a></p>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <a href="#">Learn more.</a>
          </small>
        </div>
      </div>
    </>
  );
}
