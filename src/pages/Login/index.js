import React from "react";
import { AreaLogin } from "./styled";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import { BtnDefaultIcons, BtnDefault } from "../../components/styled";




export default () => {
    return (



        <BrowserRouter>
            <Switch>
                <Route exact path="/register">
                    <AreaLogin>
                        <h1 className="register-header">
                            <Link to="/">voltar</Link> <br />
                            Crie sua conta</h1>
                        <p>Crie sua conta , é grátis!</p>
                        <form>
                            <div className="form-input" >
                                <label>Nome</label>
                                <input type="text" />
                            </div>
                            <div className="form-input" >
                                <label>E-mail</label>
                                <input type="email" />
                            </div>
                            <div className="form-input" >
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <BtnDefault>
                                Comece Agora!
                            </BtnDefault>
                            <div className="footerLogin">
                                Já tem uma conta? <Link to="/"> Faça Login </Link>
                            </div>
                        </form>


                    </AreaLogin>
                </Route>

                <Route exact path="*">
                    <AreaLogin>
                        <h1>
                            Faça login em sua conta
                        </h1>
                        <BtnDefaultIcons>
                            Fazer Login com Facebook
                        </BtnDefaultIcons>
                        <BtnDefaultIcons>
                            Fazer Login o Google
                        </BtnDefaultIcons>

                        <p>OU</p>

                        <form>
                            <div className="form-input" >
                                <label>E-mail</label>
                                <input type="email" />
                            </div>
                            <div className="form-input" >
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <BtnDefault>
                                Entrar
                            </BtnDefault>

                            <div className="footerLogin">
                                Não tem uma conta? <Link to="/register"> Registre-se </Link>
                            </div>

                        </form>


                    </AreaLogin>
                </Route>

            </Switch>

        </BrowserRouter>
    )

}