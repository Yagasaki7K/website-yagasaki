"use client";
import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const countPhotos = 50;

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 0px;
    padding: 0 25rem;
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

    @media (max-width: 1440px) {
        padding: 0 18rem;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }

    @media (max-width: 1280px) {
        padding: 0 14rem;
        grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    }

    @media (max-width: 1024px) {
        padding: 0 8rem;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }

    @media (max-width: 912px) {
        padding: 0 6rem;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }

    @media (max-width: 820px) {
        padding: 0 4rem;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    }

    @media (max-width: 768px) {
        padding: 0 2rem;
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    }

    @media (max-width: 640px) {
        padding: 0 1.5rem;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }

    @media (max-width: 480px) {
        padding: 0 1rem;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }

    @media (max-width: 390px) {
        padding: 0 0.75rem;
        grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
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

        @media (max-width: 1024px) {
            max-width: 92vw;
            max-height: 88vh;
        }

        @media (max-width: 768px) {
            max-width: 94vw;
            max-height: 85vh;
        }

        @media (max-width: 480px) {
            max-width: 96vw;
            max-height: 80vh;
            border-radius: 8px;
        }

        @media (max-width: 390px) {
            max-width: 98vw;
            max-height: 78vh;
            border-radius: 6px;
        }
    }
`;

export default function PhotoPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <Navigation />
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
            <Footer />
        </>
    );
}
