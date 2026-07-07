export default function ABBEPage() {
  return (
    <>
      <div className="flex flex-col pt-8 gap-6">
        <section className="flex flex-col gap-2 items-start  scroll-mt-24">
          <span className="font-semibold text-lg/snug">
            Web Development and UI/UX Intern at ABBE Technology Solutions, Inc.
          </span>

          <span className="pb-5 font-medium">The Problem</span>
          <div className="text-sm flex flex-col gap-6 text-justify">
            <p>
              Manual schedule management was a recurring pain point for HR.
              Checking for lates, processing offset requests, and editing
              employee schedules were all done by hand. To approve a single
              schedule change, HR would need to cross-check the company schedule
              against other employees, which was time-consuming and error-prone.
              Building a reliable schedule management feature for the HRIS was
              therefore a priority.
            </p>
          </div>
          <span className="pb-5 font-medium">
            Understanding the Project Requirements
          </span>
          <div className="text-sm flex flex-col gap-6 text-justify">
            <p>
              Before designing anything, I consulted with HR stakeholders to
              understand how schedules actually worked. I learned that there
              were three schedule types: a company default (one per company), an
              employee default (set per role or team), and a manual schedule for
              exceptions and one-off changes. This scoping conversation shaped
              every decision that followed.
            </p>
            <p>
              With the requirements defined, I moved into Figma to design the
              initial UI, referencing the existing design system and PrimeNG
              component library to ensure consistency with the rest of the
              platform.
            </p>
          </div>
          <span className="pb-5 font-medium">Design Challenges</span>
          <div className="text-sm flex flex-col gap-6 text-justify">
            <p>
              One early challenge was the lack of design tokens in the existing
              Figma project. Without variables, spacing and color values had to
              be memorized and manually inputted, which made iteration slow and
              inconsistent. To address this, I used a plugin to generate
              Tailwind CSS variables within Figma, making the design process
              significantly more manageable.
            </p>
            <p>
              The initial design centered around a weekly schedule viewer and a
              weekly schedule editor, both structured around fixed seven-day
              blocks since schedules in the database were stored per week.
            </p>
          </div>
          <span className="pb-5 font-medium">The Pivot</span>
          <div className="text-sm flex flex-col gap-6 text-justify">
            <p>
              During a prototype review with HR, a critical gap surfaced.
              Schedules in practice are not edited week by week but by cutoff
              period (Q1, Q2, Q3, Q4), which often spans multiple weeks and
              sometimes fractions of a week. The fixed weekly structure would
              not support this.
            </p>
            <p>
              Since the technical implementation was already underway at this
              point, the pivot happened directly in code rather than returning
              to Figma first. The Angular form and rendering logic were
              redesigned to conditionally display specific dates within a
              selected date range, and the editor form was extended to support
              multiple weeks simultaneously.
            </p>
          </div>
          <span className="pb-5 font-medium">Building It Out</span>
          <div className="text-sm flex flex-col gap-6 text-justify">
            <p>
              Supporting multiple weeks in one form introduced a technical
              constraint. A flat Angular FormGroup could not support repeating
              field names such as mondayStartTime across multiple weeks since
              all weeks would share the same keys, causing each week's data to
              silently overwrite the previous one. To solve this, I restructured
              the form using Angular's FormRecord, which allowed each week to be
              stored as its own nested FormGroup keyed by its unique week start
              date. This kept each week's data properly isolated and directly
              addressable.
            </p>
            <p>
              This also meant rethinking how the form was populated. Initially,
              a separate label structure was used to track which fields belonged
              to which week, but this created two sources of truth that could
              fall out of sync with the actual form data. I simplified this by
              deriving week iteration directly from the FormRecord keys, and
              introduced a lightweight display helper to generate day labels on
              the fly. This way, the form itself remained the single source of
              truth for both structure and data.
            </p>
            <p>
              Designing with PrimeNG components in mind from the start also paid
              off during implementation. Field types, interaction states, and
              layout behavior were already accounted for at the design stage,
              which meant the transition from Figma prototype to working code
              required minimal adjustment and stayed visually consistent with
              the rest of the platform.
            </p>
          </div>
          <span className="pb-5 font-medium">Testing</span>
          <div className="text-sm flex flex-col gap-6 text-justify">
            <p>
              Once development was complete and reviewed by the lead developer,
              I was responsible for testing the feature end-to-end. Given the
              date-driven nature of the feature, I tested across a wide range of
              scenarios: date ranges as short as two days and as long as
              multiple months, partial weeks, overlapping cutoff periods, and
              various permission levels for access control.
            </p>
            <p>
              Testing also uncovered several unhandled edge cases, including no
              validation when all days were marked as rest days, and no
              rejection of invalid numeric inputs for hours. These were
              documented and flagged for resolution. For bugs that fell outside
              my scope to fix, such as the employee filter incorrectly
              displaying data from other employees, I documented the suspected
              root cause directly in the codebase to support future debugging.
            </p>
          </div>
          <span className="pb-5 font-medium">My Takeaway</span>
          <div className="text-sm flex flex-col gap-6 text-justify">
            <p>
              This project was more challenging than I initially expected, and
              that made it more rewarding. What started as a straightforward
              scheduling form evolved into a deeper exploration of Angular state
              management, signals, and nested form architecture, all driven by a
              real business constraint that only surfaced through direct
              stakeholder consultation. The pivot from fixed weekly blocks to
              cutoff-based multi-week editing was the most valuable part of the
              process. It reinforced that good implementation starts with
              understanding the problem, not the technology.
            </p>
          </div>
        </section>
      </div>

      <div className="flex flex-col gap-"></div>
      <h1>The Problem</h1>
      <h1>Understanding the Requirements</h1>
      <h1>Design Challenges</h1>
      <h1>The Pivot</h1>
      <h1>Building It Out</h1>
      <h1>Testing</h1>
      <h1>My Takeaway</h1>
    </>
  );
}
