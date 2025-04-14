import './Login.css';

function Login() {
  return (
    <div className="container">
      <h2>Login</h2>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="Enter your email" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />
      </div>

      <div>
        <button id="button-login">Login</button>
      </div>
      
    </div>
  );
}

export default Login;
