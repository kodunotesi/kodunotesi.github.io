---
title: "2.4 Teknik Borç ve Uzun Vadeli Maliyet"
---

Yazılım geliştirmede teknik borç çoğu zaman yalnızca kod kalitesi problemi gibi tartışılsa da, gerçekte karar birikimi problemidir. Bugün teslimatı kolaylaştıran her kısa yol, gelecekteki değişiklik maliyetini etkiler. Bu bölümde teknik borcun yalnızca teknik bir kusur değil, zaman içinde biriken yapısal bir maliyet mekanizması olduğunu ele alacağız.

---

### 2.4.1 Teknik Borcun Tanımı ve Sınırları

Teknik borç, yazılım geliştirme sürecinde kısa vadeli teslimat hedefleri uğruna alınan ve gelecekte ek maliyet üreten kararların birikimidir. Bu tanımın önemli bir sonucu vardır: teknik borç yalnızca kod kalitesi değil, karar kalitesi problemidir. Kod, bu kararların yalnızca görünen yüzüdür.

Kavramsal karışıklık genellikle burada başlar. Kurumlar teknik borcu yalnızca “kötü kod” veya “eski teknoloji” başlığına indirger. Oysa borç farklı katmanlarda oluşabilir:

* Mimari borç: geçici tasarımın kalıcılaşması, sorumluluk sınırlarının bulanıklaşması.
* Test borcu: kritik davranışların otomatik güvenceye bağlanmaması.
* Veri borcu: veri modelinin iş gerçekliğini taşıyamaması, tarihsel tutarsızlıklar.
* Operasyon borcu: gözlemlenebilirlik, alarm ve izleme eksikleri.
* Bilgi borcu: dokümantasyon eksikliği ve kritik bilginin kişilerde kilitlenmesi.

Bu türlerin ortak özelliği aynıdır: bugün görünmez olan risk, yarın değişiklik maliyeti olarak geri döner. Bu nedenle teknik borç “hata” üretmeden de birikebilir. Sistem çalışıyor olabilir; ancak değiştirilebilirlik kapasitesi sessizce azalıyor olabilir <span class="bkz-ref" title="7. Cunningham, W. (1992). The WyCash Portfolio Management System. | 8. Fowler, M. (2018). Technical Debt Quadrant.">(Bkz: 7, 8)</span>.

Buradaki önemli ayrımlardan biri, her teknik borcun kötü niyetli veya irrasyonel bir karar sonucu oluşmamasıdır. Bazı durumlarda organizasyonlar bilinçli olarak kısa vadeli hız kazanımı için teknik borç alabilir. Özellikle erken aşama ürünlerde, kritik teslim tarihlerinde veya belirsiz iş ihtiyaçlarında bu tercih stratejik olabilir. Sorun çoğu zaman borcun varlığından değil; görünmez hale gelmesinden, sürekli ertelenmesinden ve geri ödeme kapasitesinin kaybedilmesinden doğar.

**Örnek:** B2B sipariş yönetim ürünü geliştiren bir ekip, lansmana yetişebilmek için fiyatlama kurallarını konfigürasyon tabanlı bir motor yerine doğrudan uygulama koduna gömdü. İlk müşteri devreye alımı sorunsuz geçti. Ancak takip eden dönemde her kampanya değişikliği kod müdahalesi gerektirdi, test yükü arttı ve sürüm döngüleri uzadı. Ürün doğru çalışmaya devam etse de kararın borç etkisi, değişiklik maliyetinde görünür hale geldi.

---

### 2.4.2 Borcun Birikim Mekanizması: Anapara ve Faiz

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

### 2.4.3 Teknik Borcun Operasyonel Belirtileri

Teknik borç çoğu zaman tek bir olay olarak değil, tekrar eden operasyonel desenler şeklinde görünür. Tekil gecikmeler veya tek seferlik hatalar borcun kanıtı değildir; ancak belirli belirtiler sürekli hale gelmeye başladığında, borç etkisi sistem davranışına dönüşür.

Bu belirtiler tipik olarak şu şekilde ortaya çıkar:

* Tahmin doğruluğunun sprintten sprint’e bozulması.
* Küçük kapsamlı işlerde bile belirsizlik payının büyümesi.
* Kritik modüllerde sahiplik korkusu ve değişiklikten kaçınma davranışı.
* Üretim sonrası düzeltme oranlarında artış.
* Yeni özellik kapasitesinin bakım ve devamlılık ile ilgili işlere kayması.
* Geliştiricilerin zamanının giderek daha büyük kısmını etki analizi ve doğrulama faaliyetlerine ayırması.

