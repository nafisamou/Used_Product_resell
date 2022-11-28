import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hook/useToken/useToken";


const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const [loginUserEmail, setLoginUserEmail] = useState("");
    const [token] = useToken(loginUserEmail);
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
    if (token) {
      navigate(from, { replace: true });
    }
    console.log(token)
  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoginError(error.message);
      });
  };

  // Google SignIn
  const handleGoogleSignIn = (data) => {
    signInWithGoogle(data.email, data.password)
      .then((result) => {
        console.log(result.user);
       setLoginUserEmail(data.email)
        navigate(from, { replace: true });

      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1556656793-08538906a9f8??auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox <br className="hidden md:block" />
                jumps over a lazy dog
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            <div className="w-96 max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <div className="">
                  <div className=" p-5">
                    <h2 className="text-xl text-center">Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          {" "}
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="text"
                          {...register("email", {
                            required: "Email Address is required",
                          })}
                          className="input input-bordered w-full max-w-xs"
                        />
                        {errors.email && (
                          <p className="text-red-600">
                            {errors.email?.message}
                          </p>
                        )}
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          {" "}
                          <span className="label-text">Password</span>
                        </label>
                        <input
                          type="password"
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 6,
                              message:
                                "Password must be 6 characters or longer",
                            },
                          })}
                          className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                          {" "}
                          <span className="label-text">Forget Password?</span>
                        </label>
                        {errors.password && (
                          <p className="text-red-600">
                            {errors.password?.message}
                          </p>
                        )}
                      </div>
                      {/* <div className="form-control w-full max-w-xs">
      <label className="label">
        {" "}
        <span className="label-text  text-xl">Choose your account as  </span>
      </label>
      <select
        {...register("choose")}
        className="select input-bordered w-full max-w-xs my-2 "
      >
        
        <option>Seller</option>
        <option>User</option>
       
      </select>
    </div> */}
                      <input
                        className="btn  w-full my-2"
                        value="Login"
                        type="submit"
                      />
                      <div>
                        {loginError && (
                          <p className="text-red-600">{loginError}</p>
                        )}
                      </div>
                    </form>
                    <p>
                      New to Reselling Products{" "}
                      <Link className="text-primary" to="/signup">
                        Create new Account
                      </Link>
                    </p>
                    <div className="divider">OR</div>
                    {/*  <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button> */}
                    <div className="flex items-center pt-4 space-x-1">
                      <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                      <p className="px-3 text-sm dark:text-gray-400">
                        Login with social accounts
                      </p>
                      <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={handleGoogleSignIn}
                        aria-label="Log in with Google"
                        className="p-3 rounded-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                      </button>

                      <button
                        aria-label="Log in with GitHub"
                        className="p-3 rounded-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
