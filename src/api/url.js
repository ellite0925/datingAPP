const URL_NETWORK = "http://172.16.115.3:5000"
// export const BASE_URL = "http://192.168.1.120:5000/"

const URL_USER = "/api/users"
const URL_ACCOUNT = "/api/account"
export const URL_SIGN_UP_EMAIL = URL_NETWORK + URL_ACCOUNT + "/register"
export const URL_SIGN_IN_EMAIL = URL_NETWORK + URL_ACCOUNT + "/login"
export const URL_SIGN_IN_FACEBOOK = URL_NETWORK + URL_ACCOUNT + "/facebook-login"
export const URL_GET_IMAGE_SWIPE = URL_NETWORK + URL_USER + "/pagination"
export const URL_POST_LIKE_IMAGE_SWIPE = URL_NETWORK + URL_USER
export const URL_GET_MESSAGES = URL_NETWORK + URL_USER
export const URL_GET_USER_DETAIL = URL_NETWORK + URL_USER
export const URL_POST_MARK_MESSAGES = URL_NETWORK + URL_USER
export const URL_GET_PROFILE = URL_NETWORK + URL_USER
export const URL_PUT_PROFILE = URL_NETWORK + URL_USER
export const URL_POST_PHOTOS = URL_NETWORK + URL_USER
export const URL_GET_USER_LIKED_ME = URL_NETWORK + URL_USER + "/pagination"
export const URL_GET_MESSAGES_CONVERSATION = URL_NETWORK + URL_USER

//realtime
export const URL_CONNECT_SERVER_MESSAGES = URL_NETWORK + "/hubs/messages"

//http://localhost:5000/api/users/pagination?pageNumber=1&pageSize=10&likers=true
//http://localhost:5000/api/users/3/messages/16/read