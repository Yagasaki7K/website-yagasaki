"use client";
import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const countPhotos = 45;

const Gallery = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 0px;
	padding: 0;
	margin: 0;
	background: #000;

	img {
		width: 100%;
		height: 100%;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		cursor: pointer;
		transition: opacity 0.2s ease;
	}

	img:hover {
		opacity: 0.8;
	}
`;

const Modal = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.9);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	backdrop-filter: blur(5px);

	img {
		max-width: 90vw;
		max-height: 90vh;
		border-radius: 10px;
		object-fit: contain;
	}
`;

export default function PhotoPage() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<>
			<Gallery>
				{Array.from({ length: countPhotos }).map((_, i) => {
					const idx = countPhotos - i; // 41, 40, 39, ..., 1
					const src = `/photos/${idx}.jpg`;
					return (
						<div key={idx} onClick={() => setSelectedImage(src)}>
							<Image src={src} width={400} height={400} alt={`Photo ${idx}`} loading="lazy" />
						</div>
					);
				})}
			</Gallery>

			<AnimatePresence>
				{selectedImage && (
					<Modal initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)}>
						<motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
							<Image src={selectedImage} width={1000} height={1000} alt="Zoomed" priority />
						</motion.div>
					</Modal>
				)}
			</AnimatePresence>
		</>
	);
}
