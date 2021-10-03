let total = 0;
let sec1 = [0];
let sec2 = [0];
let sec3 = [0];
let sec4 = [0];
let sec5 = [0];
let sec6 = [0];
let sec7 = [0];
let sec8 = [0];
let sec9 = [0];
let sec10 = [0];
let sec11 = [0];

/*****************************************************
*    Title: How to Populate Values in One HTML Dropdown List With Another Using Simple Javascript
*    Author: Timothy Malche
*    Site owner/sponsor: owlcation.com
*    Date: May 3, 2018
*    Code version: edited May 3, 2018
*    Availability: https://owlcation.com/stem/How-to-control-values-displayed-in-one-HTML-Dropdown-List-with-the-other-using-simple-JavaScript
*    Modified:  
*****************************************************/
function populate() {
    "use strict";
    document.getElementById("pyears").style.display = "block";
    document.getElementById("list2").style.display = "block";

    var list2 = document.getElementById("list2");
    list2.options.length = 0;
    list2.options[0] = new Option("--Select--");
    list2.options[1] = new Option("Under 5 years");
    list2.options[2] = new Option("Between 5 and 10 years");
    list2.options[3] = new Option("Between 10 and 20 years");
    list2.options[4] = new Option("Over 20 years");
}

/*****************************************************
*    Title: Simple Countdown Timer with JavaScript - Day 21
*    Author: Florin Pop
*    Site owner/sponsor: youtube.com
*    Date: 2020
*    Code version: edited 21 Jan 2020
*    Availability: https://www.youtube.com/watch?v=x7WJEmxNlEs
*    Modified:  
*****************************************************/

function timer() {
    "use strict";
    setInterval(updateCount, 1000);

    const startMins = 10;
    let time = startMins * 60;
    const countdownEl = document.getElementById("countdown");

    function updateCount() {
        "use strict";

        const mins = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdownEl.innerHTML = `${mins}: ${seconds}`;
        time--;

        if (mins < 7) {
            document.getElementById("countdown").style.color = "#ff6600";
        }
        if (mins < 3) {
            document.getElementById("countdown").style.color = "#ff0000";
        }
        if (mins == 0 && seconds == 0) {
            alert("Your time has expired. Please start again and complete the form in the required time");
            window.location.reload(true);
        }
    }
}

document.getElementById("start").addEventListener("click", function () {
    document.getElementById("section1form").style.display = "block";
    timer();
});

function sectionSummary(score) {
    "use strict";

    var paragraph = document.getElementById("Sum1");
    document.getElementById("secSumm").style.display = "block";
    document.getElementById("section2form").style.display = "block";
    document.getElementById("continue1").style.display = "none";

    if (score >= 16 && score <= 20) {
        var text = document.createTextNode("Well done you are clearly being proactive in considering making your services more universal");
        paragraph.appendChild(text);
        localStorage.setItem("text1", JSON.stringify("Well done you are clearly being proactive in considering making your services more universal"));
    } else if (score >= 10 && score <= 15) {
        var text = document.createTextNode("With a little more thought you will see more opportunities for increasing the universability of your services");
        paragraph.appendChild(text);
        localStorage.setItem("text1", JSON.stringify("With a little more thought you will see more opportunities for increasing the universability of your services"));
    } else {
        var text = document.createTextNode("The face to face training session will be a great opportunity for you to get guidance on progressing the universability of your organisation");
        paragraph.appendChild(text);
        localStorage.setItem("text1", JSON.stringify("The face to face training session will be a great opportunity for you to get guidance on progressing the universability of your organisation"));
    }
}

function section2Summary(score) {
    "use strict";

    var paragraph = document.getElementById("Sum2");
    document.getElementById("sec2Summ").style.display = "block";
    document.getElementById("section3form").style.display = "block";
    document.getElementById("continue2").style.display = "none";

    if (score >= 20 && score <= 25) {
        var text = document.createTextNode("You have a very high level of appreciation of the mutual benefits for all stakeholders in an inclusive organisation");
        paragraph.appendChild(text);
        localStorage.setItem("text2", JSON.stringify("You have a very high level of appreciation of the mutual benefits for all stakeholders in an inclusive organisation"));
    } else if (score >= 12 && score <= 19) {
        var text = document.createTextNode("You have some sense of the benefits of a universal organisation");
        paragraph.appendChild(text);
        localStorage.setItem("text2", JSON.stringify("You have some sense of the benefits of a universal organisation"));
    } else {
        var text = document.createTextNode("The face to face training session will be a great opportunity for you to gain some perspective of the benefits of universability to your organisation and its members");
        paragraph.appendChild(text);
        localStorage.setItem("text2", JSON.stringify("The face to face training session will be a great opportunity for you to gain some perspective of the benefits of universability to your organisation and its members"));
    }
}

