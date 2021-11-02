import actionTypes from './actionTypes';
import * as FUNCTION from '../../services'
import Toast from 'react-native-toast-message';

const fetchHomeData = () => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.PROCESS_APP_ACTIONS })

        const resDoctor = await FUNCTION.getTopDoctorHomeService(8)
        const resSpecialty = await FUNCTION.getTopSpecialties(8)
        const resClinic = await FUNCTION.getTopClinics(8)
        if (
            resDoctor && resDoctor.errCode === 0
            && resSpecialty && resSpecialty.errCode === 0
            && resClinic && resClinic.errCode === 0
        )
            dispatch({
                type: actionTypes.FETCH_HOME_DATA_SUCCESS,
                payload: {
                    topDoctor: resDoctor.data,
                    topClinic: resClinic.data,
                    topSpecialty: resSpecialty.data
                }
            })

        else {
            dispatch({ type: actionTypes.PROCESS_APP_ACTIONS_FAILED })
            Toast.show({
                text1: "Error",
                text2: "Có lỗi xảy ra. Vui lòng thử lại sau"
            })
        }
    }
}

const fetchAllSpecialty = () => {
    return async dispatch => {
        dispatch({ type: actionTypes.PROCESS_APP_ACTIONS })
        const resSpecialty = await FUNCTION.getAllSpecialties()
        if(resSpecialty && resSpecialty.errCode === 0) {
            dispatch({
                type: actionTypes.FETCH_ALL_SPECIALTY_SUCCESS,
                payload: resSpecialty.data
            })
        } else {
            dispatch({ type: actionTypes.PROCESS_APP_ACTIONS_FAILED })
            Toast.show({
                text1: "Error",
                text2: "Có lỗi xảy ra. Vui lòng thử lại sau"
            })
        }
    }
}

const fetchAllDoctor = () => {
    return async dispatch => {
        dispatch({ type: actionTypes.PROCESS_APP_ACTIONS })
        const resDoctor = await FUNCTION.getAllDoctor()
        if(resDoctor && resDoctor.errCode === 0) {
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
                payload: resDoctor.data
            })
        } else {
            dispatch({ type: actionTypes.PROCESS_APP_ACTIONS_FAILED })
            Toast.show({
                text1: "Error",
                text2: "Có lỗi xảy ra. Vui lòng thử lại sau"
            })
        }
    }
}

const fetchAllClinic = () => {
    return async dispatch => {
        dispatch({ type: actionTypes.PROCESS_APP_ACTIONS })
        const resClinic = await FUNCTION.getAllClinics()
        if(resClinic && resClinic.errCode === 0) {
            dispatch({
                type: actionTypes.FETCH_ALL_CLINIC,
                payload: resClinic.data
            })
        } else {
            dispatch({ type: actionTypes.PROCESS_APP_ACTIONS_FAILED })
            Toast.show({
                text1: "Error",
                text2: "Có lỗi xảy ra. Vui lòng thử lại sau"
            })
        }
    }
}

export {
    fetchHomeData,
    fetchAllSpecialty,
    fetchAllDoctor,
    fetchAllClinic
}