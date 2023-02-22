import React, { useState, useRef, useEffect } from "react";
import { SketchPicker } from "react-color";
import "../styles/Canvas.css";
import ContentEditable from "react-contenteditable";
import { motion } from "framer-motion";

function Canvas() {
  const [color, setColor] = useState("#000000");
  const [canvasWidth, setCanvasWidth] = useState(400);
  const [canvasHeight, setCanvasHeight] = useState(400);
  const [isHovered, setIsHovered] = useState(false);

  const getref = useRef();

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
    console.log(`Selected color: ${newColor.hex}`);
  };

  const getspanvalue = (event) => {
    if (event.target.value.length <= 7) {
      setColor(event.target.value);
    }
  };

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: color,
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => {
    setCursorVariant("text");
    setIsHovered(true);
  };

  const textLeave = () => {
    setCursorVariant("default");
    setIsHovered(false);
  };

  const handleSizeChange = (event) => {
    const size = event.target.value;
    if (size === "500x400") {
      setCanvasWidth(500);
      setCanvasHeight(400);
    } else if (size === "600x400") {
      setCanvasWidth(600);
      setCanvasHeight(400);
    } else if (size === "400x400") {
      setCanvasWidth(400);
      setCanvasHeight(400);
    } else if (size === "600x500") {
      setCanvasWidth(600);
      setCanvasHeight(500);
    } else if (size === "100x100") {
      setCanvasWidth(100);
      setCanvasHeight(100);
    }
  };

  return (
    <div className="maindiv">
      <div className="colorplate">
        <SketchPicker color={color} onChange={handleColorChange} />
        <select onChange={handleSizeChange} className="selectorsize">
          <option value="400x400">400x400</option>
          <option value="500x400">500x400</option>
          <option value="600x400">600x400</option>
          <option value="100x100">100x100</option>
          <option value="600x500">600x500</option>
        </select>
      </div>

      <div
        style={{
          backgroundColor: color,
          width: canvasWidth,
          height: canvasHeight,
        }}
        className="canvasdiv "
      >
        <ContentEditable
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className={
            isHovered ? "zoomed colorspan App title" : "colorspan App title"
          }
          innerRef={getref}
          html={color}
          disabled={false}
          onChange={getspanvalue}
          tagName="article"
        />
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />
      </div>
    </div>
  );
}

export default Canvas;
