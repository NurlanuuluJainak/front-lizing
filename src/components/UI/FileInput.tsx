import Check from '../../../public/icon/check.svg'

interface Props {
    title: string;
    onChange: (file: File | null) => void;
    error?: string;
    name: string;
    uploaded: boolean;
}

export default function FileInput({title, onChange, error, name, uploaded}: Props) {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        onChange(file);
    };

    console.log(uploaded, 'uploaded')

    return (
        <div className="flex flex-col md:flex-row justify-between items-center">
      <span className="inline-block font-medium max-w-[682px] mb-3 md:mb-0">
        {title}
      </span>
            <div className="max-w-[200px] w-full">
                <div className="flex items-center gap-1">
                    <input
                        name={name}
                        type="file"
                        id={`fileInput-${name}`} // unique id using name prop
                        accept=".pdf"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    {uploaded && (
                        <img src={Check} alt={'check'} className={'w-[20px] h-[20px]'}/>

                    )}


                    <label
                        htmlFor={`fileInput-${name}`} // dynamic htmlFor to match input id
                        className="bg-blue text-white flex items-center justify-center w-full rounded-[4px] h-[30px] cursor-pointer"
                    >
                        Выберите файл
                    </label>
                    {error && <div className="text-red-600 mt-2">{error}</div>}
                </div>


            </div>

        </div>
    );
}
