import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../services/admin';
import './Styles/Login.css'; // Import custom CSS for any additional styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailEmpty, setEmailEmpty] = useState(false);
  const [isPasswordEmpty, setPasswordEmpty] = useState(false);

  // get navigation hook
  const navigate = useNavigate();

  const onLogin = async () => {
    if (email.length === 0) {
      toast.error('Please enter email');
    } else if (password.length === 0) {
      toast.error('Please enter password');
    } else {
      toast.success('Successfully logged In');
      navigate('/home');
      // Uncomment the below code to handle actual login
      // const result = await login(email, password);
      // if (result['status'] === 'success') {
      //   const data = result['data'];

      //   sessionStorage['name'] = data['name'];
      //   sessionStorage['token'] = data['token'];

      //   navigate('/home');
      // } else {
      //   toast.error(result['error']);
      // }
    }
  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body">
          <div className="text-center mb-4">
            <img src="./LoginIcon.png" alt="Logo" className="mb-3" style={{ width: '110px' }} /> {/* Update with your logo path */}
            <h2 className="h5">Welcome back, Login.</h2>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              onChange={(e) => {
                setEmailEmpty(e.target.value.length === 0);
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              className="form-control"
              placeholder="ken@gmail.com"
            />
            {isEmailEmpty && <p className="text-danger">Email is mandatory</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              onChange={(e) => {
                setPasswordEmpty(e.target.value.length === 0);
                setPassword(e.target.value);
              }}
              type="password"
              id="password"
              className="form-control"
              placeholder="kenspassword"
            />
            {isPasswordEmpty && <p className="text-danger">Password is mandatory</p>}
          </div>
          <button onClick={onLogin} className="btn btn-primary w-100">Login</button>
          <div className="text-center mt-3">
            Don't have an account? <Link to="/register">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