Buradaki kritik ayrım şudur: bu tablo çoğu zaman ekip disiplininin zayıflığından değil, sistemin değişime verdiği direncin artmasından kaynaklanır. Dışarıdan “yavaşlama” gibi görünen şey, içeride risk birikimine karşı gelişen savunmacı davranıştır <span class="bkz-ref" title="11. McConnell, S. (2004). Code Complete (2nd ed.).">(Bkz: 11)</span>.

Teknik borç yalnızca sistemi değil, ekiplerin zihinsel çalışma biçimini de etkiler. Her değişiklik öncesinde büyüyen etki analizi ihtiyacı, geliştiricilerin dikkat kapasitesini rutin bakım faaliyetlerine tüketmeye başlar. Zamanla ekipler yeni özellik geliştirmekten çok, mevcut davranışı güvenli biçimde korumaya odaklanır.

**Örnek:** Üretim planlama yazılımı geliştiren bir ekip üç ardışık döngüde teslim hedefini kaçırdı. İlk yorum planlama hatasıydı. İnceleme derinleştirildiğinde, gecikmelerin ortak nedeninin eski planlama çekirdeğine yapılan küçük değişikliklerin beklenmedik yan etkiler üretmesi olduğu görüldü. Ekip zamanı, yeni fonksiyon geliştirmekten çok mevcut davranışı doğrulamaya ve risk analizine gidiyordu. Operasyonel belirtiler, teknik borcun birikmiş etkisini görünür hale getirmişti.

---

### 2.4.4 Neden Geç Fark Edilir?

Teknik borç, etkisini gecikmeli gösterdiği için organizasyonel algı tarafından çoğu zaman yanlış sınıflandırılır. Kısa vadede görünen metrikler güçlü olabilir: zamanında çıkan sürümler, kapanan iş sayısı veya artan özellik teslim kapasitesi. Borcun maliyeti ise dağıtık ve zamana yayılan biçimde ortaya çıkar.

Geç fark edilmenin başlıca nedenleri şunlardır:

* Ölçüm asimetrisi: teslimat çıktısı ölçülür, değişiklik maliyeti sınırlı izlenir.
* Nedensellik kopukluğu: bugünkü gecikmenin aylar önceki karardan kaynaklandığı net görülmez.
* Başarı yanılsaması: erken dönem teslim başarısı, yapısal riski görünmez kılar.
* Yerel optimizasyon: ekipler kendi hedeflerini tuttururken sistem düzeyinde verim düşebilir.

Bu nedenle teknik borç çoğu kurumda “aniden ortaya çıkan” bir sorun gibi algılanır. Oysa çoğu durumda sorun ani değildir; yalnızca birikim görünür eşiği geçmiştir. Eşik aşıldığında maliyet artışı hızlanır ve geri dönüş daha zor hale gelir <span class="bkz-ref" title="8. Fowler, M. (2018). Technical Debt Quadrant. | 9. Forsgren, N., Humble, J., &amp; Kim, G. (2018). Accelerate.">(Bkz: 8, 9)</span>.

**Örnek:** Kurumsal insan kaynakları yazılımının ürün yöneticisi, Jira dashboard’unda aylık teslim edilen özellik sayısını izliyordu. İlk dönemde metrikler olumlu görünüyordu. Ancak zamanla müşteri taleplerine yanıt süresi uzamaya, sprint içi belirsizlik büyümeye ve acil düzeltme oranı artmaya başladı. İlk yorum talep yoğunluğu oldu. Daha sonra yapılan analiz, asıl sapmanın teknik borç kaynaklı değişiklik maliyeti artışından geldiğini gösterdi. Görünür teslim metrikleri güçlü kaldığı için problem uzun süre fark edilmemişti.

Teknik borcun geç fark edilmesi, onu yalnızca teknik bir konu olmaktan çıkarır ve aynı zamanda bir görünürlük ve algı problemine dönüştürür. Bölümün geri kalanında görüleceği gibi, bu gecikmeli algı yazılım ekipleriyle diğer ekipler arasındaki gerilimin temel tetikleyicilerinden biridir.


---


