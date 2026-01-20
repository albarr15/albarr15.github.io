export type Experience = {
  startDate: Date;
  endDate: Date;
  position: string;
  desc: string;
};

export function Experiences(): Experience[] {
  let experiences = new Array<Experience>();

  const indContractorExp: Experience = {
    startDate: new Date(2023, 4),
    endDate: new Date(2025, 11),
    position: "Independent Contractor (Video Editing)",
    desc: "Delivered 460+ projects to 40 unique clients from around the world and developed problem-solving skills by adapting to various requirements and technical challenges maintaining a 99% on-time delivery rate",
  };

  const asstLeaderExp: Experience = {
    startDate: new Date(2025, 5),
    endDate: new Date(2025, 6),
    position: "Assistant Team Leader (Publicity & Promotions) at DLSU Prism",
    desc: "Coordinated with the creative team to develop publicity materials aligned with project specifications, and provided photography coverage at key events to enhance campaign visibility",
  };

  experiences.push(indContractorExp);
  experiences.push(asstLeaderExp);

  return experiences;
}
