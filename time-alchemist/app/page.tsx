"use client"
import Nav from '@/components/Nav';
import Account from '@/components/account/Account';
import { useState, useEffect } from 'react';
import { StatusMessage, User } from '@/types';
import { getUserByEmail } from '@/services/userService';
import Header from '@/components/reusable/Header';
import Dashboard from '@/components/home/Dashboard';

const Home = () => {
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

	useEffect(() => {
		console.log(user);
	}, [user])

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
			<main className="flex flex-wrap min-h-screen w-full flex-col content-center items-center justify-center">
				{ (token !== "" && user )  ? (
						<>
							<Header statusMessage={statusMessage} title="Dashboard" />
							<Dashboard user={user} />
						</>
					) : (
						<>	
							<Header statusMessage={statusMessage} title="Dashboard" />
							<div className='flex flex-col items-center justify-center min-h-[85%] w-2/4'>
								<Account setStatusMessage={setStatusMessage} setToken={setToken} setEmail={setEmail} />
							</div>
						</>
				)}
    		</main>
		</>
  	)
}

export default Home;