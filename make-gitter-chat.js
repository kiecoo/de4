        var makeLinkUrl = require('./make-gitter-url.js')  
	
        module.exports = makeGitterChat
        function makeGitterChat () {
	  var name              = 'Nina'
	  var username          = 'ninabreznik'
	  var cardText          = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru '
	  var imageUrl          = 'https://nomadlist.com/assets/img/cities/phuket-thailand-500px.jpg'
	  var city              = 'Berlin'
	  var twitter           = `https://twitter.com/${username}`
	  var github            = `https://github.com/${username}`
	  var codepen           = `https://codepen.io/${username}`
	  
	// HTML
	  var cardContainer = bel`
	    <div class=${css.cardContainer}>
	      <img src=${imageUrl} class=${css.profileImage}>
	      <div class=${css.cardTitle}>${name}</div>
	      <div class=${css.cardSubtitle}>@${username}</div>
	    </div>
	  `
	  var el = bel`
	    <div class=${css.card} onmouseenter=${hoverCard} onmouseleave=${unhoverCard}>
	      ${cardContainer}
	    </div>
	  `
	  // HELPERS
	  /* --------------------------------------------------------
			    CARD EVENT LISTENERS
	  ---------------------------------------------------------- */
	  /* --------------- hover & unhover the card ---------------*/
	  var cardContainer_hover = bel`
	    <div class=${css.cardContainer_hover}>
	      <div class=${css.cardGitterChat} ><iframe class=${css.iframe} src=${ makeLinkUrl (username)}></iframe></div>
	      <div class=${css.cardSocial}>
		<a href=${twitter} target='_blank'>
		  <i class="${css.cardSocial_fontawesome} fa fa-twitter" aria-hidden="true"></i></a>
		<a href=${github} target='_blank'>
		  <i class="${css.cardSocial_fontawesome} fa fa-github" aria-hidden="true"></i>
		</a>
		<a href=${codepen} target='_blank'>
		  <i class="${css.cardSocial_fontawesome} fa fa-codepen" aria-hidden="true"></i>
		</a>
	      </div>
	      <div class=${css.cardText}>${cardText}</div>
	    </div>
	  `
	  function hoverCard (event) {
	    el.appendChild(cardContainer_hover)
	    el.removeChild(cardContainer)
	  }
	  function unhoverCard (event) {
	    el.removeChild(cardContainer_hover)
	    el.appendChild(cardContainer)
	  }
	  return el
	}