function section3Summary(score) {
    "use strict";

    var paragraph = document.getElementById("Sum3");
    document.getElementById("sec3Summ").style.display = "block";
    document.getElementById("section4form").style.display = "block";
    document.getElementById("continue3").style.display = "none";

    if (score >= 6 && score <= 10) {
        var text = document.createTextNode("You can see an inclusive future for your organisation and its members, the challenge is now to ensure that your decisions and resource allocations make this happen");
        paragraph.appendChild(text);
        localStorage.setItem("text3", JSON.stringify("You can see an inclusive future for your organisation and its members, the challenge is now to ensure that your decisions and resource allocations make this happen"));
    } else {
        var text = document.createTextNode("The face to face session has great scope to convince you of the feasibility of promoting inclusion - just keep your mind open to the possibility");
        paragraph.appendChild(text);
        localStorage.setItem("text3", JSON.stringify("The face to face session has great scope to convince you of the feasibility of promoting inclusion - just keep your mind open to the possibility"));
    }
}

function section4Summary(score) {
    "use strict";

    var paragraph = document.getElementById("Sum4");
    document.getElementById("sec4Summ").style.display = "block";
    document.getElementById("section5form").style.display = "block";
    document.getElementById("continue4").style.display = "none";

    if (score >= 30 && score <= 40) {
        var text = document.createTextNode("Your organisation’s value system is an inclusive one. Your challenge will be to safeguard this and promote this philosophy within the wider fitness sector");
        paragraph.appendChild(text);
        localStorage.setItem("text4", JSON.stringify("Your organisation’s value system is an inclusive one. Your challenge will be to safeguard this and promote this philosophy within the wider fitness sector"));
    } else if (score >= 11 && score <= 29) {
        var text = document.createTextNode("While there is some openness to equity in your organisation the commitment is not yet wholly");
        paragraph.appendChild(text);
        localStorage.setItem("text4", JSON.stringify("While there is some openness to equity in your organisation the commitment is not yet wholly"));
    } else {
        var text = document.createTextNode("The face to face training session will be a great opportunity for you to get guidance on progressing the universability of your organisation");
        paragraph.appendChild(text);
        localStorage.setItem("text4", JSON.stringify("The face to face training session will be a great opportunity for you to get guidance on progressing the universability of your organisation"));
    }
}

function section5Summary(score) {
    "use strict";

    var paragraph = document.getElementById("Sum5");
    document.getElementById("sec5Summ").style.display = "block";
    document.getElementById("section6form").style.display = "block";
    document.getElementById("continue5").style.display = "none";

    if (score >= 40 && score <= 50) {
        var text = document.createTextNode("Your intentions are very sound in respect of inclusion and you have the potential to be a high achiever in this respect");
        paragraph.appendChild(text);
        localStorage.setItem("text5", JSON.stringify("Your intentions are very sound in respect of inclusion and you have the potential to be a high achiever in this respect"));
    } else if (score >= 20 && score <= 30) {
        var text = document.createTextNode("Your journey of making organisational policies inclusive has started well and this may be the catalyst for enhanced universability – if you are open to progressive change");
        paragraph.appendChild(text);
        localStorage.setItem("text5", JSON.stringify("Your journey of making organisational policies inclusive has started well and this may be the catalyst for enhanced universability – if you are open to progressive change"));
    } else if (score >= 10 && score <= 19) {
        var text = document.createTextNode("Your policies are confused and possibly conflicting. Some guidance will be needed to bring greater coherency to your efforts to date");
        paragraph.appendChild(text);
        localStorage.setItem("text5", JSON.stringify("Your policies are confused and possibly conflicting. Some guidance will be needed to bring greater coherency to your efforts to date"));
    } else {
        var text = document.createTextNode("Universability is not something with which you have yet engaged, so the face to face training session will be an opportunity for significant learning in this respect");
        paragraph.appendChild(text);
        localStorage.setItem("text5", JSON.stringify("Universability is not something with which you have yet engaged, so the face to face training session will be an opportunity for significant learning in this respect"));
    }
}

function section6Summary(score) {
    "use strict";

    var paragraph = document.getElementById("Sum6");
    document.getElementById("sec6Summ").style.display = "block";
    document.getElementById("section7form").style.display = "block";
    document.getElementById("continue6").style.display = "none";

    if (score >= 30 && score <= 50) {
        var text = document.createTextNode("You are already a potential resource for people with disabilities in your community, as your networks are an essential element in the UFIT approach");
        paragraph.appendChild(text);
        localStorage.setItem("text6", JSON.stringify("You are already a potential resource for people with disabilities in your community, as your networks are an essential element in the UFIT approach"));
    } else if (score >= 10 && score <= 30) {
        var text = document.createTextNode(
            "You have made a positive start upon which your organisation can build sound relationships with people with disabilities. Unit three will offer you more ideas in respect of forging alliances with people with disabilities"
        );
        paragraph.appendChild(text);
        localStorage.setItem(
            "text6",
            JSON.stringify(
                "You have made a positive start upon which your organisation can build sound relationships with people with disabilities. Unit three will offer you more ideas in respect of forging alliances with people with disabilities"
            )
        );
    } else {
        var text = document.createTextNode("You have great scope for learning during the face to face training session, once you have an open mind to the possibilities that an inclusive approach can offer");
        paragraph.appendChild(text);
        localStorage.setItem("text6", JSON.stringify("You have great scope for learning during the face to face training session, once you have an open mind to the possibilities that an inclusive approach can offer"));
    }
}

