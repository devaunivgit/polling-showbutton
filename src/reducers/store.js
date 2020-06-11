import { Questions, Answers } from "../mockJson/questions";
const initalState = {
  questions: Questions,
  answers: Answers,
  showAnswer: false,
  actualAnswer: false
};
const myReducer = (state = initalState, action) => {
  const newState = { ...state };
  const l = newState.questions.length;
  // const year = new Date().getFullYear();
  // const month = new Date().toLocaleString("default", { month: "long" });
  switch (action.type) {
    case "PREVIOUS":
      let indx = state.questions.findIndex(el => el.active);
      if (indx === 0 && l === 1) {
        return newState;
      } else {
        if (indx === 0) {
          state.questions[indx].active = false;
          state.questions[++indx].active = true;
        } else {
          state.questions[indx].active = false;
          state.questions[--indx].active = true;
        }
        return {
          ...newState,
          showAnswer: false,
          actualAnswer: false,
          questions: [...state.questions]
        };
      }
    case "ANSWER":
      let flag = false;
      if (action.value.length > 0) {
        flag = true;
      }
      return {
        ...newState,
        showAnswer: true,
        actualAnswer: flag
      };

    case "NEXT":
      let nindx = state.questions.findIndex(el => el.active);
      if (nindx === 0 && l === 1) {
        return newState;
      } else {
        if (nindx === 0) {
          state.questions[nindx].active = false;
          state.questions[++nindx].active = true;
        } else {
          state.questions[nindx].active = false;
          state.questions[--nindx].active = true;
        }

        return {
          ...newState,
          showAnswer: false,
          actualAnswer: false,
          questions: [...state.questions]
        };
      }
    case "FormValid":
      return {
        ...newState,
        validated: true
      };
    default:
      return newState;
  }
};

export default myReducer;
