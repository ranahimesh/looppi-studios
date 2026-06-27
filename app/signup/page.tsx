"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      if (error) {
        alert(error.message);
        return;
      }

      alert("Account Created Successfully!");
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0f3b8a 0%, #020617 45%, #000814 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "40px",
          borderRadius: "24px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >
        <p
          style={{
            color: "#06b6d4",
            textAlign: "center",
            letterSpacing: "4px",
            marginBottom: "10px",
            fontWeight: "700",
          }}
        >
          LOOPPI STUDIOS
        </p>

        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "2.5rem",
          }}
        >
          Create Account
        </h1>

        <p
          style={{
            color: "#94a3b8",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Join the Looppi community today.
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "16px",
            marginBottom: "15px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "#0f172a",
            color: "white",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "16px",
            marginBottom: "15px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "#0f172a",
            color: "white",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "16px",
            marginBottom: "20px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "#0f172a",
            color: "white",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={handleSignup}
          disabled={loading}
          style={{
            width: "100%",
            padding: "16px",
            background:
              "linear-gradient(135deg,#06b6d4 0%,#2563eb 100%)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontWeight: "700",
            cursor: "pointer",
            marginBottom: "20px",
            fontSize: "16px",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p
          style={{
            color: "#94a3b8",
            textAlign: "center",
          }}
        >
          Already have an account?{" "}
          <Link
            href="/login"
            style={{
              color: "#06b6d4",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}