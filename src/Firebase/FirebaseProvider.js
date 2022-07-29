import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./FirebaseConfig";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, Provider)
//     .then((result) => {
//       localStorage.setItem("emart-user", JSON.stringify(result));
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// export default signInWithGoogle;
