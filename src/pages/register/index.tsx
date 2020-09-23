import React, { useState, useContext } from 'react';
import NavbarComp from '../../components/navbar';
import AuthContext from '../../contexts/auth';
import segware from '../../assets/img/segware-200x200.png';

const Register: React.FC = () => {
  const { signUp } = useContext(AuthContext);
  const [email, setEmail] = useState<any | undefined>();
  const [password, setPassword] = useState<any | undefined>();

  function handlePost() {
    signUp(email, password);
  }

  return (
    <>
      <div>
        <div>
          <NavbarComp />
        </div>
        <div className='d-flex justify-content-center mt-1'>
          <div>
            <img className="mb-2" src={segware} alt="" width="200" height="200"
            />
            <h1 className="h4 mb-3 font-weight-normal">Por favor registre-se</h1>
            <label className="sr-only mb-3">Endereço de Email</label>
            <input name="email" type="email" id="inputEmail" className="form-control mb-1"
              placeholder="Email address" required autoFocus={true} value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="sr-only">Senha</label>
            <input name="password" type="password" id="inputPassword" className="form-control mb-3" placeholder="Password" required value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Lembrar senha
              </label>
            </div> */}

            <button className="btn btn-lg btn-primary btn-block"
              onClick={() => handlePost()}>Registrar
            </button>
            <p className="mt-5 mb-3 text-muted">© 2017-2020</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;