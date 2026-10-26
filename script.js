// 1. 複製到剪貼簿功能
function copyToClipboard(text, type) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById("toast");
        if (toast) {
            toast.innerText = type + " 已成功複製！";
            toast.className = "show";
            setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
        }
    });
}

// 2. 右下角按鈕：平滑滾動回到網頁最上方
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 3. 自動計算網格排版 (單數排3個，雙數排2個) 與 橫幅輪播
document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById('solutionsGrid');
    if (gridContainer) {
        const gridCards = gridContainer.querySelectorAll('.grid-card');
        if (gridCards.length % 2 === 0) {
            gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
        } else {
            gridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
        }
    }

    const carouselItems = document.querySelectorAll('.carousel-item');
    if (carouselItems.length > 0) {
        let currentCarousel = 0;
        setInterval(() => {
            carouselItems[currentCarousel].classList.remove('active');
            currentCarousel = (currentCarousel + 1) % carouselItems.length;
            carouselItems[currentCarousel].classList.add('active');
        }, 3000);
    }
});
