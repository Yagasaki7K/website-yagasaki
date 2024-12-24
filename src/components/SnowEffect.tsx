import React, { useEffect } from "react";

const SnowEffect: React.FC = () => {
  useEffect(() => {
    // Verifica se o mês atual é dezembro (mês 11 no JavaScript, já que é baseado em zero)
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    if (currentMonth !== 11) {
      return; // Sai do efeito se não for dezembro
    }

    // Adiciona o canvas para o efeito de neve
    const canvas = document.createElement("canvas");
    canvas.id = "snowCanvas";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "1000";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Sai se o contexto do canvas não estiver disponível

    const speedFactor = 0.4; // Multiplicador de velocidade para ajustar a velocidade dos flocos

    type Flake = {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
    };

    const flakes: Flake[] = [];
    const maxFlakes = 100;

    // Redimensiona o canvas ao alterar o tamanho da janela
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Gera flocos de neve
    const createFlakes = () => {
      while (flakes.length < maxFlakes) {
        flakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          speedX: (Math.random() * 1 - 0.5) * speedFactor,
          speedY: (Math.random() * 2 + 1) * speedFactor,
        });
      }
    };

    // Anima os flocos de neve
    const animateFlakes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      flakes.forEach((flake) => {
        flake.x += flake.speedX;
        flake.y += flake.speedY;

        // Reposiciona os flocos que saem da tela
        if (flake.y > canvas.height) {
          flake.y = -flake.radius;
          flake.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      });

      requestAnimationFrame(animateFlakes);
    };

    // Inicializa o efeito
    createFlakes();
    animateFlakes();

    // Atualiza o tamanho do canvas em caso de redimensionamento
    window.addEventListener("resize", resizeCanvas);

    // Remove o canvas ao desmontar o componente
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.body.removeChild(canvas);
    };
  }, []);

  return null; // Este componente não renderiza nada diretamente
};

export default SnowEffect;
