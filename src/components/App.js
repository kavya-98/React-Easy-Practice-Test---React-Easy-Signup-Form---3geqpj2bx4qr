import React from 'react'
import '../styles/App.css';


const App = () => {
  
  return (
<form id="contact" action="./" method="post">

 
<label for="user">user</label>
<input type="text" autocomplete="user" id="user" name="user" required /><br/>



<label for="email">email</label>
<input type="email" autocomplete="email" id="email" name="email" /><br/>




<label for="password">password</label>
<input type="password" autocomplete="password" id="password" name="password" /><br/>


<label for="checkbox">checkbox</label>
<input type="checkbox" id="consent" name="checkbox"/>

<button type="singUp">singUp</button>


</form>
  )
}


export default App;
