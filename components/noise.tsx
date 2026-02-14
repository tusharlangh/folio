"use client";

import { useEffect, useRef } from "react";

export default function Noise() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const pCanvas = document.createElement("canvas");
    pCanvas.width = 128;
    pCanvas.height = 128;
    const pCtx = pCanvas.getContext("2d");
    if (!pCtx) return;

    const pData = pCtx.createImageData(128, 128);
    const pBuffer = new Uint32Array(pData.data.buffer);
    const pLen = pBuffer.length;

    for (let i = 0; i < pLen; i++) {
      if (Math.random() < 0.5) {
        pBuffer[i] = 0xff000000;
      } else {
        pBuffer[i] = 0x00000000;
      }
    }
    pCtx.putImageData(pData, 0, 0);

    let animationId: number;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      const x = Math.floor(Math.random() * 128);
      const y = Math.floor(Math.random() * 128);

      ctx.save();
      ctx.translate(-x, -y);
      const pattern = ctx.createPattern(pCanvas, "repeat");
      if (pattern) {
        ctx.fillStyle = pattern;
        ctx.fillRect(x, y, w, h);
      }
      ctx.restore();

      animationId = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none opacity-[0.05] w-screen h-screen"
    />
  );
}
