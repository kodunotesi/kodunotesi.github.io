---
title: "2.3.3 Hızın Yanılsaması: Kısa Vade ile Uzun Vade"
sidebar:
  hidden: true
---

Yazılım geliştirmede "hız" kavramı iki farklı şeyi ifade eder ve bu iki anlam birbiriyle çoğu zaman karıştırılır: **anlık teslimat hızı** (bir özelliğin ne kadar sürede yayına alındığı) ve **sürdürülebilir geliştirme hızı** (bir ekibin zaman içinde ne kadar tutarlı, öngörülebilir ve güvenli biçimde değer üretebildiği).

Bu ayrım kritik öneme sahiptir çünkü kısa vadede hız kazandıran kararlar, uzun vadeli geliştirme kapasitesini azaltabilir. Kaliteyi feda etmek anlık teslimat hızını artırabilir; ancak bu kazanım çoğu zaman gelecekteki hızdan ödün verilerek elde edilir. Testlerin atlanması, teknik borcun ertelenmesi veya mimari problemlerin görmezden gelinmesi; başlangıçta teslim sürelerini kısaltıyor gibi görünür. Fakat zamanla bu kararlar birikerek sistemin değiştirilebilirliğini azaltır.

Birikmiş hatalar sürekli müdahale gerektiren operasyonel sorunlara dönüşür. Bakımı güç kod her değişikliği daha uzun ve daha riskli hale getirir. Test edilmemiş sistemlerde ekipler her yayında yeni bir problemi tetiklemekten çekinir. Sonuçta ekip zamanı yeni değer üretmek yerine mevcut sistemi ayakta tutmaya harcanmaya başlar.

Bu dinamiğin önemli bir yönü de görünürlük problemidir. Kısa vadeli hız artışları hemen fark edilir; teslim tarihi öne çekilir, özellik daha erken yayına alınır ve organizasyon bunu başarı olarak görür. Buna karşılık sürdürülebilirlik kaybı genellikle aylar içinde belirginleşir. Teslim sürelerinin uzaması, koordinasyon ihtiyacının artması, onboarding süreçlerinin zorlaşması veya ekiplerin değişiklik yapmaktan çekinmeye başlaması kademeli olarak görünür hale gelir. Bu nedenle organizasyonlar çoğu zaman gelecekteki kapasite kaybını fark etmeden kısa vadeli hız kazanımlarını ödüllendirir.

Forsgren, Humble ve Kim'in "Accelerate" araştırması bu dinamiği ampirik verilerle ortaya koyar: yüksek performanslı geliştirme ekipleri hem daha hızlı hem de daha kaliteli yazılım teslim etmektedir <span class="bkz-ref" title="5. Simon, H. A. (1996). The Sciences of the Artificial.">(Bkz: 5)</span>. Bu bulgu ilk bakışta sezgiye aykırı görünür; ancak yapısal olarak açıklanabilirdir. Otomatik testler, güvenilir deployment süreçleri, düzenli code review pratikleri ve sürdürülebilir mimari kararlar; ekiplerin değişiklikleri daha güvenli yapabilmesini sağlar. Böylece ekip zamanı sürekli onarım faaliyetlerine değil, yeni geliştirmelere ayrılabilir.

**Örnek:** İki rakip yazılım ekibi aynı dönemde benzer özellikleri geliştirmeye başladı. İlk ekip otomatik testler, kapsamlı code review süreçleri ve düzenli refactoring pratikleri uyguluyordu. İkinci ekip ise kısa vadeli teslim hızını önceliklendirdi; test yazımını minimumda tuttu, teknik borçları erteledi ve değişiklikleri mümkün olduğunca hızlı yayına almaya odaklandı.

İlk altı ay sonunda ikinci ekip daha hızlı görünüyordu ve yaklaşık %30 daha fazla özellik teslim etmişti. Ancak zaman ilerledikçe sistem davranışı öngörülemez hale gelmeye başladı. Her yeni sürüm öncesinde uzun manuel doğrulama süreçleri gerekiyor, küçük değişiklikler bile beklenmedik yan etkiler üretiyor ve ekip üyeleri kritik modüllere müdahale etmekten çekiniyordu. Planlamalar giderek daha az öngörülebilir hale geldi çünkü her geliştirme eski sorunları yeniden tetikleme riski taşıyordu.

On ikinci ayın sonunda ikinci ekip zamanının büyük bölümünü hata düzeltme, regresyon kontrolü ve mevcut davranışı korumaya çalışmakla geçirirken, ilk ekip tutarlı bir hızla yeni özellik geliştirmeye devam ediyordu. On sekiz aylık toplam teslim kapasitesinde ilk ekip öne geçmişti. Kısa vadeli hız kazanımı, uzun vadeli geliştirme kapasitesini zayıflatan yapısal bir probleme dönüşmüştü.


---



