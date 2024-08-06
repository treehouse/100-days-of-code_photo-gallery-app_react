import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Modal = ({
  photos,
  setModal,
  currentImageIndex,
  setCurrentImageIndex,
}) => {
  return (
    <div
      onClick={() => {
        setModal(false);
      }}
      className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-80 p-12"
    >
      <img
        className="w-full rounded-md"
        onClick={(e) => e.stopPropagation()}
        src={photos[currentImageIndex].src}
      />
      <div className="flex justify-end items-center gap-2 mt-5">
        <button
          className="grid place-items-center min-w-[35px] min-h-[35px] bg-white rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            currentImageIndex !== 0 && setCurrentImageIndex((prev) => prev - 1);
          }}
        >
          <GoChevronLeft />
        </button>
        <button
          className="grid place-items-center min-w-[35px] min-h-[35px] bg-white rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            currentImageIndex !== photos.length - 1 &&
              setCurrentImageIndex((prev) => prev + 1);
          }}
        >
          <GoChevronRight />
        </button>
      </div>
    </div>
  );
};
export default Modal;
