import Input from '../../components/UI/Input.tsx';
import FileInput from '../../components/UI/FileInput.tsx';
import {useTranslation} from 'react-i18next';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useState} from 'react';
import Snackbar, {SnackbarCloseReason} from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SubmitApplication() {
    const {t} = useTranslation();
    const api = `https://back-ifs.onrender.com/submit`;
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [loading, setLoading] = useState(false)

    const validationSchema = Yup.object({
        inn: Yup.string() .length(12, 'ИНН должен состоять из 12 цифр')
            .required('ИНН обязателен'),
        orgName: Yup.string().required('Наименование организации обязательно'),
        directorName: Yup.string().required('ФИО руководителя обязательно'),
        responsibleEmployee: Yup.string().required('ФИО ответственного сотрудника обязательно'),
        contact: Yup.string().length(10, 'Контакт должен состоять из 10 цифр')
            .required('Контакт обязательно '),
        balanceReport: Yup.mixed().required('PDF файлы обязательно'),
        cashFlowReport: Yup.mixed().nullable(),
        debtorsReport: Yup.mixed().nullable(),
        assetsReport: Yup.mixed().nullable(),
        profitLossReport: Yup.mixed().nullable(),
        capitalChangeReport: Yup.mixed().nullable(),
        creditorsReport: Yup.mixed().nullable(),
        auditConclusion: Yup.mixed().nullable(),
    });
    const handleInnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 12);
        formik.setFieldValue('inn', value);
    };

    const handlePhoneChange = (e:React.ChangeEvent<HTMLInputElement>) => {
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
        onSubmit: async (values, {resetForm}) => {
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

                const response = await axios.post(api, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                console.log('API response:', response.data);
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
                                label="ИНН организации"
                                placeholder="Введите ИНН организации"
                                name="inn"
                                value={formik.values.inn}
                                onChange={handleInnChange}
                                error={formik.errors.inn && formik.touched.inn ? formik.errors.inn : ''}
                            />
                        </div>
                        <div className="mt-6 max-md:mt-5">
                            <Input
                                label="Полное наименование организации"
                                placeholder="Введите наименование организации"
                                name="orgName"
                                value={formik.values.orgName}
                                onChange={formik.handleChange}
                                error={formik.errors.orgName && formik.touched.orgName ? formik.errors.orgName : ''}
                            />
                        </div>
                        <div className="mt-6 max-md:mt-5">
                            <Input
                                label="ФИО руководителя организации"
                                placeholder="Введите ФИО"
                                name="directorName"
                                value={formik.values.directorName}
                                onChange={formik.handleChange}
                                error={formik.errors.directorName && formik.touched.directorName ? formik.errors.directorName : ''}
                            />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="mt-6">
                            <Input
                                label="ФИО ответственного сотрудника"
                                placeholder="Введите ФИО"
                                name="responsibleEmployee"
                                value={formik.values.responsibleEmployee}
                                onChange={formik.handleChange}
                                error={formik.errors.responsibleEmployee && formik.touched.responsibleEmployee ? formik.errors.responsibleEmployee : ''}
                            />
                        </div>
                        <div className="mt-6">
                            <Input
                                label="Контакты"
                                placeholder="0709 000 000"
                                name="contact"
                                value={formik.values.contact}
                                onChange={handlePhoneChange}
                                error={formik.errors.contact && formik.touched.contact ? formik.errors.contact : ''}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-[48px]">
                    <div className="flex gap-x-[50px] flex-col md:flex-row">
                        <div className="flex-1">
                            <div className="mt-[44px] max-md:mt-[20px]">
                                <FileInput
                                    title="Балансовый отчет за 3 года"
                                    name="balanceReport"
                                    uploaded={Boolean(formik.values.balanceReport)}
                                    onChange={(file) => formik.setFieldValue('balanceReport', file)}
                                    error={formik.errors.balanceReport && formik.touched.balanceReport ? formik.errors.balanceReport : ''}
                                />
                            </div>
                            <div className="mt-[44px] max-md:mt-[20px]">
                                <FileInput
                                    title="Отчет о движениях денежных средств за 3 года"
                                    name="cashFlowReport"
                                    uploaded={!!formik.values.cashFlowReport}
                                    onChange={(file) => formik.setFieldValue('cashFlowReport', file)}
                                    error={formik.errors.cashFlowReport && formik.touched.cashFlowReport ? formik.errors.cashFlowReport : ''}
                                />
                            </div>
                            <div className="mt-[44px] max-md:mt-[20px]">
                                <FileInput
                                    title="Расшифровка дебиторов с датой возникновения и погашения задолженности"
                                    name="debtorsReport"
                                    uploaded={!!formik.values.debtorsReport}
                                    onChange={(file) => formik.setFieldValue('debtorsReport', file)}
                                    error={formik.errors.debtorsReport && formik.touched.debtorsReport ? formik.errors.debtorsReport : ''}
                                />
                            </div>
                            <div className="mt-[44px] max-md:mt-[20px]">
                                <FileInput
                                    title="Расшифровка основных средств предприятия"
                                    name="assetsReport"
                                    uploaded={!!formik.values.assetsReport}
                                    onChange={(file) => formik.setFieldValue('assetsReport', file)}
                                    error={formik.errors.assetsReport && formik.touched.assetsReport ? formik.errors.assetsReport : ''}
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="mt-[44px] max-md:mt-[20px]">
                                <FileInput
                                    title="Отчет о прибылях и убытках за 3 года"
                                    name="profitLossReport"
                                    uploaded={!!formik.values.profitLossReport}
                                    onChange={(file) => formik.setFieldValue('profitLossReport', file)}
                                    error={formik.errors.profitLossReport && formik.touched.profitLossReport ? formik.errors.profitLossReport : ''}
                                />
                            </div>
                            <div className="mt-[44px] max-md:mt-[20px]">
                                <FileInput
                                    title="Отчет об изменениях в капитале"
                                    name="capitalChangeReport"
                                    uploaded={!!formik.values.capitalChangeReport}
                                    onChange={(file) => formik.setFieldValue('capitalChangeReport', file)}
                                    error={formik.errors.capitalChangeReport && formik.touched.capitalChangeReport ? formik.errors.capitalChangeReport : ''}
                                />
                            </div>
                            <div className="mt-[44px] max-md:mt-[20px]">
                                <FileInput
                                    title="Расшифровка кредиторов с датами погашения"
                                    name="creditorsReport"
                                    uploaded={!!formik.values.creditorsReport}
                                    onChange={(file) => formik.setFieldValue('creditorsReport', file)}
                                    error={formik.errors.creditorsReport && formik.touched.creditorsReport ? formik.errors.creditorsReport : ''}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-[44px] max-md:mt-[20px]">
                        <FileInput
                            title="Заключение/подтверждение внешнего аудитора за последний год"
                            name="auditConclusion"
                            uploaded={!!formik.values.auditConclusion}
                            onChange={(file) => formik.setFieldValue('auditConclusion', file)}
                            error={formik.errors.auditConclusion && formik.touched.auditConclusion ? formik.errors.auditConclusion : ''}
                        />
                    </div>
                </div>

                <div className="text-center my-[48px]">
                    <button
                        type="submit"
                        className="bg-blue text-white w-[245px] h-[56px] rounded-lg"
                        disabled={loading}
                    >
                        {loading ? 'Отправка...' : 'Отправить заявку'}
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
                    Заявка успешно отправлена!
                </Alert>
            </Snackbar>


        </div>
    );
}
