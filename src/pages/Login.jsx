import Header from '../components/Header';
import Conteudo from '../components/conteudo';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login() {
    return (
        <>
        <Header btn={false} />
        <Conteudo>
            <h2>Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Digite sua senha" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button type="sumbit"className="btn btn-primary">Login</Button>
            </Form>
        </Conteudo>
        </>
    )
}

export default Login