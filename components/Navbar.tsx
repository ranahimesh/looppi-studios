
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [profileOpen, setProfileOpen] = useState(false);
   
  const getAccountAge = () => {
  if (!user?.created_at) return "0 Days";

  const created = new Date(user.created_at);
  const now = new Date();

  const diffTime = now.getTime() - created.getTime();
  const diffDays = Math.max(
    1,
    Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  );

  if (diffDays >= 365) {
    const years = Math.floor(diffDays / 365);
    return `${years} ${years === 1 ? "Year" : "Years"}`;
  }

  if (diffDays >= 30) {
    const months = Math.floor(diffDays / 30);
    return `${months} ${months === 1 ? "Month" : "Months"}`;
  }

  return `${diffDays} ${diffDays === 1 ? "Day" : "Days"}`;
};

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
      console.log("USER DATA:", user);
      console.log(user);
    };

    getUser();
  }, []);

const handleLogout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    alert(error.message);
    console.error(error);
 } else {
  setUser(null);
setProfileOpen(false);
window.location.href = "/login";
}
};

  return (
    <header
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "96%",
        maxWidth: "1600px",
        height: "90px",
        background: "rgba(2,11,45,0.65)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "24px",
        zIndex: 99999,
        boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 30px",
        }}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo-removebg-preview.png"
            alt="Looppi Studios"
            width={180}
            height={70}
            priority
            style={{
              width: "180px",
              height: "auto",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </Link>

        {/* Desktop Menu */}
        <div
          className="desktop-menu"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <a href="#about" className="nav-link">
            About
          </a>

          <a href="#careers" className="nav-link">
            Careers
          </a>

          <a href="#news" className="nav-link">
            News
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>

          <a
            href="https://discord.gg/bpThTVNR"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Discord
          </a>

         <div style={{ position: "relative" }}>
 <div style={{ position: "relative" }}>
 {user ? (
  <button
    onClick={() => setProfileOpen(!profileOpen)}
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "4px",
      background: "#ffffff",
      border: "none",
      cursor: "pointer",
      fontSize: "22px",
    }}
  >
    {user.email?.charAt(0).toUpperCase()}
  </button>
) : (
  <Link
    href="/login"
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "4px",
      background: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      fontSize: "22px",
      color: "#000",
    }}
  >
    👤
  </Link>
)}
  {user && profileOpen && (
  <div
    style={{
      position: "absolute",
      top: "50px",
      right: 0,
      width: "340px",
      background: "#050505",
      border: "1px solid #1a1a1a",
      boxShadow: "0 0 30px rgba(0,0,0,0.7)",
      zIndex: 999,
      overflow: "hidden",
    }}
  >
    <div
      style={{
        padding: "24px",
        display: "flex",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          border: "2px solid #666",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "30px",
          fontWeight: "700",
        }}
      >
        {user.email?.charAt(0).toUpperCase()}
      </div>

      <div>
        <h3
          style={{
            color: "white",
            margin: 0,
            fontSize: "28px",
            fontWeight: "700",
          }}
        >
          {user.email?.split("@")[0]}
        </h3>

       <p
  style={{
    color: "#fff",
    marginTop: "8px",
    marginBottom: 0,
    fontSize: "20px",
  }}
>
  Level 1
</p>
      </div>
    </div>
<div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "20px",
    padding: "0 24px 20px",
  }}
>
  <div
    style={{
      flex: 1,
      background: "#1b1b1b",
      borderRadius: "10px",
      padding: "12px",
      textAlign: "center",
    }}
  >
    <div
      style={{
        color: "white",
        fontSize: "28px",
        fontWeight: "700",
      }}
    >
      {getAccountAge().split(" ")[0]}
    </div>

    <div
      style={{
        color: "#aaa",
        fontSize: "12px",
      }}
    >
      {getAccountAge().split(" ")[1]} with Looppi
    </div>
  </div>

  <div
    style={{
      flex: 1,
      background: "#1b1b1b",
      borderRadius: "10px",
      padding: "12px",
      textAlign: "center",
    }}
  >
    <div
      style={{
        color: "white",
        fontSize: "28px",
        fontWeight: "700",
      }}
    >
      1
    </div>

    <div
      style={{
        color: "#aaa",
        fontSize: "12px",
      }}
    >
      account owned
    </div>
  </div>
</div>
    <div
      style={{
        borderTop: "1px solid #222",
      }}
    />

   

<a
  href="#"
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 20px",
    color: "white",
    textDecoration: "none",
    borderBottom: "1px solid #222",
  }}
>
      <span>Customer Support</span>
      <span>↗</span>
    </a>

    <a
      href="#"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 20px",
        color: "white",
        textDecoration: "none",
        borderBottom: "1px solid #222",
      }}
    >
      <span>Looppi Store</span>
      <span>↗</span>
    </a>

    <button
      onClick={handleLogout}
      style={{
        width: "100%",
        textAlign: "left",
        padding: "22px 20px",
        background: "#111",
        border: "none",
        color: "#2196f3",
        fontSize: "18px",
        cursor: "pointer",
      }}
    >
      Logout ↪
    </button>
  </div>
)}
</div>
</div>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "30px",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "#020b2d",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            borderBottomLeftRadius: "24px",
            borderBottomRightRadius: "24px",
          }}
        >
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#careers">Careers</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>

          <a
            href="https://discord.gg/bpThTVNR"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>

         <div style={{ position: "relative" }}>
 <div style={{ position: "relative" }}>
  <button
    onClick={() => {
      if (!user) {
        router.push("/login");
      } else {
        setProfileOpen(!profileOpen);
      }
    }}
    style={{
      width: "46px",
      height: "46px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.12)",
      border: "1px solid rgba(255,255,255,0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      fontSize: "22px",
      color: "white",
      overflow: "hidden",
      cursor: "pointer",
    }}
  >
    {user ? (
      user.email?.charAt(0).toUpperCase()
    ) : (
      <FaUserCircle size={24} color="#ffffff" />
    )}
  </button>

  {profileOpen && (
    <div
      style={{
        position: "absolute",
        top: "55px",
left: 0,
width: "300px",
minWidth: "300px",
borderRadius: "16px",
boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
overflow: "hidden",
        background: "#000",
        border: "1px solid #222",
        zIndex: 9999,
      }}
    >
      <div style={{ padding: "20px", color: "white" }}>
  <h3>{user?.email}</h3>

  <div style={{ marginTop: "15px" }}>
    Account Management
  </div>

  <div style={{ marginTop: "15px" }}>
    Customer Support
  </div>

  <div style={{ marginTop: "15px" }}>
    Looppi Store
  </div>

  <button
    onClick={handleLogout}
    style={{
      marginTop: "20px",
      background: "transparent",
      color: "#00bfff",
      border: "none",
      cursor: "pointer",
    }}
  >
    Logout
  </button>
</div>
    </div>
  )}
</div>
</div>
        </div>
      )}
    </header>
  );
}