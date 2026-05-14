---
title: "2.5 Görünmeyen Riskler"
---

Yazılım sistemlerinde risklerin önemli bir kısmı, rutin çalışma koşullarında kendini göstermez. Bu riskler; belirli bir yük eşiği aşıldığında, bir güvenlik açığı istismar edildiğinde veya sistem beklenmedik bir kullanım biçimiyle karşılaştığında görünür hale gelir. Ancak bu görünürlük çoğu zaman gecikmeli ve yüksek maliyetli olur. Bu bölüm, yazılım geliştirme sürecinde sıklıkla göz ardı edilen bu risklerin nasıl biriktiğini, neden geç fark edildiğini ve organizasyonlar açısından ne anlam taşıdığını ele almaktadır.

---

### 2.5.1 Riskin Ertelenen Görünürlüğü

Bazı riskler, ancak belirli koşullar oluştuğunda kendini gösterir. Bu durum, yazılım geliştirmede özel bir sorun oluşturur: bir sistem aylarca sorunsuz çalışabilir, ancak belirli bir kullanım yoğunluğuna ulaştığında veya beklenmedik bir senaryoyla karşılaştığında kritik bir başarısızlık üretebilir. Bu tür risklerin en tehlikeli özelliği, olağan çalışma dönemlerinde hiçbir uyarı işareti vermemesidir.

Taleb'in "Kara Kuğu" kavramı bu dinamiği açıklar: nadir görülen, büyük etkili ve önceden tahmin edilmesi güç olan bu durumlar, gerçekleştikten sonra 'zaten olacağı belliydi' şeklinde yorumlanan olaylardır. <span class="bkz-ref" title="3. Taleb, N. N. (2007). The Black Swan.">(Bkz: 3)</span>. Yazılım sistemlerinde de benzer mekanizma işler. Sistem tasarımcıları belirli koşulları test eder; ancak test edilmemiş senaryolar ilerleyen süreçte kritik başarısızlık noktalarına dönüşebilir.

Simon'ın tasarım pratiği üzerine geliştirdiği çerçeve bu konuda bir çıkış noktası sunar: tasarımcılar sınırlı bilgiyle kararlar alır ve bu sınırlılık, potansiyel risklerin sistematik biçimde tanımlanmasını güçleştirir <span class="bkz-ref" title="5. Simon, H. A. (1996). The Sciences of the Artificial.">(Bkz: 5)</span>. Bir yazılım sistemi tasarlanırken gelecekteki tüm kullanım senaryolarını öngörmek mümkün değildir. Bu nedenle test edilmemiş koşullar, bir ihmal değil; tasarım sürecinin doğal bir sınırlılığı olarak değerlendirilmelidir.

**Örnek:** Bir e-ticaret platformunun sipariş işleme sistemi, aylarca kararlı biçimde çalıştı. Ekip, olağan yük koşullarında kapsamlı testler yürütmüştü. Ancak mevsimsel bir kampanya döneminde günlük sipariş hacmi normalin beş katına çıktığında sistem yavaşlamaya başladı ve bir noktada yanıt vermez hale geldi. Kök neden incelemesi, sorunun veritabanı bağlantı havuzunun belirli bir eşiğin üzerindeki eş zamanlı talepleri karşılayacak şekilde yapılandırılmamış olmasından kaynaklandığını ortaya koydu. Bu durum, geliştirme ortamında hiç gözlemlenmemişti; yük testleri üretim koşullarını tam olarak simüle etmemişti. Risk, aylar boyunca görünmez kalmış ve yalnızca belirli bir eşiğin aşılmasıyla gün yüzüne çıkmıştı.

---

### 2.5.2 Performans Riski: Yük Altında Görünen Gerçek

Performans sorunları, yazılım geliştirme sürecinde en sistemli biçimde göz ardı edilen risk kategorilerinden biridir. Geliştirme ortamlarında çalışan sistemler, gerçek kullanım koşullarının küçük bir kesitini simüle eder: veri hacmi sınırlıdır, eş zamanlı kullanıcı sayısı düşüktür ve ağ gecikmeleri genellikle göz ardı edilebilir düzeydedir. Bu koşullarda sorunsuz çalışan bir sistem, canlı ortamda tamamen farklı bir davranış sergileyebilir.

Performans sorunlarının karakteristik özelliği, doğrusal olmayan biçimde ortaya çıkmalarıdır. Bir veritabanı sorgusu, on binlerce kayıt içinden arama yaparken milisaniyeler içinde sonuç döndürebilir. Aynı sorgu, yüz milyonlarca kayıt arasında çalışırken dakikalar alabilir. Bu geçiş ani değildir; belirli bir veri eşiğine ulaşıldığında sistem davranışı dramatik biçimde değişir. Geliştirme ortamında bu eşiğe hiç ulaşılmadıysa sorun görünmez kalır.

