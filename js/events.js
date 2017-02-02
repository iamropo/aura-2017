const eventDetails = [
	// culturals 
	{
		bob: {
			about: 'Battle of bands is undoubtedly the most popular event of AURA,\
			It is the battle between the best music bands',
			gl: '#bob-gl',
			jc: '#bob-jc'
		},
		bb: {
			about: 'Beatboxing (also beat boxing or b-boxing) is a form of vocal percussion\
			 It may also involve vocal imitation of turntablism, and other musical instruments.',
			gl: '#bb-gl'
		},
		fs: {
			about: 'An illusion that bounds every viewer with the ethereal beauty',
			notice: 'Every college is advised to bring their own props and music in mp3 format. Props such as cigars, wine bottles etc, are banned.',
			gl: '#fs-gl',
			jc: '#fs-jc'

		},
		gd: {
			about: 'It is your feet that move, but it is your heart that really dances; perform like a star and burn the stage.',
			gl: '#gd-gl'
		},
		ma: {
			about: 'Come up with your creative ideas in a comic and innovative way to make an advertisement and attract the crowd.',
			gl: '#ma-gl'
		},
		mm: {
			about: 'Mime is a theatrical technique of suggesting action, character or emotion without words using only gesture, expression and movement\
			 to act out a play or role. The music recording should be played behind.',
			 gl: '#mm-gl'
		},
		sd: {
			about: 'Loosen up yourself and go solo on the stage of AURA 2017 with the dynamic and static divine flow of energy.',
			gl: '#sd-gl'
		},
		ss: {
			about: 'If you have the voice that can win hearts and steal the show , \
			then get ready to dazzle the stage ,where you are given the ideal platform to show your talent and prove your mettle.',
			gl: '#ss-gl',
			jc: '#ss-jc'			
		}
	},
	// open events
	{
		aw: {
			gl: '#aw-gl'
		},
		fp: {
			gl: '#fp-gl'
		},
		fx: {
			gl: '#fx-gl'
		},
		ht: {
			gl: '#ht-gl'
		},
		jm: {
			gl: '#jm-gl'
		},
		tm: {
			gl: '#tm-gl'
		}
	},
	// management
	{
		bm: {
			about: 'Best described as complex and uncertain, today’s business world is constantly on the look-out for managers who can \
			juggle priorities, protect budgets, frame strategies and lead the troop forward, much like the monarch in a game of chess.\
			Timely decisive moves that stem from one’s strategic intent would help survive the storm of adversities.\
			But a monarch has to look beyond what lies ahead to Best Manager is AURA 2K17 flagship event that attracts young business talent from across the country.\
			Sharpen your grey cells, battle-it out and prove your business mettle at the two-day event.'
		},
		hr: {
			about: 'An HR manager\’s mind makes constant permutations and combinations to find the right person for the right job.\
			Quite like how a chess player moves his pawns and places them at advantageous positions, an HR manager identifies opportunities\
			and allocates jobs, only to ensure that the business game continues and leads to victory in the competitive space.\
			Do you have a hunch towards managing people and allied organizational processes? Come forth and fight-out the battle.'
		},
		fn: {
			about: 'Finance is the life line of an organisation as well as the backbone of any organisation and without it no \
			industry can perform or can survive. Purpose of the event is to test the basics and analytical skills of the participant,\
			which are of utmost importance in the financial arena. '
		},
		mk: {
			about: 'Competition in the field of marketing is the rivalry between companies selling similar products and services with the goal of achieving revenue,\
			profit, and market-share growth. Market competition motivates companies to increase sales volume by utilizing the components of the marketing mix,\
			Knowing and understanding your competition is a critical step in becoming a successful marketing strategist. '
		},
		bq: {
			about: 'Business quiz is the game of question and answer. This game is to judge the knowledge of the participants towards the industries, companies\
			and product. And also to judge the awareness of participants through questions related to knowledge of business, insight of business and business related areas.',
			gl: '#bq-gl'
		},
		br: {
			about: 'Incremental product improvements to promote “My brand is better than your brand” have little impact on the market dynamics affecting the\
			market share. In industry after industry, the brand race is won instead by substantial innovations that define new categories or sub-categories and\
			thus make competitors irrelevant.'
		}
	},
	// it-journalism
	{
		st: {
			about: 'Tell a story that caught your heart. Tell us a dream of dream that has been lost. Go around the city and its streets.\
			Tell a story, listen closely and you will here amongst vandalized walls that someone has been here before.',
			gl: '#st-gl'
		},
		pj: {
			about: 'Express  your vision in a flash of moment. A word, a place, an event, a dream, a life.',
			gl: '#pj-gl'
		},
		cp: {
			about: '"Who is that you wish to be? Careful what you wish for."',
			gl: '#cp-gl'
		}
	}

]

function hideCollection (collection) {
	Array.prototype.forEach.call(collection, function (element) {
		element.style.display = 'none'
	})
}

function displayCollection (collection) {
	Array.prototype.forEach.call(collection, function (element) {
		element.style.display = 'block'
	})
}

var eventDescription =  document.querySelector('#event-description')
var events = document.querySelectorAll('.event')

document.querySelector('#close-events-description').addEventListener('click', function () {
	eventDescription.style.display = 'none'
})

function loadeventDescription (event, id) {

	eventDescription.style.display = 'block'	
	eventDescription.querySelector('h4').innerText = document.querySelector('#' + id).innerText
	
	if (event.notice) {
		eventDescription.querySelector('#notice').style.display = 'block'
		eventDescription.querySelector('#notice').innerText = event.notice
	} else {
		eventDescription.querySelector('#notice').style.display = 'none'
	}

	if (event.about) {
		eventDescription.querySelector('#about').style.display = 'block'		
		eventDescription.querySelector('#about').innerText = event.about 
	} else {
		eventDescription.querySelector('#about').style.display = 'none'
	}

	if (event.notice) {
		eventDescription.querySelector('#notice').style.display = 'block'
		eventDescription.querySelector('#notice').innerText = event.notice
	} else {
		eventDescription.querySelector('#notice').style.display = 'none'		
	}
	
	if (event.gl) {
		displayCollection(eventDescription.querySelectorAll('.guidelines'))
		eventDescription.querySelector('#guidelines').innerHTML = document.querySelector(event.gl).innerHTML 		
	} else {
		hideCollection(eventDescription.querySelectorAll('.guidelines'))
	}
	
	if (event.jc) {
		displayCollection(eventDescription.querySelectorAll('.judging-criteria'))
		eventDescription.querySelector('#judging-criteria').innerHTML = document.querySelector(event.jc).innerHTML 	
	} else {
		hideCollection(eventDescription.querySelectorAll('.judging-criteria'))
	}

}


function matchEvent (className, id) {
	switch (className) {
		case 'event culturals':
			loadeventDescription(eventDetails[0][id], id)
			break;
		case 'event open':
			loadeventDescription(eventDetails[1][id], id)
			break;
		case 'event management':
			loadeventDescription(eventDetails[2][id], id)
			break;
		case 'event it-journalism':
			loadeventDescription(eventDetails[3][id], id)
	}
}

Array.prototype.forEach.call(events, function (element) {
	element.addEventListener('click', function () {
		matchEvent(this.className, this.id)
	})
})