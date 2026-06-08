import React, { useEffect, useRef } from "react";

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class representing a point in 3D space
    class Particle3D {
      constructor() {
        this.reset();
      }

      reset() {
        // Generate random points in a 3D box
        this.x = (Math.random() - 0.5) * 1200;
        this.y = (Math.random() - 0.5) * 1200;
        this.z = Math.random() * 800 - 400; // Z range from -400 to 400
        this.baseSize = Math.random() * 1.5 + 0.5;
        this.color = `rgba(247, 171, 10, ${Math.random() * 0.4 + 0.2})`; // glowing gold tone
      }

      update() {
        // Move slowly forward along Z to simulate floating
        this.z -= 0.5;
        if (this.z < -400) {
          this.z = 400; // Reset back to far plane
        }
      }
    }

    // Initialize particles
    const particleCount = Math.min(100, Math.floor((width * height) / 15000));
    const particles = Array.from({ length: particleCount }, () => new Particle3D());

    // Camera perspective settings
    const FOV = 400; // Field of View (Perspective distance)

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      // Normalize mouse coordinates to [-0.5, 0.5]
      mouseRef.current.targetX = (e.clientX / window.innerWidth) - 0.5;
      mouseRef.current.targetY = (e.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Interpolate mouse movement for smooth delay
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Base rotation + mouse deviation
      const currentAngleY = 0.002 + mouseRef.current.x * 0.01;
      const currentAngleX = 0.001 + mouseRef.current.y * 0.01;

      const cosY = Math.cos(currentAngleY);
      const sinY = Math.sin(currentAngleY);
      const cosX = Math.cos(currentAngleX);
      const sinX = Math.sin(currentAngleX);

      const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
      const scrollOffset = scrollY * 0.6; // depth travel multiplier

      // Update positions and project to 2D
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();

        // 1. Rotate around Y axis
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // 2. Rotate around X axis
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // Update coordinates
        p.x = x1;
        p.y = y2;
        p.z = z2;

        // 3. Depth-parallax wrapping
        let finalZ = z2 - scrollOffset;
        const boxDepth = 1000;
        const halfDepth = boxDepth / 2;
        finalZ = ((finalZ + halfDepth) % boxDepth);
        if (finalZ < 0) finalZ += boxDepth;
        finalZ -= halfDepth;

        // 4. Perspective projection
        const distance = 600; 
        const perspectiveZ = finalZ + distance;

        if (perspectiveZ > 50) {
          const scale = FOV / perspectiveZ;
          const projX = x1 * scale + width / 2;
          const projY = y2 * scale + height / 2;
          const size = p.baseSize * scale;

          projected.push({
            x: projX,
            y: projY,
            z: z2,
            size: size,
            color: p.color,
          });
        }
      }

      // Draw lines between nearby particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Only draw lines if they are close on screen and not too far in depth
          if (dist < 120 && Math.abs(projected[i].z - projected[j].z) < 200) {
            const opacity = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = `rgba(247, 171, 10, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow for larger particles
        if (p.size > 1.5) {
          ctx.fillStyle = `rgba(247, 171, 10, 0.05)`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-[rgb(20,20,20)]"
    />
  );
};

export default ParticleCanvas;
