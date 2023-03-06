import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.js';

import SignUp from '../../components/signup/signupform.component.jsx';
import './sign-in.styles.scss';
import SignInIn from '../../components/sign-in/sign-in.component.jsx';

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className='signIn-flex'>
      <SignInIn />
      <SignUp />
    </div>
  );
}

export default SignIn;
