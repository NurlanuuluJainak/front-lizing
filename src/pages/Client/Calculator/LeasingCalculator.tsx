import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { Link } from "react-router-dom";
import CalculateSlider from "./CalculateSlider.tsx";
export interface DepositCalculator {
    leasingCost: number,
    contractTerm: number,
    initialPayment: number,
    buyoutPayment: number,
}
export default function LeasingCalculator() {
    const [depositCalculator, setDepositCalculator] = useState<DepositCalculator>({
        leasingCost: 3000000,
        contractTerm: 12,
        initialPayment: 800000,
        buyoutPayment: 6,
    });

    const { t } = useTranslation();

    const generalSum = depositCalculator.leasingCost - depositCalculator.initialPayment;

    const annualRate = depositCalculator.buyoutPayment;
    const monthlyRate = annualRate / 12 / 100;

    const months = depositCalculator.contractTerm;

    const monthPayment = generalSum * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

    const totalInterest = (monthPayment * months) - generalSum;

    return (
        <div className="mb-[100px] ">
            <div className="mb-[30px]">
                <h1 className="text-center text-[32px] font-[700] leading-[41px] md:text-left">
                    {t('routes.leasingCalculator')}
                </h1>
            </div>
            <div className="flex flex-col gap-[50px]">
                <div className=" mt-10 flex justify-between gap-8  max-md:flex-col">
                    <div className="flex flex-col gap-6 w-full">
                        <CalculateSlider
                            currentValue={`${depositCalculator.leasingCost}  сом`}
                            title={t('calculateSlider.leasingCost')}
                            fromValue={`500 000 с`}
                            toValue={`5 000 000 с`}
                            onChange={setDepositCalculator}
                            name={'leasingCost'}
                            numberValue={depositCalculator.leasingCost}
                            min={500000}
                            max={5000000}
                            stepBy={10000}
                        />
                        <CalculateSlider
                            currentValue={`${depositCalculator.contractTerm} мес`}
                            title={t('calculateSlider.contractTerm')}
                            fromValue={`6 мес`}
                            toValue={`84 мес`}
                            onChange={setDepositCalculator}
                            name={'contractTerm'}
                            numberValue={depositCalculator.contractTerm}
                            min={6}
                            max={84}
                            stepBy={3}
                        />
                    </div>
                    <div className="flex flex-col w-full gap-6">
                        <CalculateSlider
                            currentValue={`${depositCalculator.initialPayment}  сом`}
                            title={t('calculateSlider.initialPayment')}
                            fromValue={`500 000 с`}
                            toValue={`5 000 000 с`}
                            onChange={setDepositCalculator}
                            name={'initialPayment'}
                            numberValue={depositCalculator.initialPayment}
                            min={500000}
                            max={5000000}
                            stepBy={10000}
                        />
                        <CalculateSlider
                            currentValue={`${depositCalculator.buyoutPayment}%`}
                            title={t('calculateSlider.buyoutPayment')}
                            fromValue={`1%`}
                            toValue={`50%`}
                            onChange={setDepositCalculator}
                            name={'buyoutPayment'}
                            numberValue={depositCalculator.buyoutPayment}
                            min={1}
                            max={50}
                            stepBy={1}
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="border rounded-[20px] border-gray_CD p-5 font-medium">
                        <div className="flex item-center justify-between text-[18px] max-md:text-[14px]">
                            <h4> {t('lizingCalculator.monthPayment')}</h4>
                            <h4> {t('lizingCalculator.leasingCost')}</h4>

                        </div>
                        <div className="flex item-center justify-between text-[32px] max-md:text-[24px]">
                            <h3 className='block  max-md:hidden'>{!isNaN(monthPayment) && isFinite(monthPayment) ? monthPayment.toFixed(2) : 0} сом</h3>
                            <div className='hidden  max-md:block'>
                                <h3>{!isNaN(monthPayment) && isFinite(monthPayment) ? monthPayment.toFixed(2) : 0} </h3>
                                <p>сом</p>
                            </div>

                            <h3 className='block max-md:hidden'>{depositCalculator.leasingCost} сом</h3>
                            <div className='hidden max-md:block'>
                                <h3>{depositCalculator.leasingCost} </h3>
                                <p>сом</p>
                            </div>

                        </div>
                        <hr className="text-[#959595] my-6" />
                        <div className="flex item-center justify-between text-[18px] max-md:text-[14px]">
                            <h4> {t('lizingCalculator.generalSum')}</h4>

                            <h4> {t('lizingCalculator.totalInterest')}</h4>

                        </div>
                        <div className="flex item-center justify-between text-[32px] max-md:text-[24px]">
                            <h3 className="block max-md:hidden">{generalSum} сом</h3>
                            <div className="hidden max-md:block">
                                <h3>{generalSum} </h3>
                                <p>
                                    сом
                                </p>
                            </div>

                            <h3 className="block max-md:hidden">{!isNaN(totalInterest) && isFinite(totalInterest) ? totalInterest.toFixed(2) : 0} сом</h3>
                            <div className="hidden max-md:block">
                                <h3>{!isNaN(totalInterest) && isFinite(totalInterest) ? totalInterest.toFixed(2) : 0} </h3>
                                <p>сом</p>
                            </div>

                        </div>

                        <Link className="bg-[#122247] text-white fontSize18 py-3 rounded-[7px] w-full mt-5 block text-center" to={'/clients/submit-application'}>
                            {t('lizingCalculator.submitApplication')}
                        </Link>
                        <span className="text-[#555555] text-[10px] mt-[28px] font-normal inline-block">
                            {t('lizingCalculator.description')}

                        </span>
                    </div>
                </div>


            </div>
        </div>
    );
}
