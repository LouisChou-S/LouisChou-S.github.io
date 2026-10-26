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
