// const CourseCard = (props) => {
//   return (
//     <>
//       <p>This is Course card</p>
//     </>
//   );
// };

// export default CourseCard;

export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
 

  return (

    
  <div className="subject">
      <h1 className="NSubject">{props.title}
       </h1>
    <div className="close" onClick={()=>props.setMyCourse(props.courseNO)}>x</div>
    <ul className="dataSubject">
      <li>CREDIT : {props.credit}</li>
      <li>GRADE : {props.grade}</li>
      </ul>
    </div>
  );
};
