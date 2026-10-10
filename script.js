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

// 2. 首頁專屬：自動計算網格排版 (單數排3個，雙數排2個) 與 NAV 輪播
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

    const navItems = document.querySelectorAll('.nav-item');
    if (navItems.length > 0) {
        let currentNav = 0;
        setInterval(() => {
            navItems[currentNav].classList.remove('active');
            currentNav = (currentNav + 1) % navItems.length;
            navItems[currentNav].classList.add('active');
        }, 3000);
    }
});
