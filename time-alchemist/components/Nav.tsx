import Link from "next/link";

const Nav: React.FC = () => {
    return (
        <nav className="flex flex-col border-r border-[#001E28] border-opacity-50 pr-2">
            <Link href="/">Home</Link>
            <Link href="/deadlines">Deadlines</Link>
            <Link href="/habits">Habits</Link>
            <Link href="/todos">Todos</Link>
            <Link href="/fitness">Fitness</Link>
        </nav>
    )
}

export default Nav;