import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { signup } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = values => {
    dispatch(signup(values));
    reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name
        <input name="username" type="text" {...register('username')} />
      </label>
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
  );
};
