export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILED = 'LOG_IN_FAILED'
export const LOG_OUT = 'LOG_OUT'

export const logout = () => {
  return (dispatch, getState) => {
    dispatch({
      type: LOG_OUT
    })
    return Promise.resolve(getState().authorization)
  }
}

export const login = (data) => {
  return (dispatch, getState) => {
    if (data.password === 'password') {
      dispatch({
        type: LOG_IN_SUCCESS
      })
    } else {
      dispatch({ 
        type: LOG_IN_FAILED,
        error: 'Passwrod is invalid.'
      })
    }
    return Promise.resolve(getState().authorization)
  }
}
