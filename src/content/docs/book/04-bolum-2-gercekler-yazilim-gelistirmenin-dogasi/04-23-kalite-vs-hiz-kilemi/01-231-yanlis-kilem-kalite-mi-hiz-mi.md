---
title: "2.3.1 Yanlış İkilem: Kalite mi, Hız mı?"
sidebar:
  hidden: true
---

Kalite ile hız arasında seçim yapılabileceği inancı, yazılım geliştirmenin nasıl çalıştığına dair köklü bir yanlış anlamadan beslenir. Bu inanç şu üstü kapalı varsayıma dayanır: daha hızlı teslimat yapabilmek için kaliteden ödün verilebilir.

Bu varsayım kısa vadede doğru gibi görünür. Testler atlanırsa teslim tarihi öne çekilebilir. Kod incelemesi yapılmadan da geliştirme tamamlandı sayılabilir. Hata yönetimi ertelenirse özellik daha hızlı yayına girer. Ancak bu kazanımlar gerçek değil, borçlanmadır. Elde edilen hız, geri ödenecek bir kredi gibi birikmektedir; ve yazılım geliştirmede bu kredinin faizi son derece yüksektir.

Sorunun temelinde, kalite ile hızın birbirinin alternatifi olduğuna dair yanlış kabul vardır. Oysa yazılım geliştirmede kalite çoğu zaman hızın karşıtı değil, ön koşuludur. Temiz mimari, anlaşılır kod, güvenilir testler ve öngörülebilir sistem davranışı; ekiplerin değişiklikleri daha hızlı ve daha güvenli yapabilmesini sağlar. Düşük kaliteli sistemlerde ise her değişiklik daha fazla risk, daha fazla koordinasyon ihtiyacı ve daha fazla doğrulama maliyeti doğurur. Zamanla ekiplerin enerjisi yeni özellik geliştirmeye değil, mevcut sistemi ayakta tutmak için harcanmaya başlar.

Bu nedenle kaliteyi azaltmak çoğu zaman hızlanmak anlamına gelmez; gelecekteki geliştirme kapasitesini tüketmek anlamına gelir. İlk teslim tarihi öne çekilmiş olabilir, ancak sonraki her değişiklik daha pahalı, daha riskli ve daha yavaş hale gelir. Sistem karmaşıklaştıkça ekiplerin öngörü kapasitesi azalır; teslim süreleri uzar ve acil durum müdahaleleri normal çalışma biçimine dönüşür.

DeMarco ve Lister bu dinamiği çalışmalarında ayrıntılı biçimde inceler: kaliteyi düşürmek kısa vadede hız kazandırır gibi görünse de orta vadede ekipleri daha yavaş, daha kırılgan ve daha az öngörülebilir hale getirir <span class="bkz-ref" title="3. Taleb, N. N. (2007). The Black Swan.">(Bkz: 3)</span>. Öte yandan yüksek kaliteli yazılım geliştiren ekiplerin uzun vadede daha hızlı teslimat yaptığı; çünkü değişiklik maliyetlerinin, hata düzeltme sürelerinin ve koordinasyon yükünün düşük kaldığı görülmektedir.

**Örnek:** Bir üretim yönetim yazılımı geliştiren ekip, yatırımcı sunumu öncesinde teslim tarihine yetişebilmek için otomatik testlerin önemli bir kısmını devre dışı bırakarak sistemi yayına aldı. İlk sürüm planlanandan iki hafta önce teslim edildi ve kısa vadede süreç başarılı görünüyordu.

Ancak sonraki aylarda ekip her yeni sürüm öncesinde uzun manuel test süreçleri yürütmek zorunda kaldı. Daha önce dakikalar içinde doğrulanabilen değişiklikler artık günler süren kontroller gerektiriyordu. Küçük özellik eklemeleri bile beklenmedik yan etkilere neden oluyor, ekip her yayında yeni hataların ortaya çıkmasından çekiniyordu. Zamanla geliştirme hızı giderek düştü; çünkü ekip yeni özellik geliştirmekten çok, sistemin mevcut davranışını korumaya çalışıyordu.

Başlangıçta hız kazanmak için verilen kalite tavizi, birkaç ay içinde teslimat hızını düşüren yapısal bir probleme dönüştü. Sorun yalnızca hatalar değildi; sistemin değiştirilebilirliğinin azalmasıydı.

---



