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
];
