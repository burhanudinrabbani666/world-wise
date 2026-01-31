import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/fakeAuth/useAuth";
import { replace, useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Login() {
  const navigate = useNavigate();
  const { login, isAuth } = useAuth();

  console.log(login, isAuth);

  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  function hadleLogin(event) {
    event.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(() => {
    isAuth === true && navigate("/app", { replace: true });
  }, [isAuth, navigate]);

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary" onClick={hadleLogin}>
            Login
          </Button>
          {/* <button onClick={hadleLogin}>Login</button> */}
        </div>
      </form>
    </main>
  );
}