function section7Summary(score) {
    "use strict";

    var paragraph = document.getElementById("Sum7");
    document.getElementById("sec7Summ").style.display = "block";
    document.getElementById("section8form").style.display = "block";
    document.getElementById("continue7").style.display = "none";

    if (score >= 10 && score <= 20) {
        var text = document.createTextNode(
            "As a listening organisation you have important information that can guide your journey towards universability. Your challenge is to interpret what is being said and to translate it into inclusive actions"
        );
        paragraph.appendChild(text);
        localStorage.setItem(
            "text7",
            JSON.stringify("As a listening organisation you have important information that can guide your journey towards universability. Your challenge is to interpret what is being said and to translate it into inclusive actions")
        );
    } else {
        var text = document.createTextNode("Your organisation has yet to learn the power of dialogue as a means of providing desirable fitness services to all members of the community");
        paragraph.appendChild(text);
        localStorage.setItem("text7", JSON.stringify("Your organisation has yet to learn the power of dialogue as a means of providing desirable fitness services to all members of the community"));
    }
}

function section8Summary(score) {
    "use strict";

    var paragraph = document.getElementById("Sum8");
    document.getElementById("sec8Summ").style.display = "block";
    document.getElementById("section9form").style.display = "block";
    document.getElementById("continue8").style.display = "none";

    if (score >= 30 && score <= 50) {
        var text = document.createTextNode(
            "You have the potential to be a role model of provision in the fitness sector. Programming is the basic unit of service delivery – where this is inclusive, your relevance to the wider community is enhanced"
        );
        paragraph.appendChild(text);
        localStorage.setItem(
            "text8",
            JSON.stringify(
                "You have invested in your organisation’s most important asset. Your potential to offer inclusive services is vast. The challenge is to make sure that you optimally deploy this wisdom to make all aspects of your service provision truly inclusive"
            )
        );
    } else if (score >= 10 && score <= 30) {
        var text = document.createTextNode("You have invested in your organisation’s most important asset. Your potential to offer inclusive services is vast. The challenge is to make sure that you optimally deploy this wisdom to make all aspects of your service provision truly inclusive");
        paragraph.appendChild(text);
        localStorage.setItem("text8", JSON.stringify("You have the potential to be a role model of provision in the fitness sector. Programming is the basic unit of service delivery – where this is inclusive, your relevance to the wider community is enhanced"));
    } else if (score >= 10 && score <= 20) {
        var text = document.createTextNode(
            "Depending on the strength of influence of those with some perspective on inclusion, you may have scope to drive improvements from within. Consider the scope for repositioning those with training and knowledge in the area of inclusion to optimise their influence"
        );
        paragraph.appendChild(text);
        localStorage.setItem(
            "text8",
            JSON.stringify(
                "Depending on the strength of influence of those with some perspective on inclusion, you may have scope to drive improvements from within. Consider the scope for repositioning those with training and knowledge in the area of inclusion to optimise their influence"
            )
        );
    } else {
        var text = document.createTextNode("You have great scope for learning during the face to face training session, once you have an open mind to the possibilities that an inclusive approach can offer");
        paragraph.appendChild(text);
        localStorage.setItem("text8", JSON.stringify("You have great scope for learning during the face to face training session, once you have an open mind to the possibilities that an inclusive approach can offer"));
    }
}

function section9Summary(score) {
    "use strict";

    var paragraph = document.getElementById("Sum9");
    document.getElementById("sec9Summ").style.display = "block";
    document.getElementById("section10form").style.display = "block";
    document.getElementById("continue9").style.display = "none";

    if (score >= 40 && score <= 60) {
        var text = document.createTextNode("You have invested in your organisation’s most important asset. Your potential to offer inclusive services is vast. The challenge is to make sure that you optimally deploy this wisdom to make all aspects of your service provision truly inclusive");
        paragraph.appendChild(text);
        total += parseInt(score);
        localStorage.setItem("text9", JSON.stringify("You have invested in your organisation’s most important asset. Your potential to offer inclusive services is vast. The challenge is to make sure that you optimally deploy this wisdom to make all aspects of your service provision truly inclusive"));
    } else if (score >= 20 && score <= 39) {
        var text = document.createTextNode("There is some scope within your organisation to promote universability principles and broaden your organisation’s relevance in the wider community ");
        paragraph.appendChild(text);
        localStorage.setItem("text9", JSON.stringify("There is some scope within your organisation to promote universability principles and broaden your organisation’s relevance in the wider community "));
    } else if (score >= 10 && score <= 19) {
        var text = document.createTextNode("10	Depending on the strength of influence of those with some perspective on inclusion, you may have scope to drive improvements from within. Consider the scope for repositioning those with training and knowledge in the area of inclusion to optimise their influence");
        paragraph.appendChild(text);
        localStorage.setItem("text9", JSON.stringify("10	Depending on the strength of influence of those with some perspective on inclusion, you may have scope to drive improvements from within. Consider the scope for repositioning those with training and knowledge in the area of inclusion to optimise their influence"));
    } else {
        var text = document.createTextNode("Universability is not something with which you have engaged so the face to face training session will be an opportunity for significant learning in this respect");
        paragraph.appendChild(text);
        localStorage.setItem("text9", JSON.stringify("Universability is not something with which you have engaged so the face to face training session will be an opportunity for significant learning in this respect"));
    }
}

