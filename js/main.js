
  // Progress Bar
  window.onscroll = function (event) {
    let progressBars = document.getElementsByClassName('progressBar');
    Array.from(progressBars).forEach(bar => {
      let windowTop = window.scrollY;
      let windowBot = windowTop + window.innerHeight;
      let eleTop = bar.offsetTop;
      let eleBot = eleTop + bar.clientHeight;
      if ((eleBot <= windowBot) && (eleTop >= windowTop)) {
        bar.classList.add('active');
      }
    })
  }
  
document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các nút filter
    var filterButtons = document.querySelectorAll(".filter-nav .nav-link");

    // Lặp qua từng nút và thêm sự kiện click
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();

        // Xóa class "active" từ tất cả các nút filter
        filterButtons.forEach(function (button) {
          button.classList.remove("active");
        });

        // Thêm class "active" cho nút được click
        button.classList.add("active");

        // Ẩn tất cả các ảnh
        var showcasePhotos = document.querySelectorAll(".showcase__photo");
        showcasePhotos.forEach(function (photo) {
          photo.style.display = "none";
        });

        // Lấy giá trị data-filter từ nút được click
        var filterValue = button.getAttribute("data-filter");

        // Hiển thị các ảnh có data-filter tương ứng
        var filteredPhotos = document.querySelectorAll(filterValue);
        filteredPhotos.forEach(function (photo) {
          photo.style.display = "block";
        });
      });
    });
  });


  // CountUp 
  $('.counter').countUp({
    'time': 2000,
    'delay': 10
  });

  // owl carousel 
  $(".feedback___carousel").owlCarousel({
    loop: Infinity,
    margin: 0,
    nav: false,
    autoplay: true,
    // autoplayTimeout: 3000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      784: {
        items: 3
      },
      1215: {
        items: 1
      }
    }
  });

  
  $(".partners___carousel").owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    autoplay: true,
    // autoplayTimeout: 3000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      784: {
        items: 3
      },
      1215: {
        items: 6
      }
    }
  });


  // Pop Up 

  // let iso = new Isotope(".showcase__content", {
  //   itemSelector: ".showcase__item"
  //   // layoutMode: "fitRows"
  // });
  // let filtersElem = document.querySelector(".filter-nav");
  // filtersElem.addEventListener("click", function (event) {
  
  //   if (!matchesSelector(event.target, "a")) {
  //     return;
  //   }
  //   let filterValue = event.target.getAttribute("data-filter");
  //   // use matching filter function
  //   iso.arrange({ filter: filterValue });
  // });
  
  // $(".massiveShowcase .nav-link").on("click", function () {
  //   $(".massiveShowcase").find(".active").removeClass("active");
  //   $(this).addClass("active");
  // });
  
  // MAGNIFIC POPUP
  $(".popup-link").magnificPopup({
    type: "image"
  });
  
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
  