import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAk83sKeRHTK8T5vgCWIidaLbtcwWHe30I",
  authDomain: "looppi-studio.firebaseapp.com",
  projectId: "looppi-studio",
  storageBucket: "looppi-studio.firebasestorage.app",
  messagingSenderId: "744837607974",
  appId: "1:744837607974:web:43be78015985a71dd8ace7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;