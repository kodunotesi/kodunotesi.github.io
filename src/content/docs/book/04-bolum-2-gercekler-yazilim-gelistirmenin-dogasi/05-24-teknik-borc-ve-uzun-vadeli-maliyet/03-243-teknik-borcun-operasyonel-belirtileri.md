---
title: "2.4.3 Teknik Borcun Operasyonel Belirtileri"
sidebar:
  hidden: true
---

Teknik borç çoğu zaman tek bir olay olarak değil, tekrar eden operasyonel desenler şeklinde görünür. Tekil gecikmeler veya tek seferlik hatalar borcun kanıtı değildir; ancak belirli belirtiler sürekli hale gelmeye başladığında, borç etkisi sistem davranışına dönüşür.

Bu belirtiler tipik olarak şu şekilde ortaya çıkar:

* Tahmin doğruluğunun sprintten sprint’e bozulması.
* Küçük kapsamlı işlerde bile belirsizlik payının büyümesi.
* Kritik modüllerde sahiplik korkusu ve değişiklikten kaçınma davranışı.
* Üretim sonrası düzeltme oranlarında artış.
* Yeni özellik kapasitesinin bakım ve devamlılık ile ilgili işlere kayması.
* Geliştiricilerin zamanının giderek daha büyük kısmını etki analizi ve doğrulama faaliyetlerine ayırması.

Buradaki kritik ayrım şudur: bu tablo çoğu zaman ekip disiplininin zayıflığından değil, sistemin değişime verdiği direncin artmasından kaynaklanır. Dışarıdan "yavaşlama" gibi görünen şey, içeride risk birikimine karşı gelişen savunmacı davranıştır <span class="bkz-ref" title="11. McConnell, S. (2004). Code Complete (2nd ed.).">(Bkz: 11)</span>.

Teknik borç yalnızca sistemi değil, ekiplerin zihinsel çalışma biçimini de etkiler. Her değişiklik öncesinde büyüyen etki analizi ihtiyacı, geliştiricilerin dikkat kapasitesini rutin bakım faaliyetlerine tüketmeye başlar. Zamanla ekipler yeni özellik geliştirmekten çok, mevcut davranışı güvenli biçimde korumaya odaklanır.

**Örnek:** Üretim planlama yazılımı geliştiren bir ekip üç ardışık döngüde teslim hedefini kaçırdı. İlk yorum planlama hatasıydı. İnceleme derinleştirildiğinde, gecikmelerin ortak nedeninin eski planlama çekirdeğine yapılan küçük değişikliklerin beklenmedik yan etkiler üretmesi olduğu görüldü. Ekip zamanı, yeni fonksiyon geliştirmekten çok mevcut davranışı doğrulamaya ve risk analizine gidiyordu. Operasyonel belirtiler, teknik borcun birikmiş etkisini görünür hale getirmişti.

---



