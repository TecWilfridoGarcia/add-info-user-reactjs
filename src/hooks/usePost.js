import { useState } from 'react';
import axios from 'axios';

export const usePost = () => {
  const [postData, updatePostData] = useState({
    pending: false,
    data: undefined,
    error: undefined,
  });

  const execute = async ({ endpoint, postData }) => {
    updatePostData({
      pending: true,
      data: undefined,
      error: undefined,
    });
    return axios
      .post(`https://blackisp.herokuapp.com/contact`, { ...postData })
      .then(response => {
        updatePostData({ pending: false, data: response.data, error: undefined });
        console.log("bien")
      })
      .catch(error => {
        updatePostData({ pending: false, data: undefined, error: error.message });
        console.log("bien")
      });
  };

  return { execute, pending: postData.pending, data: postData.data, error: postData.error };
};

