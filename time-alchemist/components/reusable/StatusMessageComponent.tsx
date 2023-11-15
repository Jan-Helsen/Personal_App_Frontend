import { StatusMessage } from "@/types";

type Props = {
    statusMessage: StatusMessage,
};

const StatusMessageComponent: React.FC<Props> = ({ statusMessage }: Props) => {

    if (statusMessage.type === "") return null;
    else if (statusMessage.type === "error") {
        return (
            <div className="bg-red-500 w-[40%] p-3 rounded-lg">
                <p className="text-center m-auto">{statusMessage.message}</p>
            </div>
        );
    }
    else if (statusMessage.type === "success") {
        return (
            <div className="bg-green-900 rounded-lg w-[40%] p-3">
                <p className="text-center">{statusMessage.message}</p>
            </div>
        );
    }
    return null
};

export default StatusMessageComponent;