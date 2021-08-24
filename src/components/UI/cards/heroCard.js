import React from "react";
import styled from "styled-components";
import Button from "../button";

const CardStyle = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  a {
    color: black;
    text-decoration: none;
  }

  .link {
    color: red;
    font-weight: bolder;
  }

  .card-header {
    margin: 20px auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    h1 {
      padding-left: 20px;
    }

    p {
      font-size: 1.6rem;
      padding-left: 20px;
    }

    img {
      width: 300px;
      margin: 15px;
    }

    button {
      margin-left: 20px;
    }
  }

  .card-body {
    .comic-list {
      display: grid;
      text-align: center;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      gap: 8px 8px;
      grid-template-areas:
        ". . . ."
        ". . . ."
        ". . . ."
        ". . . ."
        ". . . .";
    }

    .comic-list-item {
      box-sizing: border-box;
      border: solid 4px black;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .comic-list-item:hover {
      background: #ffee33;
      font-size: 1.2rem;
      transition: 2ms;
    }
  }

  @media (max-width: 481px) {
    .card-header {
      flex-flow: column;
    }

    img {
      width: 100px;
      margin: 15px;
    }

    .card-body {
      .comic-list {
        display: grid;
        text-align: center;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 4px 4px;
        grid-template-areas:
          ". . . "
          ". . . "
          ". . . "
          ". . . "
          ". . . "
          ". . .";
      }
    }
  }
`;

export default function heroCard(props) {
  const heroData = props.hero;
  const heroLinks = heroData.urls.map((url) => {
    return (
      <Button key={url.type} to={url.url}>
        {url.type.toUpperCase()}
      </Button>
    );
  });
  const heroComics = heroData.comics.items.map((comic) => {
    return (
      <div className="comic-list-item">
        <a href={comic.resourceURI}>{comic.name}</a>
      </div>
    );
  });
  const heroSeries = heroData.series.items.map((serie) => {
    return (
      <div className="comic-list-item">
        <a href={serie.resourceURI}>{serie.name}</a>
      </div>
    );
  });
  const heroStory = heroData.stories.items.map((story) => {
    return (
      <div className="comic-list-item">
        <a href={story.resourceURI}>{story.name}</a>
      </div>
    );
  });

  return (
    <CardStyle>
      <div className="card-header">
        <img
          src={`${heroData.thumbnail.path}.${heroData.thumbnail.extension}`}
          alt={heroData.name}
        />
        <div className="hero-description">
          <h1>{heroData.name}</h1>
          <p>{heroData.description}</p>
          {heroLinks}
        </div>
      </div>
      <div className="card-body">
        <h2>
          Appears on <b>{heroData.comics.available}</b> Comics:
        </h2>
        <div className="comic-list">{heroComics}</div>
        <br />
        More:{" "}
        <a href={heroData.comics.collectionURI} className="link">
          Click Here
        </a>
        <br /> <br />
        <h2>
          Appears on <b>{heroData.series.available}</b> Series:
        </h2>
        <div className="comic-list">{heroSeries}</div>
        <br />
        More:{" "}
        <a href={heroData.series.collectionURI} className="link">
          Click Here
        </a>
        <h2>
          Appears on <b>{heroData.stories.available}</b> Stories:
        </h2>
        <div className="comic-list">{heroStory}</div> <br />
        More:{" "}
        <a href={heroData.stories.collectionURI} className="link">
          Click Here
        </a>
      </div>
    </CardStyle>
  );
}
