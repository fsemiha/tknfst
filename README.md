# 🎮 Siber Macera - Teknofest Edition

## 🚀 Teknofest İçin QR Kod ile Erişim Kurulumu

### Adım 1: GitHub Repository Oluşturma
1. [GitHub.com](https://github.com)'a gidin ve hesap oluşturun/giriş yapın
2. "New repository" butonuna tıklayın
3. Repository adını yazın (örn: `siber-macera-teknofest`)
4. "Public" olarak ayarlayın
5. "Create repository" tıklayın

### Adım 2: Dosyaları Yükleme
```bash
# Terminal/Command Prompt'ta projenizin bulunduğu klasöre gidin
cd "oyun-klasoru-yolu"

# Git repository'sini başlatın
git init

# Tüm dosyaları ekleyin
git add .

# İlk commit'i yapın
git commit -m "Teknofest Siber Macera oyunu"

# GitHub repository'nizi bağlayın (YOUR-USERNAME değiştirin)
git remote add origin https://github.com/YOUR-USERNAME/siber-macera-teknofest.git

# Dosyaları GitHub'a yükleyin
git push -u origin main
```

### Adım 3: GitHub Pages Aktivasyonu
1. GitHub repository'nizde "Settings" sekmesine gidin
2. Sol menüden "Pages" seçin
3. "Source" kısmında "Deploy from a branch" seçin
4. "Branch" olarak "main" seçin
5. "Save" butonuna tıklayın

**🌐 Oyun URL'niz:** `https://YOUR-USERNAME.github.io/siber-macera-teknofest`

### Adım 4: QR Kod Üretimi
URL'nizi aldıktan sonra:
1. [QR Code Generator](https://www.qr-code-generator.com/) sitesine gidin
2. URL'nizi yapıştırın
3. QR kodu indirin
4. Teknofest standınızda kullanın!

## 📱 Mobil Optimizasyonlar

### Performans İyileştirmeleri
- Resimler optimize edilmiş (SVG formatında)
- Firebase gerçek zamanlı skor sistemi
- Touch-friendly butonlar
- Responsive tasarım (mobil uyumlu)

### Çoklu Cihaz Desteği
- Aynı anda birden fazla telefon oynayabilir
- Skorlar gerçek zamanlı güncellenir
- Teknofest için 500+ skor kapasitesi

## 🔧 Alternatif Hosting Seçenekleri

### Netlify (Daha Gelişmiş)
1. [Netlify.com](https://netlify.com)'da hesap açın
2. "New site from Git" seçin
3. GitHub repository'nizi bağlayın
4. Otomatik deploy edilir

### Firebase Hosting (Google)
1. Firebase projenizde hosting aktifleştirin
2. Firebase CLI ile deploy edin
3. Custom domain kullanabilirsiniz

## 📊 Teknofest İçin Özel Ayarlar

### Skor Sistemi
- Maksimum 500 oyuncu skoru saklanır
- Gerçek zamanlı leaderboard
- Otomatik eski skorları temizleme

### Firebase Konfigürasyonu
Zaten mevcut ve aktif:
- Gerçek zamanlı veritabanı
- Çoklu cihaz desteği
- Güvenli skor kaydetme

## ⚡ Hızlı Test
Deployment sonrası test için:
1. QR kodu telefona okutun
2. Oyunu başlatın
3. Skor tablosunun çalıştığını kontrol edin

## 🎯 Teknofest Gün Öneriler
- QR kodu büyük bir posterde sergileyin
- "QR Kodu Okutun ve Siber Güvenlik Kahramanı Olun!" yazısı ekleyin
- Skor tablosunu büyük ekranda gösterin
- Günlük/saatlik en yüksek skorları ödüllendirin 