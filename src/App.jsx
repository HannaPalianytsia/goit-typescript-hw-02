import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getPhotos } from "./apiService/photos";
import SearchBar from "./components/searchBar/SearchBar";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/imageModal/ImageModal";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { results, total, total_pages } = await getPhotos(query, page);
        if (!results.length) {
          setIsEmpty(true);
          return;
        }
        setIsEmpty(false);
        setImages((prevImages) => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
        notify(total);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, query]);

  const notify = (totalHits) =>
    toast("A total of " + totalHits + " images were successfully found", {
      duration: 4000,
      style: {
        margin: "60px",
        background: "#2d3487",
        color: "#ffffff",
      },
    });

  const handleSubmit = (inputValue) => {
    setQuery(inputValue);
    setPage(1);
    setImages([]);
    setIsEmpty(false);
    setIsVisible(false);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage((prevPages) => prevPages + 1);
  };

  const openModal = (url, alt) => {
    setShowModal(true);
    setModalUrl(url);
    setModalAlt(alt);
  };
  const closeModal = () => {
    setShowModal(false);
    setModalUrl("");
    setModalAlt("");
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage />}
      {isEmpty && !isLoading && (
        <p className="empty">
          Sorry, there are no images matching your search query. Please try
          again!
        </p>
      )}
      {!isEmpty && <ImageGallery images={images} openModal={openModal} />}
      {isLoading && <Loader />}
      {isVisible && <LoadMoreBtn onLoad={handleLoadMore} />}
      <ImageModal
        showModal={showModal}
        modalUrl={modalUrl}
        modalAlt={modalAlt}
        closeModal={closeModal}
      />
    </>
  );
};

export default App;
