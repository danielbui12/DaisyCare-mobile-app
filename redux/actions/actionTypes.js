const actionTypes = Object.freeze({
    //user
    PROCESS_ACTIONS: "PROCESS_ACTIONS",
    PROCESS_ACTION_FAILED: "PROCESS_ACTION_FAILED",
    USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
    USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
    PROCESS_LOGOUT: "PROCESS_LOGOUT",
    UPDATE_USER_INFO: "UPDATE_USER_INFO",

    //app
    PROCESS_APP_ACTIONS: "PROCESS_APP_ACTIONS",
    PROCESS_APP_ACTIONS_FAILED: "PROCESS_APP_ACTIONS_FAILED",
    FETCH_HOME_DATA_SUCCESS: 'FETCH_HOME_DATA_SUCCESS',
    FETCH_ALL_SPECIALTY_SUCCESS: "FETCH_ALL_SPECIALTY_SUCCESS",
    FETCH_ALL_CLINIC: 'FETCH_ALL_CLINIC',
    //admin
    FETCH_INFO_START: "FETCH_INFO_START",
    FETCH_GENDER_SUCCESS: "FETCH_GENDER_SUCCESS",
    FETCH_GENDER_FAIL: "FETCH_GENDER_FAIL",

    FETCH_POSITION_SUCCESS: "FETCH_POSITION_SUCCESS",
    FETCH_POSITION_FAIL: "FETCH_POSITION_FAIL",

    FETCH_ROLE_SUCCESS: "FETCH_ROLE_SUCCESS",
    FETCH_ROLE_FAIL: "FETCH_ROLE_FAIL",


    CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
    CREATE_USER_FAIL: "CREATE_USER_FAIL",

    DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
    DELETE_USER_FAIL: "DELETE_USER_FAIL",

    EDIT_USER_SUCCESS: "EDIT_USER_SUCCESS",
    EDIT_USER_FAIL: "EDIT_USER_FAIL",

    FETCH_ALL_USER_SUCCESS: "FETCH_ALL_USER_SUCCESS",
    FETCH_ALL_USER_FAIL: "FETCH_ALL_USER_FAIL",

    FETCH_TOP_DOCTOR_SUCCESS: "FETCH_TOP_DOCTOR_SUCCESS",
    FETCH_TOP_DOCTOR_FAIL: "FETCH_TOP_DOCTOR_FAIL",

    FETCH_ALL_DOCTOR_SUCCESS: "FETCH_ALL_DOCTOR_SUCCESS",
    FETCH_ALL_DOCTOR_FAIL: "FETCH_ALL_DOCTOR_FAIL",

    FETCH_ALLCODE_SCHEDULE_SUCCESS: "FETCH_ALLCODE_SCHEDULE_SUCCESS",
    FETCH_ALLCODE_SCHEDULE_FAIL: "FETCH_ALLCODE_SCHEDULE_FAIL",

    FETCH_REQUIRED_DOCTOR_INFO_SUCCESS: "FETCH_REQUIRED_DOCTOR_INFO_SUCCESS",
    FETCH_REQUIRED_DOCTOR_INFO_FAIL: "FETCH_REQUIRED_DOCTOR_INFO_FAIL",
})

export default actionTypes;