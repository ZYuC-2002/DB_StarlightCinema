// import React, { useState,useEffect } from 'react';
// import './App.css';
// import './login.css'
// import Navbar from './upperlistuser';
// import Cookies from 'universal-cookie';
// import { Link } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
//   const handleLogin = async (event) => {
//     event.preventDefault();
//     // 登入小卡
//     console.log('Logging in with email:', email, 'and password:', password);
//     cookies.set('account',email);
//     // 驗證Email格式
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!emailRegex.test(email)) {
//       alert('Email is not in a valid format.');
//       return;
//     }
//     try {
//       // Fetch data
//       const response = await fetch("https://randomuser.me/api/");
//       const data = await response.json();
      
//       // Check if data is successfully fetched
//       if (response.ok) {
//         console.log(data);

//         // Redirect to the homepage
//         window.location.href = '/';
//       } else {
//         // Handle fetch error, if needed
//         console.error('Error fetching data:', data);
//       }
//     } catch (error) {
//       // Handle general error, if needed
//       console.error('Error during fetch:', error);
//     }
//   };
//     const [search, setSearch] = useState('');
//     const cookies=new Cookies();

//     useEffect(() => {
//         cookies.set('search',search,{path:'/'});
//         console.log(cookies)
//     },[search])
    
//   return (
//     <>
//         <Navbar setSearch={setSearch}/>
//         <div className="app-container">
//         <h2 className='app-title'>Starlight Cinema Login Page</h2>
//         <div className="card">
//             <form onSubmit={handleLogin}>
//             {/* <label>Email:</label> */}
//             <input
//                 type="email"
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//                 placeholder="請輸入電子信箱"
//             />
//             <br />
//             {/* <label>Password:</label> */}
//             <input
//                 type="password"
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//                 placeholder="請輸入密碼"
//             />
//             <br />
//             <div className="button-login-container">
//                 <Link to={'/Register'}>
//                     <button type="button" className="register-button">
//                     Sign up
//                     </button>
//                 </Link>
//                 <button type="submit" className="login-button">
//                 Login
//                 </button>
//             </div>
//             </form>
//             <p className="forgot-password">
//             <a href="/ForgetPassword">忘記密碼</a>
//             </p>
//         </div>
//         </div>
//     </>
//   );
// }

// export default Login;
import React, { useState, useEffect } from 'react';
import './App.css';
import './login.css';
import Navbar from './upperlistuser';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    // Validate Email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Email is not in a valid format.');
      return;
    }

    try {
      // Make a POST request
      const response = await fetch("http://192.168.10.101:5000/member_login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      // Check if data is successfully fetched
      if (response.ok) {
        

        // Check the login success status
        if (data.length===2) {
          // Redirect to the homepage
          console.log(data);
          cookies.set('userloginemail',data[0].email,{ path: '/' });
          cookies.set('userloginname',data[0].name,{ path: '/' });
          cookies.set('userloginbirthday',data[0].birthday,{ path: '/' });
          cookies.set('userloginphone',data[0].phone,{ path: '/' });
          window.location.href = '/';
        } else {
          // Handle unsuccessful login, if needed
          alert('Login failed. Please check your credentials.');
        }
      } else {
        // Handle fetch error, if needed
        alert('Login failed. Please check your credentials.');
        console.error('Error fetching data:', data);
      }
    } catch (error) {
      // Handle general error, if needed
      console.error('Error during fetch:', error);
    }
  };

  const [search, setSearch] = useState('');
  const cookies = new Cookies();

  useEffect(() => {
    cookies.set('search', search, { path: '/' });
    console.log(cookies);
  }, [search]);

  return (
    <>
      <Navbar setSearch={setSearch} />
      <div className="app-container">
        <h2 className="app-title">Starlight Cinema Login Page</h2>
        <div className="card">
          <form onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="請輸入電子信箱"
            />
            <br />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="請輸入密碼"
            />
            <br />
            <div className="button-login-container">
              <Link to={'/Register'}>
                <button type="button" className="register-button">
                  Sign up
                </button>
              </Link>
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </form>
          <p className="forgot-password">
            <a href="/ForgetPassword">忘記密碼</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
