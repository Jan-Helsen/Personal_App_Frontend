import Input from "../reusable/Input";
import { useState } from "react";
import { StatusMessage } from "@/types";
import { createDeadline } from "@/services/deadlineService";

type Props = {
    token: string;
    userId: number;
    setStatusMessage: (statusMessage: StatusMessage) => void;
}

const AddDeadline: React.FC<Props> = (props: Props) => {
    const [name, setName] = useState<string>("");
    const [nameError, setNameError] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [subjectError, setSubjectError] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [descriptionError, setDescriptionError] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [endDateError, setEndDateError] = useState<string>("");

    const { token, userId, setStatusMessage } = props;

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addDeadline();
    }

    const addDeadline = async () => {
        try {
            console.log(userId)
            const response = await createDeadline({ name, subject, description, endDate, userId, token });
            setName("");
            setSubject("");
            setDescription("");
            setEndDate("");
            setStatusMessage({ type: "succes", message: `Deadline ${response.name} added.` })
        }
        catch (error: any) {
            setStatusMessage({ type: "error", message: error.message })
        }
    }

    return (
        <div className="w-[50%] p-10">
            <form onSubmit={handleFormSubmit} className="w-5/6 h-3/4 flex flex-col items-center justify-evenly rounded-lg bg-gradient-to-b from-[#178cc6] to-[#005e59]">
                <h2 className="text-3xl font-bold text-center p-10">Add Deadline</h2>
                <Input label="Name" type="text" value={name} setValue={setName} required={true} error={nameError}/>
                <Input label="Subject" type="text" value={subject} setValue={setSubject} required={true} error={subjectError} />
                <Input label="Description" type="text" value={description} setValue={setDescription} required={true} error={descriptionError} />
                <Input label="End Date" type="datetime-local" value={endDate} setValue={setEndDate} required={true} error={endDateError} />
                <Input label='Add Deadline' type='submit' value={null} setValue={() => null} required={false} error="" />
            </form>
        </div>
    )
};

export default AddDeadline;