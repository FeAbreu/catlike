import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import Head from '../Helper/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <Head title="Login" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input name="username" type="text" label="User" {...username} />
        <Input name="password" type="password" label="Password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos'}></Error>
      </form>
      <Link to="/login/lost" className={styles.perdeu}>
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possuí conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/create">
          Cadastrar
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
