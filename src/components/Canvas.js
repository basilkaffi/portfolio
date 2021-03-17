import { useRef, useEffect } from "react";

function Canvas(props) {
  const { ...rest } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const ctx = canvas.getContext("2d");
    const numberOfParticle = 100;
    let particles = [];
    let animationFrameId;
    let cursorX = 0;
    let cursorY = 0;

    const resizing = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    };
    window.addEventListener("resize", resizing);

    const getPosition = (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    };
    canvas.addEventListener("mousemove", getPosition);

    const cursorEl = document.querySelector(".cursor");
    cursorEl.classList.add("cursor-pulse");

    class Cursor {
      constructor(x, y, side) {
        this.x = x - side / 2;
        this.y = y - side / 2;
        this.width = side;
        this.height = side * 2;
      }
      draw() {
        ctx.beginPath();
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.stroke();
      }
      update() {
        this.x = cursorX - this.width / 2;
        this.y = cursorY - this.height / 2;
      }
    }
    const cursor = new Cursor(0, 0, 35);

    class Particle {
      constructor(x, y, side, weight, color = "cyan") {
        this.x = x;
        this.y = y;
        this.width = side;
        this.height = side;
        this.weight = weight;
        this.color = color;
      }
      draw() {
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        this.width -= 0.05;
        this.height -= 0.05;
        if (this.width <= 0) {
          this.x = Math.random() * ctx.canvas.width;
          this.y =
            (Math.random() * ctx.canvas.height) / 1.5 + ctx.canvas.height / 6;
          const side = Math.random() * 20 + 4;
          this.width = side;
          this.height = side;
        }
        this.y += this.weight;
        this.weight += 0.2;
        if (this.y > ctx.canvas.height - this.height) {
          this.weight *= -1;
        }
        if (
          this.x > cursor.x &&
          this.x < cursor.x + cursor.width &&
          this.y > cursor.y &&
          this.y < cursor.y + cursor.height
        ) {
          this.weight *= -1;
        }
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticle; i++) {
        let x = Math.random() * ctx.canvas.width;
        let y =
          (Math.random() * ctx.canvas.height) / 1.5 + ctx.canvas.height / 6;
        let side = Math.random() * 20 + 4;
        let weight = 0.5;
        const colors = ["#FCD34D", "#34D399", "#C7D2FE"];
        const index = Math.round(Math.random() * colors.length);
        particles.push(new Particle(x, y, side, weight, colors[index]));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      cursor.update();
      cursor.draw();
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = window.requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizing);
      window.removeEventListener("mousemove", getPosition);
      cursorEl.classList.remove("cursor-pulse");
    };
  }, []);

  return (
    <canvas ref={canvasRef} {...rest} className="absolute hidden sm:block" />
  );
}

export default Canvas;
