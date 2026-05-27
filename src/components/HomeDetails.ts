import styled from "styled-components";

const HomeDetails = styled.div`
    max-width: 64rem;
    margin: 0 auto;
    font-family: 'Waze', 'Geist', sans-serif;
    color: var(--black);
    transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);

    * { transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1); }

    .theme-toggle {
        margin-left: auto;
        width: fit-content;
        border: 1px solid var(--gray-light);
        border-radius: 999px;
        padding: 0.45rem 0.8rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
    }

    .header { display: flex; align-items: center; gap: 20px; margin: 1.5rem 0 2.5rem;
        .img { width: 68px; height: 68px; border-radius: 14px; overflow: hidden; box-shadow: 0 12px 38px rgba(0,0,0,.16); img { width: 100%; height: 100%; object-fit: cover; }}
        .content { h1 { font-size: clamp(2rem,4vw,3rem); letter-spacing: -0.04em; font-weight: 650; color: var(--black); } p { margin-top: .3rem; font-weight: 520; color: var(--gray); }}
    }

    .container { display: flex; gap: 35px; .info .title { text-transform: uppercase; font-size: .72rem; font-weight: 650; letter-spacing: .08em; color: var(--gray-title); margin-bottom: .45rem; } .info .content { display: flex; gap: 7px; color: var(--gray-info); font-size: .88rem; }}

    .about { margin-top: 1.8rem; .text { line-height: 1.9; color: var(--gray); max-width: 55rem; a { color: var(--black); text-decoration: none; &:hover { opacity: .7; text-decoration: underline; }}}}

    .spotify-widget {
        margin-top: 1.5rem; border: 1px solid var(--gray-light); border-radius: 18px; padding: 1rem; display: flex; gap: 1rem; align-items: center; overflow: hidden; position: relative;
        img { width: 78px; height: 78px; border-radius: 12px; }
        span { font-size: .72rem; text-transform: uppercase; letter-spacing: .08em; color: var(--gray-title); }
        h5 { font-size: 1.1rem; margin-top: .25rem; letter-spacing: -0.02em; }
        p { color: var(--gray); }
        a { font-size: .85rem; color: var(--black); }
    }

    .github { margin-top: 2rem; border: 1px solid var(--gray-light); border-radius: 18px; padding: 1.2rem;
        h4 { color: var(--title); text-transform: uppercase; font-size: 0.75rem; font-weight: 600; letter-spacing: 1px; margin-bottom: 1rem; }
        .profile { display: flex; gap: .8rem; align-items: center; img { width: 52px; height: 52px; border-radius: 12px; } h5 { font-size: 1rem; } p { font-size: .85rem; color: var(--gray);} }
        .loading { color: var(--gray); }
        .heatmap { margin-top: 1rem; display: grid; grid-template-columns: repeat(21, 1fr); gap: 6px; span { display: block; aspect-ratio: 1/1; border-radius: 4px; border: 1px solid rgba(127,127,127,.15); }
            .l0 { background: transparent; } .l1 { background: rgba(127,127,127,.22); } .l2 { background: rgba(127,127,127,.4); } .l3 { background: rgba(127,127,127,.55); } .l4 { background: rgba(127,127,127,.72); }
        }
        .repo-grid { margin-top: 1rem; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: .7rem;
            a { border: 1px solid var(--gray-light); border-radius: 12px; padding: .7rem; text-decoration: none; color: var(--black); &:hover { transform: translateY(-3px); } h6 { font-size: .92rem; } p { margin-top: .2rem; color: var(--gray); font-size: .8rem; }}
        }
    }

    .featured { margin-top: 2rem; h4 { color: var(--title); text-transform: uppercase; font-size: 0.75rem; font-weight: 600; letter-spacing: 1px; margin-bottom: 20px; }
        .cards { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 20px;
            .card { position: relative; border-radius: 14px; overflow: hidden; border: 1px solid var(--gray-light);
                img { width: 100%; height: 280px; object-fit: cover; transform: scale(1); }
                .overlay { position: absolute; inset: 0; padding: 1.2rem; display: flex; flex-direction: column; justify-content: flex-end; color: #fff; opacity: 0; transform: translateY(20px); background: linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.45), transparent); transition: opacity 0.35s ease, transform 0.35s ease;
                    h1 { letter-spacing: -0.02em; font-size: 1.35rem; } p { opacity: .85; margin: .35rem 0 .55rem; } .tech-tags { display: flex; gap: .4rem; flex-wrap: wrap; span { border: 1px solid rgba(255,255,255,.2); border-radius: 999px; padding: .2rem .55rem; font-size: .73rem; }} .actions { margin-top: .65rem; display: flex; gap: .6rem; a { color: #fff; }}
                }
                &:hover { img { transform: scale(1.04); } .overlay { opacity: 1; transform: translateY(0); }}
            }
        }
    }

    .experience { margin-top: 2rem; h4 { color: var(--title); text-transform: uppercase; font-size: 0.75rem; letter-spacing: 1px; margin-bottom: 1rem; }
        .content { border: 1px solid var(--gray-light); border-radius: 14px; padding: 1rem; display: grid; grid-template-columns: 24px 1fr; gap: 1rem; background: rgba(127,127,127,.03);
            .timeline-dot { width: 10px; height: 10px; border-radius: 999px; background: var(--gray); margin-top: 6px; box-shadow: 0 0 0 8px rgba(127,127,127,.08); }
            .title { display: flex; justify-content: space-between; gap: 1rem; p { color: var(--gray); font-size: .85rem; } .role h1 { letter-spacing: -0.02em; font-size: 1.2rem; } }
            .description { margin-top: .75rem; color: var(--gray); line-height: 1.7; li { margin-left: 1rem; }}
            &:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.12); background: rgba(127,127,127,.06); }
        }
    }

    @media (max-width: 900px) {
        .featured .cards, .github .repo-grid { grid-template-columns: 1fr; }
    }

    @media (max-width: 680px) {
        .header { align-items: flex-start; }
        .container { flex-direction: column; gap: 1rem; }
        .experience .content { grid-template-columns: 1fr; }
    }
`;

export default HomeDetails;
