import React, { Component } from "react";

import classes from "./StoryCard.css";
import StoryCardContainer from "../../components/StoryCardContainer/StoryCardContainer";

class StoryCard extends Component {
  state = {
    content: {
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
  };
  render() {
    return (
      <div className={classes.StoryCard}>
        <StoryCardContainer content={this.state.content} />
      </div>
    );
  }
}

export default StoryCard;
