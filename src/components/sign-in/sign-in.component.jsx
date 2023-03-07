import { useState, useContext } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';
import {
  signInEmailPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../context/user.context';

const defaultFormFields = {
  email: '',
  password: '',
};

function SignInIn() {
  const [formFields, setFormsFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetForm = () => {
    setFormsFields({
      email: '',
      password: '',
    });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInEmailPassword(email, password);
      setCurrentUser(user);

      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormsFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <>
      <div className='sign-up-container2'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label='Email'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email || ''}
          />

          <FormInput
            label='Password'
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password || ''}
          />

          <div className='signin-inline'>
            <Button type='submit'>SIGN IN</Button>
            <Button
              type='submit'
              buttonType='google'
              onClick={signInWithGoogle}
            >
              SIGN IN WITH GOOGLE
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignInIn;
