// import { GRADES } from "../utils/grades";
// import { CREDITS } from "../utils/credits";
import { useContext, useReducer } from "react";
import { CourseContext } from "../gpacal";

export const CourseForm = () => {
  const addCourse = useContext(CourseContext);
  //  const [inputData, setInputData] = useState({courseNO:"" ,title:"",credit:+0,grade:+0});

  const initState = { courseNO: "", title: "", credit: +0, grade: +0 };
  const [state, dispatch] = useReducer(
    (Ps, Act) => {
      switch (Act.type) {
        case "setCourseNO":
          return { ...Ps, courseNO: Act.value };
        case "setTitle":
          return { ...Ps, title: Act.value };
        case "setCredit":
          return { ...Ps, credit: Act.value };
        case "setGrade":
          return { ...Ps, grade: Act.value };
      }
    },

    initState
  );

  return (
    <div className="popupContent">
      <div className="context_f">
        <div className="inputGrid">
          <p id="con">COURSE NO:</p>
          <input
            placeholder="Enter course here"
            id="con"
            onChange={(e) =>
              dispatch({ type: "setcourseNO", value: e.target.value })
            }
            type="+number"
          ></input>
          <p id="con">TITLE:</p>
          <input
            placeholder="Enter title here"
            id="con"
            onChange={(e) =>
              dispatch({ type: "setTitle", value: e.target.value })
            }
            type="text"
          ></input>
          <p id="con">CREDIT:</p>
          <select
            className="term-select"
            id="con"
            onChange={(e) =>
              dispatch({ type: "setCredit", value: e.target.value })
            }
          >
            <option selected></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <p id="con">GRADE:</p>
          <select
            className="listgrade"
            id="con"
            onChange={(e) =>
              dispatch({ type: "setGrade", value: e.target.value })
            }
          >
            <option selected></option>
            <option value="4">A</option>
            <option value="3.5">B+</option>
            <option value="3">B</option>
            <option value="2.5">C+</option>
            <option value="2">C</option>
            <option value="1.5">D+</option>
            <option value="1">D</option>
            <option value="0">F</option>
            <option value="w">W</option>
          </select>
        </div>

        <div
          className="AddCourse"
          onClick={() => {
            // state.courseNO ? alert("Please input COURSE NO :"):
            // state.title ? alert("Please input TITLE :"):
            // state.grade ? alert("Please input GRADE :"):
            // state.credit ? alert("Please input CREDIT :"):
            addCourse(state);
          }}
        >
          ADD COURSE
        </div>
      </div>
    </div>
  );
};
