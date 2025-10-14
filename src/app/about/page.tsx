import Link from "next/link";

export default function AboutPage() {
	return (
		<>
			<h1 className="mb-10 mt-4 text-center max-sm:text-4xl text-5xl">About me</h1>
			<article>
				<h1>Software Engineer, Fullstack Engineer and Black Belt Taekwondo (not relevant)</h1>
				<p>
					Experience in Javascript, Typescript, React.js, Next.js, Vite, Sass, Redux, RegEx, UI/UX, Responsive Design, Firebase, Supabase, Hasura, SQL Lite, MySQL, PostgreSQL,
					GraphQL, Jest, Node.js, Express, Fastify, Elysia.js, NestJS, Bun.js, Whatsapp API, Rocketchat, Serverless, Microservices and more …
				</p>
				<p>Technology Enthusiast, Specialized in Web and Self-taught.</p>

				<div>
					<h2>Skills and expertise</h2>
					<p>
						<strong>Languages:</strong> Javascript / Typescript, Python
					</p>
					<p>
						<strong>Frontend:</strong> React.js, Next.js & Vite
					</p>
					<p>
						<strong>Backend:</strong> Node.js, Bun, Express, Fastify, Elysia.js & Nest.js
					</p>
					<p>
						<strong>Database:</strong> Prisma, Hasura, Firebase, Supabase, MySQL, PostgreSQL & SQL Lite
					</p>
					<p>
						<strong>Testing:</strong> Node.js, Bun.js, Storybook & Jest
					</p>
					<p>
						<strong>DevOps:</strong> Docker, Vercel, CI/CD & Github Actions
					</p>
					<p>
						<strong>Design:</strong> Figma, Adobe XD, Photoshop & UX/UI
					</p>
					<p>
						<strong>Other:</strong> Git, Serverless, Google Cloud, Docusaurus, etc...
					</p>
				</div>

				<div id="career">
					<h2>Career</h2>
					<p>
						Personal projects or those involving self-development will be listed on{" "}
						<Link href="https://linkedin.com/in/andersonmarlon" target="_blank">
							Linkedin
						</Link>
						.
					</p>

					<h3 className="mb-3">
						<strong className="text-purple-500">Software Engineer II</strong> @ Astriia | Sep 2024 - May 2025
					</h3>
					<li className="mb-1">Led the development of internal platforms using Node.js and React, successfully reducing the execution time of core internal processes by 35%.</li>
					<li className="mb-1">Engineered AI-powered solutions integrated with the WhatsApp Business API and OpenAI, doubling the accuracy of personalized customer responses.</li>
					<li className="mb-1">
						Implemented a Stripe payment system that boosted annual plan conversion by 28% and developed a feedback system that increased customer satisfaction by 40%.
					</li>
					<p className="mt-1">Using Express, Node.js, OpenAI API, WhatsApp API, Facebook Business API, Next.js, Discord Webhook, AstrologyAPI, Stripe and Python</p>

					<h3 className="mb-3">
						<strong className="text-purple-500">Software Engineer II</strong> @ WhatsUpper | Aug 2023 - Dec 2023
					</h3>
					<li className="mb-1">
						Specialized in developing and integrating intelligent automation solutions for the WhatsApp Business API, enhancing customer communication workflows.
					</li>
					<li className="mb-1">Built and maintained scalable backend services using Node.js to process high volumes of messages and power interactive chatbot experiences.</li>
					<li className="mb-1">
						Collaborated with cross-functional teams to design and implement custom features, focusing on improving user engagement and retention through the WhatsApp channel.
					</li>
					<p className="mt-1">Using Rocket.chat, Firebase, Next.js, WhatsApp API, Facebook Business API, Twilio and Firebase</p>

					<h3 className="mb-3">
						<strong className="text-purple-500">Software Engineer II</strong> @ Stone | Oct 2022 - Jul 2023
					</h3>
					<li className="mb-1">
						Optimized DialogFlow routines and integrated them with Rocket.Chat, improving chatbot response speed by over 50% and increasing customer retention.
					</li>
					<li className="mb-1">
						Developed an interactive SPA with jQuery to automate customer routing and enable WhatsApp-based checkouts, cutting down queue times by up to 20%.
					</li>
					<li className="mb-1">Authored comprehensive documentation for system architectures and internal processes, ensuring scalability and simplifying future maintenance.</li>
					<p className="mt-1">Using Rocket.chat, Hasura, Next.js, WhatsApp API, Facebook Business API, Twilio, Firebase, DialogFlow and Google Cloud Plataform</p>

					<h3 className="mb-3">
						<strong className="text-purple-500">Systems Development Analyst I/II</strong> @ Cenário Capital | Oct 2020 - Sep 2021
					</h3>
					<li className="mb-1">Developed and maintained critical financial systems, contributing to data analysis and process automation to support investment strategies.</li>
					<li className="mb-1">
						Collaborated with analysts and stakeholders to gather requirements and translate them into functional software solutions, improving operational efficiency through web
						quiz.
					</li>
					<li className="mb-1">
						Progressed from a Junior to a Mid-level role by demonstrating strong technical skills in system design, database management, and backend development.
					</li>
					<p className="mt-1">Using jQuery, HTML, CSS, Javascript, React, HTML for Email Marketing and Next.js</p>

					<h3 className="mb-3">
						<strong className="text-purple-500">Front-end Developer I / Jr. Marketing</strong> @ Marry Perry | Feb 2020 - Sep 2020
					</h3>
					<li className="mb-1">Developed and enhanced the user interface (UI) of the e-commerce platform, focusing on creating a responsive and intuitive shopping experience.</li>
					<li className="mb-1">Implemented front-end features and optimizations that contributed to improved user engagement and conversion rates.</li>
					<li className="mb-1">
						Assisted the marketing team with technical tasks, including landing page creation, email template coding, tracking analytics and afiliates system.
					</li>
					<p className="mt-1">Using HTML, CSS, Javascript, Node.js, Express, MySQL and Python.</p>

					<h3 className="mb-3">
						<strong className="text-purple-500">Soldier</strong> @ Brazilian Army | Mar 2016 - Apr 2017
					</h3>
					<li className="mb-1">Developed strong discipline, resilience, and the ability to perform effectively in high-pressure, structured environments.</li>
					<li className="mb-1">Mastered teamwork and communication skills through collaborative daily operations and mission-critical exercises with a diverse team.</li>
					<li className="mb-1">Demonstrated a high degree of responsibility and commitment while managing assigned communication equipment and executing duties with precision.</li>
				</div>

				<div id="awards">
					<h2>Certificates</h2>

					<p className="mb-2">
						<strong className="text-purple-500">Introduction to automation with n8n</strong> by Enzzo Panarotto in Rocketseat - September 2025
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">NestJS</strong> by Jornada do Dev - April 2025
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Technical Leadership (Tech Lead) </strong>
						by Sérgio Fiorotti in Rocketseat - February 2025
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">How to build a Micro SasS with Next.js, Firebase, Google Analytics and Stripe </strong>
						by Rocketseat - January 2025
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Build a web API with Node.js and Express </strong>
						by Microsoft Ignite - November 2024
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">NLW Journey - GO</strong> by Rocketseat - July 2024
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">NLW Journey - NodeJS</strong> by Rocketseat - July 2024
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">NLW Journey - Java</strong> by Rocketseat - July 2024
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">NLW Journey - Python</strong> by Rocketseat - July 2024
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">NLW Journey - React (Tailwind, React) </strong>
						by Rocketseat - July 2024
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Web Development with Python: Python, Django, Pytest & OOP </strong>
						by IBM SkillsBuild - June 2024
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Firebase: Realtime Database, Cloud, Auth and Security </strong>
						by Gabriel Barreto - May 2024
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">NLW Unite (Node, Typescript, Fastify, Prisma, Zod & Swagger) </strong>
						by Rocketseat - April 2024
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">NLW Unite (React, Vite, TypeScript, Styled Components, Unicons & Dayjs) </strong>
						by Rocketseat - April 2024
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">NLW Expert (Node, TS, Fastify, Prisma, Docker, PostgreSQL, Redis, Zod & WebSocket) </strong>
						by Rocketseat - February 2024
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">NLW Expert (React, TS, Vite, TailwindCSS, Web Storage & Web Speech) </strong>
						by Rocketseat - February 2024
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">1st Kyorugui Arbitration Seminar </strong>
						by Nova FETESP - February 2024
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">4th Kombat Taekwondo Referee Siminar </strong>
						by Kombat Taekwondo - January 2024
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">TDD – Guided Software Development Tests </strong>
						by Instituto Tecnológico de Aeronáutica (Coursera Free) - December 2023
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Complete Dialogflow - Master the Creation of Virtual Assistants </strong>
						by Universidade Global, Rogerio Guimaraes - November 2023
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Modern Web with Projects (JS/Typescript/React/Node) </strong>
						by COD3R - August 2022
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Workshop Figma </strong>by Design Culture - April 2022
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Introduction and Complete Course in Computer Science </strong>
						by Harvard - March 2022
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Participation, Proud Tech </strong>
						by Softplan - March 2022
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Agile Days </strong>by Instituto de Gestão e Tecnologia da Informação (IGTI) - November 2021
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Participation, Masterclass Github Actions </strong>
						by Azure na Prática - January 2021
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Participation, Hackathon (Third Place) </strong>
						by Shawee, AMBEV Hackathon - December 2020
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Linux Terminal </strong>by Profº Diego Mariano - October 2020
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Introduction to the Linux Operation System </strong>
						by Profº Diego Mariano - October 2020
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Introduction to MySQL Database </strong>
						by Profº Diego Mariano - October 2020
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Creating Dynamic Web Pages with PHP </strong>
						by Profº Diego Mariano - October 2020
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Facebook Blueprint - Basic to Advanced </strong>
						by Faculdade do Marketing Digital - July 2020
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">11th Edition - Omnistack Week </strong>
						by Rocketseat - March 2020
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Introduction to Git and Version Control </strong>
						by Digital Innovation One - February 2020
					</p>

					<p>
						<strong className="text-purple-500">Getting Started with Git and Your Commands </strong>
						by Digital Innovation One - February 2020
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Arctic Code Vault Contributor </strong>
						by Github Archive Program - February 2020
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Essential Programming Logic </strong>
						by Digital Innovation One - February 2020
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Internet programming with HTML5 and CSS3 </strong>
						by Digital Innovation One - February 2020
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Web Programming for Scientific Dissemination </strong>
						by Profº Diego Mariano - January 2020
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Web Design with PHP, HTML, CSS and JS </strong>
						by Udemy - January 2020
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Illustration and Graphic Design for the Web </strong>
						by Bradesco - May 2017
					</p>

					<p className="mb-2">
						<strong className="text-purple-500">Web Design and Graphic Design </strong>
						by MacPoli Cursos - December 2014
					</p>
				</div>
			</article>
		</>
	);
}
