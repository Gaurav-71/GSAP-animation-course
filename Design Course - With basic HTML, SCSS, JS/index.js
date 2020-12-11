var rule = CSSRulePlugin.getRule("span:after");

/* 

without timeline

these animations occur without any order

gsap.from(".anim1", {
  opacity: 0,
  duration: 1,
  y: -50,
  stagger: 0.5,
});

gsap.from("img", { duration: 1, y: 30, opacity: 0, delay: 1.1 });

gsap.to(rule, { cssRule: { scaleY: 0 }, duration: 1 });

gsap.from("aside", {
  duration: 1,
  backgroundPosition: "200px 0",
  opacity: 0,
  delay: 0.6,
}); 

*/

var tl = gsap.timeline({ defaults: { duration: 1 } }); // defining a gsap timeline with common attributes for all items in timeline
tl.from(".anim1", { y: -50, stagger: 0.6, opacity: 0 })
  .to(
    rule,
    {
      duration: 1.8,
      cssRule: { scaleY: 0 },
    },
    "-=2.2"
  )
  .from(
    "aside",
    {
      duration: 1,
      backgroundPosition: "200px 0",
      opacity: 0,
      delay: 0.6,
    },
    "-=1.5"
  )
  .from(
    "img",
    {
      y: 50,
      opacity: 0,
      delay: 0.6,
    },
    "-=1.5"
  );

async function reload() {
  await tl.reverse();
  location.reload();
}
