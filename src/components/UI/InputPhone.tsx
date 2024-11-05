import React from "react";

interface Props {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    error?: string;
}
export default  function InputPhone({ label, placeholder, value, onChange, name, error }: Props){
    return (
        <div className="w-full">
            <label className="text-[12px] font-medium">{label}</label>
            <input
                value={value}
                onChange={onChange}
                name={name}
                type="text"
                placeholder={placeholder}
                className={`w-full mt-1 outline-none border rounded-[8px] py-2 text-[16px] px-4 ${
                    error ? 'border-red-500' : 'border-[#CFD3D4]'
                }`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}
