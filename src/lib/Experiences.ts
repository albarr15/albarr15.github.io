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
    desc:
      "Led a team of 3 delivering 520+ social content and design projects across Instagram, YouTube, and TikTok " +
      "for an international client base, maintaining a 99% on-time delivery rate.",
  };

  const asstLeaderExp: Experience = {
    startDate: new Date(2025, 5),
    endDate: new Date(2025, 6),
    position:
      "Creative Executive and Assistant Team Leader of Publicity and Promotions at DLSU Prism",
    desc:
      "Produced on-brand publicity materials through iterative feedback, coordinated team deliverables, and " +
      "provided photography coverage at a 380+ person event to boost campaign visibility.",
  };

  const abbeExp: Experience = {
    startDate: new Date(2026, 3),
    endDate: new Date(2026, 5),
    position:
      "Web Development and UI/UX Intern at ABBE Technology Solutions, Inc.",
    desc:
      "Built and shipped the Work Schedules feature for an HRIS platform using Angular and .NET, integrating " +
      "RESTful APIs for CRUD operations, custom date-range filtering, and multi-schedule editing across admin " +
      "and employee views.",
  };

  experiences.push(abbeExp);
  experiences.push(indContractorExp);
  experiences.push(asstLeaderExp);

  return experiences;
}
