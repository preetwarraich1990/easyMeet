const initialState = {
    sidebarShow: 'responsive',
    asideShow: false,
    darkMode: false
  }

  export default (state = initialState, { type, ...rest }) => {
    switch (type) {
        case 'GUI_SET':
          return {...state, ...rest }
        default:
          return state
      }
};