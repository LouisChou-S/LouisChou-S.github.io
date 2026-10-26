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

// 3. 固定橫幅輪播邏輯 (支援 5 秒自動切換與左右手動切換)
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
    resetTimer(); // 手動點擊時重置 5 秒計時器
}

function startTimer() {
    slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 10000); // 每 5 秒自動切換
}

function resetTimer() {
    clearInterval(slideInterval);
    startTimer();
}

// 4. 初始化
document.addEventListener("DOMContentLoaded", function() {
    // 手機版漢堡選單點擊展開/收合
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // 啟動 Banner 自動輪播
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        startTimer();
        
        // 滑鼠移入 Banner 時暫停自動播放，移出後恢復
        const banner = document.getElementById('carouselBanner');
        if (banner) {
            banner.addEventListener('mouseenter', () => clearInterval(slideInterval));
            banner.addEventListener('mouseleave', () => startTimer());
        }
    }
});
