"use client"
import styles from "./page.module.css";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session.status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Prevent automatic redirect
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/dashboard"); // Redirect to dashboard on success
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{success ? success : "Welcome Back"}</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
      <button
        onClick={() => signIn("google")}
        className={`${styles.button} ${styles.google}`}
      >
        Login with Google
      </button>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/register">
        Create new account
      </Link>
    </div>
  );
};

export default Login;
