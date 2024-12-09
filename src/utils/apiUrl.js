const rootPath = "http://localhost:8000";
// const rootPath = 'https://back.aicc4hyeonji.site'

const POST_AUTH_API_URL = `${rootPath}/auth/register`;
const POST_LOGIN_API_URL = `${rootPath}/auth/login`;
const POST_MY_MEDI_API_URL = `${rootPath}/myPage/post_myMedi`;
const GET_MY_MEDI_LIST_API_URL = `${rootPath}/myPage/get_myMediList`;
const DELETE_MY_MEDI_LIST_API_URL = `${rootPath}/myPage/delete_myMediList`;
const UPDATE_MY_MEDI_LIST_API_URL = `${rootPath}/myPage/update_myMediList`;
const GET_MEDI_INFO_API_URL = `${rootPath}/medicine/info`;

export {
  POST_AUTH_API_URL,
  POST_LOGIN_API_URL,
  POST_MY_MEDI_API_URL,
  GET_MY_MEDI_LIST_API_URL,
  DELETE_MY_MEDI_LIST_API_URL,
  UPDATE_MY_MEDI_LIST_API_URL,
  GET_MEDI_INFO_API_URL,
};
