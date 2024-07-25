import React, { useState, useEffect } from "react";
import axios from "axios";
import { TeamMember } from "../types/TeamMember";
import TeamMemberCard from "./TeamMemberCard";

const API_ENDPOINT = "https://content.thegovlab.com/items/team";

const TeamPage: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect to fetch team members on component mount
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(API_ENDPOINT, {
          params: {
            limit: -1,
            sort: "name",
            fields: ["*.*", "picture.*", "projects.projects_id.*"],
          },
        });
        let teamMembers: TeamMember[] = response.data.data;

        // Filter out members with null or "NULL" bio_short and null picture_blog2020
        const filteredMembers: TeamMember[] = teamMembers.filter(
          (member) =>
            member.bio_short != "NULL" &&
            member.bio_short != null &&
            member.picture_blog2020 != null
        );
        setTeamMembers(filteredMembers);
      } catch (error) {
        // Set error message if API call fails
        setError("Issue occrured while fetching team members");
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  // Render loading state if data is still being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Render the team member cards if data is successfully fetched and available
  return (
    <div>
      {teamMembers &&
        teamMembers.length > 0 &&
        teamMembers.map((member) => <TeamMemberCard key={member.id} member={member} />)}
    </div>
  );
};

export default TeamPage;
