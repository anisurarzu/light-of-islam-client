import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [scholar, setScholar] = useState(false);
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const [scholars, setScholars] = useState();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, history) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        setLoading(false);
        // save user to the database
        saveUser(email, name, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      });
  };

  const loginUser = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const signInWithGoogle = (location, history) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        // saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
        setLoading(false);
      }
    });
    return () => unsubscribed;
  }, [auth]);

  useEffect(() => {
    fetch(`https://limitless-lowlands-32082.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data?.admin));
  }, [user?.email]);

  useEffect(() => {
    fetch(`https://limitless-lowlands-32082.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setScholar(data?.scholar));
  }, [user?.email]);

  useEffect(() => {
    fetch(
      `https://limitless-lowlands-32082.herokuapp.com/users/profile/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user?.email]);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        setLoading(false);
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const saveUser = (email, displayName, method) => {
    console.log(displayName);
    const user = { email, displayName };
    fetch("https://limitless-lowlands-32082.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // scholar finding
  useEffect(() => {
    fetch("https://limitless-lowlands-32082.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        const collectedScholar = data.filter((data) => data.role === "scholar");
        setScholars(collectedScholar);
      });
  }, []);

  return {
    user,
    userInfo,
    admin,
    scholar,
    scholars,
    token,
    loading,
    authError,
    registerUser,
    loginUser,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
