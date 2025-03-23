import React, { useRef, useState, useEffect } from "react";

/** 
 * Íconos en línea (inline SVG).
 * Puedes ajustar clases, colores, tamaños, etc. según necesites.
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
    className="w-6 h-6"
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
    fill="#000000"
    viewBox="0 0 489.645 489.645"
    className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <g>
        <path d="M460.656,132.911c-58.7-122.1-212.2-166.5-331.8-104.1c-9.4,5.2-13.5,16.6-8.3,27
          c5.2,9.4,16.6,13.5,27,8.3c99.9-52,227.4-14.9,276.7,86.3c65.4,134.3-19,236.7-87.4,274.6
          c-93.1,51.7-211.2,17.4-267.6-70.7l69.3,14.5c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-122.8-25
          c-20.6-2-25,16.6-23.9,22.9l15.6,123.8c1,10.4,9.4,17.7,19.8,17.7c12.8,0,20.8-12.5,19.8-23.9l-6-50.5
          c57.4,70.8,170.3,131.2,307.4,68.2C414.856,432.511,548.256,314.811,460.656,132.911z" />
      </g>
      <text
        x="50%"
        y="55%"
        fontSize="250"
        fontWeight="bold"
        textAnchor="middle"
        fill="#000000"
        dy=".3em"
      >
        5
      </text>
    </g>
  </svg>
);

const IconForward = () => (
  <svg
    fill="#000000"
    viewBox="0 0 489.645 489.645"
    className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    transform="rotate(180) matrix(1,0,0,1,0,0)"
  >
    <g>
      <g>
        <path d="M460.656,132.911c-58.7-122.1-212.2-166.5-331.8-104.1c-9.4,5.2-13.5,16.6-8.3,27
          c5.2,9.4,16.6,13.5,27,8.3c99.9-52,227.4-14.9,276.7,86.3c65.4,134.3-19,236.7-87.4,274.6
          c-93.1,51.7-211.2,17.4-267.6-70.7l69.3,14.5c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-122.8-25
          c-20.6-2-25,16.6-23.9,22.9l15.6,123.8c1,10.4,9.4,17.7,19.8,17.7c12.8,0,20.8-12.5,19.8-23.9l-6-50.5
          c57.4,70.8,170.3,131.2,307.4,68.2C414.856,432.511,548.256,314.811,460.656,132.911z" />
      </g>
      <text
        x="50%"
        y="55%"
        fontSize="200"
        fontWeight="bold"
        textAnchor="middle"
        fill="#000000"
        dy=".3em"
        transform="rotate(180, 244.8, 244.8)"
      >
        5
      </text>
    </g>
  </svg>
);

/** Formatea un número de segundos en "mm:ss". */
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
}

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const handleLoadedMetadata = () => {
      setDuration(audioElement.duration);
    };
    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
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
    const audioElement = audioRef.current;
    if (!audioElement) return;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  /** Retrocede 5s */
  const handleRewind = () => {
    const audioElement = audioRef.current;
    audioElement.currentTime = Math.max(0, audioElement.currentTime - 5);
  };

  /** Avanza 5s */
  const handleForward = () => {
    const audioElement = audioRef.current;
    audioElement.currentTime = Math.min(duration, audioElement.currentTime + 5);
  };

  /** Cambiar la posición desde la barra */
  const handleSeek = (e) => {
    const audioElement = audioRef.current;
    audioElement.currentTime = e.target.value;
  };

  return (
    <div
      className={`
        fixed right-0 top-16 z-99 m-8 max-h-[calc(100vh-64px)]
         flex flex-col items-center justify-between
        bg-white border-t border-gray-200
        px-4 py-2
      `}
      style={{
        boxShadow: "0 -2px 6px rgba(0,0,0,0.05)" // Sombra opcional
      }}
    >
      {/* Elemento de audio (oculto) */}
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Tiempos y botones */}
      <div className="flex items-center space-x-4 mb-2 md:mb-0">
        {/* Tiempo actual / duración */}
        <div className="text-sm font-medium text-gray-700">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>

        {/* Botón retroceder 5s */}
        <button
          onClick={handleRewind}
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          <IconRewind />
        </button>

        {/* Botón Play/Pause */}
        <button
          onClick={handlePlayPause}
          className="bg-indigo-500 text-white rounded-full p-2 hover:bg-indigo-600 transition-colors"
        >
          {isPlaying ? <IconPause /> : <IconPlay />}
        </button>

        {/* Botón avanzar 5s */}
        <button
          onClick={handleForward}
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          <IconForward />
        </button>
      </div>

      {/* Barra de progreso */}
      <div className="flex-1 mx-4 w-full md:w-auto">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          step="0.01"
          className="w-full h-2 accent-pink-500 rounded-lg cursor-pointer"
        />
      </div>

      {/* Ícono de volumen (decorativo en este ejemplo) */}
      <button className="text-gray-600 hover:text-gray-800 transition-colors">
        <IconVolume />
      </button>
    </div>
  );
};

export default AudioPlayer;
