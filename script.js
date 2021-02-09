var qtext = `[
        {
            "question": "Regulations are important because technological advancement moves faster than our ability to use it effectively and safely.",
            "high": "W",
            "low": "U"
        },
        {
            "question": "Wealth should be distributed based on need rather than merit.",
            "high": "W",
            "low": "B"
        },
        {
            "question": "Some amount of conformity is necessary for people to work well together.",
            "high": "W",
            "low": "R"
        },
        {
            "question": "Traditions that aren't sufficiently humane or ethically acceptable ought to be discarded.",
            "high": "W",
            "low": "G"
        },
        {
            "question": "A good system is one that is constantly improving. Staying the same almost always means falling behind.",
            "high": "U",
            "low": "W"
        },
        {
            "question": "I don't need others to recognize the value of my work. Improvement is its own reward.",
            "high": "U",
            "low": "B"
        },
        {
            "question": "People should think through things before they act, and look before they leap.",
            "high": "U",
            "low": "R"
        },
        {
            "question": "We should never be content with what we have now. We should always seek to improve.",
            "high": "U",
            "low": "G"
        },
        {
            "question": "The fruits of my labor belong to me first and foremost. What I choose to do with them is my decision.",
            "high": "B",
            "low": "W"
        },
        {
            "question": "All the work I do should be in pursuit of a practical goal. Anything beyond that is wasted effort.",
            "high": "B",
            "low": "U"
        },
        {
            "question": "Success is more important than being true to yourself.",
            "high": "B",
            "low": "R"
        },
        {
            "question": "There's no such thing as something being made for you. If you want something, go get it.",
            "high": "B",
            "low": "G"
        },
        {
            "question": "I am my own person, and I'm not going to change just to please others or get along.",
            "high": "R",
            "low": "W"
        },
        {
            "question": "I do things my way, even if they seem less effective on paper.",
            "high": "R",
            "low": "U"
        },
        {
            "question": "All the success in the world means nothing if I have to abandon my passions.",
            "high": "R",
            "low": "B"
        },
        {
            "question": "The path you take in life is something you should choose for yourself.",
            "high": "R",
            "low": "G"
        },
        {
            "question": "Connection to each other and to our shared past is more important than concerns over ethics and justice.",
            "high": "G",
            "low": "W"
        },
        {
            "question": "It's not in my nature to constantly want to meddle with things or plan for the future. I prefer to exist in the present moment and let things develop.",
            "high": "G",
            "low": "U"
        },
        {
            "question": "I would prefer to choose a role that suits me rather than constantly chase fame, fortune, or prestige.",
            "high": "G",
            "low": "B"
        },
        {
            "question": "It's important to fill your role in family/society even if it means giving up on your personal dreams.",
            "high": "G",
            "low": "R"
        },
        {
            "question": "In a group setting, it's important to prioritize the overall health of the group above worrying about productivity.",
            "high": "W",
            "low": "U"
        },
        {
            "question": "Personal morals ought to be upheld at all times, not just when it's convenient to do so.",
            "high": "W",
            "low": "B"
        },
        {
            "question": "When my principles conflict with my personal feelings, I stick to my principles. Emotions can lead people astray.",
            "high": "W",
            "low": "R"
        },
        {
            "question": "Humanity is better off with civilisation.",
            "high": "W",
            "low": "G"
        },
        {
            "question": "It's not as important to me that my group is healthy and stable, as long as the final product meets my standards.",
            "high": "U",
            "low": "W"
        },
        {
            "question": "I always prefer to spend a lot of time planning up front, rather than trying to react to opportunities as they present themselves.",
            "high": "U",
            "low": "B"
        },
        {
            "question": "I feel most productive when I am not distracted by emotion and am able to focus my mental energy on the task at hand.",
            "high": "U",
            "low": "R"
        },
        {
            "question": "A person can mold and shape their own identity however they choose. We are who we choose to become.",
            "high": "U",
            "low": "G"
        },
        {
            "question": "Morality is just another form of persuasion. There's nothing 'true' or 'objective' about it.",
            "high": "B",
            "low": "W"
        },
        {
            "question": "There is certainly an advantage to having a plan and executing it, but you also have to be ready to change course if something better comes along.",
            "high": "B",
            "low": "U"
        },
        {
            "question": "Sometimes your heart lies to you, and the most beneficial thing to do is not the thing you want to do.",
            "high": "B",
            "low": "R"
        },
        {
            "question": "I don't feel a strong sense of responsibility to others. Everyone needs to look out for themselves and carry their own weight.",
            "high": "B",
            "low": "G"
        },
        {
            "question": "In a moral dilemma, I go with my gut rather than a personal code.",
            "high": "R",
            "low": "W"
        },
        {
            "question": "Emotions inform and energize my actions. Without them, my life would be without direction and meaning.",
            "high": "R",
            "low": "U"
        },
        {
            "question": "I would never hurt something or someone dear to me, no matter the reason.",
            "high": "R",
            "low": "B"
        },
        {
            "question": "The best family never asks you to change for them, and doesn't place restrictions on your dreams.",
            "high": "R",
            "low": "G"
        },
        {
            "question": "Utopian dreams that ignore human nature will never succeed.",
            "high": "G",
            "low": "W"
        },
        {
            "question": "Who we are is not something we choose, but rather something we discover and embrace.",
            "high": "G",
            "low": "U"
        },
        {
            "question": "We live in a web of responsibility that binds us to one another. If one person shirks their duties, everyone suffers.",
            "high": "G",
            "low": "B"
        },
        {
            "question": "A family of mutual support and responsibility, where everyone is accountable to everyone else, is the strongest family of all.",
            "high": "G",
            "low": "R"
        }
    ]`
