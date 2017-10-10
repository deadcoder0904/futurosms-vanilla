var features = [
  {
    title: "Upcoming SMS",
    text:
      "Schedule SMS at any given time in the future. Set the time & date & the SMS will be sent for you"
  },
  {
    title: "Create Futuro SMS",
    text:
      "Don't want to disturb someone right now. Schedule SMS for later & send it on a later time."
  },
  {
    title: "Edit SMS",
    text:
      "If you have mistyped something, edit the SMS & voila new SMS will be sent at specified time"
  },
  {
    title: "Delete SMS",
    text:
      "If you have screwed up any number then delete SMS before it goes to the wrong person"
  },
  {
    title: "10+ Themes",
    text: "Themify the app with various themes from BitterSweet to Yellow Green"
  }
];

var uses = [
  {
    title: "Birthday Wishes",
    text:
      "Are you lazy to get up at midnight to wish your friends on their birthdays? Think no more. Send SMS exactly at midnight."
  },
  {
    title: "Busy Spouse in a Meeting",
    text:
      "Is your Spouse or Friend in a meeting? Type now & select appropriate time & send it later."
  },
  {
    title: "Good night during Morning",
    text:
      "Send Good night message in the morning & forget to wish at night. Leave everything to Futuro SMS."
  },
  {
    title: "Grocery Store",
    text:
      "Want your spouse to bring Grocery in the evening but can't take your phone with you in the evening? Enter message now & select appropriate time & it will be sent later."
  }
];

var btns = [
  {
    alt: "Google Play",
    src: "./assets/google-play-badge.png",
    href: "https://play.google.com/store/apps/details?id=com.futurosms"
  }
];

document.addEventListener("DOMContentLoaded", function() {
  var $uses = document.getElementById("uses");
  var $features = document.getElementById("features");
  var $btns = document.getElementById("btns");

  var renderCards = function(data, sel) {
    var boxes = [];
    data.forEach(function(item, i) {
      var box =
        "<div class='box' key={i}><div class='subtitle'>" +
        item.title +
        "</div><div class='text'>" +
        item.text +
        "</div></div>";
      boxes.push(box);
    });
    sel.innerHTML = boxes.join("");
  };

  var renderBtns = function(data, sel) {
    var boxes = [];
    data.forEach(function(item, i) {
      var box =
        "<a href=" +
        item.href +
        " target='_blank' rel='noopener noreferrer'><img src=" +
        item.src +
        " alt= " +
        item.alt +
        " width='350' height='150' /></a>";
      boxes.push(box);
    });
    sel.innerHTML = boxes.join("");
  };

  renderCards(features, $features);
  renderCards(uses, $uses);
  renderBtns(btns, $btns);
});
