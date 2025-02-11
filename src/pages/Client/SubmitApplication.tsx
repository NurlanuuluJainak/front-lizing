import Input from '../../components/UI/Input.tsx';
import FileInput from '../../components/UI/FileInput.tsx';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const api = 'https://back-ifs.onrender.com';



export default function SubmitApplication() {
    const { t } = useTranslation();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [loading, setLoading] = useState(false)

    const validationSchema = Yup.object({
        inn: Yup.string()
            .length(12, t('validation.innLength'))
            .required(t('validation.innRequired')),
        orgName: Yup.string()
            .required(t('validation.orgNameRequired')),
        directorName: Yup.string()
            .required(t('validation.directorNameRequired')),
        responsibleEmployee: Yup.string()
            .required(t('validation.responsibleEmployeeRequired')),
        contact: Yup.string().length(10, t('validation.contactFormat'))
            .required(t('validation.contactRequired')),
        balanceReport: Yup.mixed()
            .required(t('validation.balanceReportRequired')),
        cashFlowReport: Yup.mixed().nullable(),
        debtorsReport: Yup.mixed().nullable(),
        assetsReport: Yup.mixed().nullable(),
        profitLossReport: Yup.mixed().nullable(),
        capitalChangeReport: Yup.mixed().nullable(),
        creditorsReport: Yup.mixed().nullable(),
        auditConclusion: Yup.mixed().nullable(),
    });

    const handleInnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 12);
        formik.setFieldValue('inn', value);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 10);
        formik.setFieldValue('contact', value);
    };




    const formik = useFormik({
        initialValues: {
            inn: '',
            orgName: '',
            directorName: '',
            responsibleEmployee: '',
            contact: '',
            balanceReport: null,
            cashFlowReport: null,
            debtorsReport: null,
            assetsReport: null,
            profitLossReport: null,
            capitalChangeReport: null,
            creditorsReport: null,
            auditConclusion: null,
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true)
            try {
                const formData = new FormData();
                formData.append('nn_organization', values.inn);
                formData.append('full_name_organization', values.orgName);
                formData.append('full_name_ceo', values.directorName);
                formData.append('full_name_responsible_employee', values.responsibleEmployee);
                formData.append('contact', values.contact);

                if (values.balanceReport) formData.append('balance_three_years', values.balanceReport);
                if (values.profitLossReport) formData.append('report_profit_loss_three', values.profitLossReport);
                if (values.cashFlowReport) formData.append('cash_flow_statement', values.cashFlowReport);
                if (values.capitalChangeReport) formData.append('statement_of_changes_equity', values.capitalChangeReport);
                if (values.debtorsReport) formData.append('decoding_debtors_repayment', values.debtorsReport);
                if (values.creditorsReport) formData.append('decoding_credits', values.creditorsReport);
                if (values.assetsReport) formData.append('decoding_fixed_assets', values.assetsReport);
                if (values.auditConclusion) formData.append('conclusion_confirmation', values.auditConclusion);

                await axios.post(`${api}/submit`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });


                setOpenSnackbar(true);
                resetForm()
            } catch (error) {
                console.error('Error posting to the API:', error);
            } finally {
                setLoading(false)
            }
        },
    });

    const handleCloseSnackbar = (reason: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <div className="mb-[100px]">
            <form onSubmit={formik.handleSubmit}>
                <div className='mb-[30px]'>
                    <h1 className='text-center text-[32px] font-[700] leading-[41px] md:text-left'>
                        {t('routes.submitApplication')}
                    </h1>
                </div>

                <div className="flex gap-x-[44px] flex-col md:flex-row">
                    <div className="flex-1">
                        <div className="mt-6 max-md:mt-5">
                            <Input
                                label={t('form.inn')}
                                placeholder={t('form.enterInn')}
                                name="inn"
                                value={formik.values.inn}
                                onChange={handleInnChange}
                                error={formik.touched.inn && formik.errors.inn ? formik.errors.inn : ''}
                            />
                        </div>
                        <div className="mt-6 max-md:mt-5">
                            <Input
                                label={t('form.orgName')}
                                placeholder={t('form.enterOrgName')}
                                name="orgName"
                                value={formik.values.orgName}
                                onChange={formik.handleChange}
                                error={formik.touched.orgName && formik.errors.orgName ? formik.errors.orgName : ''}
                            />
                        </div>
                        <div className="mt-6 max-md:mt-5">
                            <Input
                                label={t('form.directorName')}
                                placeholder={t('form.enterDirectorName')}
                                name="directorName"
                                value={formik.values.directorName}
                                onChange={formik.handleChange}
                                error={formik.touched.directorName && formik.errors.directorName ? formik.errors.directorName : ''}
                            />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="mt-6">
                            <Input
                                label={t('form.responsibleEmployee')}
                                placeholder={t('form.enterResponsibleEmployee')}
                                name="responsibleEmployee"
                                value={formik.values.responsibleEmployee}
                                onChange={formik.handleChange}
                                error={formik.touched.responsibleEmployee && formik.errors.responsibleEmployee ? formik.errors.responsibleEmployee : ''}
                            />
                        </div>
                        <div className="mt-6">
                            <Input
                                label={t('form.contact')}
                                placeholder={t('form.enterContact')}
                                name="contact"
                                value={formik.values.contact}
                                onChange={handlePhoneChange}
                                error={formik.touched.contact && formik.errors.contact ? formik.errors.contact : ''}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-[48px]">
                    <div className="flex gap-x-[50px] flex-col md:flex-row">
                        <div className="flex-1">
                            <div className="mt-[44px] max-md:mt-[20px]">
                                <FileInput
                                    title={t('form.balanceReport')}
                                    name="balanceReport"
                                    uploaded={Boolean(formik.values.balanceReport)}
                                    onChange={(file) => formik.setFieldValue('balanceReport', file)}
                                    error={formik.touched.balanceReport && formik.errors.balanceReport ? formik.errors.balanceReport : ''}
                                />
                            </div>
                            <div className="mt-[44px] max-md:mt-[20px]">
                                <FileInput
                                    title={t('form.cashFlowReport')}
                                    name="cashFlowReport"
                                    uploaded={Boolean(formik.values.cashFlowReport)}
                                    onChange={(file) => formik.setFieldValue('cashFlowReport', file)}
                                    error={formik.touched.cashFlowReport && formik.errors.cashFlowReport ? formik.errors.cashFlowReport : ''}
                                />
                            </div>
                            <div className="mt-[44px] max-md:mt-[20px]">
                                <FileInput
                                    title={t('form.debtorsReport')}
                                    name="debtorsReport"
                                    uploaded={Boolean(formik.values.debtorsReport)}
                                    onChange={(file) => formik.setFieldValue('debtorsReport', file)}
                                    error={formik.touched.debtorsReport && formik.errors.debtorsReport ? formik.errors.debtorsReport : ''}
                                />
                            </div>
                            <div className="mt-[44px] max-md:mt-[20px]">
                                <FileInput
                                    title={t('form.assetsReport')}
                                    name="assetsReport"
                                    uploaded={Boolean(formik.values.assetsReport)}
                                    onChange={(file) => formik.setFieldValue('assetsReport', file)}
                                    error={formik.touched.assetsReport && formik.errors.assetsReport ? formik.errors.assetsReport : ''}
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="mt-[44px] max-md:mt-[20px]">
                                <FileInput
                                    title={t('form.profitLossReport')}
                                    name="profitLossReport"
                                    uploaded={Boolean(formik.values.profitLossReport)}
                                    onChange={(file) => formik.setFieldValue('profitLossReport', file)}
                                    error={formik.touched.profitLossReport && formik.errors.profitLossReport ? formik.errors.profitLossReport : ''}
                                />
                            </div>
                            <div className="mt-[44px] max-md:mt-[20px]">
                                <FileInput
                                    title={t('form.capitalChangeReport')}
                                    name="capitalChangeReport"
                                    uploaded={Boolean(formik.values.capitalChangeReport)}
                                    onChange={(file) => formik.setFieldValue('capitalChangeReport', file)}
                                    error={formik.touched.capitalChangeReport && formik.errors.capitalChangeReport ? formik.errors.capitalChangeReport : ''}
                                />
                            </div>
                            <div className="mt-[44px] max-md:mt-[20px]">
                                <FileInput
                                    title={t('form.creditorsReport')}
                                    name="creditorsReport"
                                    uploaded={Boolean(formik.values.creditorsReport)}
                                    onChange={(file) => formik.setFieldValue('creditorsReport', file)}
                                    error={formik.touched.creditorsReport && formik.errors.creditorsReport ? formik.errors.creditorsReport : ''}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-[44px] max-md:mt-[20px]">
                        <FileInput
                            title={t('form.auditConclusion')}
                            name="auditConclusion"
                            uploaded={Boolean(formik.values.auditConclusion)}
                            onChange={(file) => formik.setFieldValue('auditConclusion', file)}
                            error={formik.touched.auditConclusion && formik.errors.auditConclusion ? formik.errors.auditConclusion : ''}
                        />
                    </div>
                </div>

                <div className="text-center my-[48px]">
                    <button
                        type="submit"
                        className="bg-blue text-white w-[245px] h-[56px] rounded-lg"
                        disabled={loading}
                    >
                        {loading ? t('form.sending') : t('form.submitButton')}
                    </button>
                </div>
            </form>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={(_, reason) => handleCloseSnackbar(reason)} // Omit the 'event' parameter
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <Alert onClose={() => handleCloseSnackbar('clickaway')} severity="success" sx={{ width: '100%' }}>
                    {t('form.success')}
                </Alert>
            </Snackbar>


        </div>
    );
}