McConnell, bu bağlamda savunmacı programlama pratiğinin (defensive programming) önemine dikkat çeker: geliştiricilerin beklenmedik girdi büyüklüklerini, sınır koşullarını ve uç senaryoları sistematik biçimde ele alması gerektiğini vurgular <span class="bkz-ref" title="11. McConnell, S. (2004). Code Complete (2nd ed.).">(Bkz: 11)</span>. Savunmacı programlama yalnızca hata yönetimini değil, sistemin olası kullanım koşullarına hazır olmasını da kapsar.

**Örnek:** Bir kurumsal raporlama sistemi, geliştirme ve test aşamalarında yüz binlerce kayıt içeren veritabanıyla test edilmişti. Sistem bu koşullarda hızlı çalışıyor, raporlar birkaç saniye içinde üretiliyordu. Ancak sistemin canlı ortama alınmasından bir yıl sonra veritabanı on milyonlarca kayda ulaştığında, bazı raporların çalışması dakikalar sürmeye başladı. Sorunun kök nedeni, belirli sorgularda kullanılan join ve filtreleme işlemlerinde doğru indekslerin kullanılmamasıydı. Performans riski, sistemin veri hacmiyle birlikte büyümüş ve yalnızca canlı ortama özgü koşullarda gün yüzüne çıkmıştı.

---

### 2.5.3 Güvenlik Açıkları: Saldırıya Kadar Sessiz

Güvenlik açıkları, yazılım sistemlerinin en karakteristik görünmez riskleri arasındadır. Bir güvenlik açığı, istismar edilene kadar sistemin normal işleyişini bozmaz: hata mesajı üretmez, performansı düşürmez, sistemin görünür davranışını değiştirmez. Sistem yıllarca sorunsuz çalışırken aynı anda ciddi güvenlik zafiyetleri barındırıyor olabilir.

Bu durum, güvenlik açıklarını teknik borçtan bile daha sinsi bir risk kategorisine sokar. Teknik borç zamanla belirti üretir: teslim süreleri uzar, değişiklikler zorlaşır. Güvenlik açıkları ise çoğu zaman herhangi bir belirti vermeden birikir. İstismar gerçekleştiğinde ise sorun genellikle sistem içi teknik bir kriz olarak değil, organizasyonel bir olay olarak yaşanır.

Humble ve Farley, güvenliği teslimat sürecinin ayrılmaz bir parçası olarak ele alır ve güvenlik kontrollerinin kod değişikliklerinin rutin akışına entegre edilmesi gerektiğini vurgular <span class="bkz-ref" title="6. Humble, J., &amp; Farley, D. (2010). Continuous Delivery.">(Bkz: 6)</span>. Bu entegrasyon olmadan güvenlik, proje bitimine ya da bağımsız bir denetim sürecine ertelenir. Oysa güvenlik denetiminin geç yapılması, tespit edilen sorunların düzeltilmesini hem daha pahalı hem de organizasyonel olarak daha maliyetli hale getirir.

**Örnek:** Bir kurumsal insan kaynakları uygulamasında çalışan bilgi sorgulama modülü, yıllarca sorunsuz kullanıldı. Modül, belirli parametreleri alarak veritabanından ilgili kayıtları döndürüyordu. Bağımsız bir güvenlik denetimi sırasında uzmanlar, modülün kullanıcı girdisini yeterince doğrulamadığını ve özel karakterler içeren sorgulara karşı savunmasız olduğunu keşfetti (sql injection). Kötü niyetli bir kullanıcı bu açığı kullanarak yetki gerektiren kayıtlara erişebilirdi. Sistem yıllarca düzgün çalışmış; ancak bu zaafiyet hiç tetiklenmediği için tamamen görünmez kalmıştı. Sorun ancak yapılandırılmış bir güvenlik değerlendirmesi sayesinde keşfedilebildi.

---

### 2.5.4 Ölçeklenebilirlik Eşikleri ve Mimari Sınırlar

Her yazılım sistemi, tasarımı sırasında belirli bir kullanım ölçeğini üstü kapalı veya açık biçimde varsayar. Bu varsayımlar; beklenen kullanıcı sayısını, eş zamanlı işlem hacmini, veri büyüklüğünü ve dış bağımlılıkları kapsar. Sistem bu varsayımlar dahilinde çalıştığı sürece sorunsuz davranır. Varsayımlar aşıldığında ise sistemin mimari sınırları belirgin hale gelir.

Ölçeklenebilirlik sınırlarını özellikle sinsi yapan, bu sınırların aşılana kadar hiçbir belirti vermemesidir. Lehman'ın yazılım evrimi yasaları bu noktada açıklayıcıdır: yazılım sistemleri, değişen kullanım ve çevre koşullarına uyum sağlamazsa giderek daha az kullanışlı hale gelir <span class="bkz-ref" title="10. Lehman, M. M. (1980). Programs, Life Cycles, and Laws of Software Evolution.">(Bkz: 10)</span>. Büyüyen bir organizasyonun sistemleri o büyümeyle birlikte evrimleşemezse ciddi bir operasyonel kriz riski oluşturur.

