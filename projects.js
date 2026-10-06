/*
 * ───────────────────────────────────────────────────────────────
 *  YOUR PROJECTS
 *  To add a project, copy one of the blocks below, paste it at the
 *  TOP of the list (newest first), and fill in the details.
 *
 *  Fields:
 *    title        (required) Project name
 *    description  (required) One or two sentences about it
 *    tags         List of tech/topics, e.g. ["Python", "API"]. Used for filtering.
 *    image        Optional. Path to a screenshot, e.g. "images/my-app.png"
 *    imageFit     Optional. "contain" shows the whole image (good for charts).
 *                 Leave it out to fill the space and crop the edges (good for photos/screenshots).
 *    demo         Optional. Link to the project's live page (write-up, dashboard, etc.)
 *    demoLabel    Optional. Text for that link, e.g. "View dashboard". Default: "View project"
 *    repo         Optional. Link to the source code
 *    date         Optional. e.g. "2026-09"
 *    featured     Optional. true highlights the card
 *    status       Optional. A label like "In progress" for unfinished projects (links can be left out).
 *                 Put in-progress projects at the END of the list; move them up when finished.
 *
 *  Remember the comma between blocks!
 * ───────────────────────────────────────────────────────────────
 */
const PROJECTS = [
  {
    title: "Bellabeat Case Study",
    description: "Capstone project for the Google Data Analytics Professional Certificate. I analyzed smart-device fitness data to find how people use wellness trackers, then turned the findings into marketing recommendations for Bellabeat. I cleaned and analyzed the data in SQL and visualized it in Tableau.",
    tags: ["SQL", "Tableau", "Data Cleaning"],
    image: "images/bellabeat.svg",
    demo: "https://conormcguire.github.io/bellabeat-case-study/",
    demoLabel: "Read the case study",
    repo: "https://github.com/ConorMcGuire/bellabeat-case-study",
    date: "2026-08",
    featured: true,
  },
  {
    title: "Gender Representation in Marvel Comics",
    description: "University project for my Data Science module, and my first data analysis project. I cleaned and analyzed data on 16,000+ Marvel characters in Python (pandas) to explore gender and LGBTQ+ representation from 1939 onwards, with visualizations in Excel, Tableau and Looker Studio.",
    tags: ["Python", "pandas", "Tableau", "Excel"],
    image: "images/marvel.svg",
    demo: "https://github.com/ConorMcGuire/Data-Analysis-and-Visualisation-Project/blob/main/Data%20Analysis%20Report%20(1).pdf",
    demoLabel: "Read the report",
    repo: "https://github.com/ConorMcGuire/Data-Analysis-and-Visualisation-Project",
    date: "2023",
  },
  // In-progress projects go at the end of the list
  {
    title: "Early Advantages in Pro League of Legends",
    description: "Which early-game leads matter most when teams are evenly matched? I'm analyzing professional match data from Oracle's Elixir to find out, with findings aimed at a coach or team analyst deciding where to focus. Built with Python and Power BI.",
    tags: ["Python", "Power BI"],
    image: "images/lol.svg",
    status: "In progress",
  },
];
