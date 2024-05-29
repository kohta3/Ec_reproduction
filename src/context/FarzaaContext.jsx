import { allProductList, blogList } from '../data/Data';
import { createContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

const defaultContextValue = {
  isHeaderFixed: false,
  showWishlist: false,
  handleWishlistClose: () => { },
  handleWishlistShow: () => { }
};

const FarzaaContext = createContext(defaultContextValue);


const FarzaaContextProvider = ({ children }) => {
  // Wishlist Modal
  const [showWishlist, setShowWishlist] = useState(false);

  const handleWishlistClose = () => setShowWishlist(false);
  const handleWishlistShow = () => setShowWishlist(true);

  // Header Category Button
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)

  const handleCategoryBtn = () => {
    setIsCategoryOpen((prevState) => !prevState)
  }
  const categoryBtnRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryBtnRef.current && !categoryBtnRef.current.contains(event.target)) {
        // Click occurred outside the button, so close the button
        setIsCategoryOpen(false);
      }
    };

    // Attach the click event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Countdown Timer
  const countdownDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).getTime();
  const [isTimerState, setIsTimerState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setIsTimerState({ days: days, hours: hours, minutes, seconds });
    }
  };

  // Product Quick View Modal
  const [isProductViewOpen, setIsProductViewOpen] = useState(false)

  const handleProductViewClose = () => {
    setIsProductViewOpen(false)
  }
  const handleProductViewOpen = () => {
    setIsProductViewOpen(true)
  }

  // Sticky Header Section on Scroll
  const [isHeaderFixed, setIsHeaderFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener when the component is unmounted
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // List View Mode
  const [isListView, setIsListView] = useState(false)

  const setListView = () => {
    setIsListView(true)
  }
  const setGridView = () => {
    setIsListView(false)
  }
  // Price Filter
  const [startPrice, setStartPrice] = useState(0);
  const [endPrice, setEndPrice] = useState(5000);
  const [price, setPrice] = useState([startPrice, endPrice]);

  const handlePriceChange = (event, newPrice) => {
    setPrice(newPrice);
  };

  // All Product Filter
  const [filteredProducts, setFilteredProducts] = useState(allProductList);
  const [allProducts, setAllProducts] = useState(allProductList);
  const [sortBy, setSortBy] = useState('');
  // Handle sort
  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortBy(value);
    sortProducts(value);
  };
  // sort product
  const sortProducts = (criteria) => {
    let sortedProducts = [...filteredProducts];

    switch (criteria) {
      case 'name-az':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-za':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(sortedProducts);
  };
  // category handle method
  const handleCategoryFilter = (category) => {
    if (category === null) {
      setFilteredProducts(allProductList); // Show all products
    } else {
      const filtered = allProductList.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
    setCurrentPage(1);
  };

  // Price Filter
  const handlePriceFilter = () => {
    const filtered = allProductList.filter(product => product.price >= price[0] && product.price <= price[1]);
    setFilteredProducts(filtered);
  };

  // Search Filter
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedProducts, setSearchedProducts] = useState([]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    performSearch(value);
  };

  const performSearch = (term) => {
    const filtered = allProductList.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchedProducts(filtered);
  };

  useEffect(() => {
    if (searchTerm) {
      setFilteredProducts(searchedProducts);
      setCurrentPage(1); // Reset pagination when search changes
    } else {
      setFilteredProducts(allProductList);
    }
  }, [searchedProducts, searchTerm]);
  // Tag Filter
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelection = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Filter products based on selected tags
  const filteredByTags = selectedTags.length === 0
    ? allProductList
    : allProductList.filter(product => selectedTags.includes(product.category));

  useEffect(() => {
    if (selectedTags.length > 0) {
      const filteredByTags = allProductList.filter(product => selectedTags.includes(product.category));
      setFilteredProducts(filteredByTags);
      setCurrentPage(1); // Reset pagination when tags change
    } else {
      setFilteredProducts(allProductList);
    }
  }, [selectedTags]);

  // Pagination
  const productsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    scrollToTop(); // Scroll to the top after changing the page
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can also use "auto" for instant scrolling
    });
  };

  useEffect(() => {
    // Calculate the index range for pagination
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = currentPage * productsPerPage;

    // Slice the filtered products based on the calculated index range
    const paginatedSlice = filteredProducts.slice(startIndex, endIndex);

    // Set the paginated products
    setPaginatedProducts(paginatedSlice);

    // Scroll to the top whenever the page changes
  }, [currentPage, filteredProducts]);

  // Use this state to store the paginated products
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  // Wishlist Item Table 
  const [wishlist, setWishlist] = useState([]);
  const wishlistItemAmount = wishlist.reduce((total, item) => total + item.quantity, 0);


  const handleRemoveItemWishlist = (itemId) => {
    const updatedItems = wishlist.filter(item => item.id !== itemId);
    setWishlist(updatedItems);
    toast.error("Item deleted from wishlist!")
  };

  // Add to Wishlist

  const addToWishlist = (itemId) => {
    const itemToAdd = filteredProducts.find(item => item.id === itemId);

    if (itemToAdd) {
      if (!wishlist.some(item => item.id === itemId)) {
        const newItem = {
          ...itemToAdd,
          quantity: 1,
          total: itemToAdd.price,
          isInWishlist: true
        };

        setWishlist(prevWishlistItems => [...prevWishlistItems, newItem]);
        toast.success("Item added to wishlist!");
      } else {
        toast.warning("Item already in wishlist!");
      }
    } else {
      toast.error('Item not found in filteredProducts.');
    }
  };

  useEffect(() => {
    setFilteredProducts(prevFilteredProducts => {
      const updatedProductList = prevFilteredProducts.map(item => {
        if (wishlist.some(wishlistItem => wishlistItem.id === item.id)) {
          return {
            ...item,
            isInWishlist: true
          };
        } else {
          return {
            ...item,
            isInWishlist: false
          };
        }
      });
      return updatedProductList;
    });
  }, [wishlist]);

  // Blog List Category Filter
  const [filteredBlogList, setFilteredBlogList] = useState(blogList);
  const [activeBlogCategory, setActiveBlogCategory] = useState(null);
  const [paginatedBlogPost, setPaginatedBlogPost] = useState([]);
  // pagination
  const itemsPerBlogPage = 3; // Number of items per page

  const [currentBlogPage, setCurrentBlogPage] = useState(1);

  const handleBlogPageChange = (newPage) => {
    setCurrentBlogPage(newPage);
    scrollToTop();
  };
  useEffect(() => {
    const startIndex = (currentBlogPage - 1) * itemsPerBlogPage;
    const endIndex = startIndex + itemsPerBlogPage;

    const paginatedBlogSlice = filteredBlogList.slice(startIndex, endIndex);

    setPaginatedBlogPost(paginatedBlogSlice);
  }, [currentBlogPage, filteredBlogList]);



  const totalBlogs = filteredBlogList.length
  const totalBlogPage = Math.ceil(totalBlogs / itemsPerBlogPage);

  // Search Filter
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filteredBlogs = blogList.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBlogList(filteredBlogs);
    setCurrentBlogPage(1); // Reset to the first page when search is changed
    setSelectedBlogTags([]); // Reset selected tags
    setActiveBlogCategory(null); // Reset active category
  };

  // Blog Category Filter

  const handleBlogCategoryFilter = (category) => {
    if (category === null) {
      setFilteredBlogList(blogList);
    } else {
      const filteredBlogs = blogList.filter(item => item.category === category);
      setFilteredBlogList(filteredBlogs);
    }
    setActiveBlogCategory(category);
    setCurrentBlogPage(1); // Reset to the first page when category is changed
    setSelectedBlogTags([]); // Reset selected tags
  };
  // Blog Tag Filter
  const [selectedBlogTags, setSelectedBlogTags] = useState([]);

  const handleBlogTagSelection = (tag) => {
    if (selectedBlogTags.includes(tag)) {
      setSelectedBlogTags(selectedBlogTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedBlogTags([...selectedBlogTags, tag]);
    }
  };
  // Filter products based on selected tags
  useEffect(() => {
    // Apply all active filters together
    let filteredBlogs = blogList;

    // Apply category filter
    if (activeBlogCategory !== null) {
      filteredBlogs = filteredBlogs.filter(blog => blog.category === activeBlogCategory);
    }

    // Apply tag filter
    if (selectedBlogTags.length > 0) {
      filteredBlogs = filteredBlogs.filter(blog =>
        selectedBlogTags.includes(blog.category)
      );
    }

    // Apply search filter
    if (searchQuery.trim() !== '') {
      filteredBlogs = filteredBlogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Update filtered blog list and reset pagination
    setFilteredBlogList(filteredBlogs);
    setCurrentBlogPage(1);

  }, [searchQuery, selectedBlogTags, activeBlogCategory]);

  // Right Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setIsSidebarOpen(true)
  }
  const handleSidebarClose = () => {
    setIsSidebarOpen(false)
  }
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    home: false,
    shop: false,
    pages: false,
    blog: false,
  })
  const handleDropdownToggle = (dropdownName) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  // Responsive Slider
  const [slides, setSlides] = useState(0);

  const setSlidesPerview = () => {
    setSlides(
      window.innerWidth <= 320
        ? 1
        : window.innerWidth <= 767
          ? 2
          : window.innerWidth <= 992
            ? 3
            : window.innerWidth > 992
              ? 4
              : 0
    );
  };

  useEffect(() => {
    //Initially set the amount of slides on page load
    setSlidesPerview();
    // Add the event listener on component mount
    window.addEventListener("resize", setSlidesPerview);

    // Remove the listener when component unmounts
    return () => {
      window.removeEventListener("resize", setSlidesPerview);
    };
  }, []);

  // Brand Slider
  const [slidesBrand, setSlidesBrand] = useState(0);

  const setSlidesBrandPerview = () => {
    setSlidesBrand(
      window.innerWidth <= 767
        ? 3
        : window.innerWidth <= 992
          ? 4
          : window.innerWidth > 992
            ? 5
            : 0
    );
  };

  useEffect(() => {
    //Initially set the amount of slides on page load
    setSlidesBrandPerview();
    // Add the event listener on component mount
    window.addEventListener("resize", setSlidesBrandPerview);

    // Remove the listener when component unmounts
    return () => {
      window.removeEventListener("resize", setSlidesBrandPerview);
    };
  }, []);

  return (
    <FarzaaContext.Provider value={{
      showWishlist,
      handleWishlistClose,
      handleWishlistShow,
      isCategoryOpen,
      handleCategoryBtn,
      categoryBtnRef,
      isTimerState,
      isProductViewOpen,
      handleProductViewClose,
      handleProductViewOpen,
      isHeaderFixed,
      isListView,
      setListView,
      setGridView,
      price,
      handlePriceChange,
      filteredProducts,
      allProducts,
      sortBy,
      handleSortChange,
      sortProducts,
      handleCategoryFilter,
      handlePriceFilter,
      currentPage,
      handlePageChange,
      totalPages,
      paginatedProducts,
      productsPerPage,
      totalProducts,
      wishlist,
      handleRemoveItemWishlist,
      addToWishlist,
      filteredBlogList,
      handleBlogCategoryFilter,
      activeBlogCategory,
      currentBlogPage,
      handleBlogPageChange,
      itemsPerBlogPage,
      totalBlogPage,
      paginatedBlogPost,
      searchTerm,
      handleSearchChange,
      searchQuery,
      handleSearch,
      isSidebarOpen,
      handleSidebarOpen,
      handleSidebarClose,
      isDropdownOpen,
      handleDropdownToggle,
      slides,
      selectedTags,
      handleTagSelection,
      filteredByTags,
      selectedBlogTags,
      handleBlogTagSelection,
      wishlistItemAmount,
      slidesBrand,
    }}>
      {children}
    </FarzaaContext.Provider>
  );
}

export { FarzaaContext, FarzaaContextProvider }