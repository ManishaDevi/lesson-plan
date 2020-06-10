import React,{useState} from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle, faEdit} from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";

import Button from "../components/common/Button";
import Video from './Video';
import { objectiveStatus } from "../actions/objectiveAction";

import "./SideBar.scss";

function SideBar ({selectedLesson,dispatch,objectiveState,selectedLessonDetails }) {
  
    const [selectedObjectiveTitle, setSelectedObjectiveTitle] = useState();
    const [selectedObjective, setSelectedObjective]= useState();

    const handleObjectiveStatus = (status, title) => {
        setSelectedObjectiveTitle(title);
        dispatch(objectiveStatus({ status, title, selectedLesson }));
    };
    
    const handleObjectiveVideo = (objectiveVideo) => {
        setSelectedObjective(objectiveVideo)
        setSelectedObjectiveTitle(objectiveVideo.title);
    };
    
    const getObjectiveClass = (selectedObjectiveTitle, objectiveState, title) => {
        let status = (objectiveState.result.filter(data => data.title === title)).map(data =>data.status).toString()
        let colorClass;
        if (title===selectedObjectiveTitle) {
            if (status === "done") {
                colorClass = "objective__green";
            } else if (status === "notDone") {
                colorClass = "objective__red";
            } else if (status === "nextClass") {
             colorClass = "objective__blue";
            }
        }
        return cx("objective__title", colorClass);
    };

return (
    <div className="objective__container">
    {selectedLesson &&
        <div className="objectiveList__wrapper">
            <h3 className="menu">Menu</h3>
            <hr />
            {selectedLessonDetails && selectedLessonDetails.objectiveDetails && selectedLessonDetails.objectiveDetails.map((objective) => (
                <span key={objective.id}>
                    <div onClick={() => handleObjectiveVideo(objective)} className={getObjectiveClass(selectedObjectiveTitle,objectiveState,objective.title)}>
                        {objective.title} ({objective.durationInMinutes} Mins)
                    </div>
                    <span className="objective__status__wrapper">
                        <div className="objective__status">
                        <Button icon={<FontAwesomeIcon icon={faCheckCircle} />} clicked={() => handleObjectiveStatus("done", objective.title)} className="objective__done statusButton"/>
                        <Button icon={<FontAwesomeIcon icon={faTimesCircle} />} clicked={() => handleObjectiveStatus("notDone", objective.title)} className="objective__notDone statusButton"/>
                        <Button icon={<FontAwesomeIcon icon={faEdit} />} clicked={() => handleObjectiveStatus("nextClass", objective.title)} className="objective__nextClass statusButton"/>
                        </div>
                    </span>
                </span>
            ))}
        </div> 
    }
    <Video selectedObjective={selectedObjective} selectedObjectiveTitle={selectedObjectiveTitle}/>
    </div>
);
}

const mapStateToProps = (state) => ({
    objectiveState: state,
});

export default connect(mapStateToProps)(SideBar);