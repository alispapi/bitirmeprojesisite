# bitirmeprojesisite
Bu repository, 2025-2026 yılları arasında Başkent Üniversitesi Bilgisayar Mühendisliği bölümü öğrencileri tarafından geliştirilen 2D izometrik, pixel art stiliyle hazırlanmış sıra tabanlı (turn-based) bir RPG oyununun tanıtım ve geliştirme günlüğü web sitesine aittir.

Proje Hakkında
Proje Adı: OYUN ADI (Lütfen gerçek oyun adını giriniz)
Tür: 2D İzometrik Pixel Art RPG
Kapsam: Sıra tabanlı savaş, zengin hikaye, text-based diyaloglar ve strateji.
Geliştirici Takım:
Ali Ege Önal
Alperen Yüksel
Batuhan Bayraklı
Geliştirici 4
Özellikler (Web Sitesi)
Modern, responsive ve retro temalı arayüz.
Oyun hakkında detaylı bilgi ve özellikler.
Geliştirici ekibini tanıtan bir ekip sayfası.
Güncel ilerlemenin ve duyuruların yer aldığı bir Dev Blog/Log.
Oyun görselleri (screenshots) galerisi.
Oyun çıkış tarihine kadar geçen zamanı gösteren dinamik bir progress bar.
E-posta ile doğrudan iletişim kurulabilen ve otomatik yanıt gönderen iletişim formu (EmailJS entegrasyonu).
Özel sürpriz (easter egg) ve Matrix yağmuru arka plan efekti.
Duyarlı tasarım (mobil/tablet/destekli).
Kurulum ve Kullanım
Dosyaları Edinme
Bu repodaki dosyaları kendi bilgisayarınıza kopyalayın veya indirin.

Görseller ve Bağımlılıklar
İlgili resim dosyalarının (baskent-universitesi-logo.png, oyun ekran görüntüleri ve favicon vs.) projenin kök klasöründe bulunduğundan emin olun.

E-posta Gönderimi İçin EmailJS Ayarı

EmailJS sitesine kaydolun ve bir servis & template oluşturun.
Kodun alt kısmındaki şu alanları kendi kimliklerinizle doldurun:
emailjs.init('KENDI_USER_ID');
emailjs.send('service_XXX', 'template_XXX', {...});
emailjs.init('KENDI_USER_ID');
emailjs.send('service_XXX', 'template_XXX', {...});

Temaya göre kendi servis ve template id’lerinizi yerleştirin.
Siteyi Başlatma
İlgili klasörde aşağıdaki dosyayı tarayıcıda açın:
index.html

Klasör ve Dosya Yapısı
text
/
├─ index.html
├─ README.md
├─ /resim-dosyalarınız  (logo, ekran görüntüleri, favicon vs.)
└─ ...

Bağımlılıklar
Orbitron Google Font
EmailJS - iletişim formu için
Hiçbir ek framework gerektirmez, tamamı saf HTML, CSS ve JS.
Özelleştirme
Oyun Adı: index.html dosyasında "OYUN ADI" yazan yerleri gerçek proje adınız ile güncelleyebilirsiniz.
Takım Üyeleri, İletişim ve Blog: Kolayca güncellenebilir.
Ekran Görüntüleri: Yalnızca sitede verilen örneklerdir, gerçek görselleri kendi oyununuzdan alın!
Sosyal Medya & GitHub Bağlantıları: Kendi linklerinizle değiştirmeyi unutmayın.
Katkıda Bulunma
Pull request ve önerilere her zaman açığız! Fikirlerinizi iletmekten ve katkıda bulunmaktan çekinmeyin.

Lisans
Bu proje, MIT Lisansı altında lisanslanmıştır.

Başkent Üniversitesi Bilgisayar Mühendisliği Bitirme Projesi – 2025-2026
