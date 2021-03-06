import {
    CHECK_CLIENT_DESTINATION_BEGIN,
    CHECK_CLIENT_DESTINATION_SUCCESS,
    CHECK_CLIENT_DESTINATION_EMPTY,
    CHECK_CLIENT_DESTINATION_FAILURE,
    SAVE_CLIENT_DESTINATION_BEGIN,
    SAVE_CLIENT_DESTINATION_SUCCESS,
    SAVE_CLIENT_DESTINATION_FAILURE,
    GET_LIST_CLIENT_DESTINATION_BEGIN,
    GET_LIST_CLIENT_DESTINATION_SUCCESS,
    GET_LIST_CLIENT_DESTINATION_FAILURE,
    TRANSFER_PROCESS_BEGIN,
    TRANSFER_PROCESS_SUCCESS,
    TRANSFER_PROCESS_FAILURE,
} from '../index';

export const checkClientDestinationBegin = () => ({
    type: CHECK_CLIENT_DESTINATION_BEGIN
});

export const checkClientDestinationSuccess = (accNumber, fullName) => ({
    type: CHECK_CLIENT_DESTINATION_SUCCESS,
    accNumber,
    fullName
});

export const checkClientDestinationEmpty = () => ({
    type: CHECK_CLIENT_DESTINATION_EMPTY
});

export const checkClientDestinationFailure = (error) => ({
    type: CHECK_CLIENT_DESTINATION_FAILURE,
    error
});

export const saveClientDestinationBegin = () => ({
    type: SAVE_CLIENT_DESTINATION_BEGIN
});

export const saveClientDestinationSuccess = () => ({
    type: SAVE_CLIENT_DESTINATION_SUCCESS
});

export const saveClientDestinationFailure = (error) => ({
    type: SAVE_CLIENT_DESTINATION_FAILURE,
    error
});

export const getListClientDestinationBegin = () => ({
    type: GET_LIST_CLIENT_DESTINATION_BEGIN
});

export const getListClientDestinationSuccess = (listDest) => ({
    type: GET_LIST_CLIENT_DESTINATION_SUCCESS,
    listDest
});

export const getListClientDestinationFailure = (error) => ({
    type: GET_LIST_CLIENT_DESTINATION_FAILURE,
    error
});

export const transferProcessBegin = () => ({
    type: TRANSFER_PROCESS_BEGIN
});

export const transferProcessSuccess = () => ({
    type: TRANSFER_PROCESS_SUCCESS
});

export const transferProcessFailure = (error) => ({
    type: TRANSFER_PROCESS_FAILURE,
    error
});

