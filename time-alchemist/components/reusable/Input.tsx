import InputError from "./InputError";

type Props = {
    label: string;
    type: string;
    value: any | null;
    setValue: (value: any) => void;
    required: boolean;
    error: string;
}

const Input: React.FC<Props> = (props: Props) => {
    const { label, type, value, setValue, required, error } = props;

    if (type === "submit") {
        return (
            <input className='m-2 text-xl bg-blue-500 hover:bg-lime-300 rounded-md p-1.5 duration-125 shadow cursor-pointer' type={type} value={label} />
        )
    }
    else if (type === "button") {
        return (
            <button className='m-2 text-xl bg-blue-500 hover:bg-lime-300 rounded-md p-1.5 duration-125 shadow ' type={type} onClick={() => setValue(!value)}>{label}</button>
        )
    }
    else if (type === "file") {
        return (
            <div >
                <label className="block text-gray-700" htmlFor={label}>{label}{required && "* "}: </label>
                <input type={type} name={label} id={label} onChange={setValue}/>
            </div>
        )
    }
    else {
        return (
            <>
                <div className="w-9/12 max-w-xs mb-6">
                    <label className="block text-blue-100 text-sm font-semibold mb-1" htmlFor={label}>{label}{required && "* "}: </label>
                    <input className="w-full shadow appearance-none border rounded w-ful py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" type={type} name={label} id={label} value={value} onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                        console.log(e.target.value);
                        setValue(e.target.value)}} />
                </div>
                {error !== "" && <InputError error={error} />}
            </>
        )
    };
};

export default Input;