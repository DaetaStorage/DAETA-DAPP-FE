export default (
  state: any,
  action: { type: string; inDropZone?: boolean; files?: any }
) => {
  switch (action.type) {
    case "SET_IN_DROP_ZONE":
      return { ...state, inDropZone: action.inDropZone };
    case "ADD_FILE_TO_LIST":
      return { ...state, fileList: state.fileList.concat(action.files) };
    default:
      return state;
  }
};
