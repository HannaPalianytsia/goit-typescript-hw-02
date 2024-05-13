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
import { Image } from "./types";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalUrl, setModalUrl] = useState<string>("");
  const [modalAlt, setModalAlt] = useState<string>("");

  interface GetResults {
    results: Image[];
    total: number;
    total_pages: number;
  }

  useEffect(() => {
    if (!query) return;
    const fetchData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const { results, total, total_pages }: GetResults = await getPhotos(
          query,
          page
        );
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

  const notify = (totalHits: number) =>
    toast("A total of " + totalHits + " images were successfully found", {
      duration: 4000,
      style: {
        margin: "60px",
        background: "#2d3487",
        color: "#ffffff",
      },
    });

  const handleSubmit = (inputValue: string): void => {
    setQuery(inputValue);
    setPage(1);
    setImages([]);
    setIsEmpty(false);
    setIsVisible(false);
    setError(null);
  };

  const handleLoadMore = (): void => {
    setPage((prevPages) => prevPages + 1);
  };

  const openModal = (url: string, alt: string) => {
    setShowModal(true);
    setModalUrl(url);
    setModalAlt(alt);
  };
  const closeModal = (): void => {
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
