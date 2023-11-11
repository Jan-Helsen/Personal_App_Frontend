import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { StatusMessage } from '@/types';

type Props = {
    setToken: (token: string) => void;
    setStatusMessage: (statusMessage: StatusMessage) => void;
    setEmail: (email: string) => void;
}

const Account: React.FC<Props> = (props: Props) => {
    const [login, setLogin] = useState<boolean>(true);
    const { setToken, setStatusMessage, setEmail } = props;

    return (
        <>
            {login ? <LoginForm setStatusMessage={setStatusMessage} login={login} setLogin={setLogin} setToken={setToken} setEmail={setEmail} /> : <SignUpForm setStatusMessage={setStatusMessage} login={login} setLogin={setLogin} />}
        </>
    )
};

export default Account;