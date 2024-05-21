import styled from "styled-components";

const HeaderDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 10rem 5rem 10rem;

  @media (max-width: 1366px) {
    padding: 10rem 0rem 5rem 0rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5rem 0rem 5rem 0rem;
  }

  .text {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
  }

  .uwu {
    font-family: "Milky Honey", cursive;
    src: url("../fonts//Milky\ Honey.otf") format("otf");
    src: url("../fonts//Milky\ Honey.ttf") format("ttf");
  }

  .leftContent {
    width: 40%;
    margin-right: 5rem;

    @media (max-width: 1366px) {
      width: 50%;
    }

    @media (max-width: 1024px) {
      width: 40%;
    }

    @media (max-width: 768px) {
      width: 80%;
      margin-right: 0rem;
    }

    h1 {
      font-weight: 800;
      font-size: 2rem;
      color: var(--header);
      font-size: 4.5rem;
      line-height: 1;

      span {
        cursor: pointer;
      }
    }

    p {
      color: var(--font);
      font-size: 1.25rem;
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      unicode-bidi: isolate;

      a {
        cursor: pointer;

        i {
          font-size: 2rem;
          margin-right: 1rem;
          color: var(--font);

          &:hover {
            color: var(--header);
          }
        }
      }

      .uil-external-link-alt {
        font-size: 1rem;
        margin-right: 0;
        color: var(--red);

        &:hover {
          color: var(--pink);
        }
      }
    }

    a {
      color: var(--red);
      text-decoration: none;

      &:hover {
        color: var(--pink);
      }
    }
  }

  .rightContent {
    img {
      border-radius: 0.5rem;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .search {
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--border);
    background: var(--background);
    color: var(--font);
    font-size: 1.25rem;
    outline: none;
    margin-bottom: 1rem;
    margin-top: -2rem;

    @media (max-width: 768px) {
      width: 90%;
    }
  }
`;

export default HeaderDetails;
