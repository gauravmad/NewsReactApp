import React, { Component } from "react";
import NewItem from "./NewItem";

export class News extends Component {

  articles = [];

  constructor() {
    super();
    console.log("Hello I am a constructor from News Component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    console.log("cdm");
    const url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=dd4eb47f5f944f9ea4578219d1a25952";
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div>
        <h2 className="text-[4vh] text-center my-[3vh]">
          This is a News Component
        </h2>

        <div className="w-[90%] mx-auto flex flex-row flex-wrap justify-evenly gap-y-[3vh] items-center">
          {this.state.articles.map((item) => (
            item.urlToImage && (
                <NewItem
                  key={item.url}
                  newsimg={item.urlToImage}
                  title={item.title ? item.title.slice(0, 30) : ""}
                  date={item.publishedAt ? item.publishedAt.slice(0, 16) : ""}
                  newsdesc={item.description ? item.description.slice(0, 150) : ""}
                />
            )
          ))}
        </div>
      </div>
    );
  }
}

export default News;
