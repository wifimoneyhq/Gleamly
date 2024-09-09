import axios from 'axios';

// Set the base URL for your API
const API_URL = 'http://localhost:5000';  // Adjust this if your backend is hosted elsewhere

// Function to get all items
export const getAllItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

// Function to get an item by ID
export const getItemById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/item/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching item with ID ${id}:`, error);
    throw error;
  }
};

// Function to add a new item
export const addItem = async (name) => {
  try {
    const response = await axios.post(`${API_URL}/add`, { name });
    return response.data;
  } catch (error) {
    console.error('Error adding item:', error);
    throw error;
  }
};

// Function to update an item by ID
export const updateItem = async (id, name) => {
  try {
    const response = await axios.put(`${API_URL}/item/${id}`, { name });
    return response.data;
  } catch (error) {
    console.error(`Error updating item with ID ${id}:`, error);
    throw error;
  }
};

// Function to delete an item by ID
export const deleteItem = async (id) => {
  try {
    await axios.delete(`${API_URL}/item/${id}`);
  } catch (error) {
    console.error(`Error deleting item with ID ${id}:`, error);
    throw error;
  }
};