//styles.js
var csjs = require('csjs-inject')

var backgroundWhite = '#f6f6f6'
var fontGrey        = '#606060'
var borderGrey      = '#fafafa'
var green           = '#2a9c6d'
var red             = '#d41304'
      
module.exports = csjs`
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${font_ubuntu};
    background-color: ${backgroundWhite};
    border: 2px solid ${borderGrey};
    box-shadow: 0 1px 2px rgba(34,25,25,0.4);
    width: 300px;
    height: 280px;
    padding: 1em;
  }
  .cardContainer,
  .cardContainer_hover {
    display: flex;
    align-items: center;
    flex-direction: column;
    -webkit-animation: transitionIn 0.3s ease-in;
    -moz-animation: transitionIn 0.3s ease-in;
    -o-animation: transitionIn 0.3s ease-in;
    animation: transitionIn 0.3s ease-in;
  }
  .profileImage {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  .cardTitle {
    margin-top: 1em;
    font-weight: bold;
    font-size: 2em;
  }
  .cardSubtitle {
    margin-top: .3em;
    font-size: 1.3em;
    color: ${green};
  }
  .cardText {
    font-size: .2em;
    line-height: 110%;
    text-weight: bold;
    border: 2px dotted ${green};
    border-radius: 5px;
    padding: .5em;
    text-align: center;
  }
  .btn {
    margin: 25px;
    width: 80%;
    min-width: 184px;
    max-width: 184px;
    height: 42px;
    background-color: #fcfcfc;
    border-radius: 2px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .2);
    cursor: pointer;
    cursor: hand;
    align-self: center;
    user-select: none;
    transition: all 400ms ease 0s;
    display: flex;
  }
  .iconwrapper {
    position: absolute;
    margin-top: 1px;
    margin-left: 1px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    user-select: none
  }
  .btntext {
    margin: 11px 14px 40px 40px;
    color: #757575;
    font-size: 14px;
    letter-spacing: .2px;
    font-family: Roboto;
    user-select: none
  }
  .btn:active {
    box-shadow: 0 1px 1px #757575;
    background: #F8F8F8;
    color: #fff;
    user-select: none
  }
  .cardSocial {
    color: black;
    padding: .3em ;
    transform:scale(2);
  }
  .cardSocial a {
    text-decoration: none;
  }
  .cardSocial_fontawesome {
    color: ${green};
    font-size: 2em;
    padding: .3em;
  }
  .cardSocial_fontawesome:hover {
    opacity: 0.9;
  }
  .cardGitterChat {
    height: 170px;
    width: 113px;
    overflow: hidden;
    margin-top: 1em;
    padding: .1px .1px;
    text-decoration: none;
    border-radius: .1px;
    background-color: ${green};
  }
  .cardGitterChat:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  @keyframes transitionIn {
    0% {opacity: 0.1}
    100% {opacity: 1}
  }
  .iframe {
    position:relative;
    top: -39%;
    left: -40%;
     height: 300px;
    width: 200px;
    transform: scale(0.55);
    margin-top: .1px;
    text-align:center;
    color:${green};
    background:${green};
    height: 300px;
    width: 200px;
    transform: scale(0.55);
    margin:.1px ;
    padding:.1px;
  }
      `