function section10Summary(score) {
    "use strict";

    var paragraph = document.getElementById("Sum10");
    document.getElementById("sec10Summ").style.display = "block";
    document.getElementById("section11form").style.display = "block";
    document.getElementById("continue10").style.display = "none";

    if (score >= 40 && score <= 50) {
        var text = document.createTextNode("The facility is largely accessible and hence there is significant scope for promoting universability. ");
        paragraph.appendChild(text);
        total += parseInt(score);
        localStorage.setItem("text10", JSON.stringify("The facility is largely accessible and hence there is significant scope for promoting universability. "));
    } else if (score >= 20 && score <= 39) {
        var text = document.createTextNode("While some aspects of your facility are accessible there is scope for enhancement. The face to face training session will offer you some suggestions for improvement here.");
        paragraph.appendChild(text);
        localStorage.setItem("text10", JSON.stringify("While some aspects of your facility are accessible there is scope for enhancement. The face to face training session will offer you some suggestions for improvement here."));
    } else if (score >= 10 && score <= 19) {
        var text = document.createTextNode("While you have made a start in the direction of universability there is considerable scope for improvements. ");
        paragraph.appendChild(text);
        localStorage.setItem("text10", JSON.stringify("While you have made a start in the direction of universability there is considerable scope for improvements. "));
    } else {
        var text = document.createTextNode("The face to face training session will provide you with wonderful ideas for making small (and inexpensive) changes to enhance the universability of the facility.");
        paragraph.appendChild(text);
        localStorage.setItem("text10", JSON.stringify("The face to face training session will provide you with wonderful ideas for making small (and inexpensive) changes to enhance the universability of the facility."));
    }
}

function section11Summary(score) {
    "use strict";

    var paragraph = document.getElementById("Sum11");
    document.getElementById("sec11Summ").style.display = "block";
    document.getElementById("continue11").style.display = "none";

    if (score > 20 && score <= 20) {
        var text = document.createTextNode("You clearly understand the power of imagery and language and your materials may be potential templates for others in the promotion of fitness services");
        paragraph.appendChild(text);
        localStorage.setItem("text11", JSON.stringify("You clearly understand the power of imagery and language and your materials may be potential templates for others in the promotion of fitness services"));
    } else if (score >= 10 && score <= 19) {
        var text = document.createTextNode("Your organisation has some appreciation of the need for have diversity to be represented in your promotional materials. With a little more thoughtfulness your promotional campaigns will speak louder to a wider audience");
        paragraph.appendChild(text);
        localStorage.setItem("text11", JSON.stringify("Your organisation has some appreciation of the need for have diversity to be represented in your promotional materials. With a little more thoughtfulness your promotional campaigns will speak louder to a wider audience"));
    } else {
        var text = document.createTextNode("The face to face training session will offer you many ideas for inclusivizing your promotion materials");
        paragraph.appendChild(text);
        localStorage.setItem("text11", JSON.stringify("The face to face training session will offer you many ideas for inclusivizing your promotion materials"));
    }
}

