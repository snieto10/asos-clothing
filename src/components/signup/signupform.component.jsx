import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './signupform.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
  display: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUp() {
  const [formFields, setFormsFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('password do not match');
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      setFormsFields(defaultFormFields);
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
      <div className='sign-up-container'>
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label='Display Name'
            type='text'
            required
            onChange={handleChange}
            name='displayName'
            value={displayName || ''}
          />

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

          <FormInput
            label='Confirm Password'
            type='password'
            required
            onChange={handleChange}
            name='confirmPassword'
            value={confirmPassword || ''}
          />

          <Button type='submit'>SIGN UP</Button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
