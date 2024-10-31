import React from "react";
import {useTranslation} from "react-i18next";

interface CalculateSliderProps {
    currentValue?: string;
    title?: string;
    fromValue?: string;
    toValue?: string;
    onChange: (value: any) => void;
    name: string;
    numberValue: number;
    min: number;
    max: number;
    stepBy: number;
}

const CalculateSlider: React.FC<CalculateSliderProps> = (props) => {
    const {t} = useTranslation()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        props.onChange((prev: any) => ({
            ...prev,
            [props.name]: parseInt(value, 10),
        }));
    };

    return (
        <div className="">
            <div className="flex justify-between items-center max-md:text-[16px] font-[500] leading-[23px] text-[18px]">
                <h4>{props.title}</h4>
                <h4>{props.currentValue}</h4>
            </div>
            <div className="flex justify-between items-center my-1">
                <input
                    onChange={handleChange}
                    min={props.min}
                    max={props.max}
                    step={props.stepBy}
                    value={props.numberValue}
                    type="range"
                    className="w-full"
                />
            </div>
            <div className="flex justify-between items-center text-[14px] max-md:text-[12px] text-gray_4B">
                <span>{t('calculateSlider.formValue')} {props.fromValue}</span>
                <span>{t('calculateSlider.toValue')} {props.toValue}</span>
            </div>
        </div>
    );
};

export default CalculateSlider;
