"use client"
import Nav from '@/components/Nav';
import Account from '@/components/account/Account';
import { useState, useEffect } from 'react';
import { StatusMessage, User } from '@/types';
import StatusMessageComponent from '@/components/reusable/StatusMessageComponent';
import { getUserByEmail } from '@/services/userService';

const Home = () => {
	const [statusMessage, setStatusMessage] = useState<StatusMessage>({ type: '', message: '' });
	const [token, setToken] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [user, setUser] = useState<User>();

	useEffect(() => {
		const tok = localStorage.getItem('token');
		const emal = localStorage.getItem('email');
		if (tok && emal) {
			setToken(tok);
			setEmail(emal);
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
			<Nav />
			<main className="flex flex-wrap min-h-screen w-full flex-col content-center justify-center">
				{ token !== "" ? (
						<>
							<h1 className="text-center text-4xl pb-10">Welcome {user?.firstName}!</h1>
							<StatusMessageComponent statusMessage={statusMessage} />
						</>
					) : (
						<>
							<h1 className="text-center text-4xl pb-10">Welcome!</h1>
							<StatusMessageComponent statusMessage={statusMessage} />
							<Account setStatusMessage={setStatusMessage} setToken={setToken} setEmail={setEmail} />
						</>
				)}
    		</main>
		</>
  	)
}

export default Home;