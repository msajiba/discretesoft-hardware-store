import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loader from "../Shared/Loader";
import { errorPrefix } from "@firebase/util";
import useToken from "../hooks/useToken";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  let errors;

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [token] = useToken(user || gUser);

  if (loading || updating || gLoading) {
    return <Loader />;
  }

  if (token) {
    navigate("/");
  }

  if (error || updateError || gError) {
    errors = error?.message || updateError?.message || gError?.message;
  }

  const onSubmit = async (data) => {
    const displayName = data.name;
    const email = data.email;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    reset();
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col justify-center lg:flex-row-reverse w-full">
        <div
          data-aos-delay="1500"
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          className="text-center lg:text-center "
        >
          <h1 className="text-5xl font-bold text-info"> Register </h1>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-accent mt-5 uppercase text-white"
          >
            Login With Google
          </button>
        </div>

        <div className="divider lg:divider-horizontal">OR</div>

        <div
          data-aos="zoom-in-right"
          data-aos-duration="2000"
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <h3 className="text-2xl text-primary text-center">
              Please Register
            </h3>

            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="label">
                <span className="label-text">You Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="input input-bordered w-full mb-2"
                {...register(
                  "name",
                  { pattern: /^[A-Za-z]+$/i },
                  { required: true }
                )}
              />

              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="input input-bordered w-full mb-2"
                {...register("email", { required: true })}
              />

              <label className="label">
                <span className="label-text"> Password </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="input input-bordered w-full mb-5"
                {...register("password", { required: true })}
              />

              {errors && <p className="text-red-700"> {errors} </p>}

              <input
                className="bg-yellow-500 btn border-none w-full"
                type="submit"
                value="Register"
              />
            </form>
            <label className="label mb-5">
              <p className="label-text-alt ">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-emerald-600 hover:text-yellow-500"
                >
                  Please Login
                </Link>
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
