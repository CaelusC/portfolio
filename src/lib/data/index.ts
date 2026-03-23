export const meta = {
	name: 'Karlis Varslavovs',
	role: 'ICT Student ',
	tagline: 'Building Apps and Games is my Passion',
	location: ' Netherlands',
	school: 'Saxion University of Applied Sciences',
	available: 'September 2026',
	email: 'varslavovs.karlis@gmail.com',
	gitlab: '',
	github: 'https://github.com/CaelusC',
	linkedin: 'https://www.linkedin.com/in/karlis-varslavovs-023b18270',
};

export const projects = [
	{
		id: 1,
		title: 'Sombant Game Project',
		year: '2024',
		description:
			'A 2D game built in the Godot engine, currently in active development. My contributions include NPC AI and pathfinding, a game state machine, battle system logic, and custom sprites and animations for all NPCs',
		tags: ['Godot', 'C++', 'JSON'],
	},
	{
		id: 2,
		title: 'Movie Rental Page',
		year: '2025',
		description:
			'A web app built for a school project that simulates a movie rental store like Blockbuster. Users can create accounts and rent movies, while the app manages store inventory and handles rental and return logic. The application is secured with bcrypt password hashing and thoroughly tested using Vitest.',
		tags: ['Svelte', 'Express', 'SQLite', 'Vitest', 'JavaScript'],
	},
	{
		id: 3,
		title: 'Study Coach Webapp',
		year: '2025',
		description:
			'A fullstack web application developed collaboratively with 12 other students, designed to help study coaches manage student appointments and communicate  within the platform, reducing the need for multiple tools and emailing. My contributions included designing and building critical frontend pages, developing a large portion of the backend, and independently setting up a GitLab CI/CD pipeline to solidify my DevOps knowledge.',
		tags: ['Svelte', 'GitLab CI', 'Sequelize', 'Express', 'Swagger'],
	},
	{
		id: 4,
		title: 'Internet Technology Project',
		year: '2025',
		description:
			'A application that handles internet communication. The project involved implementing different network protocols and ensuring a strict communication between clients and servers. I learned how to handle network communication in Java and how to handle large amounts of data efficiently. I also had to write extensive tests using JUnit to ensure the reliability and correctness of the application.',
		tags: ['Java', 'JUnit'],
	},
	{
		id: 5,
		title: 'Dutch Railway Track Manager',
		year: '2025',
		description:
			'A railway track manager app for Dutch stations that lets you search stations, find shortest routes, plan round trips, compute a minimum spanning tree, and visualize everything on a map, built on custom data structure implementations instead of Javas standard collections. It thought me how to implement complex data structures and algorithms in Java.',
		tags: ['Java', 'JUnit'],
	},
];

export const skills = {
	Languages: ['Java [Proficient]', 'PostgreSQL, SQLite [Proficient]', 'JavaScript [Proficient]', 'Bash [Proficient]', 'C++ [Beginner]', 'Python [Beginner]', 'Ruby [Beginner]'],
	Frameworks: ['Svelte 5 [Proficient]', 'Express [Proficient]', 'Node.js [Proficient]', 'Vitest [Proficient]', 'React [Beginner]'],
	'DevOps & Tooling': ['Docker [Intermediate]', 'Docker Compose [Intermediate]', 'GitLab CI/CD [Intermediate]', 'Nginx [Intermediate]', 'Linux [Intermediate]'],
	'Ways of working': ['Agile / Scrum', 'Code review', 'Technical writing'],
};
