const questions = [
  
    {
        question: "Which of the following policies are used to protect against parsing attacks?",
        answers: [
            { text: "MessageValidation policy", correct: false},
            { text: "XMLThreatProtection policy", correct: true},
            { text: "RegularExpressionThreatProtection policy", correct: false},
            { text: "AccessControl policy", correct: false},
        ],
    },
    {
        question: "Which of the following policies are used to protect against parsing attacks?",
        answers: [
            { text: "JSONThreatProtection policy", correct: true},
            { text: "RegularExpressionThreatProtection policy", correct: false},
            { text: "MessageValidation policy", correct: false},
            { text: "AccessControl policy", correct: false},
        ],
    },
    {
        question: "True or false:",
        answers: [
            { text: "False -> Two-way TLS is a secure method of communicating between Apigee and a backend service ", correct: false},
            { text: "True -> Two-way TLS is a secure method of communicating between Apigee and a backend service", correct: true},
        ],
    },
    {
        question: "Which predefined IAM role has full control of an Apigee organization?",
        answers: [
            { text: "Apigee Operations Admin", correct: false},
            { text: "Apigee Root Admin", correct: false},
            { text: "Apigee API Admin", correct: false},
            { text: "Apigee Organization Admin", correct: true},
        ],
    },
    {
        question: "Which statement about KVMs is true?",
        answers: [
            { text: "The Apigee API can be used to turn off encryption for an existing KVM", correct: false},
            { text: "Keys and values must both be strings", correct: true},
            { text: "Values can be retrieved from a KVM by using the Apigee API", correct: false},
        ],
    },
    {
        question: "Which statement about KVMs is true?",
        answers: [
            { text: "When the KeyValueMapOperations policy is being used, values from a KVM may only be retrieved into private variables", correct: true},
            { text: "The Apigee API can be used to turn off encryption for an existing KVM", correct: false},
            { text: "Values can be retrieved from a KVM by using the Apigee API", correct: false}
        ],
    },
    {
        question: "Where in the resource hierarchy are Apigee roles typically specified?",
        answers: [
            { text: "Project and Apigee Organization", correct: false},
            { text: "Apigee Organization and Apigee Environment", correct: false},
            { text: "Project and Apigee Environment", correct: true},
            { text: "Project, Apigee Organization, and Apigee Environment", correct: false},
        ],
    },
    {
        question: "Which of the following policies can be used to call an external REST API?",
        answers: [
            { text: "JavaScript policy", correct: true},
            { text: "BasicAuthentication policy", correct: false},
            { text: "AccessControl policy", correct: false},
        ],
    },
    {
        question: "Which of the following policies can be used to call an external REST API?",
        answers: [
            { text: "AccessControl policy", correct: false},
            { text: "ServiceCallout policy", correct: true},
            { text: "BasicAuthentication policy", correct: false},
        ],
    },
    {
        question: "Which of the following statements about shared flows are true?",
        answers: [
            { text: "A flow callout policy can be used to call any shared flow in an organization", correct: false},
            { text: "A shared flow cannot be tested without calling it from an API proxy", correct: true},
            { text: "Shared flows cannot be nested", correct: false},
        ],
    }, {
        question: "Which of the following statements about shared flows are true?",
        answers: [
            { text: "Shared flows cannot be nested", correct: false},
            { text: "A shared flow attached to a flow hook will execute for all proxies in an environment.", correct: true},
            { text: "A flow callout policy can be used to call any shared flow in an organization", correct: false},
        ],
    },
    {
        question: "Which of the following conditions might cause a fault to be raised in an API proxy?",
        answers: [
            { text: "Executing a RaiseFault policy", correct: true},
            { text: "A policy failure with continueOnError set to true", correct: false},
            { text: "Execution of a JSONThreatProtection policy when the Content-Type header is not application/json", correct: false},
        ],
    },
    {
        question: "Which of the following conditions might cause a fault to be raised in an API proxy?",
        answers: [
            { text: "A policy failure with continueOnError set to true", correct: false},
            { text: "Execution of a JSONThreatProtection policy when the Content-Type header is not application/json", correct: false},
            { text: "A 404 Not Found status code received from a service callout", correct: true},
        ],
    },
    {
        question: "Which policy can be used to validate that a request matches an approved pattern?",
        answers: [
            { text: "OASValidation", correct: true},
            { text: "FlowCallout", correct: false},
            { text: "RaiseFault", correct: false},
            { text: "AssignMessage", correct: false},
        ],
    },
    {
        question: "Which of the following Apigee components calls the Apigee API?",
        answers: [
            { text: "Gateway", correct: false},
            { text: "Developer portal", correct: true},
            { text: "Runtime data store", correct: false},
            { text: "Application server", correct: false},
        ],
    },
    {
        question: "Which of the following statements about the SpikeArrest policy is true?",
        answers: [
            { text: "The SpikeArrest policy uses counters to keep track of traffic", correct: false},
            { text: "The SpikeArrest rate can be specified as per second, per minute, or per hour", correct: false},
            { text: "The SpikeArrest policy is primarily designed to protect services against traffic spikes", correct: true},
            { text: "When a spike arrest rate is exceeded, the status code 400 Bad Request is returned.", correct: false},
        ],
    },
    {
        question: "Which of the following statements about quota policy is true?",
        answers: [
            { text: "When Distributed is set to true in a Quota policy, message processors will share counts for a given identifier", correct: true},
            { text: "Configuring the quota settings for an API product will automatically limit the number of requests to an API proxy without requiring a Quota policy", correct: false},
            { text: "For most use cases, it is recommended to use synchronous counter updates when using distributed quotas.", correct: false},
        ],
    },
    {
        question: "Which of the following statements about quota policy is true?",
        answers: [
            { text: "For most use cases, it is recommended to use synchronous counter updates when using distributed quotas.", correct: false},
            { text: "The Quota policy does not limit the rate at which requests can be received", correct: true},
            { text: "Configuring the quota settings for an API product will automatically limit the number of requests to an API proxy without requiring a Quota policy", correct: false},
        ],
    },
    {
        question: "Which of the following statement about the ResponseCache policy is true?",
        answers: [
            { text: "In the ResponseCache policy, cache lookup should be skipped for requests used to update data", correct: true},
            { text: "A ResponseCache policy must be attached at two places in the API proxy: the proxy endpoint and the target endpoint", correct: false},
            { text: "In the ResponseCache policy, setting UseResponseCacheHeaders to true causes the cache headers from the backend to always override the policy expiration configuration", correct: false},
        ],
    },
    {
        question: "Which of the following statement about the ResponseCache policy is true?",
        answers: [
            { text: "A ResponseCache policy must be attached at two places in the API proxy: the proxy endpoint and the target endpoint", correct: false},
            { text: "In the ResponseCache policy, setting UseResponseCacheHeaders to true causes the cache headers from the backend to always override the policy expiration configuration", correct: false},
            { text: "When the API returns user data, a unique user identifier must always be used as the cache key fragment", correct: true},
        ],
    },
    {
        question: "When should an API's version be changed?",
        answers: [
            { text: "Whenever you save a new proxy revision, because revision is an indicator of the API version", correct: false},
            { text: "Whenever a new API resource is added", correct: false},
            { text: "Whenever your backend service changes its version", correct: false},
            { text: "Whenever a new required parameter is added to an existing API call", correct: true},
        ],
    },
    {
        question: "Which statement about developer portals is true?",
        answers: [
            { text: "Of the developer portal options, the integrated developer portal requires the least amount of effort to set up", correct: true},
            { text: "A do-it-yourself custom portal is typically the best option for use cases that require more customization than allowed by the integrated developer portal", correct: false},
            { text: "API developers are the primary users of developer portals", correct: false},
        ],
    },
    {
        question: "Which statement about developer portals is true?",
        answers: [
            { text: "A do-it-yourself custom portal is typically the best option for use cases that require more customization than allowed by the integrated developer portal", correct: false},
            { text: "The developer portal is typically where API keys are created", correct: true},
            { text: "API developers are the primary users of developer portals", correct: false},
        ],
    },
    {
        question: "Which of the following statements about message logging is correct?",
        answers: [
            { text: "Use the MessageLogging policy as many times as necessary in your proxy, because only one call to the logging service with all of the logs will be performed at the end of the API call execution", correct: false},
            { text: "The MessageLogging policy sends log messages to a syslog server or to Google Cloud Logging", correct: false},
            { text: "Log messages must be formatted in JSON when the MessageLogging policy is used", correct: false},
            { text: "The proxy endpoint PostClientFlow allows message logging after the API response has already been sent to the client", correct: true},
        ],
    },
    {
        question: "True or false:",
        answers: [
            { text: "False -> Metrics captured using the DataCapture policy may be used in custom analytics reports", correct: false},
            { text: "True -> Metrics captured using the DataCapture policy may be used in custom analytics reports", correct: true},
        ],
    },
    {
        question: "True or false:",
        answers: [
            { text: "True -> The data type can be specified in a DataCapture policy to override a data collector's data type", correct: false},
            { text: "False -> The data type can be specified in a DataCapture policy to override a data collector's data type", correct: true},
        ],
    },
    {
        question: "True or false:",
        answers: [
            { text: "True -> Built-in analytics reports are primarily designed to address only operational concerns", correct: false},
            { text: "False -> Built-in analytics reports are primarily designed to address only operational concerns", correct: true},
        ],
    },
    {
        question: "True or false:",
        answers: [
            { text: "False -> Enterprise teams may store proxy code in source code repositories and use CI/CD to deploy updates to proxies", correct: false},
            { text: "True -> Enterprise teams may store proxy code in source code repositories and use CI/CD to deploy updates to proxies", correct: true},
        ],
    },
    {
        question: "Which of the following are features of the Apigee Adapter for Envoy?",
        answers: [
            { text: "OpenAPI spec validation and quota enforcement", correct: false},
            { text: "Token validation and message transformation", correct: false},
            { text: "Token validation and quota enforcement", correct: true},
            { text: "API key validation and message transformation", correct: false},
        ],
    },
    {
        question: "Which of the following is a reason to select the hybrid deployment option?",
        answers: [
            { text: "The customer wants the Apigee deployment option that requires the least amount of management by the customer", correct: false},
            { text: "The customer has strict requirements for running API traffic and hosting runtime data within their network boundaries", correct: true},
            { text: "The customer does not have its own backend services in Google Cloud, so a managed Google Cloud deployment is not recommended", correct: false},
            { text: "The customer does not want to manage the runtime", correct: false},
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    
        
    });
}




function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Yoy score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();












