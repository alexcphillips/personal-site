import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../store/reducers/userSlice";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./Login.css";
// import AlertBox from "../components/AlertBox";
import { getAxiosError, setStateKeyVal } from "../utilities";

const rememberMe = (e) => console.log(e.target);

export default function Login() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [state, updateState] = useState({
        email: "alexphillipsdev@gmail.com",
        password: "12345678",
        error: "",
    });

    async function login() {
        console.log("logging in user");
        console.log("state:", state);
        try {
            const result = await axios.post("login", {
                email: state.email,
                password: state.password,
            });
            console.log("result.data:", result.data);
            axios.defaults.headers.common[
                "authorization"
            ] = `Bearer ${result.data.token}`;

            // save user to redux store
            const user = { email: state.email, token: result.data.token };
            dispatch(userLogin(user));

            localStorage.setItem("user", JSON.stringify(user));

            // if redirect query string go to that location
            const redirect = searchParams.get("redirect");
            if (redirect) {
                navigate(`/${redirect}`, { replace: true });
            } else {
                navigate("/", { replace: true });
            }
        } catch (err) {
            const error = getAxiosError(err);
            console.log(error);
            setStateKeyVal(state, "error", error, updateState);
        }
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="7">
                    <Form className="input-form">
                        <h3>Sign In</h3>

                        <br />
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                defaultValue={
                                    state.email || "alexphillipsdev@gmail.com"
                                }
                            />
                        </Form.Group>

                        <br />

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                defaultValue={state.password || "12345678"}
                            />
                        </Form.Group>

                        <br />

                        <p className="forgot-password text-right">
                            <Link to="/forgot-password">Forgot password</Link>
                        </p>

                        <p>
                            <Link to="/register">Create a new account</Link>
                        </p>

                        <Form.Group>
                            <Form.Label>Remember me</Form.Label>
                            <Form.Check
                                onChange={rememberMe}
                                className="inline ml-10"
                                type="checkbox"
                                id={1}
                            />
                        </Form.Group>

                        <Button variant="primary" onClick={login}>
                            Login
                        </Button>

                        <br />
                        <br />

                        {/* <AlertBox
              show={state.error ? true : false}
              variant="danger"
              message={(state.error && state.error.text) || state.error}
              onClick={() => setStateKeyVal(state, "error", null, updateState)}
            /> */}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
