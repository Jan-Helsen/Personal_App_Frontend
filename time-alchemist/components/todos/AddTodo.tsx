import Input from "../reusable/Input";
import { StatusMessage } from "@/types";
import { useState } from "react";
import { createTodo } from "@/services/todoService";

type Props = {
    token: string;
    userId: number;
    setStatusMessage: (statusMessage: StatusMessage) => void;
}

const AddTodo: React.FC<Props> = (props: Props) => {
    const [name, setName] = useState<string>("");
    const [nameError, setNameError] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [descriptionError, setDescriptionError] = useState<string>("");

    const { token, userId, setStatusMessage } = props;

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo();
    }

    const addTodo = async () => {
        try {
            const response = await createTodo({ name, description, userId, token });
            setName("");
            setDescription("");
            setStatusMessage({ type: "succes", message: `Todo ${response.name} added.` })
        }
        catch (error: any) {
            setStatusMessage({ type: "error", message: error.message })
        }
    }

    return (
        <div className="w-[50%] p-10">
            <form onSubmit={handleFormSubmit} className="w-5/6 h-3/4 flex flex-col items-center justify-evenly rounded-lg bg-gradient-to-b from-[#178cc6] to-[#005e59]">
                <h2 className="text-3xl font-bold text-center p-10">Add Todos</h2>
                <Input label="Name" type="text" value={name} setValue={setName} required={true} error={nameError}/>
                <Input label="Description" type="text" value={description} setValue={setDescription} required={true} error={descriptionError} />
                <Input label='Add Deadline' type='submit' value={null} setValue={() => null} required={false} error="" />
            </form>
        </div>
    )
}

export default AddTodo;