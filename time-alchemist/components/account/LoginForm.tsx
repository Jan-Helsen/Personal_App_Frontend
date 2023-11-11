import React, { useState } from 'react';
import Input from '../reusable/Input';
import { loginUser } from '@/services/userService';
import { StatusMessage } from '@/types';

type Props = {
    login: boolean;
    setLogin: (login: boolean) => void;
    setToken: (token: string) => void;
    setStatusMessage: (statusMessage: StatusMessage) => void;
    setEmail: (email: string) => void;
}

const LoginForm: React.FC<Props> = (props: Props) => {
    const [email, setEmal] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    
    const { login, setLogin, setToken, setStatusMessage, setEmail } = props;


    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loginUsr();
    };

    const loginUsr = async () => {
        try {
            const response = await loginUser({ email, password });
            setToken(response.token);
            setEmail(email);
            setStatusMessage({ type: "success", message: "Successfully logged in!" });
            localStorage.setItem('token', response.token);
            localStorage.setItem('email', email);
            setTimeout(() => {
                setStatusMessage({ type: "", message: "" })
            }, 4000)
        } 
        catch (error: any) {
            setStatusMessage({ type: "error", message: error.message })
        }
    }

    return (
        <div className='flex flex-col items-center justify-center w-2/4'>
            <h2 className='text-center text-2xl'>Login</h2>
            <form className='w-2/3 flex flex-col items-center' onSubmit={handleFormSubmit}>
                <Input label='Email' type='email' value={email} setValue={setEmal} required={true} />
                <Input label='Password' type='password' value={password} setValue={setPassword} required={true} />
                <div>
                    <Input label='Login' type='submit' value={null} setValue={() => null} required={false} />
                    <Input label='Register' type='button' value={login} setValue={setLogin} required={false} />
                </div>
            </form>
        </div>
    )
};

export default LoginForm;