// Đặt trong file script.js hoặc thẻ <script> ở cuối body
document.addEventListener('DOMContentLoaded', function() {
    // Lấy phần tử nav bằng ID
    const navElement = document.getElementById('main-nav');

    // Kiểm tra xem navElement có tồn tại không trước khi thêm listener
    if (navElement) {
        // Danh sách các lớp Tailwind cần thêm/xóa cho border bottom
        // Bao gồm cả màu cho light mode và dark mode
        const borderClasses = ['border-b', 'border-gray-200', 'dark:border-gray-700'];
        // (Bạn có thể thay đổi màu border ở đây, ví dụ: 'border-gray-300', 'dark:border-gray-600')

        // Hàm xử lý sự kiện cuộn
        function handleScroll() {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;

            // Nếu đã cuộn xuống khỏi vị trí đầu trang (scrollY > 0)
            if (scrollPosition > 0) {
                // Thêm các lớp border vào nav
                navElement.classList.add(...borderClasses);
            } else {
                // Nếu đang ở đầu trang (scrollY = 0), xóa các lớp border
                navElement.classList.remove(...borderClasses);
            }
        }

        // Gọi hàm một lần khi trang tải để đặt trạng thái đúng ban đầu
        handleScroll();

        // Thêm listener cho sự kiện scroll
        window.addEventListener('scroll', handleScroll);
    } else {
        console.error("Không tìm thấy phần tử với ID 'main-nav'");
    }
});

