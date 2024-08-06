import { useState } from "react";
import Modal from "./Modal";

import photo1 from "./assets/photo-1.jpg";
import photo2 from "./assets/photo-2.jpg";
import photo3 from "./assets/photo-3.jpg";
import photo4 from "./assets/photo-4.jpg";
import photo5 from "./assets/photo-5.jpg";
import photo6 from "./assets/photo-6.jpg";
import photo7 from "./assets/photo-7.jpg";
import photo8 from "./assets/photo-8.jpg";
import photo9 from "./assets/photo-9.jpg";

const photos = [
  {
    id: 0,
    src: photo1,
  },
  {
    id: 1,
    src: photo2,
  },
  {
    id: 2,
    src: photo3,
  },
  {
    id: 3,
    src: photo4,
  },
  {
    id: 4,
    src: photo5,
  },
  {
    id: 5,
    src: photo6,
  },
  {
    id: 6,
    src: photo7,
  },
  {
    id: 7,
    src: photo8,
  },
  {
    id: 8,
    src: photo9,
  },
];

const App = () => {
  const [modal, setModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  return (
    <div
      className={`${
        darkMode && "dark"
      } h-screen w-full bg-zinc-300 dark:bg-zinc-700 duration-500`}
    >
      {modal && (
        <Modal
          photos={photos}
          setModal={setModal}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
        />
      )}
      <div className="w-full max-w-[900px] m-auto p-10 h-screen">
        <div className="p-10 text-zinc-900 flex justify-between items-center">
          <h1 className="text-5xl font-extrabold text-zinc-900 dark:text-zinc-300">
            Photo Gallery
          </h1>
          <label>
            Dark Mode
            <input
              className="ml-5"
              type="checkbox"
              onChange={() => {
                setDarkMode(!darkMode);
              }}
            />
          </label>
        </div>
        <div className="flex flex-wrap justify-evenly items-center gap-10 ">
          {photos.map((photo) => {
            return (
              <div
                className="cursor-pointer w-1/4 bg-white dark:bg-zinc-800 rounded-md p-2 pb-10"
                key={photo.id}
              >
                <img
                  className="dark:border-[1px] dark:border-zinc-500 rounded-sm"
                  onClick={() => {
                    setModal(true);
                    setCurrentImageIndex(photo.id);
                  }}
                  src={photo.src}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
