// seeds some preliminary data for skills and courses

exports.seed = async function(knex) {
  // Deletes all existing entries
  await knex('users').del()
  await knex('admins').del()
  await knex('courses').del()
  await knex('exhibitions').del()
  await knex('skills').del()
  await knex('exhibitionSkillPairs').del()

  // inserts seed entries into data tables 
  await knex('users').insert([
    // testing code ---
      {user_id: 101, email: 'ecapaldi@andover.edu', first_name: "Emma", last_name: "Capaldi", graduation_year: 2025, bio: "In my free time ..."},
      {user_id: 102, email: 'hchen@andover.edu', first_name: "Hannah", last_name: "Chen", graduation_year: 2025, bio: "Super cool"},
    // -----
  ]);

  await knex('admins').insert([
    // testing code ---
    {admin_id: 103, email: 'nzufelt@andover.edu', password: "$2b$10$rZa45zzzGkHATzK17MIAeeZvWFBImCTRVwgEajhU9vl/DsAEMwKEu", name: "Nick Zufelt", bio: "I love to teach..."},
    {admin_id: 104, email: 'mclarke@andover.edu', password: "$2b$10$rZa45zzzGkHATzK17MIAeeZvWFBImCTRVwgEajhU9vl/DsAEMwKEu", name: "Mrs. Clarke", bio: "I love to teach..."},
    // -----
  ]);

  await knex('courses').insert([
    // testing code ---
    {course_id: 1001, course_number: "CSC401", course_name: 'Programming in Python', course_description: "This course consists of an introduction to computational thinking primarily through the exploration of the Python programming language. Students will design and code their own programming projects. The course may include additional applications such as programmingrobots, introductory data analysis, game development, or other topics.", course_level:"Introductory"},
    {course_id: 1002, course_number: "CSC402", course_name: 'Web Development', course_description: "This course introduces students to building web pages in the languages of HTML and CSS, and also to programming in Javascript, the most standard language for offering dynamic behavior on the web. Students explore the tools needed for deploying and managing their own websites and get a preview of other aspects of programming for the web, such as databases, server-side systems, and web frameworks.", course_level:"Introductory"},
    // -----

    {course_number: "CSC401", course_name: 'Programming in Python', course_description: "This course consists of an introduction to computational thinking primarily through the exploration of the Python programming language. Students will design and code their own programming projects. The course may include additional applications such as programmingrobots, introductory data analysis, game development, or other topics.", course_level:"Introductory"},
    {course_number: "CSC402", course_name: 'Web Development', course_description: "This course introduces students to building web pages in the languages of HTML and CSS, and also to programming in Javascript, the most standard language for offering dynamic behavior on the web. Students explore the tools needed for deploying and managing their own websites and get a preview of other aspects of programming for the web, such as databases, server-side systems, and web frameworks.", course_level:"Introductory"},
    {course_number: "CSC403", course_name: 'Discrete Mathematics', course_description: "This course introduces students to topics in computer science by way of studying the mathematics of discrete (finite or countable) objects in mathematics. Mathematical topics might include sets, graphs, combinatorics, logic, or groups. There will be a focus on both mathematical and computational thinking.", course_level:"Introductory"},
    {course_number: "CSC411", course_name: 'Robotics', course_description: "This course is a hands-on, project-based course where students will use the engineering process to engage in science-driven decision making and review physical concepts involved in the design and construction of a robot. Students will create robots capable of complex behaviors while exploring different aspects of robot design and how they come together in the creation of a robot, including ethical and cultural elements surrounding the use of artificial intelligence.", course_level:"Introductory"},
    {course_number: "CSC412", course_name: 'Game Development', course_description: "This course explores the principles of an engaging game, such as gameplay mechanics, artificial intelligence, and user experience. Through the creation of their own games, students will investigate the use of graphics, animation, sound, and collision detection, and gain a solid understanding of the basics of game design and development.", course_level:"Introductory"},
    {course_number: "CSC413", course_name: 'Digital Media Computing', course_description: "This course provides an introduction to computational thinking through the creation and manipulation of digital sounds and images. Students will learn how media files are stored on a computer system and use this knowledge to create projects centered around digital media. Topics could include compression, generative art and music, filtering, and data encoding.", course_level:"Introductory"},
    {course_number: "CSC451", course_name: 'Object-Oriented Programming in Java', course_description: "This course explores everything that is needed to write object-oriented code using the Java programming language. Topics include Java syntax and style, algorithms, introductory data structures, classes and inheritance, interfaces, searching and sorting, recursion, and objectoriented software engineering practices for the design and implementation of larger programs.", course_level:"Intermediate"},
    {course_number: "CSC452", course_name: 'iOS App Development', course_description: "This course covers algorithms, object-oriented and functional programming, and data structures, with a view toward applications in iOS app development in the Swift programming language. The course will focus significantly on projects and will also include students exploring the ethical implications of their development decisions.", course_level:"Intermediate"},
    {course_number: "CSC453", course_name: 'Programming Language Paradigms', course_description: "This course is an exploration of some of the fundamental programming language paradigms including functional, imperative, and logical. Students will learn the theoretical and practical considerations of each paradigm through project work and experiments in various languages (e.g., Haskell, C, Prolog) to discover the strengths and weaknesses of each. The languages, paradigms, and project directions will be studentinterest driven.", course_level:"Intermediate"},
    {course_number: "CSC454", course_name: 'Computer Organization and Hardware', course_description: "This course is an introduction to the organization and design of computer systems. Students will invent and explore the essential hardware and software components of computational devices. Topics include digital logic, circuit design, memory architectures and hierarchies, and assembly language(s). Work in this course will be largely hands-on with microcontroller programming and circuit fabrication through project work.", course_level:"Intermediate"},
    {course_number: "CSC461", course_name: 'Scientific Computing', course_description: "This course draws on many disciplines to explore using computers to understand natural systems and solve scientific problems. Through classroom and project work, students will be exposed to a variety of techniques which could include data analysis, visualization, simulation, and numerical analysis. Students will have opportunities to apply the skills they learn to subject areas of their choosing, drawing from and expanding upon their own scientific knowledge and interests.", course_level:"Intermediate"},
    {course_number: "CSC462", course_name: 'Mathematical Modeling and Probabilistic Programming', course_description: "This course explores concepts in probability theory and statistical computing for the purposes of creating mathematical models to best approximate a real-life situation. Applications could include population dynamics, resource distribution, closed system modeling and prediction, and statistical analysis, among others. Much of the course time will be allocated to student-devised projects.", course_level:"Intermediate"},
    {course_number: "CSC471", course_name: 'Cryptography', course_description: "This course focuses on computing securely when in the presence of a potential adversary. Topics include encryption and decryption, authentication, data integrity, and other technical topics alongside the legal, ethical, and societal considerations necessary for a more complete understanding of the field.", course_level:"Intermediate"},
    {course_number: "CSC551", course_name: 'Data Structures and Algorithms', course_description: "In this course, students will work in a language of their choosing to study, build, test, analyze, and apply data structures such as stacks, queues, linked lists, recursion, binary trees, heaps, hash maps, and graphs, including formulating appropriate algorithms to support their data. This will necessitate the development of software engineering skills potentially including collaborative coding, source control, and testdriven development.", course_level:"Advanced"},
    {course_number: "CSC552", course_name: 'Information Theory', course_description: "In a field-defining 1948 paper, Claude Shannon wrote, “The fundamental problem of communication is that of reproducing at one point, either exactly or approximately, a message selected at another point.” In developing the core concepts of Information and Entropy, among others, the field of Information Theory was born in this singular moment. This course will begin with probability theory and will involve mathematical and computer modeling as well as significant inquiry-based learning due to far-reaching applications and connections to other disciplines. Students will also study the ethical impacts of the field.", course_level:"Advanced"},
    {course_number: "CSC561", course_name: 'Machine Learning', course_description: "Machine Learning is the process by which computers train themselves to make predictions and ultimately decisions. It is a subfield of artificial intelligence which plants its roots in computer science, mathematics, and statistics. We will primarily be using the Python programming language to produce predictive models from datasets.", course_level:"Advanced"},
    {course_number: "CSC562", course_name: 'Data Visualization', course_description: "In this course, students will learn all the tools needed to create powerful, interactive data visualizations. Topics include data collection, cleaning, processing, and presentation, as well as user experience design and ethical considerations in the data process. This class will be heavily project-based and will focus on “storytelling” with data.", course_level:"Advanced"},
    {course_number: "CSC571", course_name: 'Autonomous Systems', course_description: "This course is a hands-on, project-driven introduction to the design and control of autonomous systems. Students will plan and build cyber-physical and autonomous systems in self-selected domains. Their project work will drive explorations of necessary robotics, artificial intelligence, and control engineering subject matter to achieve their goals. Woven throughout this work, the students will explore the ethical and societal implications of these systems.", course_level:"Advanced"},
    {course_number: "CSC572", course_name: 'The Open-Source Movement', course_description: "Throughout the entirety of the development of computers and software, a group of like-minded individuals have held firm to the notion that the software they write should be accessible to all. This practice allows developers to both learn from and include other’s source code in their own, as well as empower individuals to contribute to projects that would otherwise require them to work for the controlling company. This course will focus on both the history and the practice of open-source software development. Students will learn the Git version control system and use the GitHub platform extensively to become the creator and maintainer of their own open-source software library, as well as work collaboratively to contribute to their classmates’ libraries and those in the greater software development community.", course_level:"Advanced"},
    {course_number: "CSC573", course_name: 'Applied Term Project in Computer Science', course_description: "In this course, students will work as a single group to complete a singular term-long project. The project will be selected by the teacher before the start of the course, and students should expect to be tasked with various aspects of the group’s work while simultaneously charting a course for furthering their own learning in the relevant content topics. It is likely that the work will encompass different tasks for different students including for example design, infrastructure, content creation, and communications.", course_level:"Advanced"},
    {course_number: "CSC600", course_name: 'Computer Science Research and Development', course_description: "This course serves as an opportunity for students to explore their passion for the subject of computer science through research in the field and/or development of their own software projects. After learning the core tools and methodologies that are used in professional software development and research, students will apply them to a project of their own creation. This will include a chance to grow in many areas related to the profession in addition to the software creation process, such as maintaining open-source software, self-directed learning, presenting on one’s work and related topics, collaboratively developing and testing a codebase, and analyzing and critiquing the work of others. Students should expect to spend a significant amount of time reading articles from scientific journals, understanding others’ code and documentation, and/or performing market analysis. Students will regularly discuss the status of their project with classmates and present both on their work and on more general computer science topics learned for and leveraged in their projects. Some student work may be submitted for publication in a scientific journal or presentation at conferences.", course_level:"Research"},
  ]);


  await knex('classes').insert([
    // testing code ---
    {class_id: 1, course_id_ref: 1001, admin_id_ref: 103, academic_year: 2023, term: 1},
    {class_id: 2, course_id_ref: 1002, admin_id_ref: 104, academic_year: 2022, term: 2},
    // -----
  ]);

  await knex('exhibitions').insert([
    // testing code ---
    {exhibition_id: 1001, user_id_ref: 102, class_id_ref: 1, display_on_home_page: true, description: "In this video...",video_html_code:'<iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1188822/sp/118882200/embedIframeJs/uiconf_id/25697092/partner_id/1188822?iframeembed=true&playerId=kaltura_player&entry_id=1_ofiuys05&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[hotspots.plugin]=1&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_4mlte2vv" width="400" height="285" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Screen Recording 2024-04-23 at 2.18.06 PM"></iframe>'},
    {exhibition_id: 1002, user_id_ref: 101, class_id_ref: 1, display_on_home_page: true, description: "In this video...",video_html_code:'<iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1188822/sp/118882200/embedIframeJs/uiconf_id/25697092/partner_id/1188822?iframeembed=true&playerId=kaltura_player&entry_id=1_ofiuys05&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[hotspots.plugin]=1&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_4mlte2vv" width="400" height="285" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Screen Recording 2024-04-23 at 2.18.06 PM"></iframe>'},
    {exhibition_id: 1003, user_id_ref: 101, class_id_ref: 2, display_on_home_page: true, description: "In this video...",video_html_code:'<iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1188822/sp/118882200/embedIframeJs/uiconf_id/25697092/partner_id/1188822?iframeembed=true&playerId=kaltura_player&entry_id=1_ofiuys05&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[hotspots.plugin]=1&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_4mlte2vv" width="400" height="285" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Screen Recording 2024-04-23 at 2.18.06 PM"></iframe>'},
    // -----
  ]);

  await knex('skills').insert([
    // testing code ---
    {skill_id: 1001, skill_name: "Example", skill_description: "This skill ...", throughline: "Human Communication"},
    {skill_id: 1002, skill_name: "Example 2", skill_description: "This skill ...", throughline: "Working With Code"},
    // -----
    
    {skill_name: "Writing Code", skill_description: "Students can write whatever code they can envision — the only limitations are their time, their theoretical content knowledge, and their imagination. When stuck, they employ a variety of tools to explore their confusion and solve their problems.", throughline: "Working with Code"},
    {skill_name: "(Re)Factoring Code", skill_description: "Students have their own processes to ensure their code is properly factored, and can argue in favor of their factoring choices.", throughline: "Working with Code"},
    {skill_name: "Testing Code", skill_description: "Without prompting, students use tools for testing their code to ensure they fully understand the capabilities and limitations of their code. They can use testing tools to gain understanding of the code of others.", throughline: "Working with Code"},
    {skill_name: "Experimental Design and Observation", skill_description: "Students can use the outputs of code, whether theirs or that of others, to situate their understanding of the current functionality of the code and to identify next steps in continuing to build upon it. They can articulate the shortcomings of these technical outputs and can improve upon the tools that generate them. Without prompting, students can identify and execute experiments that isolate the desired functionality and allow them to learn and incorporate this knowledge into their regular practice.", throughline: "Research and Design"},
    {skill_name: "Intentional Design", skill_description: "Students can perform deep research to design solutions to problems that exist in the real world. They have a design process that intentionally centers the appropriate audience for their work. They demonstrate care and attention for these external audiences and dependencies, and seek to know the ways to make their work accessible to all members of this audience.", throughline: "Research and Design"},
    {skill_name: "Citizenship in the Open Source Community", skill_description: "In addition to being able to effectively locate, understand, incorporate, and honor the work of others, students seek to improve upon the established literature and technology available in the greater Open Source Community in ways that are inclusive of others and their work. Their documentation meets industry standards.", throughline: "Research and Design"},
    {skill_name: "Exploration and Research", skill_description: "Students have individualized research interests in the field of computer science, can articulate the beauty behind those interests, and can pursue research paths to deepen their understanding of them.", throughline: "Asking Questions"},
    {skill_name: "Curiosity", skill_description: "Students consistently cultivate an attitude of curiosity throughout their work in computer science and find opportunities to share their newfound learning with others.", throughline: "Asking Questions"},
    {skill_name: "Questioning Impact", skill_description: "Students can function as independent thinkers in interpreting the tasks placed before them. They work alongside the teacher and can offer feedback to the stated design process. They make carefully-reasoned arguments to challenge the potentially harmful impacts of their work and the technology sector at large. They acknowledge without prompting the identities present and absent in the rooms in which they work, and can identify strategies to mitigate these inequities.", throughline: "Asking Questions"},
    {skill_name: "Understanding Systems", skill_description: "Students leverage their understanding of the systems at play in their work to build upon the work of others, and they have established their own tools and practices for learning and understanding a system that is new to them.", throughline: "Working with Systems"},
    {skill_name: "Designing Systems", skill_description: "The systems that students design, and the tools students use to share them with the world, meet industry standards.", throughline: "Working with Systems"},
    {skill_name: "Tooling", skill_description: "Students use their technical devices with authority and ease, building alongside their chosen technological “stacks” (instead of “against” or “in spite of” them). They inhabit a playful tinkering process to familiarize themselves with new tools. They are willing and excited to experiment with processes to streamline elements of their device usage. They seek to create pathways to automate those elements of their work that do not need careful attention and can identify moments to interupt this automation when needed. They use this attitude and knowledge to help others become more familiar with the technical tools they use, serving as teachers and ambassidors of technology.", throughline: "Working with Systems"},
    {skill_name: "Speaking in Translations", skill_description: "Students can discuss their ideas equally well to a classmate, a young child, or an expert in the field, matching a level of complexity of speech to that of their audience’s technical understanding. They use this skill to build connections across social divides and to deepen their relationships to their peers, other people, and the world.", throughline: "Human Communication"},
    {skill_name: "Writing", skill_description: "While developing a subdomain of content knowledge as part of their coursework, students become familiar with the established literature of the given field, identify the gaps in this literature, and seek to fill them with their public-facing writing.", throughline: "Human Communication"},
    {skill_name: "Collaboration", skill_description: "Students make effective use of collaborative tools, and can understand and enact divisions of labor that allow for open, honest, and relationship-deepening communication. Every member of the group knows, understands, and can defend the work of others.", throughline: "Human Communication"},
  
  ]);
  
  await knex('exhibitionSkillPairs').insert([
    // testing code ---
    {exhibition_id_ref: 1001, skill_id_ref: 1001},
    {exhibition_id_ref: 1001, skill_id_ref: 1002},
    {exhibition_id_ref: 1002, skill_id_ref: 1001},
    {exhibition_id_ref: 1002, skill_id_ref: 1002},
    {exhibition_id_ref: 1003, skill_id_ref: 1001},
    {exhibition_id_ref: 1003, skill_id_ref: 1002},
    // -----
  ]);
};