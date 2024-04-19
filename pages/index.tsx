import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { useDraw } from "@/common/hooks/drawing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D>();


  const [size,setSize] = useState({width:0, heigt:0});
  const [options,setOptions] = useState<CtxOptions>({
    lineColor: "#000",
    lineWidth: 3,
  });

  const { handleEndDrawing, handleDraw, handleStartDrawing, drawing} = useDraw(
    options,
    ctxRef.current
  );


  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, heigt: window.innerHeight })
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize);
    
    } ;
  });


  useEffect(() => {
    const canvas = canvasRef.current;
    if(canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) ctxRef.current = ctx;
    }
  }, [options.lineColor, options.lineWidth]);



  return (
    <div>
      <h1 className="bg-red-500">lol</h1>
    </div>
  );
}
