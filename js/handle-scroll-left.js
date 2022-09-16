const { pathname } = window.location;

const setScrollLeft = {
  "computational-imaging": 0,
  "computational-social-science": 215,
  "creative-vision": 480,
  all: 480,
  default: 0,
};
const categoryesTeam = Object.keys(setScrollLeft);

const category =
  categoryesTeam.find((el) => pathname.includes(el)) || "default";

$(function () {
  $(".team--nav-menu").scrollLeft(setScrollLeft[category]);
});

$(".team--nav-scroll.left").click(function () {
  $(".team--nav-menu").scrollLeft($(".team--nav-menu").scrollLeft() - 50);
});
$(".team--nav-scroll.rigth").click(function () {
  $(".team--nav-menu").scrollLeft($(".team--nav-menu").scrollLeft() + 50);
});
