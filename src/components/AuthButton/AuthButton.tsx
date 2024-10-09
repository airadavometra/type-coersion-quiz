import { FC } from "react";
import s from "./AuthButton.module.css";
import classNames from "classnames";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase/firebase";
import { getInitials } from "../../utils/getInitials";
import { User } from "../../icons/User";
import { LogOut } from "../../icons/LogOut";
import { LogIn } from "../../icons/LogIn";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";

type AuthButtonProps = {
  className?: string;
};

export const AuthButton: FC<AuthButtonProps> = ({ className }) => {
  const [user] = useAuthState(auth);
  console.log(user);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleLogOut = async () => {
    auth.signOut();
    window.location.reload();
  };

  return (
    <div className={s.container}>
      {user && (
        <div className={s.button}>
          {user.photoURL ? (
            <img
              className={s.photo}
              src={user.photoURL}
              referrerPolicy="no-referrer"
            />
          ) : user.displayName ? (
            getInitials(user.displayName)
          ) : (
            <User className={s.icon} />
          )}
        </div>
      )}
      <button
        onClick={user ? handleLogOut : handleSignIn}
        className={classNames(s.button, className)}
      >
        {user ? (
          <>
            <LogOut className={s.icon} />
            <VisuallyHidden>Log out</VisuallyHidden>
          </>
        ) : (
          <>
            <LogIn className={s.icon} />
            <VisuallyHidden>Log in</VisuallyHidden>
          </>
        )}
      </button>
    </div>
  );
};
