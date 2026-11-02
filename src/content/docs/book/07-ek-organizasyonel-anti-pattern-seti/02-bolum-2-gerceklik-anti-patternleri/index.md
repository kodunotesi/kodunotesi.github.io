---
title: "Bölüm 2: Gerçeklik Anti-Pattern'leri"
---

### Yazılım Üretim Hattı Gibi Görülür

**Belirti:** Yazılım işleri, baştan net tanımlanabilen ve yalnızca efor eklenerek hızlandırılabilen görevler gibi yönetilir.

**Neden sorun?** Yazılım geliştirme belirsizlik ve keşif içerir. Gereksinimler, bağımlılıklar ve riskler geliştirme sürecinde görünür hale gelebilir.

**Örnek:** Proje başında tüm işlerin net planlandığı varsayıldı; ancak geliştirme ilerledikçe veri modeli, entegrasyon ve kullanım senaryoları değişti.

**Daha sağlıklı soru:** Bu işin hangi bölümü üretim, hangi bölümü keşif içeriyor?

### "Küçük Değişiklik" Varsayımı

**Belirti:** Değişikliğin görünen yüzeyi küçük olduğu için gerçek etkisinin de küçük olduğu varsayılır.

**Neden sorun?** Küçük görünen değişiklikler bağlı sistemlerde, veri yapılarında, testlerde ve operasyonel süreçlerde zincirleme etki yaratabilir.

**Örnek:** Tek bir alan güncellemesi, API sözleşmelerini, raporlama sistemini ve entegrasyon testlerini etkiledi.

**Daha sağlıklı soru:** Bu değişikliğin görünen boyutu ile etki alanı aynı mı?

### Teknik Borç Ertelenir

**Belirti:** Teknik borç azaltımı sürekli daha acil görünen işlerin arkasına atılır.

**Neden sorun?** Ertelenen borç kaybolmaz; gelecekte daha yavaş geliştirme, daha fazla hata ve daha yüksek değişiklik maliyeti olarak geri döner.

**Örnek:** Hızlı teslim için geçici yazılan kod, altı ay sonra yeni geliştirmeleri engelledi ve yeniden yazım ihtiyacı doğurdu.

**Daha sağlıklı soru:** Bugün ertelediğimiz teknik borcun gelecekteki faizi ne olacak?

### Test Ortamı Yeterlidir Varsayımı

**Belirti:** Test ortamında çalışan sistemin canlı ortamda da aynı şekilde davranacağı varsayılır.

**Neden sorun?** Canlı ortam veri hacmi, kullanıcı davranışı, eş zamanlılık, entegrasyon koşulları ve operasyonel baskı açısından farklıdır.

**Örnek:** Test ortamında sorunsuz çalışan rapor, canlı ortamda büyük veri hacmiyle dakikalarca cevap veremedi.

**Daha sağlıklı soru:** Test ortamımız canlı davranışı hangi açılardan temsil etmiyor?

### Hız Kaliteye Tercih Edilir

**Belirti:** Kısa vadeli teslimat baskısı nedeniyle test, refactoring, güvenlik ve mimari kalite çalışmaları ertelenir.

**Neden sorun?** Kaliteyi düşürmek hızı kalıcı olarak artırmaz; yalnızca maliyeti geleceğe taşır. Zamanla sistem daha yavaş değişir hale gelir.

**Örnek:** Test atlanarak çıkarılan sürüm canlıda hata üretti ve rollback süreci ilk kazanılan zamandan daha pahalıya mal oldu.

**Daha sağlıklı soru:** Bugün kazandığımız hız, gelecekte hangi bakım ve hata maliyetini üretiyor?

### Bağımlılıklar Göz Ardı Edilir

**Belirti:** Sistemler, ekipler veya üçüncü parti servisler arasındaki bağımlılıklar planlama sırasında yeterince görünür değildir.

**Neden sorun?** Bağımlılıklar yönetilmediğinde gecikmeler, beklenmedik yan etkiler ve koordinasyon maliyeti büyür.

**Örnek:** Üçüncü parti servis davranışı değiştiğinde, buna bağlı modüller beklenmedik şekilde hata üretmeye başladı.

**Daha sağlıklı soru:** Bu işin başarısı hangi sistemlere, kararlara ve ekiplerin zamanında hareket etmesine bağlı?

### Çalışan Kod Hazır Koddur

**Belirti:** Derlenen, testlerden geçen ya da demoda çalışan kod üretime hazır kabul edilir.

**Neden sorun?** Çalışmak hazır olmak değildir. Yetkilendirme, sınır durumlar, entegrasyon, güvenlik ve anlaşılabilirlik ayrı sorulardır.

**Örnek:** İki günde hazırlanan bir YZ prototipi müşteriye "neredeyse bitti" olarak sunuldu; ürünleştirme üç ay sürdü.

**Daha sağlıklı soru:** Bu kodun kabul ölçütleri neler ve ekipte bu kodu kim açıklayabilir?

### Anlaşılmayan Kod Sorun Değildir

**Belirti:** Testlerden geçen kod, ekipte kimse nasıl çalıştığını açıklayamasa bile sorunsuz kabul edilir.

**Neden sorun?** Anlama borcu, ilk ciddi değişiklikte ya da ilk arızada faiziyle geri döner.

**Örnek:** YZ ile yeniden yazılan bir modülde, bir yıl sonra kimse hesaplama mantığının gerekçesini bilmiyordu.

**Daha sağlıklı soru:** Bu değişikliği ekipte kim açıklayabilir?

### Geçici Uygulama Geçici Kalır

**Belirti:** YZ ile hızlıca üretilen "geçici" araçlar sahipsiz bırakılır.

**Neden sorun?** Geçici araçlar zamanla iş süreçlerine bağlanır ve kimsenin üstlenmediği kalıcı sistemlere dönüşür.

**Örnek:** Bir ekibin hafta sonu hazırladığı raporlama aracı, iki yıl sonra finans sürecinin kritik bir parçası haline gelmişti.

**Daha sağlıklı soru:** Bu uygulama ne zaman ve kim tarafından kullanımdan kaldırılacak?

### İstem Bir Güvenlik Sınırıdır

**Belirti:** YZ ajanlarının güvenliği yalnızca istemdeki (prompt) "şunu yapma" talimatlarıyla sağlanmaya çalışılır.

**Neden sorun?** Dışarıdan gelen içerik modeli yönlendirebilir. Güvenliği istem değil, yetki sınırları sağlar.

**Örnek:** Bir destek ajanı, talep metnine gizlenmiş bir talimatla başka bir müşterinin kayıtlarına erişebildi.

**Daha sağlıklı soru:** Bu ajan en kötü durumda neye erişebilir ve ne yapabilir?

---

