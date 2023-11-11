import React, { useState } from 'react';
import Input from '../reusable/Input';
import { StatusMessage } from '@/types';

type Props = {
    login: boolean;
    setLogin: (login: boolean) => void;
    setStatusMessage: (statusMessage: StatusMessage) => void;
}

const SignUpForm: React.FC<Props> = (props: Props) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { login, setLogin, setStatusMessage } = props;

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('sign up form submitted');
    }

    return (
        <div className='flex flex-col items-center justify-center w-2/4'>
            <h2 className='text-center text-2xl'>Register</h2>
            <form className='w-2/3 flex flex-col items-center' onSubmit={handleFormSubmit}>
                <Input label='First Name' type='text' value={firstName} setValue={setFirstName} required={true} />
                <Input label='Last Name' type='text' value={lastName} setValue={setLastName} required={true} />
                <Input label='Email' type='email' value={email} setValue={setEmail} required={true} />
                <Input label='Password' type='password' value={password} setValue={setPassword} required={true} />
                <div>
                    <Input label='Register' type='submit' value={null} setValue={() => null} required={false} />
                    <Input label='Login' type='button' value={login} setValue={setLogin} required={false} />
                </div>
            </form>
        </div>
    )
};

export default SignUpForm;