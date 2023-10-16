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