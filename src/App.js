import React, {useState} from 'react'
import style from './components/style.css'

export default function App() {
  const[isLogin, setLogin] = useState(false);
  const[input, setInput] = useState({
    email:"",
    password:"",
  });

  const onChange = (e)=>{
    setInput({...input,[e.target.id]:e.target});
  };

  const onSubmit= () =>{
    alert("Login Successful");
    setLogin(true);
  };

  return (
 
<div>
{ isLogin ? (  
  <> 
 <h1>Welcome To My Page</h1>
  </>
)
:( 
  <> 
<div className="formDiv" >
<form onSubmit={onSubmit}>
<input  type="email" placeholder="enter your email" id="email" name="email"  onChange={onChange}/>
<input  type="password" placeholder="enter your password" id="password" name="password"  onChange={onChange}/>
<button type="submit">Log In</button>
</form>
</div>
</>
)}
</div>
  )
}
