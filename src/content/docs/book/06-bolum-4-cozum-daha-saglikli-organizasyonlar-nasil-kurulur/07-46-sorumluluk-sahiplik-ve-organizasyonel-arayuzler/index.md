---
title: "4.6 Sorumluluk, Sahiplik ve Organizasyonel Arayüzler"
---

Birçok organizasyonda sorumluluk dağıtılmıştır, fakat sahiplik net değildir. Ürün gereksinimden sorumludur, yazılım geliştirmeden, test ekibi doğrulamadan, operasyon canlıya geçişten, destek müşteri sorunlarından sorumludur. Bu ayrım kağıt üzerinde mantıklıdır. Fakat uçtan uca sahiplik olmadığında problemler arayüzlerde kaybolur.

Sahiplik, her şeyi tek kişinin yapması anlamına gelmez. Sahiplik, bir kararın veya ürün alanının uçtan uca sağlığından kimin sorumlu olduğunun net olmasıdır.

Sorumluluk parçalı, sahiplik belirsiz olduğunda şu davranışlar ortaya çıkar:

* Gereksinim eksikleri geliştirme sırasında fark edilir, ama geri dönüş maliyeti büyümüştür.
* Test yalnızca son aşama kontrolü gibi görülür, kalite tasarımın parçası olmaz.
* Canlı performans problemi çıktığında geliştirme, operasyon ve altyapı ekipleri arasında sorumluluk tartışması başlar.
* Müşteri geri bildirimi ürün kararına dönüşmeden destek kuyruğunda birikir.
* Teknik borç hiçbir ekibin doğrudan hedefi olmadığı için sürekli ertelenir.

Bu sorunların çözümü, her şeyi merkezi kontrol altına almak değildir. Çözüm, organizasyonel arayüzleri netleştirmektir.

Sağlıklı sahiplik modeli şu soruları cevaplar:

* Bu ürün alanının iş hedefinden kim sorumlu?
* Teknik sağlığından kim sorumlu?
* Canlı davranışı ve operasyonel kalitesi kim tarafından izleniyor?
* Müşteri geri bildirimi hangi mekanizmayla ürün kararına dönüşüyor?
* Karar gerektiğinde son sözü kim söylüyor?
* Bir risk ortaya çıktığında hangi ekipler birlikte hareket ediyor?

Bu modelde ürün, yazılım ve operasyon birbirinden kopuk aşamalar değil, aynı akışın farklı sorumluluk alanlarıdır. Takımlar arası sınırların ve etkileşim biçimlerinin bilinçli tasarlanması, yazılım sisteminin mimarisini ve teslimat akışını doğrudan etkiler <span class="bkz-ref" title="4. Skelton, M., &amp; Pais, M. (2019). Team Topologies.">(Bkz: 4)</span>.

**Örnek:** Kurumsal yazılım geliştiren bir firmada modül bazlı sahiplik modeli uygulandı. Öncesinde her hata farklı ekipler arasında dolaşıyor, müşteri etkisi geç anlaşılıyor ve aynı problemler tekrar ediyordu. Yeni modelde her kritik modül için ürün temsilcisi, teknik sahip ve operasyon temsilcisinden oluşan küçük bir sahiplik üçlüsü tanımlandı. Bu üçlü gereksinim, geliştirme, canlıya geçiş, performans ve müşteri geri bildirimi üzerinde birlikte sorumluluk aldı. Hatalar tamamen bitmedi; fakat tekrar eden hata oranı düştü, karar alma süresi kısaldı ve problemler daha erken sahiplenildi.

Sahiplik modeli kurulurken dikkat edilmesi gereken risk, sahipliği suçlama aracına dönüştürmektir. Eğer "sahip" kavramı yalnızca hata olduğunda aranacak kişiyi tanımlıyorsa, sistem savunmacı davranış üretir. Sağlıklı sahiplik, hesap verebilirlik ile destek yetkisini birlikte verir. Bir alanın sahibi olan kişi veya ekip, yalnızca sonuçtan sorumlu tutulmamalı; karar alma, öncelik belirleme ve iyileştirme yapma yetkisine de sahip olmalıdır.

### Yapay Zekâ Çağında Sahiplik

YZ destekli geliştirme, sahiplik sorusuna yeni bir boyut ekler. Bir değişikliğin bir kısmı YZ tarafından üretilmiş, bir geliştirici tarafından düzenlenmiş ve bir başkası tarafından onaylanmış olabilir. Bu durumda "bu kod nereden geldi, kim onayladı, neden böyle?" sorularının cevabı kendiliğinden oluşmaz.

Sağlıklı organizasyonlarda ilke açıktır: YZ bir araçtır, sahip değildir. YZ ile üretilen her değişikliğin, onu anlayan ve sonuçlarını üstlenen bir insan sahibi olmalıdır. Bu, YZ katkısının gizlenmesi anlamına gelmez; tam tersine, hangi değişikliklerin YZ destekli üretildiğinin ve kim tarafından gözden geçirilip onaylandığının izlenebilir olması, olay sonrası analizlerde ve denetimlerde kritik bilgi sağlar. Bu izlenebilirlik bir verimlilik puanı olarak değil, hesap verebilirlik mekanizması olarak kullanılmalıdır.

Sahiplik modeli YZ çağında şu soruları da cevaplamalıdır:

* YZ destekli üretilen değişikliklerde kabul ölçütlerini kim tanımlar?
* İnceleme gerçek bir doğrulama mı, yoksa bir onay ritüeli mi?
* YZ ajanlarına hangi sistemlerde, hangi yetkilerle işlem yapma izni verilir ve bu yetkilerden kim sorumludur?
* Bir değişikliği açıklayabilecek kimse kalmadığında bu durumu kim fark eder?

Bu soruların cevapsız kaldığı organizasyonlarda YZ, sorumluluğun dağılmasının yeni bir yolu haline gelir. "YZ böyle üretmiş" cümlesi, "ben yapmadım"ın yeni biçimidir. Sahiplik ise tam olarak bu cümlenin söylenmesine gerek bırakmayan yapıdır.

---

