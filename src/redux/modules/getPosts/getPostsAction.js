import axios from "axios"

        export const getPostsLoading = () => (
            {
                type: "GET_POSTS_LOADING",
            }
        )
        export const getPostsError = (err) => ({
            type: "GET_POSTS_ERROR",
            payload: err,
        })
        
        export const getPostsSuccess = (res) => ({
            type: "GET_POSTS_SUCCES",
            payload: res,
        })
        
        export const getPosts = () => (dispatch) => {
            dispatch(getPostsLoading())
            axios.get("https://store-management-backend-app.herokuapp.com/api/v1/product")
                .then((res) => {
                    dispatch(getPostsSuccess(res.data))
                    console.log(res);
                })
                .catch((err) => {
                    dispatch(getPostsError(err))
                })
        }