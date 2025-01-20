// 當文檔加載完成時執行
document.addEventListener('DOMContentLoaded', function() {
    // 為導航連結添加點擊效果
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// 處理聯絡表單提交
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 獲取表單數據
        const formData = {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value
        };
        
        // 這裡可以添加發送表單數據的邏輯
        console.log('表單提交:', formData);
        
        // 清空表單
        this.reset();
        alert('感謝您的訊息！我會盡快回覆。');
    });
} 