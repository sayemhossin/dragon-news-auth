import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password)


        //   create user
        createUser(email, password)
            .then(result =>{
                console.log(result.user)
            })
            .catch(err => console.log(err))

    }




    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl my-10 text-center">Please register</h2>


            <div>
                <form onSubmit={handleRegister} className="md:w-3/4 lg:h-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>

                        <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>

                        <input name="photo" type="text" placeholder="Photo Url" className="input input-bordered" required />
                    </div>
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
                <p className="text-center mt-4">Already Have an Account <Link className="text-blue-600 font-bold" to={'/login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;