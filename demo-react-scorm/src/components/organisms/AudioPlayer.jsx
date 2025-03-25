import React, { useRef, useState, useEffect, useCallback } from "react";

/** 
 * Íconos en línea (inline SVG).
 */
const IconPlay = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 
         1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconPause = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 
         4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVolume = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6  fill-(--color-blue-700)"
  >
    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 
        9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 
        4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 
        3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
    <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 
        4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
  </svg>
);

const IconRewind = () => (
  <svg
    // fill="#000000"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-79.34 -79.34 687.60 687.60"
    transform="rotate(90)"
    // stroke="#000000"
    strokeWidth="15.86757"
    className="w-6 h-6 stroke-(--color-blue-700) fill-(--color-blue-700)"
  >
    <g>
      <g>
        <path d="M70.846,324.059c3.21,3.926,8.409,3.926,11.619,0l69.162-84.621
          c3.21-3.926,1.698-7.108-3.372-7.108h-36.723c-5.07,0-8.516-4.061-7.427-9.012
          c18.883-85.995,95.625-150.564,187.207-150.564c105.708,0,191.706,85.999,191.706,191.706
          c0,105.709-85.998,191.707-191.706,191.707c-12.674,0-22.95,10.275-22.95,22.949
          s10.276,22.949,22.95,22.949c131.018,0,237.606-106.588,237.606-237.605
          c0-131.017-106.589-237.605-237.606-237.605c-116.961,0-214.395,84.967-233.961,196.409
          c-0.878,4.994-5.52,9.067-10.59,9.067H5.057c-5.071,0-6.579,3.182-3.373,7.108L70.846,324.059z">
        </path>
      </g>
      <text
        x="-50%"
        y="50%"
        fontSize="200"
        fill="#000000"
        transform="rotate(-90,0,-20)matrix(1, 0, 0, 1, 0, 0)"
      >
        5
      </text>
    </g>
  </svg>
);

const IconForward = () => (
  <svg
    // fill="blue"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-79.34 -79.34 687.60 687.60"
    transform="rotate(90)matrix(1, 0, 0, -1, 0, 0)"
    // stroke="blue"
    strokeWidth="15.86757"
    className="w-6 h-6 stroke-(--color-blue-700) fill-(--color-blue-700)"
  >
    <g>
      <g>
        <path d="M70.846,324.059c3.21,3.926,8.409,3.926,11.619,0l69.162-84.621
          c3.21-3.926,1.698-7.108-3.372-7.108h-36.723c-5.07,0-8.516-4.061-7.427-9.012
          c18.883-85.995,95.625-150.564,187.207-150.564c105.708,0,191.706,85.999,191.706,191.706
          c0,105.709-85.998,191.707-191.706,191.707c-12.674,0-22.95,10.275-22.95,22.949
          s10.276,22.949,22.95,22.949c131.018,0,237.606-106.588,237.606-237.605
          c0-131.017-106.589-237.605-237.606-237.605c-116.961,0-214.395,84.967-233.961,196.409
          c-0.878,4.994-5.52,9.067-10.59,9.067H5.057c-5.071,0-6.579,3.182-3.373,7.108L70.846,324.059z">
        </path>
      </g>
      <text
        x="-50%"
        y="50%"
        fontSize="200"
        transform="rotate(-90,290,270)matrix(-1, 0, 0, 1, 0, 0)"
      >
        5
      </text>
    </g>
  </svg>
);

/** Convierte segundos a "mm:ss". */
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
}

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const progressRef = useRef(null); // Para la barra clickable

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // Porcentaje (0-100)
  const [isDragging, setIsDragging] = useState(false);

  // Actualiza la posición del audio y el progreso a partir del evento
  const updateTimeFromEvent = useCallback(
    (e) => {
      if (!progressRef.current || !audioRef.current) return;
      const rect = progressRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const newTime = (offsetX / rect.width) * duration;
      audioRef.current.currentTime = newTime;
    },
    [duration]
  );

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const handleLoadedMetadata = () => {
      setDuration(audioElement.duration);
    };

    const handleTimeUpdate = () => {
      const { currentTime, duration } = audioElement;
      setCurrentTime(currentTime);
      setProgress((currentTime / duration) * 100 || 0);
    };

    audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  /** Play / Pause */
  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  /** Retrocede 5s */
  const handleRewind = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, audio.currentTime - 5);
  };

  /** Avanza 5s */
  const handleForward = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(duration, audio.currentTime + 5);
  };

  /** Manejadores para arrastrar el handle */
  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateTimeFromEvent(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateTimeFromEvent(e);
    }
  };

  const handleMouseUp = (e) => {
    if (isDragging) {
      updateTimeFromEvent(e);
      setIsDragging(false);
    }
  };

  // Agrega y quita event listeners globales cuando se está arrastrando
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, updateTimeFromEvent]);

  /** Manejador para click en la barra (sin arrastrar) */
  const handleSeekClick = (e) => {
    updateTimeFromEvent(e);
  };

  return (
    <div
      className="w-full max-w-5xl px-6 pt-2 pb-4 mt-2 mb-2 justify-self-center bg-white rounded-lg shadow-md h-fit sticky top-2 z-50 overflow-y-auto no-scrollbar"
      // style={{ width: "320px" }}
    >
      {/* Elemento de audio (oculto) */}
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Encabezado con tiempos y botones */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-between w-full">
          {/* Tiempo actual / duración */}
          <div className="text-sm text-(--color-blue-700) font-medium">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>

          {/* Botón retroceder 5s */}
          <button onClick={handleRewind} className="text-(--color-blue-700) rounded-full p-2 hover:bg-(--color-neutral-500) transition-colors">
            <IconRewind />
          </button>

          {/* Botón Play/Pause */}
          <button
            onClick={handlePlayPause}
            className="text-(--color-blue-600) rounded-full p-2 hover:bg-(--color-neutral-500) transition-colors"
          >
            {isPlaying ? <IconPause /> : <IconPlay />}
          </button>

          {/* Botón avanzar 5s */}
          <button onClick={handleForward} className="text-(--color-blue-600) rounded-full p-2 hover:bg-(--color-neutral-500) transition-colors" >
            <IconForward />
          </button>

          {/* Ícono de volumen (decorativo en este ejemplo) */}
          <button className="text-(--color-blue-600) rounded-full p-2 hover:bg-(--color-neutral-500) transition-colors">
            <IconVolume />
          </button>
        </div>
      </div>

      {/* Barra de progreso (clickable y draggable) */}
      <div className="mt-3">
        <div
          ref={progressRef}
          className="relative w-full h-2 bg-(--color-neutral-600) rounded-full cursor-pointer"
          onClick={handleSeekClick}
        >
          {/* Barra de color que representa el progreso */}
          <div
            className="absolute top-0 left-0 h-2 bg-(--color-pink-400) rounded-full"
            style={{ width: `${progress}%` }}
          />
          {/* Handle draggable */}
          <div
            onMouseDown={handleMouseDown}
            className="absolute top-1/2 w-4 h-4 bg-(--color-blue-600) rounded-full transform -translate-y-1/2 cursor-pointer"
            style={{ left: `calc(${progress}% - 8px)` }}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
