---
title: "4.7 Ürün Disiplini, Standartlaşma ve Değişiklik Yönetimi"
---

Yazılım organizasyonlarında uzun vadeli karmaşıklığın önemli kaynaklarından biri, her müşteri, her proje veya her departman için özel çözüm üretme eğilimidir. Kısa vadede bu yaklaşım esnek ve müşteri odaklı görünür. Ancak zamanla ürünün yapısını parçalar, kod tabanını karmaşıklaştırır, test yüzeyini büyütür ve destek maliyetini artırır.

"Her müşteri özeldir" cümlesi iş açısından anlaşılırdır; fakat yazılım açısından sınırsız özelleştirme sürdürülebilir değildir. Sağlıklı ürün disiplini, müşteri ihtiyaçlarını reddetmek değil, bu ihtiyaçları standart ürün davranışına dönüştürebilme becerisidir.

Ürün disiplini şu ayrımları netleştirir:

* Tek müşteriye özel ihtiyaç mı, tekrar eden pazar ihtiyacı mı?
* Konfigürasyonla çözülebilecek fark mı, kod değişikliği gerektiren varyasyon mu?
* Geçici operasyonel çözüm mü, kalıcı ürün davranışı mı?
* Stratejik ürün yönüyle uyumlu talep mi, fırsat maliyeti yüksek sapma mı?
* Standardı genişleten değişiklik mi, standardı kıran istisna mı?

Bu ayrımlar yapılmadığında ürün zamanla istisnalar koleksiyonuna dönüşür. Her istisna başlangıçta küçük görünür; ancak istisnaların toplamı sistemi yönetilemez hale getirir.

Değişiklik yönetimi bu noktada kritik rol oynar. Her değişiklik talebi aynı süreçten geçmek zorunda değildir; fakat her değişiklik şu sorularla değerlendirilmelidir:

* Bu talep hangi kullanıcı problemiyle ilişkilidir?
* Aynı problem başka müşterilerde veya ekiplerde de var mı?
* Standart ürün davranışı değişmeli mi, yoksa konfigürasyon yeterli mi?
* Bu değişiklik mevcut mimari varsayımları zorluyor mu?
* Bakım ve destek maliyeti ne olacak?
* Bu talep kabul edilirse hangi standart zayıflayacak?

**Örnek:** İzmir'de bir SaaS şirketi yıllarca büyük müşteriler için özel geliştirmeler yaptı. Satış ekibi bu esnekliği rekabet avantajı olarak görüyordu. Ancak birkaç yıl içinde ürünün farklı müşterilerde farklı davranan çok sayıda varyantı oluştu. Test süreçleri uzadı, destek ekibi hangi müşteride hangi davranışın geçerli olduğunu takip etmekte zorlandı, yeni özelliklerin geliştirme maliyeti arttı. Şirket radikal bir karar aldı: müşteri bazlı özel geliştirmeler durduruldu, talepler ürün roadmap'i ve konfigürasyon stratejisi üzerinden değerlendirilmeye başlandı. İlk üç ayda bazı satış fırsatları kaybedildi. Bir yıl sonra kod tabanı sadeleşti, yayın güvenilirliği arttı ve destek yükü azaldı.

Ürün disiplini teknik bir tercih değil, stratejik bir karardır. Çünkü organizasyonun ne kadar hızlı değişebileceğini, yalnızca ekip kapasitesi değil, ürünün ne kadar standart ve yönetilebilir olduğu belirler. Yalın yazılım geliştirme yaklaşımı da bu noktada israfı azaltmayı, akışı sadeleştirmeyi ve müşteriye değer üretmeyen varyasyonu sınırlamayı vurgular (Bkz: 5).

---

