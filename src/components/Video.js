import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
  
import Modal from "../components/common/Modal";

import './Video.scss';

function Video ({selectedObjective,selectedObjectiveTitle}) {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="video__wrapper">
            {selectedObjective && selectedObjective.objectiveVideosDetails.map((videoLink) => (
            <span key={videoLink.id}>
                <iframe src={`https://player.vimeo.com/video/${videoLink.url.substring(18,27)}`} title= "objectiveVideo" allowFullScreen className="video"/>
                <Modal isOpen={isOpen} onRequestClose={handleOpenModal} classFlow={selectedObjectiveTitle === (selectedObjective && selectedObjective.title) && (selectedObjective && selectedObjective.classFlow)}/>
                <div className="user" onClick={handleOpenModal}>
                    <FontAwesomeIcon icon={faUserCircle} className="user__classflow" />
                    <div className="classflow__label">View classFlow</div>
                </div>
            </span>
            ))}
        </div>
    );
}

export default Video;