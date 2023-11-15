import React, { useState } from 'react';
import Input from '../reusable/Input';
import { StatusMessage } from '@/types';
import { createUser } from '@/services/userService';

type Props = {
    login: boolean;
    setLogin: (login: boolean) => void;
    setStatusMessage: (statusMessage: StatusMessage) => void;
}

const SignUpForm: React.FC<Props> = (props: Props) => {
    const [firstName, setFirstName] = useState<string>('');
    const [firstNameError, setFirstNameError] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [lastNameError, setLastNameError] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const { login, setLogin, setStatusMessage } = props;

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signUpUser();
    }

    const signUpUser = async () => {
        try {
            const response = await createUser({firstName, lastName, email, password, todosIds: [], habitsIds: [], deadlinesIds: []});    
            setStatusMessage({ type: "succes", message: `User ${response.firstName} added.`})
        } 
        catch (error: any) {
            setStatusMessage({ type: "error", message: error.message })
        }
    }

    return (
        <>
            <h2 className='text-center text-2xl m-10'>Register</h2>
            <form className='w-2/3 flex flex-col items-center' onSubmit={handleFormSubmit}>
                <Input label='First Name' type='text' value={firstName} setValue={setFirstName} required={true} error={firstNameError} />
                <Input label='Last Name' type='text' value={lastName} setValue={setLastName} required={true} error={lastNameError} />
                <Input label='Email' type='email' value={email} setValue={setEmail} required={true} error={emailError} />
                <Input label='Password' type='password' value={password} setValue={setPassword} required={true} error={passwordError} />
                <div className="mb-10">
                    <Input label='Register' type='submit' value={null} setValue={() => null} required={false} error="" />
                    <Input label='Login' type='button' value={login} setValue={setLogin} required={false} error="" />
                </div>
            </form>
        </>
    )
};

export default SignUpForm;