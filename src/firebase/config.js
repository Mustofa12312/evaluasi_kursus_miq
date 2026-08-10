import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase with error handling for empty config
let app;
try {
  if (!firebaseConfig.apiKey) {
    console.error("FIREBASE CONFIG ERROR: .env file is empty! Please fill in your Firebase credentials in the .env file.");
    // Fallback to dummy so the app doesn't crash with a blank screen immediately
    app = initializeApp({ ...firebaseConfig, apiKey: "dummy-key", projectId: "dummy-project" });
  } else {
    app = initializeApp(firebaseConfig);
  }
} catch (error) {
  console.error("Firebase init error:", error);
}

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize App Check (Debug Mode untuk Local Development)
if (typeof window !== "undefined") {
  // Hanya jalankan app check jika ada environment variable ReCaptcha atau jika di localhost
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true; // Hapus atau jadikan false untuk production nyata
  import('firebase/app-check').then(({ initializeAppCheck, ReCaptchaV3Provider }) => {
    try {
      initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider('6Ld_dummy_site_key_for_dev_mode_only'),
        isTokenAutoRefreshEnabled: true
      });
    } catch (e) {
      console.warn("App Check failed to initialize (ignored in dev):", e);
    }
  }).catch(e => console.warn("Failed to load app-check module:", e));
}
