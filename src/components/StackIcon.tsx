import styled from "styled-components";

type StackIconProps = {
    src: string;
    alt: string;
};

const themeAwareLogos = new Set([
    "chatgpt",
    "express",
    "express.js",
    "github",
    "next.js",
    "openai api",
    "socket.io",
]);

const getDarkSrc = (src: string) => {
    if (src.endsWith("/stack/next-light.png")) return "/stack/next-dark.svg";
    return undefined;
};

const isThemeAwareLogo = (alt: string, src: string) => {
    const normalizedAlt = alt.toLowerCase();
    return themeAwareLogos.has(normalizedAlt) || Boolean(getDarkSrc(src));
};

const TooltipIcon = styled.span`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 0;

    .stackIconImage {
        transition: filter 0.2s ease, opacity 0.2s ease;
    }

    .stackIconImageDark {
        display: none;
    }

    :root[data-theme="dark"] &.themeAware:not(.hasDarkAsset) .stackIconImage {
        filter: invert(1) grayscale(1) brightness(1.18);
    }

    :root[data-theme="dark"] &.hasDarkAsset {
        .stackIconImageLight {
            display: none;
        }

        .stackIconImageDark {
            display: block;
        }
    }

    &::after {
        content: attr(data-tooltip);
        position: absolute;
        left: 50%;
        bottom: calc(100% + 0.55rem);
        transform: translate(-50%, 0.25rem);
        opacity: 0;
        pointer-events: none;
        white-space: nowrap;
        border: 1px solid var(--tooltip-border);
        border-radius: 0.45rem;
        background: var(--tooltip-bg);
        color: var(--tooltip-font);
        box-shadow: 0 8px 24px var(--tooltip-shadow);
        padding: 0.35rem 0.55rem;
        font-family: var(--font-geist-sans);
        font-size: 0.72rem;
        font-weight: 500;
        line-height: 1;
        transition: opacity 0.2s ease, transform 0.2s ease;
        z-index: 20;
    }

    &::before {
        content: "";
        position: absolute;
        left: 50%;
        bottom: calc(100% + 0.25rem);
        width: 0.45rem;
        height: 0.45rem;
        transform: translate(-50%, 0.25rem) rotate(45deg);
        opacity: 0;
        pointer-events: none;
        border-right: 1px solid var(--tooltip-border);
        border-bottom: 1px solid var(--tooltip-border);
        background: var(--tooltip-bg);
        transition: opacity 0.2s ease, transform 0.2s ease;
        z-index: 19;
    }

    &:hover::after,
    &:focus-visible::after,
    &:hover::before,
    &:focus-visible::before {
        opacity: 1;
        transform: translate(-50%, 0) rotate(0deg);
    }

    &:hover::before,
    &:focus-visible::before {
        transform: translate(-50%, 0) rotate(45deg);
    }

    @media (hover: none), (pointer: coarse) {
        &::before,
        &::after {
            display: none;
        }
    }
`;

export default function StackIcon({ src, alt }: StackIconProps) {
    const darkSrc = getDarkSrc(src);
    const className = [isThemeAwareLogo(alt, src) ? "themeAware" : "", darkSrc ? "hasDarkAsset" : ""].filter(Boolean).join(" ");

    return (
        <TooltipIcon className={className} data-tooltip={alt} tabIndex={0} aria-label={alt} title={alt}>
            <img className="stackIconImage stackIconImageLight" src={src} alt={alt} />
            {darkSrc ? <img className="stackIconImage stackIconImageDark" src={darkSrc} alt="" aria-hidden="true" /> : null}
        </TooltipIcon>
    );
}
