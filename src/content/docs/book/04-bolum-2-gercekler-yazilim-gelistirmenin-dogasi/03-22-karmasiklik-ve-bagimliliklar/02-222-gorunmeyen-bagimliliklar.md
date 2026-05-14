---
title: "2.2.2 Görünmeyen Bağımlılıklar"
sidebar:
  hidden: true
---

Yazılım sistemlerindeki bağımlılıkların önemli bir kısmı dokümante edilmemiştir. Bu bağımlılıklar, zamanla oluşmuş; "her zaman böyle çalışıyordu" varsayımına dayanan ilişkilerdir. Bir modül, başka bir modülün belirli bir sırayla veri göndereceğini varsayabilir. İki sistem, hiçbir zaman açıkça tanımlanmamış ortak bir davranış beklentisi üzerine kurulmuş olabilir.

Bu görünmez bağımlılıklar, değişiklik yapılana kadar sorun yaratmaz. Değişiklik yapıldığında ise kaynak genellikle hemen tespit edilemez. Hata, bağımlılığın kaynağında değil, ondan etkilenen başka bir yerde kendini gösterir. Bu durum hem hata ayıklama sürecini uzatır hem de geliştirme ekiplerinin bazı değişikliklerden neden uzak durduğunu açıklar.

Conway Yasası bu dinamiği yapısal bir perspektiften ele alır: sistemlerin iletişim yapısı, onu geliştiren organizasyonun iletişim yapısını yansıtır <span class="bkz-ref" title="12. Conway, M. E. (1968). How Do Committees Invent? Datamation.">(Bkz: 12)</span>. Organizasyon içindeki bilgi siloları, sistemdeki görünmez bağımlılıkların başlıca kaynağıdır. Bir ekip neyin nereye bağlı olduğunu bilmiyorsa, o bağımlılık her an bir sürpriz olarak karşısına çıkabilir.

**Örnek:** Bir e-ticaret platformunda ürün katalog servisi güncellendi. Geliştirici ekip tüm testleri geçti ve değişikliği üretime aldı. Üç saat sonra müşteri destek ekibi, siparişlerin tamamlanamadığına dair şikayetlerin yoğunlaştığını bildirdi. İncelemede, sipariş servisinin katalog servisinden belirli bir alanda her zaman boş olmayan bir değer beklediği ancak yeni versiyonda bu alanın bazı durumlarda boş dönebileceği anlaşıldı. Bu beklenti hiçbir dokümanda yer almıyordu; sadece sipariş servisini ilk yazan geliştirici biliyordu ve o kişi şirketten ayrılmıştı. Bağımlılık görünmezdi ama neden olduğu sonuçlar oldukça görünürdü.

---