Mimari sınırlar genellikle şu biçimlerde ortaya çıkar: tek bir bileşenin aşırı yük altında darboğaza dönüşmesi, veri tabanı şemasının yeni kullanım senaryolarını taşıyamaması, sistem bileşenlerinin bağımsız biçimde ölçeklendirilememesi ya da bileşenler arası veri akışının yeni hacmi karşılayamaması. Bu sorunların tamamı tasarım aşamasında öngörülemez; ancak sistemin ölçeğini bilinçli biçimde yönetmeyen ekiplerde büyüme krizlerine dönüşür.

**Örnek:** Bir B2B yazılım şirketinin müşteri yönetim platformu, küçük ve orta ölçekli müşterilere yönelik geliştirilmişti. Sistem, tek bir veritabanı sunucusu üzerinde çalışıyor ve tüm müşterilerin verilerini ortak bir şemada kayıt altında tutuyordu. Bu mimari, on ila yüz müşteri için verimli çalışıyordu. Şirketin büyük kurumsal müşteriler kazanmasıyla birlikte tek bir müşterinin veri hacmi ve işlem yoğunluğu, sistemin toplam kapasitesinin önemli bir bölümünü işgal etmeye başladı. Yüksek hacimli müşterilerin işlemleri, tüm platform kullanıcıları için yanıt sürelerini olumsuz etkiledi. Sorunun çözümü, mimari yapının müşteri bazlı izolasyonu destekleyecek şekilde yeniden tasarlanmasını gerektirdi. Bu dönüşüm hem uzun bir süreye yayıldı hem de sistemin bu geçiş döneminde kararsız biçimde çalışmasına yol açtı.

---

### 2.5.5 Organizasyonel Yansımalar: "Gereksiz" Önlemlerin Mantığı

Yazılım ekiplerinin yük testi yapması, güvenlik denetimleri yürütmesi, mimari kapasite planlaması hazırlaması ve performans profilleme çalışmaları gerçekleştirmesi; bu faaliyetlerle doğrudan ilişki kuramayan paydaş ekipler tarafından zaman zaman aşırı temkinli ya da gereksiz önlemler olarak algılanır. Bu algı, görünmeyen risklerin organizasyonel olarak nasıl değerlendirildiğini yansıtmaktadır.

Ancak bu önlemlerin amacı, bölümün önceki alt başlıklarında ele alınan dinamiklerle birlikte değerlendirildiğinde farklı bir anlam kazanır. Yük testi, canlı kullanım öncesinde sistemin performans karakteristiğini görünür kılmaya çalışır. Güvenlik denetimleri, istismar gerçekleşmeden zafiyetleri tespit etmeye yöneliktir. Kapasite planlaması, olası büyüme senaryolarına karşı sistemin sınırlarını anlamayı amaçlar. Bu faaliyetlerin ortak amacı, görünmez riskleri erken ve kontrollü bir ortamda görünür hale getirmektir.

Forsgren, Humble ve Kim'in araştırması, yüksek performanslı yazılım ekiplerinin yalnızca hızlı teslimat değil, aynı zamanda düşük hata oranı ve kısa sorun çözme süresi ile karakterize edildiğini ortaya koyar <span class="bkz-ref" title="9. Forsgren, N., Humble, J., &amp; Kim, G. (2018). Accelerate.">(Bkz: 9)</span>. Bu bulgu, güvenilirlik odaklı pratiklerin teslimat hızının rakibi değil, uzun vadeli geliştirme kapasitesinin ön koşulu olduğunu göstermektedir. Henüz tanımlanmamış riskler üzerine çalışmak, kriz yönetimi için harcanacak kaynakları stratejik bir yatırıma dönüştürür.

**Örnek:** Bir fintech şirketinin altyapı ekibi, her büyük canlıya çıkış öncesinde iki günlük bir stabilite penceresi uyguluyordu. Bu dönemde sistem olağan yükün üzerinde test ediliyor, güvenlik kontrollerinden geçiriliyor ve olası başarısızlık noktaları gözlemleniyordu. Ürün ve iş geliştirme ekipleri zaman zaman bu süreci teslimatı yavaşlatan bir engel olarak değerlendirdi. Ancak bir yayın döngüsünde stabilite testleri sırasında, yalnızca yüksek eş zamanlı yük altında tetiklenen bir veri tutarsızlığı senaryosu tespit edildi. Sorunun canlı ortamda ortaya çıkmış olması, hem veri bütünlüğü hem de müşteri güveni açısından ciddi bir krize dönüşebilirdi. Görünüşte teslimatı yavaşlatan bu süreç, aslında görünmez bir riski üretim öncesinde görünür kılmıştı.

---


