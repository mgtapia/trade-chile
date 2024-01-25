import { useFormik } from 'formik';

function useForm({ initialValues, onSubmit, required, validate, ...args }) {
	const formik = useFormik({
		initialValues,
		onSubmit,
		validate,
		validateOnChange: false,
		validateOnBlur: true
	});

	function setValues(data) {
		formik.setValues((values) => ({
			...values, ...data
		}));
	}

	return {
		...formik,
		setValues,
		required,
		...args
	};
}

export default useForm;