import { useRef, useEffect, useState, useMemo, useId } from "react";
import "./CurvedLoop.css";

export default function CurvedLoop({
  marqueeText = "OFERTAS EXCLUSIVAS • FRETE GRÁTIS ACIMA DE R$149 • PROMOÇÕES IMPERDÍVEIS • ",
  speed = 1.2,
  direction = "left",
  interactive = true
}) {
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (hasTrailing ? marqueeText.replace(/\s+$/, "") : marqueeText) + "\u00A0";
  }, [marqueeText]);

  const measureRef = useRef(null);
  const textPathRef = useRef(null);

  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);

  const uid = useId();
  const pathId = `curve-${uid}`;

  // linha reta (scroll horizontal)
  const pathD = `M0,60 L1440,60`;

  // controle de arraste
  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef(direction);
  const velRef = useRef(0);

  const totalText = spacing
    ? Array(Math.ceil(1800 / spacing) + 2)
        .fill(text)
        .join("")
    : text;

  useEffect(() => {
    if (measureRef.current) {
      const w = measureRef.current.getComputedTextLength();
      setSpacing(w);
    }
  }, [text]);

  // offset inicial
  useEffect(() => {
    if (!spacing) return;
    const initial = -spacing;
    setOffset(initial);
    if (textPathRef.current) {
      textPathRef.current.setAttribute("startOffset", initial + "px");
    }
  }, [spacing]);

  // animação automática
  useEffect(() => {
    if (!spacing) return;

    let frame = null;
    const loop = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = dirRef.current === "right" ? speed : -speed;
        let newOffset = offset + delta;

        if (newOffset <= -spacing) newOffset += spacing;
        if (newOffset > 0) newOffset -= spacing;

        textPathRef.current.setAttribute("startOffset", newOffset + "px");
        setOffset(newOffset);
      }

      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [spacing, offset, speed]);

  // arrastar manualmente
  const onPointerDown = (e) => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    e.target.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!interactive || !dragRef.current || !textPathRef.current) return;

    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;

    let newOffset = offset + dx;

    if (newOffset <= -spacing) newOffset += spacing;
    if (newOffset > 0) newOffset -= spacing;

    textPathRef.current.setAttribute("startOffset", newOffset + "px");
    setOffset(newOffset);
  };

  const onPointerUp = () => {
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? "right" : "left";
  };

  return (
    <div
      className="curved-loop-jacket"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <svg className="curved-loop-svg" viewBox="0 0 1440 120">
        {/* invisível — usado só para medir */}
        <text ref={measureRef} style={{ visibility: "hidden", opacity: 0 }}>
          {text}
        </text>

        <defs>
          <path id={pathId} d={pathD} fill="none" />
        </defs>

        <text className="loop-text" fontWeight="bold">
          <textPath ref={textPathRef} href={`#${pathId}`} startOffset={offset + "px"}>
            {totalText}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
