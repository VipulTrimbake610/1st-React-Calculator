
import './Modal.css';
import { useState } from 'react';

const Modal = () =>{
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    function num1Fn(event) {
        setNum1(event.target.value);
    }
    function num2Fn(event) {
        setNum2(event.target.value);
    }
    function validation(event){    
        let err = document.getElementsByClassName("error")[0];
        err.style.color = "red";
        if(num1==="" || num2===""){
            setError("Error!");
            setMsg(`${(num1==="")?"Num1":"Num2"} Cannot Be Empty`);
        }else if(isNaN(num1) || isNaN(num2)){
            setError("Error!");
            setMsg("Number Should be Either Integer, Floating-Point, Positive or Negative");
        }else{
            let operator = event.target.classList[2];
            result(operator);
        }
    }
    function result(op){
        setError("Success!");
        let success = document.getElementsByClassName("error")[0];
        success.style.color = "blue";
        let result = eval(num1+op+num2);
        setMsg(`Result : ${result}`);
    }
    return(
        <>
        <div className="modal">
            <div className="title">React Calculator</div>
            <input type="text" id="num1" onChange={num1Fn} placeholder="Num 1"/>
            <input type="text" id="num2" onChange={num2Fn} placeholder="Num 2"/>
            <div className="ops">
                <button className="op op1 +" onClick={validation}>+</button>
                <button className="op op2 -" onClick={validation}>-</button>
                <button className="op op3 *" onClick={validation}>*</button>
                <button className="op op4 /" onClick={validation}>/</button>
            </div>
            <div className='errorMsg'>
                <div className='error'>{error}</div>
                <div className='msg'>{msg}</div>
            </div>
        </div>
        </>
    )
}

export default Modal;