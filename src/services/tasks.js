import axios from 'axios';

const API_URL = 'https://todolist-express-daval.herokuapp.com/';
const RESOURCE = 'tasks';

export const fechTasks = async () => {
  try {
    const tasks = await axios.get(`${API_URL}${RESOURCE}`);
    return tasks.data;
  } catch (error) {
    console.log(error);
  }
};

export const postTask = async (task) => {
  try {
    //La lógica para hacer una solicitud/petición de tipo POST
    const response = await axios({
      url: `${API_URL}${RESOURCE}`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: task,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const putTask = async (task) => {
  try {
    //La lógica para hacer una solicitud/petición de tipo POST
    const response = await axios({
      url: `${API_URL}${RESOURCE}/${task.id}`,
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      data: task,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const completeTask = async (id, task) => {
  try {
    //La lógica para hacer una solicitud/petición de tipo POST
    const response = await axios({
      url: `${API_URL}${RESOURCE}/${id}`,
      method: 'put',
      data: { ...task, completed: true },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (id) => {
  try {
    //La lógica para hacer una solicitud/petición de tipo POST
    const response = await axios({
      url: `${API_URL}${RESOURCE}/${id}`,
      method: 'delete',
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
