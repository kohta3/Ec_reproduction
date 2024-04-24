import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/css/bootstrap.min.css'
import '../styles/css/all.min.css'
import '../styles/css/style.css'
import '../styles/scss/style.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'react-toastify/dist/ReactToastify.css';
import { FarzaaContextProvider } from '../context/FarzaaContext';

export default function App({ Component, pageProps }) {
  return (
    <FarzaaContextProvider>
      <Component {...pageProps} />
    </FarzaaContextProvider>
  );
}

