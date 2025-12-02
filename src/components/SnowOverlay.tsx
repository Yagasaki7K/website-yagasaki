"use client";

import { useEffect, useRef, useState } from "react";

const FLAKES = 280;
const MIN_SIZE = 1.2;
const MAX_SIZE = 4;
const MIN_SPEED = 50;
const MAX_SPEED = 100;
const WIND_X = 8;
const PER_FLAKE_DRIFT = 0.6;
const OPACITY_MIN = 0.35;
const OPACITY_MAX = 0.9;

function isHolidayWindow(d: Date): boolean {
	const m = d.getMonth();
	const day = d.getDate();
	return (m === 11 && day >= 1) || (m === 0 && day <= 2);
}

function prefersReducedMotion(): boolean {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type Flake = {
	x: number;
	y: number;
	r: number;
	speed: number;
	drift: number;
	alpha: number;
};

export default function SnowOverlay() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const rafRef = useRef<number | null>(null);
	const flakesRef = useRef<Flake[]>([]);
	const lastTsRef = useRef<number>(0);
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const active = isHolidayWindow(new Date()) && !prefersReducedMotion();
		setEnabled(active);
	}, []);

	useEffect(() => {
		if (!enabled) return;

		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resize = () => {
			const dpr = window.devicePixelRatio || 1;
			const width = window.innerWidth;
			const height = window.innerHeight;

			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);

			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;

			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};

		const rand = (min: number, max: number) => Math.random() * (max - min) + min;

		const spawnFlake = (yRand = true): Flake => {
			const r = rand(MIN_SIZE, MAX_SIZE);
			const speed = rand(MIN_SPEED, MAX_SPEED) + r * 2.2;

			return {
				x: rand(0, window.innerWidth),
				y: yRand ? rand(-window.innerHeight, 0) : -10,
				r,
				speed,
				drift: rand(-PER_FLAKE_DRIFT, PER_FLAKE_DRIFT),
				alpha: rand(OPACITY_MIN, OPACITY_MAX),
			};
		};

		const init = () => {
			resize();
			flakesRef.current = Array.from({ length: FLAKES }, () => spawnFlake());
			lastTsRef.current = performance.now();
		};

		init();
		window.addEventListener("resize", resize);

		const globalWind = (tSec: number) => Math.sin(tSec * 0.12) * WIND_X + Math.sin((tSec + 7.13) * 0.04) * (WIND_X * 0.4);

		const step = (ts: number) => {
			const dt = Math.min(0.05, (ts - lastTsRef.current) / 1000);
			lastTsRef.current = ts;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			const tSec = ts / 1000;
			const wind = globalWind(tSec);

			for (let i = 0; i < flakesRef.current.length; i++) {
				const f = flakesRef.current[i];
				f.y += f.speed * dt;
				f.x += (wind + f.drift) * dt;

				if (f.y - f.r > window.innerHeight) {
					flakesRef.current[i] = spawnFlake(false);
					continue;
				}

				if (f.x < -10) f.x = window.innerWidth + 10;
				if (f.x > window.innerWidth + 10) f.x = -10;

				ctx.globalAlpha = f.alpha;
				ctx.beginPath();
				ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
				ctx.fillStyle = "#ffffff";
				ctx.fill();

				ctx.globalAlpha = f.alpha * 0.5;
				ctx.beginPath();
				ctx.arc(f.x + f.r * 0.35, f.y + f.r * 0.35, f.r * 0.6, 0, Math.PI * 2);
				ctx.fill();
			}

			rafRef.current = requestAnimationFrame(step);
		};

		rafRef.current = requestAnimationFrame(step);

		return () => {
			window.removeEventListener("resize", resize);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [enabled]);

	if (!enabled) return null;

	return (
		<div
			aria-hidden="true"
			style={{
				position: "fixed",
				inset: 0,
				pointerEvents: "none",
				zIndex: 9999,
			}}
		>
			<canvas ref={canvasRef} width={300} height={150} />
		</div>
	);
}
