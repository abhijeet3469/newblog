import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
  return (
    <div className='login'>
    <span className='loginTitle'>Login</span>
    <form className='loginForm'>
    <label>Email</label>
    <input className='loginInput' type="email" placeholder="Enter your email..."/>
    <label>Password</label>
    <input className='loginInput' type="password" placeholder="Enter your password..."/>
    <button className='loginButton'>Login</button>
    <button className='registerButton'>
      <Link className='link' to="/register">Register Here</Link>
    </button>
    </form>
    </div>
  )
}