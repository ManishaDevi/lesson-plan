import React, { useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";

import Button from "./components/common/Button";
import lesson from "../src/api/lesson-details.json";
import SideBar from '../src/components/SideBar';

import "./App.scss";

function App ({objectiveState}) {

  const [selectedLesson, setSelectedLesson] = useState();
  const [selectedLessonDetails, setSelectedLessionDetails] = useState();
  const [lessonObjectiveLength, setLessonObjectiveLength] = useState();
 
  const handleSelectedLesson = (data) => {
    setSelectedLessionDetails(data);
    setLessonObjectiveLength(data.objectiveDetails.length);
    setSelectedLesson(data.lessonTitle);
  };

  var completedObjectiveCount = (objectiveState.result.filter(data => data.selectedLesson === selectedLesson && data.status === "done")).length;

  const getLessonClass = (selectedLesson,lessonTitle) => {
    let colorClass;
    if (selectedLesson === lessonTitle && completedObjectiveCount !== lessonObjectiveLength) {
      colorClass = "lesson__numbers--active"
    } 
    else if (selectedLesson === lessonTitle && completedObjectiveCount === lessonObjectiveLength){
      colorClass = "lesson__numbers--completed"
    }
    return cx("lesson__numbers", colorClass)
  }

  return (
    <div className="App">
      <span className="lesson__header">
        <FontAwesomeIcon icon={faUserCircle} className="user__icon" />
        <h2 className="lesson__title">{lesson.recitalTitle}</h2>
        <h2 className="lesson__title">{lesson.instrumentTitle}</h2>
      </span>

      <div className="lesson__numbers__list">
        <span className="lesson__label">Lessons</span>
        {lesson.lessonDetails.map((data) => (
            <Button
              value={data.lessonTitle.replace(/Lesson/g, "")}
              key={data.id}
              clicked={() => handleSelectedLesson(data)}
              className={getLessonClass(selectedLesson,data.lessonTitle)}
            />
        ))}
      </div>
      
      <SideBar selectedLesson={selectedLesson} lessonObjectiveLength={lessonObjectiveLength} selectedLessonDetails={selectedLessonDetails}/>
    </div>
  );
}
const mapStateToProps = (state) => ({
  objectiveState: state,
});

export default connect(mapStateToProps)(App);