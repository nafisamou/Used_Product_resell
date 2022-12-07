import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hook/useToken/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const [createdUserEmail, setCreatedUser] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate("/");
  }
  const handleSignUp = (data) => {
    console.log(data);
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully.");

        const userInfo = {
          displayName: data.name,
          photoURL: data.photo,
        };
        updateUserProfile(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.role);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });

    const saveUser = (name, email, role) => {
      const user = { name, email, role };
      fetch("https://e-commerce-server-gamma.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("save user", data);
          setCreatedUser(email);
          getUserToken(email);
          navigate("/");
        });
    };
  };

  const getUserToken = (email) => {
    fetch(`https://e-commerce-server-gamma.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/");
        }
      });
  };

  // Google SignIn
  const handleGoogleSignIn = (data) => {
    signInWithGoogle(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        setCreatedUser(data.email);
        getUserToken(data.email);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="h-[650px] flex justify-center items-center border-t-8 border-b-8  my-10 shadow-xl lg:w-96 mx-auto">
    <div className=" py-2 my-5 ">
      <h2 className="text-2xl text-center mt-6 font-serif font-medium">
        Sign Up
      </h2>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="form-control ">
          <label className="label">
            {" "}
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && (
            <p className="text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <select
          {...register("role", {
            required: "write a valid email",
          })}
          className="select select-bordered text-gray-900 w-full max-w-xs mt-6"
        >
          <option value="buyer" className="text-gray-900">
            Buyer
          </option>
          <option value="seller" className="text-gray-900">
            Seller
          </option>
        </select>

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
                message: "Password must be 6 characters long",
              },
              pattern: {
                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                message:
                  "Password must have uppercase, number and special characters",
              },
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <input
          className="btn  w-full my-4"
          value="Sign Up"
          type="submit"
        />
        {signUpError && <p className="text-red-600">{signUpError}</p>}
      </form>
      <p className="text-center">
        Already have an account{" "}
        <Link className="text-blue-600" to="/login">
          Please Login
        </Link>
      </p>
      <div className="divider">OR</div>
      {/*   <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
    CONTINUE WITH GOOGLE
  </button> */}

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

       
      </div>
    </div>
  </div>
  );
};

export default SignUp;
