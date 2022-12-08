import states from "../states";

const rootReducer = (state = states, action) => {
  switch (action.type) {
    case "activeProject":
      for (let i = 0; i < state.projects.length; i++) {
        if (state.projects[i].id == action.payload) {
          return {
            ...state,
            activeProject: state.projects[i],
          };
        }
      }
      break;
    case "activeBlog":
      for (let i = 0; i < state.blogs.length; i++) {
        if (state.blogs[i].id == action.payload) {
          return {
            ...state,
            activeBlog: state.blogs[i],
          };
        }
      }
      break;
    case "sendComment":
      let comment = action.payload;
      comment = {
        ...comment,
        id: state.blogComment.length,
        image: "./images/client-1.jpg",
        reply: [],
      };
      let blogComment = state.blogComment;
      blogComment.push(comment);
      return {
        ...state,
        blogComment: blogComment,
      };
      break;
    case "sendCommentReply":
      for (let i in state.blogComment) {
        if (
          state.blogComment[i].blogId === action.payload.blogId &&
          state.blogComment[i].id === action.payload.reply
        ) {
          const reply = {
            id: state.blogComment[i].reply.length,
            name: action.payload.name,
            email: action.payload.email,
            date: action.payload.date,
            image: "./images/client-2.jpg",
            reply: action.payload.comment,
          };
          const old = state.blogComment[i].reply;
          old.push(reply);
          state.blogComment[i].reply = old;

          return {
            ...state,
          };
        }
      }

      return {
        ...state,
      };
      break;
    case "activeCard":
      return {
        ...state,
        activeBlogCard: action.payload,
      };
      break;
    case "activeService":
      return {
        ...state,
        activeService: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
