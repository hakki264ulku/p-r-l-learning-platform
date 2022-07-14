const initialState = {
    data: [
        {
            text: "Home Page",
            type: "homePage",
            isClicked: true
        },
        {
            text: "Reading",
            type: "reading",
            isClicked: false
        },
        {
            text: "Math",
            type: "math",
            isClicked: false
        },
        {
            text: "Coding",
            type: "coding",
            isClicked: false
        },
        {
            text: "English",
            type: "english",
            isClicked: false
        },
        {
            text: "Science",
            type: "science",
            isClicked: false
        },

    ]
}

const UPDATEMENUDATA = "updateMenuData"

export const UpdateMenuData = (data) => ({
    type: UPDATEMENUDATA,
    data
})

// Reducer of Menu
const MenuReducer = (state = initialState, action) => {
  switch (action.type) {
      case UPDATEMENUDATA:
          return {...state, data: action.data}
  
      default:
          return state
  }
}
export default  MenuReducer