import React, { useState } from "react";
import { TeamMember } from "../types/TeamMember";
import "../styles/TeamMemberCard.css";

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  // State to manage the visibility of the full bio
  const [showMore, setShowMore] = useState<boolean>(false);
  // State to manage the visibility of the projects list
  const [showProjects, setShowProjects] = useState<boolean>(false);

  return (
    <div className="card mb-1 team-member-card border-bottom">
      <div className="row g-0 justify-content-center">
        <div className="col-lg-3 col-md-4">
          <img
            src={member.picture_blog2020 ? member.picture_blog2020 : ""}
            className="img-fluid rounded-circle"
            alt={member.name}
          />
        </div>
        <div className="col-lg-7 col-md-8 d-flex justify-content-center">
          <div className="card-body">
            <h3 className="card-title">{member.name}</h3>
            <h4 className="card-subtitle mb-2">
              {member.title && member.title != "NULL" ? member.title : ""}
            </h4>
            {showMore ? (
              // Display full bio if showMore is true, else display short bio
              <p
                className="card-text text-start"
                style={{ textTransform: "none" }}
                dangerouslySetInnerHTML={{
                  __html:
                    member.bio && member.bio != null && member.bio != "NULL"
                      ? member.bio
                      : member.bio_short
                      ? member.bio_short
                      : "",
                }}
              />
            ) : (
              <p
                className="card-text text-start"
                style={{ textTransform: "none" }}
                dangerouslySetInnerHTML={{
                  __html: member.bio_short ? member.bio_short : "",
                }}
              />
            )}
            <div className="d-flex gap-2">
              {!showMore ? (
                <button className="btn more-btn rounded-0" onClick={() => setShowMore(!showMore)}>
                  MORE &nbsp;&nbsp;<i className="bi bi-chevron-down"></i>
                </button>
              ) : (
                <button className="btn more-btn rounded-0" onClick={() => setShowMore(!showMore)}>
                  LESS &nbsp;&nbsp;<i className="bi bi-chevron-up"></i>
                </button>
              )}
              {member.projects && member.projects.length > 0 && (
                <>
                  {!showProjects ? (
                    <button
                      className="btn project-btn rounded-0"
                      onClick={() => setShowProjects(!showProjects)}
                    >
                      PROJECTS&nbsp;&nbsp; <i className="bi bi-chevron-down"></i>
                    </button>
                  ) : (
                    <button
                      className="btn project-btn rounded-0"
                      onClick={() => setShowProjects(!showProjects)}
                    >
                      PROJECTS&nbsp;&nbsp; <i className="bi bi-chevron-up"></i>
                    </button>
                  )}
                </>
              )}
            </div>
            <div className="projects mt-3">
              {showProjects && member.projects && member.projects.length > 0 && (
                <ul className="text-start list-group list-group-flush">
                  {member.projects.map((project, index) => (
                    <li key={index} className="list-group-item list-group-item-action">
                      <a
                        href={
                          project.projects_id.project_link ? project.projects_id.project_link : "#"
                        }
                        className="text-decoration-none"
                        target="_blank"
                        style={{ color: "#523080" }}
                      >
                        {project.projects_id.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