function overallSummary(score) {
    document.getElementById("final").style.display = "block";
    document.getElementById("continue11").style.display = "none";
    document.getElementById("finish").style.display = "block";

    if (score >= 340) {
        document.getElementById("finalp").style.display = "block";
        document.getElementById("fSumm1").style.display = "block";
        localStorage.setItem(
            "text12",
            JSON.stringify(
                "Your organisation is evidently committed to inclusion. Your perspective will be most valuable<br> at the face to face training session as both an advocate and a guide for inclusive fitness service provision.<br> You are highly relevant in your community and hence the organisation is sustainable and will remain so<br> once your current commitment is supported and enhanced over time."
            )
        );
    } else if (score >= 245 && score <= 339) {
        document.getElementById("finalp").style.display = "block";
        document.getElementById("fSumm2").style.display = "block";
        localStorage.setItem(
            "text12",
            JSON.stringify(
                "Your organisation is making genuine and meaningful efforts in the direction of universability.<br> However provision is probably patchy and inconsistent, which may cause some confusion among<br> members and potential members. Promotion of inclusive opportunities as an organisational priority has<br> the potential to broaden your relevance to an even greater number of community members."
            )
        );
    } else if (score >= 150 && score <= 244) {
        document.getElementById("finalp").style.display = "block";
        document.getElementById("fSumm3").style.display = "block";
        localStorage.setItem(
            "text12",
            JSON.stringify(
                "While some work is being done to enhance inclusive provision, there is scope for significant<br> gains in this aspect. Building on what you are doing well and embracing new ideas will see you<br> organisation make the transitions to inclusivity with some ease. The face to face training session will be a<br> unique opportunity to learn from others in your sector."
            )
        );
    } else {
        document.getElementById("finalp").style.display = "block";
        document.getElementById("fSumm4").style.display = "block";
        localStorage.setItem(
            "text12",
            JSON.stringify(
                "The face to face training session will be of immense value to your organisation. An exciting<br> challenge awaits as you move towards universability. It will take some time but the secret is to keep doing<br> what you are doing well and gradually add other initiatives to make your services more inclusive. The face<br> to face training session will lead to significant learning for your organisation."
            )
        );
    }
}
//Section 1
document.getElementById("continue1").addEventListener("click", function () {
    "use strict";

    var isValid = false;
    var isValid2 = false;
    var isValid3 = false;
    var isValid4 = false;

    var cbChecked1 = document.querySelector('[name="s1r1radio"]:checked');
    var cbChecked2 = document.querySelector('[name="s1r2radio"]:checked');
    var cbChecked3 = document.querySelector('[name="s1r3radio"]:checked');
    var cbChecked4 = document.querySelector('[name="s1r4radio"]:checked');

    if (cbChecked1 != null) {
        sec1[0] += parseInt(cbChecked1.value);
        isValid = true;
        document.getElementById("s1q1").style.color = "#000000";
    } else {
        document.getElementById("s1q1").style.color = "#ff0000";
    }

    if (cbChecked2 != null) {
        sec1[0] += parseInt(cbChecked2.value);
        isValid2 = true;
        document.getElementById("s1q2").style.color = "#000000";
    } else {
        document.getElementById("s1q2").style.color = "#ff0000";
    }

    if (cbChecked3 != null) {
        sec1[0] += parseInt(cbChecked3.value);
        isValid3 = true;
        document.getElementById("s1q3").style.color = "#000000";
    } else {
        document.getElementById("s1q3").style.color = "#ff0000";
    }

    if (cbChecked4 != null) {
        sec1[0] += parseInt(cbChecked4.value);
        isValid4 = true;
        document.getElementById("s1q4").style.color = "#000000";
    } else {
        document.getElementById("s1q4").style.color = "#ff0000";
    }

    if (isValid && isValid2 && isValid3 && isValid4) {
        total += parseInt(sec1);
        sectionSummary(sec1);
    } else {
        alert("Error, all questions must be answered");
    }
    sec1 = [0];
});
//Section 2
document.getElementById("continue2").addEventListener("click", function () {
    "use strict";

    var isValid = false;
    var isValid2 = false;
    var isValid3 = false;
    var isValid4 = false;
    var isValid5 = false;

    var cbChecked1 = document.querySelector('[name="s2r1radio"]:checked');
    var cbChecked2 = document.querySelector('[name="s2r2radio"]:checked');
    var cbChecked3 = document.querySelector('[name="s2r3radio"]:checked');
    var cbChecked4 = document.querySelector('[name="s2r4radio"]:checked');
    var cbChecked5 = document.querySelector('[name="s2r5radio"]:checked');

    if (cbChecked1 != null) {
        sec2[0] += parseInt(cbChecked1.value);
        isValid = true;
        document.getElementById("s2q1").style.color = "#000000";
    } else {
        document.getElementById("s2q1").style.color = "#ff0000";
    }

    if (cbChecked2 != null) {
        sec2[0] += parseInt(cbChecked2.value);
        isValid2 = true;
        document.getElementById("s2q2").style.color = "#000000";
    } else {
        document.getElementById("s2q2").style.color = "#ff0000";
    }

    if (cbChecked3 != null) {
        sec2[0] += parseInt(cbChecked3.value);
        isValid3 = true;
        document.getElementById("s2q3").style.color = "#000000";
    } else {
        document.getElementById("s2q3").style.color = "#ff0000";
    }

    if (cbChecked4 != null) {
        sec2[0] += parseInt(cbChecked4.value);
        isValid4 = true;
        document.getElementById("s2q4").style.color = "#000000";
    } else {
        document.getElementById("s2q4").style.color = "#ff0000";
    }

    if (cbChecked5 != null) {
        sec2[0] += parseInt(cbChecked1.value);
        isValid5 = true;
        document.getElementById("s2q5").style.color = "#000000";
    } else {
        document.getElementById("s2q5").style.color = "#ff0000";
    }

    if (isValid && isValid2 && isValid3 && isValid4 && isValid5) {
        total += parseInt(sec2);
        section2Summary(sec2);
    } else {
        alert("Error, all questions must be answered");
    }
    sec2 = [0];
});
//Section 3
document.getElementById("continue3").addEventListener("click", function () {
    "use strict";

    var isValid = false;
    var isValid2 = false;

    var cbChecked1 = document.querySelector('[name="s3r1radio"]:checked');
    var cbChecked2 = document.querySelector('[name="s3r2radio"]:checked');

    if (cbChecked1 != null) {
        sec3[0] += parseInt(cbChecked1.value);
        isValid = true;
        document.getElementById("s3q1").style.color = "#000000";
    } else {
        document.getElementById("s3q1").style.color = "#ff0000";
    }

    if (cbChecked2 != null) {
        sec3[0] += parseInt(cbChecked2.value);
        isValid2 = true;
        document.getElementById("s3paraq2").style.color = "#000000";
    } else {
        document.getElementById("s3paraq2").style.color = "#ff0000";
    }

    if (isValid && isValid2) {
        total += parseInt(sec3);
        section3Summary(sec3);
    } else {
        alert("You must answer all the questions");
    }
    sec3 = [0];
});
//Section 4
document.getElementById("s4q1Yes").addEventListener("click", function () {
    document.getElementById("section4hiddenform").style.display = "block";
    document.getElementById("section4button").style.display = "block";
});

