import Link from "next/link";
import { StatusMessage } from "@/types";
import { useRouter } from "next/navigation";

type Props = {
    token: string;
    setToken: (token: string) => void;
    setEmail: (email: string) => void;
    setStatusMessage: (statusMessage: StatusMessage) => void;
}

const Nav: React.FC<Props> = (props: Props) => {
    
    const { token, setToken, setEmail, setStatusMessage } = props;

    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        setStatusMessage({ type: "success", message: "Successfully logged out" });
        setToken("");
        setEmail("");
        setTimeout(() => {
            setStatusMessage({ type: "", message: "" });
            router.push("/");
        }, 2000);
    }

    return (
        <div className="flex flex-col border-r border-[#001E28] border-opacity-50 justify-between px-1 py-4">
            <nav className="flex flex-col gap-8  pr-2 items-center">
                <Link href="/">Home</Link>
                <Link href="/calendar">Calendar</Link>
                <Link href="/deadlines">Deadlines</Link>
                <Link href="/habits">Habits</Link>
                <Link href="/todos">Todos</Link>
                <Link href="/fitness">Fitness</Link>
            </nav>
            <div className="flex flex-col items-center">
                { token !== "" && <button onClick={handleLogout}>log out</button>}
                <Link href="/settings">settings</Link>
            </div>
        </div>
    )
}

export default Nav;