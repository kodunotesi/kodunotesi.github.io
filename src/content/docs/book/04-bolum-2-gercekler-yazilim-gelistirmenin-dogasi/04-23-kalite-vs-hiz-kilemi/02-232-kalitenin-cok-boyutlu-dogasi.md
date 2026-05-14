---
title: "2.3.2 Kalitenin Çok Boyutlu Doğası"
sidebar:
  hidden: true
---

Kalite, tek bir özellik değildir. Yazılım geliştirme bağlamında kaliteyi yalnızca "hata sayısı" gibi tek bir ölçüte indirgemek, sistemin diğer kritik özelliklerini görünmez hale getirir. Bir yazılımın bugün çalışıyor olması, kaliteli olduğu anlamına gelmez. Bazı kalite problemleri yalnızca sistem büyüdüğünde, ekip genişlediğinde veya değişiklik ihtiyacı arttığında görünür hale gelir.

Yazılım kalitesi farklı boyutlarda ortaya çıkar ve bu boyutların önemi sistemin bağlamına göre değişebilir. Bununla birlikte, çoğu yazılım sistemi için bazı temel kalite eksenlerinden söz etmek mümkündür: **doğruluk** (sistem belirtilen gereksinimleri karşılıyor mu?), **sürdürülebilirlik** (sistem gelecekteki değişikliklere karşı ne kadar dirençli ve esnek?), **güvenilirlik** (sistem beklenen koşullarda tutarlı biçimde çalışıyor mu?) ve **güvenlik** (sistem yetkisiz erişime ve kötüye kullanıma karşı ne kadar korunaklı?).

Bu boyutlar birbirinden tamamen bağımsız değildir. Sürdürülebilirliği düşük bir sistemde yapılan değişiklikler zamanla daha fazla yan etki üretir ve hata oranını artırır. Güvenilirliği düşük sistemlerde hata durumlarının öngörülememesi, güvenlik kontrollerinin beklenmeyen biçimlerde davranmasına neden olabilir. Bir kalite boyutundaki zayıflık çoğu zaman diğer boyutları da zaman içinde aşındırır.

Bu boyutlar içinde sürdürülebilirlik genellikle en görünmez ama en yüksek maliyetli olanlardan biridir. Fowler'ın "Clean Code" kitabında vurguladığı gibi, yazılım maliyetinin önemli bir kısmı kod yazmaktan değil, mevcut kodu anlamaya çalışmaktan kaynaklanır <span class="bkz-ref" title="4. Hofstadter, D. R. (1979). Gödel, Escher, Bach.">(Bkz: 4)</span>. Bir geliştiricinin bir kod parçasını anlama süresine harcadığı zaman, çoğu durumda o kodun ilk yazılma süresinden daha uzundur. Okunaksız ve bakımı güç kod; ekip büyüdükçe, sistem karmaşıklaştıkça ve yıllar geçtikçe organizasyon için giderek artan bir operasyonel yük üretir.

Başlangıç aşamasında bu maliyetler görünmez olabilir. Küçük ekipler sistemi zihinsel olarak taşıyabildiği için eksik dokümantasyon, düzensiz mimari veya karmaşık kod yapıları ciddi bir sorun gibi görünmeyebilir. Ancak ekip genişlediğinde ve sistemin bilgi yükü bireylerin zihinsel ve bilişsel kapasitesini aşmaya başladığında, sürdürülebilirlik eksikliği doğrudan geliştirme hızını etkileyen yapısal bir probleme dönüşür.

**Örnek:** Hızlı büyüyen bir yazılım şirketinde geliştirici sayısı iki yıl içinde dört katına çıktı. Ekip, başlangıç döneminde hız odaklı bir yaklaşımla kurduğu temeli korumaya devam etti: asgari dokümantasyon, az test, değişkenlere verilen kısaltılmış isimler ve yüzlerce satırlık uzun fonksiyonlar. İlk yıllarda bu yaklaşım sorun yaratmıyordu çünkü sistemi geliştiren küçük ekip tüm mimariyi zihinsel olarak göreceli yönetilebilir bir bilişsel yük ile takip edebiliyordu.

Ancak yeni geliştiriciler projeye dahil oldukça durum değişti. Tek bir modülün davranışını anlamak günler, bazen haftalar sürüyordu. Küçük değişiklikler bile beklenmedik yan etkilere neden oluyor, ekip üyeleri mevcut davranışı bozmaktan çekindiği için geliştirme süreçleri giderek yavaşlıyordu. Zamanla organizasyonun önemli bir kısmı yeni özellik geliştirmek yerine mevcut sistemi anlamaya ve korumaya çalışır hale geldi.

Sistem hâlâ çalışıyordu; ancak sürdürülebilirlik boyutunda ciddi biçimde zayıflamıştı. Başlangıçta hız kazandıran kalite eksiklikleri, yıllar içinde organizasyonun geliştirme kapasitesini azaltan yapısal bir yük haline dönüşmüştü.

---