document.getElementById("s4q1No").addEventListener("click", function () {
    document.getElementById("section4hiddenform").style.display = "none";
    document.getElementById("section4button").style.display = "block";
});

document.getElementById("continue4").addEventListener("click", function () {
    "use strict";

    var cbChecked = document.querySelector('[name="s4q1radio"]:checked');
    var check1 = document.querySelector('[name="s4checkbox1"]:checked');
    var check2 = document.querySelector('[name="s4checkbox2"]:checked');
    var check3 = document.querySelector('[name="s4checkbox3"]:checked');

    sec4[0] += parseInt(cbChecked.value);

    if (check1 != null) {
        sec4[0] += parseInt(check1.value);
    }

    if (check2 != null) {
        sec4[0] += parseInt(check2.value);
    }

    if (check3 != null) {
        sec4[0] += parseInt(check3.value);
    }
    total += parseInt(sec4);
    section4Summary(sec4);
});
//Section 5
document.getElementById("continue5").addEventListener("click", function () {
    "use strict";

    var isValid = false;
    var isValid2 = false;
    var isValid3 = false;
    var isValid4 = false;
    var isValid5 = false;

    var cbChecked1 = document.querySelector('[name="s5r1radio"]:checked');
    var cbChecked2 = document.querySelector('[name="s5r2radio"]:checked');
    var cbChecked3 = document.querySelector('[name="s5r3radio"]:checked');
    var cbChecked4 = document.querySelector('[name="s5r4radio"]:checked');
    var cbChecked5 = document.querySelector('[name="s5r5radio"]:checked');

    if (cbChecked1 != null) {
        sec5[0] += parseInt(cbChecked1.value);
        isValid = true;
        document.getElementById("s5q1").style.color = "#000000";
    } else {
        document.getElementById("s5q1").style.color = "#ff0000";
    }

    if (cbChecked2 != null) {
        sec5[0] += parseInt(cbChecked2.value);
        isValid2 = true;
        document.getElementById("s5q2").style.color = "#000000";
    } else {
        document.getElementById("s5q2").style.color = "#ff0000";
    }

    if (cbChecked3 != null) {
        sec5[0] += parseInt(cbChecked3.value);
        isValid3 = true;
        document.getElementById("s5q3").style.color = "#000000";
    } else {
        document.getElementById("s5q3").style.color = "#ff0000";
    }

    if (cbChecked4 != null) {
        sec5[0] += parseInt(cbChecked4.value);
        isValid4 = true;
        document.getElementById("s5q4").style.color = "#000000";
    } else {
        document.getElementById("s5q4").style.color = "#ff0000";
    }

    if (cbChecked5 != null) {
        sec5[0] += parseInt(cbChecked1.value);
        isValid5 = true;
        document.getElementById("s5q5").style.color = "#000000";
    } else {
        document.getElementById("s5q5").style.color = "#ff0000";
    }

    if (isValid && isValid2 && isValid3 && isValid4 && isValid5) {
        total += parseInt(sec5);
        section5Summary(sec5);
    } else {
        alert("You must answer all the questions");
    }
    sec5 = [0];
});
//Section 6
document.getElementById("continue6").addEventListener("click", function () {
    "use strict";

    var isValid = false;
    var isValid2 = false;
    var isValid3 = false;
    var isValid4 = false;
    var isValid5 = false;

    var cbChecked1 = document.querySelector('[name="s6r1radio"]:checked');
    var cbChecked2 = document.querySelector('[name="s6r2radio"]:checked');
    var cbChecked3 = document.querySelector('[name="s6r3radio"]:checked');
    var cbChecked4 = document.querySelector('[name="s6r4radio"]:checked');
    var cbChecked5 = document.querySelector('[name="s6r5radio"]:checked');

    if (cbChecked1 != null) {
        sec6[0] += parseInt(cbChecked1.value);
        isValid = true;
        document.getElementById("s6q1").style.color = "#000000";
    } else {
        document.getElementById("s6q1").style.color = "#ff0000";
    }

    if (cbChecked2 != null) {
        sec6[0] += parseInt(cbChecked2.value);
        isValid2 = true;
        document.getElementById("s6q2").style.color = "#000000";
    } else {
        document.getElementById("s6q2").style.color = "#ff0000";
    }

    if (cbChecked3 != null) {
        sec6[0] += parseInt(cbChecked3.value);
        isValid3 = true;
        document.getElementById("s6q3").style.color = "#000000";
    } else {
        document.getElementById("s6q3").style.color = "#ff0000";
    }

    if (cbChecked4 != null) {
        sec6[0] += parseInt(cbChecked4.value);
        isValid4 = true;
        document.getElementById("s6q4").style.color = "#000000";
    } else {
        document.getElementById("s6q4").style.color = "#ff0000";
    }

    if (cbChecked5 != null) {
        sec6[0] += parseInt(cbChecked1.value);
        isValid5 = true;
        document.getElementById("s6q5").style.color = "#000000";
    } else {
        document.getElementById("s6q5").style.color = "#ff0000";
    }

    if (isValid && isValid2 && isValid3 && isValid4 && isValid5) {
        total += parseInt(sec6);
        section6Summary(sec6);
    } else {
        alert("You must answer all the questions");
    }
    sec6 = [0];
});
//Section 7
document.getElementById("continue7").addEventListener("click", function () {
    "use strict";

    var isValid = false;
    var isValid2 = false;

    var cbChecked1 = document.querySelector('[name="s7r1radio"]:checked');
    var cbChecked2 = document.querySelector('[name="s7r2radio"]:checked');

    if (cbChecked1 != null) {
        sec7[0] += parseInt(cbChecked1.value);
        isValid = true;
        document.getElementById("s7q1").style.color = "#000000";
    } else {
        document.getElementById("s7q1").style.color = "#ff0000";
    }

    if (cbChecked2 != null) {
        sec7[0] += parseInt(cbChecked2.value);
        isValid2 = true;
        document.getElementById("s7q2").style.color = "#000000";
    } else {
        document.getElementById("s7q2").style.color = "#ff0000";
    }

    if (isValid && isValid2) {
        total += parseInt(sec7);
        section7Summary(sec7);
    } else {
        alert("You must answer all the questions");
    }
    sec7 = [0];
});
//Section 8
document.getElementById("s8q1Yes").addEventListener("click", function () {
    document.getElementById("s8table1").style.display = "block";
    document.getElementById("s8choice1").style.display = "block";
});

