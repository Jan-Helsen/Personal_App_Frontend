"use client"
import Nav from '@/components/Nav';
import { useState, useEffect } from 'react';
import { StatusMessage, User, Event } from '@/types';
import { getUserByEmail } from '@/services/userService';
import Header from '@/components/reusable/Header';
import Calendar from '@/components/calendar/Calendar';

const Home: React.FC = () => {
    const [statusMessage, setStatusMessage] = useState<StatusMessage>({ type: "", message: "" });
    const [token, setToken] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const tok = localStorage.getItem('token');
        const emal = localStorage.getItem('email');
        if (tok && emal) {
            setEmail(emal);
            setToken(tok);
        }
    }, [statusMessage]);

    useEffect(() => {
        getUser();
    }, [token])

    const getUser = async () => {
        if (token !== "" && email !== "") {
            try {
                const user = await getUserByEmail({ email, token });
                setUser(user);	
            } catch (error: any) {
                setStatusMessage({ type: "error", message: error.message })
            }
        }
    }

    return (
        <>
            <Nav token={token} setToken={setToken} setEmail={setEmail} setStatusMessage={setStatusMessage} />
            <main className="flex min-h-screen w-full flex-col content-center items-center justify-center">
                <Header statusMessage={statusMessage} title="Calendar" />
                {user && (
                    <Calendar user={user} token={token} />
                )}
            </main>
        </>
    )
};

export default Home;