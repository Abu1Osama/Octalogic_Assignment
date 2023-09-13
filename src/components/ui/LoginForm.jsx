import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signinUser } from "../../Redux/AuthRedux/action";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleLogin = () => {
    const userData = { email, password };
    dispatch(signinUser(userData,navigate))
  };

  return (
    <div className="bluish  h-[100vh] p-20">
      <div className="bg-white border p-10 flex flex-col gap-5 w-[30%] m-auto rounded-2xl">
        <h2 className="text-center">Login</h2>
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
          <Button onClick={handleLogin}>Login</Button>
          <a className="text-[#83858B]" href="/signup">New user</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
