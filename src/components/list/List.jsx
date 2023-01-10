import "./list.scss";
import { useRef, useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import ListItem from "../listItem/ListItem";

function List() {
  const [isMoved, setIsMoved] = useState(false);
  const [sliderNumber, setSliderNumber] = useState(0);
  const [indexItem, setIndexItem] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 58;

    if (direction === "left" && sliderNumber > 0 && distance % 230 === 0) {
      if (sliderNumber - 1 === 0) setIsMoved(false);
      setSliderNumber(sliderNumber - 1);
      setIndexItem(indexItem - 1);
      listRef.current.style.transform =
        "translateX(" + (230 + distance) + "px)";
    } else if (
      direction === "right" &&
      sliderNumber < 5 &&
      distance % 230 === 0
    ) {
      setSliderNumber(sliderNumber + 1);
      setIndexItem(indexItem + 1);
      listRef.current.style.transform = `translateX(${distance - 230}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue towatch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => {
            handleClick("left");
          }}
          style={{ display: !isMoved && "none" }}
        />
        {indexItem !== "" && (
          <div className="container" ref={listRef}>
            <ListItem index={indexItem + 0} />
            <ListItem index={indexItem + 1} />
            <ListItem index={indexItem + 2} />
            <ListItem index={indexItem + 3} />
            <ListItem index={indexItem + 4} />
            <ListItem index={indexItem + 5} />
            <ListItem index={indexItem + 6} />
            <ListItem index={indexItem + 7} />
            <ListItem index={indexItem + 8} />
            <ListItem index={indexItem + 9} />
          </div>
        )}
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => {
            handleClick("right");
          }}
        />
      </div>
    </div>
  );
}

export default List;
