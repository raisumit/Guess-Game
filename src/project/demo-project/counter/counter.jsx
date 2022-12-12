import React, { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    const [userData, setuserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password:''

    });
    const handlechange = (e) => {
        console.log(this,e);
        setuserData((prevstate) => {
            let keyname = e.target.name;
            return {
                ...prevstate,
                [keyname]: e.target.value
            }
        })
    }
    return (
        <>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    var validateInput = true;
                    [].slice.apply(e.target.childNodes).forEach((el) => {
                        if(el instanceof HTMLInputElement && el.value === ''){
                            validateInput =false
                        }
                       
                        })
                        if(validateInput){
                            alert('form submited');
                        }
                    console.log(e);
                }}>
                <input name="firstName" onInput={handlechange} value={userData.firstName} ></input>
                <input name="lastName" onInput={handlechange} value={userData.lastName}></input>
                <input name="email" onInput={handlechange} value={userData.email}></input>
                <input name="mobile" onInput={handlechange} value={userData.mobile}></input>
                <input name="password" onInput={handlechange} value={userData.password}></input>
                {/* <input name="mobile1" onInput={handlechange} value={userData.mobileNo}></input> */}
                <button type='submit' >submit</button>
            </form>
            <h1>My count is : {count}</h1>
            <button onClick={() => {
                if (count < 10) {
                    setCount(count + 1);
                }
            }}> increase</button>
            <button onClick={() => {
                if (count > -10) {
                    setCount(count - 1);
                }
            }}> decrease</button>
        </>
    )
}
export default Counter;