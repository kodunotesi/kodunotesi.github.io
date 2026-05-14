---
title: "Bölüm 1: Algı Anti-Pattern'leri"
---

### "Yazılım Ekibi Yavaş"

**Belirti:** Yazılım ekibinin görünür çıktı üretmediği dönemler doğrudan düşük performans olarak yorumlanır.

**Neden sorun?** Görünmeyen analiz, refactoring, hata önleme, destek, risk azaltma ve teknik hazırlık çalışmaları hesaba katılmaz. Bu durumda organizasyon kapasiteyi yanlış okur.

**Örnek:** Sprint boyunca eski bir modülde refactoring ve performans iyileştirmesi yapan ekip, yeni feature üretmediği için "hiç iş yapmadı" şeklinde değerlendirildi.

**Daha sağlıklı soru:** Ekip zamanı hangi görünür ve görünmez iş türlerine harcanıyor?

### Teknik Karmaşıklık Yok Sayılır

**Belirti:** Talep yüzeyde basit göründüğü için teknik etki alanı analiz edilmeden süre veya kapsam beklentisi oluşturulur.

**Neden sorun?** Yazılım sistemlerinde görünen değişiklik ile gerçek değişiklik maliyeti aynı şey değildir. Bağımlılıklar, veri akışı, yetki modeli, test yüzeyi ve operasyonel etkiler hesaba katılmadığında plan gerçeklikten kopar.

**Örnek:** Üç servis bağımlılığı olan bir değişiklik, yalnızca arayüzde küçük göründüğü için iki günlük iş olarak planlandı.

**Daha sağlıklı soru:** Bu değişiklik hangi sistemleri, ekipleri ve doğrulama alanlarını etkiliyor?

### Farklı Ekipler Farklı Gerçekliklerde Yaşar

**Belirti:** Ürün, yazılım, satış, implementasyon ve operasyon ekipleri aynı konu hakkında konuşur; fakat her biri farklı bir problemi merkezde görür.

**Neden sorun?** Ortak gerçeklik kurulmadığında herkes kendi açısından haklı kalır, ancak organizasyon doğru karar alamaz.

**Örnek:** Ürün ekibi "müşteri istiyor" derken, yazılım ekibi "mimari uygun değil", operasyon ekibi ise "saha buna hazır değil" dedi.

**Daha sağlıklı soru:** Bu kararın müşteri, teknik, operasyonel ve stratejik gerçeklikleri aynı masada nasıl görünür hale getirilebilir?

### İletişim Problemi Konuşma Problemi Sanılır

**Belirti:** Daha fazla toplantı, daha fazla mesaj veya daha fazla rapor ile iletişim probleminin çözüleceği varsayılır.

**Neden sorun?** Asıl problem çoğu zaman konuşma miktarı değil, paylaşılan bağlamın eksikliğidir. Ortak kavramlar ve karar çerçevesi yoksa iletişim artar, fakat anlam ortaklaşmaz.

**Örnek:** Yazılım ekibinin "bu mümkün değil" ifadesi teknik kısıt açıklaması olarak değil, direnç olarak yorumlandı.

**Daha sağlıklı soru:** Taraflar aynı kelimeleri kullanırken aynı şeyi mi kastediyor?

### Görünmeyen İş Yok Sayılır

**Belirti:** Bakım, iyileştirme, test altyapısı, teknik borç azaltımı ve operasyonel destek işleri planlamada yer bulmaz.

**Neden sorun?** Görünmeyen iş yok sayıldığında ekip kapasitesi olduğundan yüksek sanılır. Sonuçta planlar şişer, gecikmeler artar ve teknik sağlık zayıflar.

**Örnek:** Performans iyileştirmesi yapan ekip, yeni özellik çıkarmadığı için verimsiz görüldü.

**Daha sağlıklı soru:** Teslimatı mümkün kılan ama çıktı olarak görünmeyen işler hangileri?

---

