import axios from 'axios';

const BASE_URL = 'mongodb://localhost:27017'; // Replace this with your actual API URL

export const createTask = (taskData) => {
  return axios.post(`${BASE_URL}/tasks`, taskData);
};

export const getTasks = () => {
  return axios.get(`${BASE_URL}/tasks`);
};

export const getTaskById = (taskId) => {
  return axios.get(`${BASE_URL}/tasks/${taskId}`);
};

export const updateTask = (taskId, taskData) => {
  return axios.put(`${BASE_URL}/tasks/${taskId}`, taskData);
};

export const deleteTask = (taskId) => {
  return axios.delete(`${BASE_URL}/tasks/${taskId}`);
};