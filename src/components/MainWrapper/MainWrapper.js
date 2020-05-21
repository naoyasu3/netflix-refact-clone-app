import React, { Component } from "react";

import classes from "./MainWrapper.css";
import TopCard from "../TopCard//TopCard";
import StoryCard from "../../containers/StoryCard/StoryCard";

class MainWrapper extends Component {
  state = {
    watchOnTv: {
      headline: "大画面で楽しめる",
      subHeadline:
        "スマートテレビやApple TVはもちろん、PlaystationやXboxなどのゲーム機、Chromecastな﻿ど﻿のス﻿ト﻿リ﻿ー﻿ミ﻿ン﻿グデ﻿バ﻿イ﻿ス﻿、ブ﻿ル﻿ー﻿レ﻿イプ﻿レ﻿ー﻿ヤ﻿ー﻿を使﻿え﻿ば﻿、お﻿持﻿ち﻿のテ﻿レビで簡単に観られます。",
      flipped: undefined,
      image:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
      video:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-jp-0819.m4v",
      key: "WatchOnTv",
      class: "WatchOnTv",
    },
    downloadWatch: {
      headline: "ダ﻿ウ﻿ン﻿ロ﻿ー﻿ド﻿し﻿てオ﻿フ﻿ラ﻿イ﻿ン﻿で視﻿聴",
      subHeadline:
        "お﻿気﻿に﻿入﻿り﻿の作﻿品﻿をダ﻿ウ﻿ン﻿ロ﻿ー﻿ドす﻿れ﻿ば﻿、い﻿つ﻿で﻿もお﻿楽﻿し﻿みい﻿た﻿だ﻿け﻿ま﻿す﻿。",
      flipped: true,
      image:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
      video: "",
      key: "DownloadWatch",
      class: "DownloadWatch",
    },
    watchOnDevice: {
      headline: "ど﻿こ﻿で﻿も観﻿ら﻿れ﻿る",
      subHeadline:
        "ス﻿マ﻿ー﻿トフ﻿ォ﻿ン﻿やタ﻿ブ﻿レ﻿ッ﻿ト﻿、パ﻿ソ﻿コ﻿ン﻿やテ﻿レ﻿ビな﻿ど﻿、た﻿く﻿さ﻿ん﻿の機﻿器﻿でた﻿く﻿さ﻿ん﻿の映﻿画やTV﻿番﻿組﻿をお﻿楽﻿し﻿みく﻿だ﻿さ﻿い﻿。",
      flipped: undefined,
      image:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-jp.png",
      video:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-jp.m4v",
      key: "WatchOnDevice",
      class: "WatchOnDevice",
    },
  };
  render() {
    console.log(this.state["watchOnTv"]);
    return (
      <div className={classes.MainWrapper}>
        <TopCard />
        <StoryCard content={this.state.watchOnTv} />
        <StoryCard content={this.state.downloadWatch} />
        <StoryCard content={this.state.watchOnDevice} />
      </div>
    );
  }
}

export default MainWrapper;
