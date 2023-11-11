import { StatusMessage } from "@/types";

type Props = {
    statusMessage: StatusMessage,
};

const StatusMessageComponent: React.FC<Props> = ({ statusMessage }: Props) => 
{
    return (
        <>
            {statusMessage && (
                <div>
                    {statusMessage.type === "error" ? <p className="" >{statusMessage.message}</p> : <p className="" >{statusMessage.message}</p>}
                </div>  
            )}
        </>
    );
};

export default StatusMessageComponent;