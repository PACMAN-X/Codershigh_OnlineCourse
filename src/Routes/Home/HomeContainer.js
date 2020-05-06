import React from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const max_images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png"]
  const reviews = [ {"3개월만에 앱출시": ""}, {"문과생들의 앱 출시!": ""}, {"삼성전자 취업!": ""}, {"삼성전자 취업!": ""}]

  return <HomePresenter max_images= {max_images} reviews={reviews}></HomePresenter>
}

export default HomeContainer