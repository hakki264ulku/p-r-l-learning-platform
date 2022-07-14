const initialState = {
    isAuthenticated: false
}

const UPDATEUSER = "upadateUser"

export const UpdateUser = (data) => ({
    type: UPDATEUSER,
    ...data
})

// Reducer of Menu
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
      case UPDATEUSER:
          return {...state, isAuthenticated: action.isAuthenticated}
  
      default:
          return state
  }
}
export default  UserReducer