# SDBusinessCard

Modern ve etkileşimli dijital iş kartı uygulaması. React ile geliştirilmiş, responsive tasarıma sahip kişisel tanıtım kartıdır.

## Özellikler

- 🎯 Modern ve temiz tasarım
- 📱 Responsive (mobil uyumlu)
- 🔗 Sosyal medya bağlantıları
- 👤 Profil fotoğrafı ve logo
- 📝 Hakkında bölümü
- 🎨 Özelleştirilebilir stil

## Bileşenler

- **Info**: Profil fotoğrafı, isim, unvan ve LinkedIn butonu
- **About**: Kişisel tanıtım ve deneyim bilgileri
- **Interest**: İlgi alanları bölümü
- **Footer**: Sosyal medya bağlantıları (Instagram, GitHub, Twitter)

## Kurulum ve Çalıştırma

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/SametDulger/SDBusinessCard.git
   cd SDBusinessCard
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm start
   ```

4. **Projeyi derleyin:**
   ```bash
   npm run build
   ```

## Proje Yapısı

```
SDBusinessCard/
├── public/
│   ├── index.html          # Ana HTML dosyası
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # SEO için
│   └── favicon.ico         # Site ikonu
├── src/
│   ├── components/         # React bileşenleri
│   │   ├── Info.js         # Profil bilgileri
│   │   ├── About.js        # Hakkında bölümü
│   │   ├── Interest.js     # İlgi alanları
│   │   └── Footer.js       # Sosyal medya linkleri
│   ├── images/             # Görseller
│   ├── App.js              # Ana uygulama bileşeni
│   ├── index.js            # Giriş noktası
│   └── index.css           # Stil dosyası
├── package.json            # Proje bağımlılıkları
└── README.md               # Bu dosya
```

## Kullanılan Teknolojiler

- **React 18**: Modern React hooks ve bileşenler
- **Create React App**: Hızlı geliştirme ortamı
- **CSS3**: Özel stiller ve animasyonlar
- **Font Awesome**: Sosyal medya ikonları

## Kişiselleştirme

### Bilgileri Güncelleme
- `src/components/Info.js`: İsim, unvan, profil fotoğrafı
- `src/components/About.js`: Hakkında metni
- `src/components/Footer.js`: Sosyal medya linkleri

### Görselleri Değiştirme
- `src/images/info_pic.jpg`: Profil fotoğrafı
- `src/images/logo192.png` ve `logo512.png`: Logo dosyaları

### Stil Değişiklikleri
- `src/index.css`: Ana stil dosyası

## Özellikler

- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Modern UI**: Temiz ve profesyonel görünüm
- **Hızlı Yükleme**: Optimize edilmiş performans
- **SEO Dostu**: Meta etiketleri ve yapılandırma
- **PWA Hazır**: Progressive Web App desteği

## Tarayıcı Desteği

- Chrome (önerilen)
- Firefox
- Safari
- Edge
- Modern tarayıcıların tümü
