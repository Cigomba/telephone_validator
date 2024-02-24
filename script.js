const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
	validatePhoneNumber();
});
userInput.addEventListener("keydown", e => {
	if (e.key === "Enter") {
		validatePhoneNumber();
	}
});

clearBtn.onclick = () => {
	resultsDiv.textContent = "";
	userInput.value = "";
};

const validatePhoneNumber = () => {
	console.log("validating...");
	if (userInput.value === "") {
		alert("Please provide a phone number");
		return;
	}

	const numStr = userInput.value;
	const cleanedNumStr = numStr.replace(/[^\d]/g, "");

	const matchLength = /[^1]?[0-9]{3}[0-9]{3}[0-9]{3}/;
	const matchFormat = /^[1]?[ ]?[(]?([0-9]{3})[)]?( |-)?([0-9]{3})( |-)?([0-9]{3})/;
	const matchParenthesis = /[(][0-9]{3}[)]/;

	let matched = matchLength.test(cleanedNumStr);

	if (matched && cleanedNumStr.length > 10) {
		// console.log(numStr[0]);
		numStr[0] == "1" ? (matched = true) : (matched = false);
	}

	if (matched) {
		matched = matchFormat.test(numStr);
		if ((matched && numStr.includes("(")) || (matched && numStr.includes(")"))) {
			matched = matchParenthesis.test(numStr);
		}
	}

	resultsDiv.textContent = matched ? `Valid US number: ${numStr}` : `Invalid US number: ${numStr}`;
};
