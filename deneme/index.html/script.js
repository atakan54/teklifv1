document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const answerMessage = document.getElementById('answerMessage');
    const container = document.querySelector('.container');

    // --- HAYIR Butonunun Hareket Etme Mantığı ---
    noBtn.addEventListener('mouseover', () => {
        const containerRect = container.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();
        
        const margin = 50; 
        const newX = Math.random() * (containerRect.width - btnRect.width - 2 * margin) + margin;
        const newY = Math.random() * (containerRect.height - btnRect.height - 2 * margin) + margin;

        noBtn.style.transform = `translate(${newX}px, ${newY}px)`;
    });

    // --- EVET Butonuna Basma Mantığı (YENİ KONFETİ VE HAVAİ FİŞEK EFEKTLERİ) ---
    yesBtn.addEventListener('click', () => {
        // Butonları ve soruyu gizle
        document.querySelector('.buttons').style.display = 'none'; 
        document.querySelector('h1').style.display = 'none';
        
        // Mesajı göster
        answerMessage.textContent = "🥳 Yaşasın! Cevabın için teşekkürler! 🎉";
        answerMessage.classList.remove('hidden');
        
        // Kutuyu büyüt ki mesaj rahat sığsın
        container.style.padding = '80px 40px'; 

        // 🥳🥳 ANA KONFETİ PATLAMASI (DAHA GÜÇLÜ) 🥳🥳
        confetti({
            particleCount: 200, // Daha fazla konfeti
            spread: 90,         // Daha geniş yayılma
            startVelocity: 60,  // Daha hızlı başlangıç (güçlü)
            origin: { y: 0.6 }
        });

        // 🎆 SOL TARAFTAN HAVAİ FİŞEK BENZERİ PATLAMA 🎆
        confetti({
            particleCount: 150,
            spread: 80,
            startVelocity: 55,
            origin: { x: 0, y: 0.5 }, // Sol orta
            angle: 60 // Yukarı sağa doğru fırlar
        });

        // 🎆 SAĞ TARAFTAN HAVAİ FİŞEK BENZERİ PATLAMA 🎆
        confetti({
            particleCount: 150,
            spread: 80,
            startVelocity: 55,
            origin: { x: 1, y: 0.5 }, // Sağ orta
            angle: 120 // Yukarı sola doğru fırlar
        });

        // Ekstra bir patlama gecikmeli
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 70,
                startVelocity: 45,
                origin: { y: 0.8 }, // Biraz daha aşağıdan
                colors: ['#FFC0CB', '#FF69B4', '#EE82EE'] // Pembe tonları
            });
        }, 300); // 0.3 saniye sonra
    });
});