const loadQ1 = () => {
    document.querySelector('#text-input').value = questions[0];
    segment = textInput.value.split(".");
    
    // console.log(segment);
    nOfSent = segment.length;
    // console.log(nOfSent);
}

let q1 = "First of all, I’d like to thank you for giving me the opportunity to be interviewed with you (all). \
My name is Charles. My family and I came from Hong Kong for almost 3 years. Before moving to the UK, \
I used to be a system analyst in the IT industry for more than 20 years. I worked for different banks and software houses in Hong Kong. \
The longest time I stayed in the company called Bank of China Hong Kong Limited. I stayed there for almost 10 years. My strengths are programming, problem-solving, and troubleshooting. \
I got certain recognition from my previous supervisors and end users as my fixes, and suggestions were always useful and ended up improving software efficiency a lot. \
";

let q2 = "I got almost 3 years career break after I moved to the UK. During the break, I was not slack.  \
While my family and I were adapting to the new environment, I kept practising different skills like JAVA and Javascript. \
I even took a 12-week Tech Returners Programme last year as I wanted to get myself ready to come into the local workplace. \
";

let questions = [
    "First of all, I’d like to thank you for giving me the opportunity to be interviewed with you (all). \
    My name is Charles. My family and I came from Hong Kong for almost 3 years. Before moving to the UK, \
    I used to be a system analyst in the IT industry for more than 20 years. I worked for different banks and software houses in Hong Kong. \
    The longest time I stayed in the company called Bank of China Hong Kong Limited. I stayed there for almost 10 years. My strengths are programming, problem-solving, and troubleshooting. \
    I got certain recognition from my previous supervisors and end users as my fixes, and suggestions were always useful and ended up improving software efficiency a lot. \
    "
    ,
    "I got almost 3 years career break after I moved to the UK. During the break, I was not slack.  \
    While my family and I were adapting to the new environment, I kept practising different skills like JAVA and Javascript. \
    I even took a 12-week Tech Returners Programme last year as I wanted to get myself ready to come into the local workplace. \
    "
    ,
    "In the future, I am looking for a role that can let me strengthen my expertise and contribute to the company. \
    It’s not easy for me since I am new to this country but I am ready to take challenges and have confidence to deal with any upcoming issues that may occur. \
    Thank you. \
    "
    ,
    "I think personal interest is a key factor in motivating myself to do well. Making up a perfect computer programme and fixing software bugs are my biggest interests. \
    Similar to you cooking a wonderful meal for your family or fixing the toys for your children.  With a sense of accomplishment, I am proud to be myself. \
    In the workplace, I like to work with end users directly as I can build the programme fit to their needs.  \
    Other than that, I like to send them proposals with some of my advice showing how to run the programmes more efficiently. \
    Since I am a self-motivated person, my passion and proactive attitude to work were appreciated by the end users from my previous employer.  \
    For me, contentment transcends awards or even salary sometimes as I find my value to the company. Those are what motivates me to do well. Thank you.\
    "
    ,
    "Troubleshooting is my biggest strength. When I worked for the Bank of China (acted as a system analyst), an important project needed to be promoted online. \
    No issues were found from vendors’ software but some were found when linked up with our self-developed systems. Some batch jobs were running very slowly. \
    It brought a significant impact on our system as well as batches for the entire bank. I found out that some SQLs were not set up ideally. \
    Fixing software bugs could not be done on my own and I had to communicate with different team members to solve the issues. \
    After brainstorming, I got diverse feedback and opinions from other team members. \
    After I did trial and error for some time, the execution time of the batch decreased by 90% and it was really a piece of encouraging news for the entire team ( not just for me). \
    Since I am a collaborative and open-minded person, I am not afraid of asking questions in order to finish troubleshooting as soon as possible. Thank you. \
    "
    ,
    "I am an experienced JAVA developer. As I know, AJ Bell is looking for  C# developers.    JAVA and C# are both object-oriented programming languages. \
    However, certain levels of differences are found in those two languages. So I need to pick up C# language in a short time to work with the team for ongoing projects. \
    Apart from that, integrating with the team would be the area that I need to work on. It is not easy for a newcomer like me to join a new workplace. \
    The biggest challenge would be how to adapt ourselves to the new company environment, blend into its culture and get used to colleagues’s practices in the UK. \
    I believe those stuff should be quite different from those in Hong Kong. In Hong Kong, we speak the same language and share the same culture. It would be easier for us to understand each other. \
    However, it would not prevent me from joining the local workplace. I am humbled to blend myself into the new working environment and respect everyone’s work here. I am happy to take on any challenges. Thank you. \
    "
    ,
    "AJ Bell is one of the leading service providers focusing on investment and wealth management platforms in the UK. \
    I worked as a system analyst under the treasury platform team in the bank for more than 10 years. \
    I am glad to know that it is a good chance for me to re-enter the tech team that relates to the financial industry. \
    Moreover, technical requirements mentioned in the job description such as OOP language, relational database, git-base source control system, React framework, …, etc, were areas of my expertise. \
    Except for my expertise, I like to communicate with team members and prioritize tasks to finish the project on time. I am good at analytical thinking and problem-solving.  \
    AJ Bell aims to look for the right candidates who have passionate, inclusive, energetic and cooperative attitudes that could fit into their organization. I believe my working experience and personal values are strongly aligned with AJ Bell. \
    Hence, I think I’ll be a good fit for the role. Thank you.\
    "
    ,
    "I got almost 3 years career break after moving to the UK. During the break, I was not slack.  While I was adapting to the new environment, I kept practising different skills like JAVA and Javascript. \
    Last year I joined a Tech Returners Programme that was organized with Hastings as I wanted to get myself ready to join the local workplace. \
    In terms of professional development, my frontend skills like Javascript, typescript, React, and CSS were enhanced as part of the programmes to teach us up-to-date skills in the IT industry. \
    For personal development, the coaches always encouraged us to share opinions with teammates during group discussions. It built up my confidence level and let me know more about myself regarding my weaknesses and strengths. \
    I gained valuable experience not just focusing on technical development but also improving my communication skills. \
    "
    ,
    "Apart from the Tech Returners programme, I also attended English courses organized by the council or local charity groups to brush up my English. Moreover, I also learned how to cook during my break and I am proud of cooking meals for my family. \
    Learning how to drive is one of the tasks on my to-do list this year. It is not easy to learn new skills at my age but I am willing to do so as life is always full of challenges. It is never too old to learn. \
    "
    ,
    "TR4 programme provides an efficient channel for career returners (like me) to go back IT industry quickly. I spent most of my life in Hong Kong before moving to the UK. Even though 3 years passed, I still have many things to learn. \
    With the help of the TR4 programme, I can benefit from their one-to-one mentoring training and obtain valuable experience and knowledge in a short time. TR4 programme is now partnering with hiring partners, it really helps a lot for newcomers to get used to their partner’s business culture and build up their confidence level before integrating into their tech team. \
    I sent out more than hundreds of CVs to potential employers and agencies after I moved to the UK. Unfortunately, no offer has been received up to now. I am not sure if I am the right candidate for this programme but I still would like to apply as I would not give up any chance to learn (and I think I still have a big room for improvement) and re-enter the IT industry.\
    "
    ,
    "I enjoyed solving the software issues. When I worked for the Bank of China (acted as a system analyst), an important project needed to be promoted online. No issues were found from vendors’ software but some were found when linked up with our self-developed systems. \
    Some batch jobs were running very slowly. It brought a significant impact on our system as well as batches for the entire bank. I found out some SQLs weren’t set up ideally. Fixing software bugs could not be done on my own and I had to communicate with different team members to solve the issues. \
    After brainstorming, I got diverse feedback and opinions from other team members. After I did trial and error for some time, the execution time of the batch decreased by 90% and it was really a piece of encouraging news for the entire team ( not just for me).\
    "
    ,
    "My skills and hard work were appreciated by my previous employers. I got a strong sense of achievement as I found my “value” to the company. A strong sense of achievement is one of the key factors for me to move on my career journey in IT industry.  "
    ,
    "After doing research online, I am impressed by the company's reputation and strategy. AJ Bell is one of the leading service providers focusing on investment and wealth management platforms. I worked as a system analyst under the treasury platform team in the bank for more than 10 years. \
    I am glad to know that AJ Bell is now partnering with Tech Returners for the TR4 programme as it is a good chance for me to re-enter the tech team that relates to the financial industry. AJ Bell is not an employer just looking for the strongest candidates to join their team. \
    They aim to look for the right candidates who have passionate, inclusive and cooperative attitudes that could fit into their organization. My working experience and personal values are strongly aligned with AJ Bell. \
    "
    ,
    "Moreover, AJ Bell takes care of employee's personal development and encourages their people to contribute to society. It brings a positive impact on the entire company and it becomes one of the crucial elements to make growth of the company.\
    AJ Bell is an inclusive and open-minded employer. I feel comfortable to be myself. Hopefully, I could have an opportunity to make a contribution to a young, energetic, continued success and growth company like AJ Bell.\
    "
    ,
    "I used to work in different kinds of companies including banks and software houses and already obtained certain experiences in the IT industry. My past experiences provided me with a good foundation for strengthening my situation awareness skills. I like troubleshooting with a can-do attitude and am keen to identify the root causes. \
    It always helps me to foresee what will happen next and find the best solution for the projects. I am a fast learner especially interested in learning new technology. I have a strong background and experience in Java and am more than happy to develop new skills like C#. Since Java technology is very close to C#, I am confident that I can pick up C# in a short time. \
    I believe my skills (including my expertise and soft skills) can bring in some new ideas out of the box to the coming role.\
    "
    ,
    "It is not easy for a newcomer like me to join the local workplace. I think the biggest challenge should be how to adapt ourselves to the company environment, blend into its culture and get used to colleagues’s practices in the UK. I believe those stuff should be quite different from those in Hong Kong. In Hong Kong, we speak the same language and share the same culture. \
    It would be easier for us to understand each other. However, it is not a reason for preventing me from joining the local workplace. I am humbled to blend myself into the new working environment and respect everyone’s work here. I do not doubt to cope with those new challenges.\
    "
    ,
    "I remember a time working at the Bank of China (HK), I had to add a new function to our existing system.  We need to show some accrued interest from some investment product and I needed to walk through our design with our colleagues. Some colleagues challenged whether the approach was logical and proper. \
    Their tone sounded a little bit harsh. I patiently explained and justified each step. For example, when to produce the accrued interest like before or after holidays. It would produce different outcomes. My colleagues ended up appreciating my effort as I could explain the logic clearly. Finally, my approach was passed with a majority of consent. \
    Hence, through this experience, apart from well-organized logic, I learned to negotiate with others at peace and made use of appropriate terms and evidence to make the discussion positive and constructive so that everything could go smoothly.\
    "
    ,
    "No one likes to make mistakes but it does happen sometimes.  I remember one time I made a mistake on a SQL statement which had launched in the production environment. After I realised the mistake, I reported it to my supervisor immediately. Meanwhile, I started to resolve the problem.  First of all, identifying how much of the area was impacted and working out the patches for data. \
    Secondly, fixed the SQL statement and planned to roll it out to the production environment again.\
    "
    ,
    "After that project, I started to make up detailed and comprehensive test cases under different kinds of situations before releasing the project. It takes time to resolve mistakes. I would rather do prevention instead of remedy. It is worth spending more time reviewing all coding a few times to ensure that it aligns with the requirement. Thank you.\
    "
    ,
    "Travelling time is not an issue. I can come to work by train or by bus. Since I am a dad of two kids, I don’t really have time for myself. I enjoy having a nap or doing anything like learning while travelling by train or bus. Therefore, it’s not an issue even though the office is based in Manchester. \
    "
    ,
];
