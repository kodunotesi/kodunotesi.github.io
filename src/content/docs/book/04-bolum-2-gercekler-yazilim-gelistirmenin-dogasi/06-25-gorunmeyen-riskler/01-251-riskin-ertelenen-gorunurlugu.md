---
title: "2.5.1 Riskin Ertelenen Görünürlüğü"
sidebar:
  hidden: true
---

Bazı riskler, ancak belirli koşullar oluştuğunda kendini gösterir. Bu durum, yazılım geliştirmede özel bir sorun oluşturur: bir sistem aylarca sorunsuz çalışabilir, ancak belirli bir kullanım yoğunluğuna ulaştığında veya beklenmedik bir senaryoyla karşılaştığında kritik bir başarısızlık üretebilir. Bu tür risklerin en tehlikeli özelliği, olağan çalışma dönemlerinde hiçbir uyarı işareti vermemesidir.

Taleb'in "Kara Kuğu" kavramı bu dinamiği açıklar: nadir görülen, büyük etkili ve önceden tahmin edilmesi güç olan bu durumlar, gerçekleştikten sonra 'zaten olacağı belliydi' şeklinde yorumlanan olaylardır. <span class="bkz-ref" title="3. Taleb, N. N. (2007). The Black Swan.">(Bkz: 3)</span>. Yazılım sistemlerinde de benzer mekanizma işler. Sistem tasarımcıları belirli koşulları test eder; ancak test edilmemiş senaryolar ilerleyen süreçte kritik başarısızlık noktalarına dönüşebilir.

Simon'ın tasarım pratiği üzerine geliştirdiği çerçeve bu konuda bir çıkış noktası sunar: tasarımcılar sınırlı bilgiyle kararlar alır ve bu sınırlılık, potansiyel risklerin sistematik biçimde tanımlanmasını güçleştirir <span class="bkz-ref" title="5. Simon, H. A. (1996). The Sciences of the Artificial.">(Bkz: 5)</span>. Bir yazılım sistemi tasarlanırken gelecekteki tüm kullanım senaryolarını öngörmek mümkün değildir. Bu nedenle test edilmemiş koşullar, bir ihmal değil; tasarım sürecinin doğal bir sınırlılığı olarak değerlendirilmelidir.

**Örnek:** Bir e-ticaret platformunun sipariş işleme sistemi, aylarca kararlı biçimde çalıştı. Ekip, olağan yük koşullarında kapsamlı testler yürütmüştü. Ancak mevsimsel bir kampanya döneminde günlük sipariş hacmi normalin beş katına çıktığında sistem yavaşlamaya başladı ve bir noktada yanıt vermez hale geldi. Kök neden incelemesi, sorunun veritabanı bağlantı havuzunun belirli bir eşiğin üzerindeki eş zamanlı talepleri karşılayacak şekilde yapılandırılmamış olmasından kaynaklandığını ortaya koydu. Bu durum, geliştirme ortamında hiç gözlemlenmemişti; yük testleri üretim koşullarını tam olarak simüle etmemişti. Risk, aylar boyunca görünmez kalmış ve yalnızca belirli bir eşiğin aşılmasıyla gün yüzüne çıkmıştı.

---



