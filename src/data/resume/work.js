/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Delhi Technological University',
    position: 'Teaching Assistant',
    url: 'https://dtu.ac.in',
    startDate: '2021-07-01',
    endDate: '2022-06-01',
    summary: `As a Teaching Assistant at Delhi Technological 
    University (DTU), I was a vital part of the academic ecosystem, assisting faculty members in their teaching and mentoring responsibilities. DTU, formerly known as Delhi College of Engineering, is one of the most prestigious technical institutions in India. Located in Delhi, the university has a rich history of academic excellence and innovation, offering a wide range of undergraduate and postgraduate programs in engineering, sciences, and management.`,
    highlights: [
      'Conducted practical labs on C++,  Data Structures and Algorithms (DSA), providing hands-on experience to reinforce theoretical concepts.',
      'Lead practical sessions on Database Management Systems (DBMS), guiding students through database design, querying, and management tasks.',
      'Assisted students during practical sessions, troubleshooting coding issues, and providing guidance to ensure successful completion of  assignments.',
      'Evaluated practical assignments and projects, providing constructive feedback to help students improve their programming proficiency and problem-solving abilities.',
    ],
  },
  {
    name: 'Pragati Industries',
    position: 'Software Engineer',
    url: 'https://pragatiinds.com/',
    startDate: '2019-08-01',
    endDate: '2020-09-01',
    summary: `Pragati Industries is a company established in the 
    manufacturing sector which has a main focuses on delivering innovative solutions and products to meet industry demands. As a Software Engineer at Pragati Industries, I was part of a dynamic team dedicated to integrating technology into their operations and services.`,
    highlights: [
      'Played a key role in building a Power BI dashboard to track sales data, providing valuable insights for informed decision-making and strategic planning.',
      'Developed and maintained software solutions aimed at enhancing efficiency and automating processes across various departments within Pragati Industries.',
      'Conducted testing and debugging of software applications to ensure functionality, reliability, and adherence to quality standards.',
      'Provided ongoing support and maintenance for software systems, troubleshooting issues, and implementing updates or enhancements as needed to optimize performance and usability.',
      'Collaborated with diverse stakeholders and effectively communicated insights derived from data analysis.',
    ],
  },
];

export default work;
