import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export default function Login() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = values => {
    dispatch(logIn(values));
    reset();
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email
          <input name="email" type="text" {...register('email')} />
        </label>
        <label>
          Password
          <input name="password" type="password" {...register('password')} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
