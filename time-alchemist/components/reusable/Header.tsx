import StatusMessageComponent from "./StatusMessageComponent"
import { StatusMessage } from "@/types"

type Props = {
    statusMessage: StatusMessage;
    title: string;
}

const Header: React.FC<Props> = (props: Props) => {

    const { statusMessage, title } = props

    return (
        <div className="flex flex-col min-h-[15%] min-w-full content-center items-center">
            <h1 className="text-center text-4xl p-10">{title}</h1>
            <StatusMessageComponent statusMessage={statusMessage} />
        </div>
    )
}

export default Header;