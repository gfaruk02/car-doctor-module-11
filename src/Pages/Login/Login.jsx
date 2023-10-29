import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const Login = () => {
  const { sigIn } = useContext(AuthContext);
  const location = useLocation()
  const Navigate = useNavigate()
  const handleLogin = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value
    const password = form.password.value
    // console.log(email, password);

    sigIn(email, password)
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };
        form.reset();
        axios.post('http://localhost:5000/jwt', user, {
          withCredentials: true,
        })
          .then(res => {
            console.log(res.data);
            if (res.data.success) {

              Navigate(location?.state ? location.state : '/');
            }
          })
      })
      .catch(error => {
        console.error(error);
      })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div>
            <p className="text-base pl-8 pb-5">New to car doctors <Link className="text-orange-600 font-bold" to="/signup"> Sign Up</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;