import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};


export const register = createAsyncThunk('auth/register',
    async (credentials, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', credentials);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (e) {
        toast.error("Oops... Something went wrong");
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const login = createAsyncThunk('auth/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (e) {
            if (e.response.status === 400) {
                toast("Incorrect email or rassword");
                return thunkAPI.rejectWithValue(e.message);;
            }
            toast.error("Oops... Something went wrong");
            return thunkAPI.rejectWithValue(e.message);
        }
    });

export const logout = createAsyncThunk('auth/logout',
    async (credentials, thunkAPI) => {
        try {
        await axios.post('/users/logout', credentials);
            clearAuthHeader();
        } catch (e) {
            toast.error("Oops... Something went wrong");
            return thunkAPI.rejectWithValue(e.message);
    }
});

export const refreshUser = createAsyncThunk('auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        try {
            setAuthHeader(persistedToken);
            const response = await axios.get('/users/current');
            return response.data;            
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        };
    }
);

