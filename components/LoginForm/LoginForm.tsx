import styles from "./styles.module.css";
import { useState } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import { login } from "../../apiCalls/user";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowError, setShowError] = useState(false);
  const [isShowSuccess, setShowSuccess] = useState(false);
  const [isButtonLoading, setButtonLoading] = useState(false);

  const loginUser = async () => {
    try {
      setButtonLoading(true);

      const response = await login({ email, password });

      if (response.status === 200) {
        cookie.set(process.env.JWT_KEY as string, response.data.token);
        // cookie.set("creator_id", response.data.creatorId);
        setShowSuccess(true);
        setShowError(false);
        setTimeout(() => {
          router.push("/");
        }, 2000);

        console.log(response);
        setButtonLoading(false);
      }
    } catch (err) {
      console.error("Login Error", err);
      setShowError(true);
      setButtonLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      <h1>Login to Portfolio Platform</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <Button onClick={loginUser} title="Login" isLoading={isButtonLoading} />

      {isShowError && <h5 className={styles.error}>Bad email or password</h5>}
      {isShowSuccess && (
        <h5 className={styles.success}>Login successful! Redirecting...</h5>
      )}
    </div>
  );
};

export default LoginForm;
