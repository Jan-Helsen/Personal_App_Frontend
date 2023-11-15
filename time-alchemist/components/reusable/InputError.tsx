
type Props = {
    error: string;
}

const InputError: React.FC<Props> = (props: Props) => {
    
    const { error } = props;

    return (
        <div>
            <p>{error}</p>
        </div>
    )
}

export default InputError;