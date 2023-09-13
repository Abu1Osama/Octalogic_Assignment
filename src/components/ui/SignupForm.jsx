import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../../Redux/AuthRedux/action";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {
    const userData = { email, password };
    console.log(userData);
    dispatch(signupUser(userData, navigate));
  };
  const tologin = () => {
    navigate("/");
  };

  return (
    <div className="bluish h-[100vh] p-20">
      <div className="bg-white border p-10 flex flex-col gap-5 w-[30%] m-auto rounded-2xl">
        <h2 className=" text-center text-2xl font-bold ">Signup</h2>
        <div className="flex flex-col gap-5">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSignup}>Register</Button>
          <span onClick={tologin} className="text-[#83858B]">
            already have an account
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
