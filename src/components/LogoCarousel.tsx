"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const LogoWrapper = styled(motion.div)`
  position: relative;
  height: 14rem;
  width: 24rem;
  overflow: hidden;
  margin: 0 auto;
  margin-top: -5rem;

  @media (max-width: 1200px) {
    width: 20rem;
    height: 12rem;
  }

  @media (max-width: 768px) {
    width: 25rem;
    margin-top: 0rem;
    height: 8rem;
  }

  @media (max-width: 480px) {
    width: 20rem;
    height: 8rem;
    margin-top: 1rem;
    gap: 0.5rem;
  }
`;

const LogoImage = styled.img`
  height: 8rem;
  width: 8rem;
  max-height: 80%;
  max-width: 80%;
  object-fit: contain;
`;

interface Logo {
	name: string;
	id: number;
	img: string;
}

interface LogoColumnProps {
	logos: Logo[];
	index: number;
	currentTime: number;
}

const shuffleArray = <T,>(array: T[]): T[] => {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
};

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
	const shuffled = shuffleArray(allLogos);
	const columns: Logo[][] = Array.from({ length: columnCount }, () => []);

	shuffled.forEach((logo, index) => {
		columns[index % columnCount].push(logo);
	});

	const maxLength = Math.max(...columns.map((col) => col.length));
	columns.forEach((col) => {
		while (col.length < maxLength) {
			col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
		}
	});

	return columns;
};

const LogoColumn: React.FC<LogoColumnProps> = React.memo(({ logos, index, currentTime }) => {
	const cycleInterval = 3000;
	const columnDelay = index * 200;
	const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length);
	const currentIndex = Math.floor(adjustedTime / cycleInterval);

	return (
		<LogoWrapper
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				delay: index * 0.1,
				duration: 0.5,
				ease: "easeOut",
			}}
		>
			<AnimatePresence mode="wait">
				<motion.div
					key={`${logos[currentIndex].id}-${currentIndex}`}
					style={{
						position: "absolute",
						inset: 0,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
					animate={{
						y: "0%",
						opacity: 1,
						filter: "blur(0px)",
						transition: {
							type: "spring",
							stiffness: 300,
							damping: 20,
							mass: 1,
							bounce: 0.2,
							duration: 0.5,
						},
					}}
					exit={{
						y: "-20%",
						opacity: 0,
						filter: "blur(6px)",
						transition: {
							type: "tween",
							ease: "easeIn",
							duration: 0.3,
						},
					}}
				>
					<LogoImage src={logos[currentIndex].img} alt={logos[currentIndex].name} />
				</motion.div>
			</AnimatePresence>
		</LogoWrapper>
	);
});

interface LogoCarouselProps {
	columnCount?: number;
	logos: Logo[];
}

export function LogoCarousel({ columnCount = 2, logos }: LogoCarouselProps) {
	const [logoSets, setLogoSets] = useState<Logo[][]>([]);
	const [currentTime, setCurrentTime] = useState(0);

	const updateTime = useCallback(() => {
		setCurrentTime((prevTime) => prevTime + 100);
	}, []);

	useEffect(() => {
		const intervalId = setInterval(updateTime, 100);
		return () => clearInterval(intervalId);
	}, [updateTime]);

	useEffect(() => {
		const distributedLogos = distributeLogos(logos, columnCount);
		setLogoSets(distributedLogos);
	}, [logos, columnCount]);

	return (
		<LogoContainer>
			{logoSets.map((logos, index) => (
				<LogoColumn key={index} logos={logos} index={index} currentTime={currentTime} />
			))}
		</LogoContainer>
	);
}

export { LogoColumn };
