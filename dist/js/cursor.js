import { lerp, getMousePos, getSiblings } from "./utils.js";
let mouse = { x: 0, y: 0 };
window.addEventListener("mousemove", (ev) => (mouse = getMousePos(ev)));
export default class Cursor {
  constructor(el) {
    this.Cursor = el;
    this.Cursor.style.opacity = 0;
    this.Item = document.querySelectorAll(".hero-inner-link-item");
    this.Hero = document.querySelector(".hero-title");
    this.bounds = this.Cursor.getBoundingClientRect();
    this.cursorConfigs = {
      x: { previous: 0, current: 0, amt: 0.2 },
      y: { previous: 0, current: 0, amt: 0.2 },
    };
    this.onMouseMoveEv = () => {
      this.cursorConfigs.x.previous = this.cursorConfigs.x.current = mouse.x;
      this.cursorConfigs.y.previous = this.cursorConfigs.y.previous = mouse.y;
      gsap.to(this.Cursor, {
        duration: 1,
        ease: "Power3.easeOut",
        opacity: 1,
      });
      this.onScaleMouse();
      requestAnimationFrame(() => this.render());
      window.removeEventListener("mousemove", this.onMouseMoveEv);
    };
    window.addEventListener("mousemove", this.onMouseMoveEv);
  }
  onScaleMouse() {
    this.Item.forEach((link) => {
      if (link.matches(":hover")) {
        this.setVideo(link);
        this.ScaleCursor(this.Cursor.children[0], 0.8);
      }
      link.addEventListener("mouseenter", () => {
        this.setVideo(link);
        this.ScaleCursor(this.Cursor.children[0], 0.8);
      });
      link.addEventListener("mouseleave", () => {
        this.ScaleCursor(this.Cursor.children[0], 0);
      });
      link.children[1].addEventListener("mouseenter", () => {
        this.Cursor.classList.add("media-blend");
        this.ScaleCursor(this.Cursor.children[0], 1.2);
      });
      link.children[1].addEventListener("mouseleave", () => {
        this.Cursor.classList.remove("media-blend");
        this.ScaleCursor(this.Cursor.children[0], 0.8);
      });
    });
  }
  setVideo(el) {
    let src = el.getAttribute("data-video-src");
    let video = document.querySelector(`#${src}`);
    let siblings = getSiblings(video);
    if (video.id == src) {
      gsap.set(video, { zIndex: 4, opacity: 1 });
      siblings.forEach((i) => {
        gsap.set(i, { zIndex: 1, opacity: 0 });
      });
    }
  }
  ScaleCursor(el, amount) {
    gsap.to(el, {
      duration: 0.6,
      scale: amount,
      ease: "Power3.easeOut",
    });
  }
  render() {
    this.cursorConfigs.x.current = mouse.x;
    this.cursorConfigs.y.current = mouse.y;
    for (const key in this.cursorConfigs) {
      this.cursorConfigs[key].previous = lerp(
        this.cursorConfigs[key].previous,
        this.cursorConfigs[key].current,
        this.cursorConfigs[key].amt
      );
    }
    this.Cursor.style.transform = `translateX(${this.cursorConfigs.x.previous}px) translateY(${this.cursorConfigs.y.previous}px)`;
    requestAnimationFrame(() => this.render());
  }
}
