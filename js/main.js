const cardContainer = document.getElementById('cardContainer');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const body = document.getElementById('mainBody');

	/**
	 *
	 * Generate Cards
	 *
	 */
	

	let cards = {
		card1: {
			category: "Information",
			title: "Fitt's Law",
			description: "The amount of time needed to acquire a target is based on the target's size and distance from the starting point. ",
			expanded: "",
			img: "target.svg",
		},
		card2: {
			category: "Decision",
			title: "Hick's Law",
			description: `The time and effort required to make a decision increases with the number and complexity of the options provided.`,
			expanded: `In short, the more options given and the more complex said options are, the longer it will take for users to make their decision.`,
			img: "decision.svg",
		},
		card3: {
			category: "Decision",
			title: "Sunk Cost Fallacy",
			description: "If a user has a previously invested interest they are more willing to continue investing regardless of the outcome.",
			expanded: "This means previously invested resources - such as time, effort or money - will influence any future investments.",
			img: "money_jar.svg",
		},
		card4: {
			category: "Information",
			title: "Confirmation Bias",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta, libero non tristique consectetur, ligula.",
			img: "checklist.svg",
		},
		card5: {
			category: "Information",
			title: "Millers Law",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta, libero non tristique consectetur, ligula.",
			img: "remembering_items_flatline.svg",
		},
		card6: {
			category: "Information",
			title: "Anchoring Effect",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta, libero non tristique consectetur, ligula.",
			img: "information_carousel_flatline.svg",
		},
		card7: {
			category: "Information",
			title: "IKEA Effect",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta, libero non tristique consectetur, ligula.",
			img: "construction_worker_flatline.svg",
		},
		card8: {
			category: "Information",
			title: "Mental Model",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta, libero non tristique consectetur, ligula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta, libero non tristique consectetur, ligula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta, libero non tristique consectetur, ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta, libero non tristique consectetur, ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta, libero non tristique consectetur, ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta, libero non tristique consectetur, ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta, libero non tristique consectetur, ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta, libero non tristique consectetur, ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta, libero non tristique consectetur, ligula.",
			img: "creative_process.svg",
		},
	};

document.addEventListener("DOMContentLoaded", function () {
	/**
	 *
	 * Toggle Theme Switch
	 *
	 */
	const toggleSwitch = document.querySelector('.switch-switch input[type="checkbox"]');

	function switchTheme(e) {
		if (e.target.checked) {
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
			document.documentElement.setAttribute("data-theme", "light");
		}
	}

	toggleSwitch.addEventListener("change", switchTheme, false);




	// grab cards obj, build item and insert html
	let cardCount = 1;
	for (var key in cards) {
		card = cards[key];
		
		let cardTemplate = [
			'<div class="col-xs-12 col-sm-6 col-md-4" style="margin-top:32px">',
				'',
					'<article data-cardnumber="card'+ cardCount + '" name="" class="card">',
						'<div class="card-subtitle card-' + card.category + '">' + cards[key].category + '</div>',
						'<div class="card-title">'+ card.title +'</div>',
						'<img class="card-img" src="img/illus/'+ card.img +'" alt="" srcset="" />',
						'<p class="card-description">' + card.description.trim() + '</p>',
						'<div class="card-link">Read More <img src="img/icons/arrow-right.svg" alt="" srcset="" /></div>',
					'</article>',
				'',
			'</div>'
		].join("\n");
		cardCount++;
		cardContainer.insertAdjacentHTML("beforeend", cardTemplate);
	}

	

	// add event listener to each card, get data-src on click and pass to barba as link, show modal
	Array.from(document.getElementsByClassName('card')).forEach((card) => {
		card.addEventListener('click', (e)=>{
			// e.preventDefault();
			createModal(e.target);
			modal.classList.add('show');
			body.classList.add('has-modal');
			// e.target.classList.add('active');
		});
	});

	//add event listener to modal for hiding it on click
	modal.addEventListener('click', (e)=> {
		// e.preventDefault();
		modal.classList.remove('show');
		body.classList.remove('has-modal');
	})

});

//TODO: Switch to template literals at some point	
function createModal(selectedcard) {
	modalCard = cards[selectedcard.dataset.cardnumber];
	let modalTemplate = [
			'<article data-name="'+ formatLink(selectedcard.dataset.cardnumber) + '" class="card card-large">',
				'<div class="card-subtitle card-' + modalCard.category + '">' + modalCard.category + '</div>',
				'<div class="card-title">'+ modalCard.title +'</div>',
				'<img class="card-img" src="img/illus/'+ modalCard.img +'" alt="" srcset="" />',
				'<p>' + modalCard.description + '</p>',
				'<p>' + modalCard.expanded + '</p>',
				'<div class="card-link reverse-side"><img src="img/icons/arrow-right.svg" alt="" srcset="" /> Dismiss</div>',
			'</article>',
	].join("\n");

	modalContent.innerHTML = modalTemplate;

};


/**
 *
 * Converts card name to url
 *
 */
function formatLink(string) {
	let _string = string;
	return _string.replace(/[']+/g, "").replace(/[\._ ,:-]+/g, "-").toLowerCase();
}


