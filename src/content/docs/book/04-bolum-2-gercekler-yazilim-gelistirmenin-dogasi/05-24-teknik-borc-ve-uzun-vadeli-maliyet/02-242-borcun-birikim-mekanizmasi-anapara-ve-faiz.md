---
title: "2.4.2 Borcun Birikim Mekanizması: Anapara ve Faiz"
sidebar:
  hidden: true
---

Teknik borcun etkisini anlamak için anapara-faiz yaklaşımı açıklayıcıdır. Kısa vadede ertelenen her mühendislik yatırımı anaparayı oluşturur. Sonraki her değişiklikte ödenen ek koordinasyon, doğrulama, hata ayıklama ve geri alma maliyeti ise faizdir.

Bu birikim çoğu zaman lineer değildir. Sistem küçükken borcun etkisi yönetilebilir görünür. Ancak modül sayısı, ekip sayısı ve senaryo çeşitliliği arttıkça faiz çarpan etkisi üretmeye başlar <span class="bkz-ref" title="10. Lehman, M. M. (1980). Programs, Life Cycles, and Laws of Software Evolution.">(Bkz: 10)</span>. Aynı değişiklik artık daha çok kişiyi, daha çok testi ve daha geniş etki analizini zorunlu kılar.

Belirli bir eşiğin ardından ekiplerin geliştirme kapasitesinin önemli kısmı yeni değer üretmeye değil, mevcut borcun faizini ödemeye ayrılır. Yayın öncesi doğrulama süreleri uzar, manuel kontroller artar, geri dönüş senaryoları karmaşıklaşır ve küçük değişiklikler bile beklenmedik riskler taşımaya başlar. Böylece teslimat ritmi düşer; ancak bu düşüş çoğu zaman tek bir karara bağlanamaz çünkü maliyet dağıtık biçimde ortaya çıkar.

Faizin görünür olduğu başlıca alanlar şunlardır:

* Değişiklik başına artan bekleme süresi.
* Kod anlama ve etki analizi için harcanan zamanın yükselmesi.
* Regresyon riskinden dolayı artan manuel kontrol yükü.
* Üretim hatası durumunda geri dönüş süresinin uzaması.
* Geliştirme kapasitesinin giderek bakım ve doğrulama faaliyetlerine kayması.

**Örnek:** SaaS muhasebe ürünü geliştiren bir ekip, ilk yılda hız hedefi nedeniyle otomatik test yatırımını sınırlı tuttu. Müşteri ve senaryo çeşitliliği arttıkça yayın öncesi manuel doğrulama süresi her çeyrekte büyüdü. İlk başta saatler süren kontrol, zamanla günler alan bir faaliyete dönüştü. Ekip aynı eforla çalışmasına rağmen teslimat hızı düştü; çünkü borcun faizi artık günlük çalışma akışının parçası haline gelmişti. Bu dinamik, teslimat performansı ile mühendislik pratikleri arasındaki ilişkiyi gösteren ampirik bulgularla da uyumludur <span class="bkz-ref" title="9. Forsgren, N., Humble, J., &amp; Kim, G. (2018). Accelerate.">(Bkz: 9)</span>.

---