var questions = JSON.parse(qtext).sort(function(){return Math.random() - 0.5}); //Yes, this is bad, but the randomness doesn't have to be strong

var n = -1
var colors = {
	"W": 0,
	"U": 0,
	"B": 0,
	"R": 0,
	"G": 0
}
var combos = {
	"W": "White",
	"U": "Blue",
	"B": "Black",
	"R": "Red",
	"G": "Green",
	"WU": "Azorius",
	"WB": "Orzhov",
	"WR": "Boros",
	"WG": "Selesnya",
	"UB": "Dimir",
	"UR": "Izzet",
	"UG": "Simic",
	"BR": "Rakdos",
	"BG": "Golgari",
	"RG": "Gruul",
	"WUR": "Jeskai",
	"WUB": "Esper",
	"WRG": "Naya",
	"WBG": "Abzan",
	"UBG": "Sultai",
	"UBR": "Grixis",
	"WUG": "Bant",
	"WBR": "Mardu",
	"BRG": "Jund",
	"URG": "Temur",
	"WUBR": "Artifice",
	"WUBG": "Growth",
	"WURG": "Altruism",
	"WBRG": "Aggression",
	"UBRG": "Chaos"
}
var bgs = {
	"W": "#ffffff",
	"U": "#8080ff",
	"B": "#808080",
	"R": "#ff8080",
	"G": "#80ff80"
}

var bg = [];
wrap_fill = function(){
	switch($('input[name=form]:checked', '#form').val()){
		case "1":
			colors[questions[n]["low"]] += 2;
			break;
		case "2":
			colors[questions[n]["low"]] ++;
			break;
		case "3":
			colors[questions[n]["low"]] ++;
			colors[questions[n]["high"]] ++;
			break;
		case "4":
			colors[questions[n]["high"]] ++;
			break;
		case "5":
			colors[questions[n]["high"]] += 2;
			break;
		default:
	}
	n++;
	if (n<Object.keys(questions).length) {
		form_fill(n);
	} else {
		display_results();
	}
};


form_fill = function(i){
	$("form").html(`<label for="form">` + questions[i]["question"] + `</label>
		<div>
			<span><input type="radio" name="form" value="1">Strongly Disagree</input></span>
			<span><input type="radio" name="form" value="2">Disagree</input></span>
			<span><input type="radio" name="form" value="3">Ambivalent</input></span>
			<span><input type="radio" name="form" value="4">Agree</input></span>
			<span><input type="radio" name="form" value="5">Strongly Agree</input></span>
			<span class="dontcare"><input type="radio" name="form" value="0" checked="checked" required="required">Don't care</input></span>
		</div>
		<input type="button" class="button" value="Next" onclick="wrap_fill()"> `)
};

bg_set = function(value){
	bg.push(bgs[value]);
}
display_results = function(){
	var col_array = Object.values(colors);
	var color_names = Object.keys(colors);
	var col_diffs = [];
	var cols = [];
	var col_array_sorted = JSON.parse(JSON.stringify(col_array));
	col_array_sorted.sort(function(a, b){return b - a});
	for (i=0;i<4;i++){
		col_diffs.push(col_array_sorted[i]-col_array_sorted[i+1]);
	}
	var max_gap = 0;
	for (i=0;i<4;i++){
		if (Math.abs(col_diffs[i])>Math.abs(col_diffs[max_gap])){
			max_gap = i;
		}
	}
	cutoff = col_array_sorted[max_gap];
	for (i=0;i<5;i++){
		if (col_array[i] >= cutoff){
			cols.push(color_names[i]);
		}
	}
	var combo = combos[cols.join("")];
	if (cols.length == 0 || cols.length == 5){
		if (cutoff <= 10){
			combo = "Colorless";
		} else {
			combo = "WUBRG";
		}
	}
	cols.forEach(bg_set);
	if (bg.length > 1){
		$("form").css("background", "linear-gradient(" + bg.join() + ")");
	} else {
		$("form").css("background", bg.join());
	}
	if (combo == "Colorless"){
		$("form").css("background", "#e0e0e0");
	}
	$("form").html("<h1>You are " + combo + "!</h1> <p>" + combos["W"] + ": " + colors["W"] + "</p>" +"<p>" + combos["U"] + ": " + colors["U"] + "</p>" +"<p>" + combos["B"] + ": " + colors["B"] + "</p>" +"<p>" + combos["R"] + ": " + colors["R"] + "</p>" +"<p>" + combos["G"] + ": " + colors["G"] + "</p>");
};

$(document).ready(function(){
	$("form").html(`<h1>Welcome to tier 1 of your trial!</h1>
	<p>You will be presented with 40 questions, testing your colour identity. Choose one of the available options. Choose 'Ambivalent' if you both agree and disagree with the statement, and choose 'Don't Care' if you don't have an opinion on the statement.</p>
		<input type="button" class="button" value="Start" onclick="wrap_fill()"> `)
});