document.getElementById("s8q1No").addEventListener("click", function () {
    document.getElementById("s8table1").style.display = "none";
    document.getElementById("s8choice1").style.display = "none";
});

document.getElementById("s8q2Yes").addEventListener("click", function () {
    document.getElementById("s8table2").style.display = "block";
    document.getElementById("s8choice2").style.display = "block";
});

document.getElementById("s8q2No").addEventListener("click", function () {
    document.getElementById("s8table2").style.display = "none";
    document.getElementById("s8choice2").style.display = "none";
});

document.getElementById("continue8").addEventListener("click", function () {
    "use strict";

    var radio = document.getElementsByName("s8r1radio");
    var radio2 = document.getElementsByName("s8r2radio");
    var check1 = document.querySelector('[name="s8checkbox1"]:checked');
    var check2 = document.querySelector('[name="s8checkbox2"]:checked');
    var check3 = document.querySelector('[name="s8checkbox3"]:checked');
    var check4 = document.querySelector('[name="s8checkbox4"]:checked');
    var check5 = document.querySelector('[name="s8checkbox5"]:checked');
    var check6 = document.querySelector('[name="s8checkbox6"]:checked');
    var check7 = document.querySelector('[name="s8checkbox7"]:checked');
    var check8 = document.querySelector('[name="s8checkbox8"]:checked');

    var isValid = false;
    var isValid2 = false;

    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            isValid = true;
        }
    }

    for (var i = 0; i < radio.length; i++) {
        if (radio2[i].checked) {
            isValid2 = true;
        }
    }

    if (isValid && isValid2) {
        var cbChecked = document.querySelector('[name="s8r1radio"]:checked');

        if (cbChecked != null) {
            sec8[0] += parseInt(cbChecked.value);
        }
        var cbChecked = document.querySelector('[name="s8r2radio"]:checked');

        if (cbChecked != null) {
            sec8[0] += parseInt(cbChecked.value);
        }

        if (check1 != null) {
            sec8[0] += parseInt(check1.value);
        }

        if (check2 != null) {
            sec8[0] += parseInt(check2.value);
        }

        if (check3 != null) {
            sec8[0] += parseInt(check3.value);
        }

        if (check4 != null) {
            sec8[0] += parseInt(check4.value);
        }

        if (check5 != null) {
            sec8[0] += parseInt(check5.value);
        }

        if (check6 != null) {
            sec8[0] += parseInt(check6.value);
        }

        if (check7 != null) {
            sec8[0] += parseInt(check7.value);
        }

        if (check8 != null) {
            sec8[0] += parseInt(check8.value);
        }
        total += parseInt(sec8);
        section8Summary(sec8);
    } else {
        alert("You must answer all the questions");
    }
    sec8 = [0];
});
// section 9
document.getElementById("continue9").addEventListener("click", function () {
    "use strict";

    var isValid = false;
    var isValid2 = false;
    var isValid3 = false;
    var isValid4 = false;
    var isValid5 = false;
    var isValid6 = false;

    var cbChecked1 = document.querySelector('[name="s9r1radio"]:checked');
    var cbChecked2 = document.querySelector('[name="s9r2radio"]:checked');
    var cbChecked3 = document.querySelector('[name="s9r3radio"]:checked');
    var cbChecked4 = document.querySelector('[name="s9r4radio"]:checked');
    var cbChecked5 = document.querySelector('[name="s9r5radio"]:checked');
    var cbChecked6 = document.querySelector('[name="s9r6radio"]:checked');

    if (cbChecked1 != null) {
        sec9[0] += parseInt(cbChecked1.value);
        isValid = true;
        document.getElementById("s9q1").style.color = "#000000";
    } else {
        document.getElementById("s9q1").style.color = "#ff0000";
    }

    if (cbChecked2 != null) {
        sec9[0] += parseInt(cbChecked2.value);
        isValid2 = true;
        document.getElementById("s9q2").style.color = "#000000";
    } else {
        document.getElementById("s9q2").style.color = "#ff0000";
    }

    if (cbChecked3 != null) {
        sec9[0] += parseInt(cbChecked3.value);
        isValid3 = true;
        document.getElementById("s9q3").style.color = "#000000";
    } else {
        document.getElementById("s9q3").style.color = "#ff0000";
    }

    if (cbChecked4 != null) {
        sec9[0] += parseInt(cbChecked4.value);
        isValid4 = true;
        document.getElementById("s9q4").style.color = "#000000";
    } else {
        document.getElementById("s9q4").style.color = "#ff0000";
    }

    if (cbChecked5 != null) {
        sec9[0] += parseInt(cbChecked5.value);
        isValid5 = true;
        document.getElementById("s9q5").style.color = "#000000";
    } else {
        document.getElementById("s9q5").style.color = "#ff0000";
    }

    if (cbChecked6 != null) {
        sec9[0] += parseInt(cbChecked6.value);
        isValid6 = true;
        document.getElementById("s9q6").style.color = "#000000";
    } else {
        document.getElementById("s9q6").style.color = "#ff0000";
    }

    if (isValid && isValid2 && isValid3 && isValid4 && isValid5 && isValid6) {
        total += parseInt(sec9);
        section9Summary(sec9);
    } else {
        alert("You must answer all the questions");
    }
    sec9 = [0];
});
// section 10
document.getElementById("continue10").addEventListener("click", function () {
    "use strict";

    var radio = document.getElementsByName("s10r1radio");
    var check1 = document.querySelector('[name="s10checkbox1"]:checked');
    var check2 = document.querySelector('[name="s10checkbox2"]:checked');
    var check3 = document.querySelector('[name="s10checkbox3"]:checked');
    var check4 = document.querySelector('[name="s10checkbox4"]:checked');

    var isValid = false;

    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            isValid = true;
        } else {
            document.getElementById("s10q1").style.color = "#ff0000";
        }
    }

    if (isValid) {
        document.getElementById("s10q1").style.color = "#000000";
    }

    if (isValid) {
        var cbChecked = document.querySelector('[name="s10r1radio"]:checked');

        if (cbChecked != null) {
            sec10[0] += parseInt(cbChecked.value);
        }

        if (check1 != null) {
            sec10[0] += parseInt(check1.value);
        }

        if (check2 != null) {
            sec10[0] += parseInt(check2.value);
        }

        if (check3 != null) {
            sec10[0] += parseInt(check3.value);
        }

        if (check4 != null) {
            sec10[0] += parseInt(check4.value);
        }

        total += parseInt(sec10);
        section10Summary(sec10);
    } else {
        alert("You must answer all the questions");
    }
    sec10 = [0];
});
// section 11
document.getElementById("continue11").addEventListener("click", function () {
    "use strict";

    var isValid = false;
    var isValid2 = false;

    var cbChecked1 = document.querySelector('[name="s11r1radio"]:checked');
    var cbChecked2 = document.querySelector('[name="s11r2radio"]:checked');

    if (cbChecked1 != null) {
        sec9[0] += parseInt(cbChecked1.value);
        isValid = true;
        document.getElementById("s9q1").style.color = "#000000";
    } else {
        document.getElementById("s9q1").style.color = "#ff0000";
    }

    if (cbChecked2 != null) {
        sec9[0] += parseInt(cbChecked2.value);
        isValid2 = true;
        document.getElementById("s9q2").style.color = "#000000";
    } else {
        document.getElementById("s9q2").style.color = "#ff0000";
    }

    if (isValid && isValid2) {
        total += parseInt(sec11);
        section11Summary(sec11);
        overallSummary(total);
    } else {
        alert("You must answer all the questions");
    }
    sec11 = [0];
});

function finalSumm() {
    window.open("summary.html");
    location.reload();
}

function clearStorage() {
    localStorage.clear();
    window.close("summary.html");
}

/*****************************************************
*    Title: Can radio buttons be empty after refreshing a page
*    Author: felgall
*    Site owner/sponsor: https://www.sitepoint.com
*    Date: 2011
*    Code version: edited Nov 2017 
*    Availability: https://www.sitepoint.com/community/t/can-radio-buttons-be-empty-after-refreshing-a-page/8574/3
*    Modified:  
*****************************************************/

var inp = document.getElementsByTagName("input");
for (var i = inp.length - 1; i >= 0; i--) {
    if ("radio" === inp[i].type) inp[i].checked = false;
}
document.getElementById("testbutton").addEventListener("click", function () {
    alert(sec1);
});
