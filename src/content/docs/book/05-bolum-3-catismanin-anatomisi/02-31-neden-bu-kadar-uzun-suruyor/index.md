---
title: "3.1 \"Neden Bu Kadar Uzun Sürüyor?\""
---

Bu soru, yazılım ekiplerinin en sık duyduğu cümlelerden biridir. Cümlenin görünen biçimi basittir; ancak organizasyonel etkisi çoğu zaman güçlüdür. Birçok ortamda bu soru teknik durum tespiti için değil, takvim baskısı altında hesap sorma refleksiyle sorulur.

Bu nedenle soru, içerikten önce ilişki düzeyinde etkisini gösterir. Eğer ekipler arasında önceki dönemlerden gelen bir güven erozyonu varsa, aynı cümle bilgi talebinden çok performans ithamı gibi algılanır.

---

### 3.1.1 Soru mu, Sinyal mi?

"Neden bu kadar uzun sürüyor?" ifadesi dilbilgisel olarak bir sorudur; ancak kurumsal bağlamda sıklıkla bir sinyal işlevi görür. Bu sinyalin alt mesajı çoğu zaman şudur: "Bu gecikmeyi savunmanız gerekecek."

Bu soru merak amacıyla sorulduğunda açıklama üretir; hesap sorma amacıyla sorulduğunda savunma üretir. Aynı cümle, niyete ve ortama bağlı olarak iki farklı psikolojik etki yaratır. Bu ayrımın farkına varılmadan sorulduğunda tarafların birbirinin niyetini yanlış okumasına neden olur.

Yazılım ekipleri bu soruyu geçmiş deneyimlerin etkisiyle tehdit sinyali olarak algılayabilir. İş tarafı ise teknik açıklamanın neden netleşmediğini anlamakta zorlanır. Böylece çatışma, teknik kapsam konuşulmaya başlanmadan iletişim tonunda başlar.

---

### 3.1.2 Zaman Algısı Çatışması

Çatışmanın ikinci katmanı zaman modelidir. İş birimleri zamanı takvim üzerinden yönetir: tarih, taahhüt, kilometre taşı. Yazılım ekipleri zamanı belirsizlik ve risk üzerinden değerlendirir: keşif süresi, etki analizi, doğrulama maliyeti.

Takvim dili kesinlik talep eder. Teknik dil olasılıklar ve belirsizlik içeren aralıklar üretir. Bu iki model birbirine dönüştürülmediğinde, taraflar aynı teslimat meselesini farklı gerçekliklerde tartışır.

Bu nedenle "uzun sürüyor" yargısı çoğu durumda mutlak bir olgu değil, ölçüm çerçevesi farkıdır. Bir taraf için sapma olan şey, diğer taraf için öngörülemeyen kapsamın normal sonucu olabilir.

---

### 3.1.3 Tahminin Taahhüde Dönüşmesi

Çatışmanın kritik kırılma noktası burada oluşur: teknik ekip tarafından belirsizlik aralığı olarak verilen tahmin, yönetim zincirinde net tarih dilimlerine dönüşür. Aralıklar sadeleştirilip takvim üzerinde sabitlendiğinde bazı riskler görünmez hale gelir. Katı takvimleştirme, belirsizlik aralığını doğuran bağlamı bozar, hatta tamamen kaybettirebilir.

Risk görünmez olduğunda ise teslimat sapması teknik keşif sonucu olarak değil, sözünü tutmama olarak yorumlanır. Bu yorum çoğu zaman niyetle değil, raporlama baskısıyla üretilir. Ancak etkisi niyetten bağımsızdır.

McConnell’ın tahminleme yaklaşımı bu durumu açık biçimde doğrular: erken dönem tahminleri kesin plan değil, belirsizlik altında karar girdisidir <span class="bkz-ref" title="1. McConnell, S. (2006). Software Estimation: Demystifying the Black Art.">(Bkz: 1)</span>. Tahminin statüsü korunmadığında çatışma yapısal olarak kaçınılmaz hale gelir.

---

### 3.1.4 Teknik Açıklama Neden İkna Etmiyor?

Yazılım ekipleri gecikmeyi genellikle teknik bağlamla açıklar: bağımlılık etkisi, veri tutarlılığı riski, test kapsamı, geriye dönük uyumluluk. Bu açıklamalar teknik olarak doğru olabilir; ancak iş kararı üretmek için iletişimi doğru yapılmadığında ikna gücü düşer.

Sorun teknik doğruluk değil, bağlam tercümesidir. İş tarafı "ne zaman" ve "neye mal olur" cevabı ararken, teknik ekip "neden" ve "nasıl" cevabı üretir. Soru-cevap ekseni çakışmadığında karşı taraf açıklamayı "karmaşıklaştırma" olarak algılayabilir.

Bu aşamadan sonra içeriğin doğruluğundan çok iletişimin tonu belirleyici olur. Toplantı, çözüm arayışından pozisyon savunmasına kayar.

---

### 3.1.5 Vaka: Raporlama Talebinin Güven Krizine Dönüşmesi

Kurumsal bir SaaS ürününde satış raporlarına segment bazlı filtre eklenmesi talep edildi. Talep, ilk toplantıda arayüz odaklı küçük bir geliştirme gibi değerlendirildi ve kısa sürecek bir teslimat beklentisi oluştu.

Teknik analiz ilerledikçe talebin yalnızca arayüzü değil, veri toplama akışını, yetki modelini ve sorgu performansını etkilediği görüldü. Ekip süreyi aralık olarak verdi; aralık, yönetim raporunda tek tarihe dönüştürüldü.

Geliştirme sürecinde doğrulama ihtiyacı arttığında iş tarafı bunu hız kaybı olarak yorumladı; teknik ekip ise risk yönetimi olarak gördü. Teslimat gecikince tartışma teknik kapsamdan çıktı ve güven tartışmasına döndü. Sonraki planlamalarda taraflar aynı veriye daha düşük güvenle bakmaya başladı.

Bu vaka, "süre" tartışmasının çoğu durumda teknik zorluktan değil, yorum farkının yönetilememesinden krizleştiğini gösterir.

---
### 3.1.6 "Yapay Zekâ Varken Neden Hâlâ Uzun Sürüyor?"

Yapay zekâ (YZ) destekli araçların yaygınlaşması, "neden bu kadar uzun sürüyor?" sorusunu ortadan kaldırmaz; sorunun tonunu sertleştirir. Kod yazımının görünür biçimde hızlandığı bir ortamda, teslimat süresindeki her gecikme daha az anlaşılır hale gelir. İş birimleri için mantık basittir: kodu artık makine yazıyorsa, süre kısalmalıdır.

Bu beklentinin gözden kaçırdığı nokta, YZ'nin işin hangi kısmını hızlandırdığıdır. YZ en çok, cevabı bilinen işi hızlandırır. Ancak bu bölümde ele alınan gecikmelerin önemli bir kısmı cevabı bilinmeyen işten kaynaklanır: belirsiz gereksinimler, beklenmeyen bağımlılıklar, yalnızca canlı ortamda ortaya çıkan davranışlar. Bu tür işlerde YZ makul görünen çözüm önerilerini çok hızlı üretebilir; fakat hangisinin doğru olduğunu anlamak yine ölçüm, deneme ve doğrulama gerektirir. YZ çağında hipotez ucuzlamıştır; ölçüm ise pahalı kalmıştır.

Buna ek olarak YZ ile çalışmanın kendine özgü bir zaman dinamiği vardır. Her çıktı yeni bir küçük iyileştirme fırsatı yaratır; deneme döngüsü saniyelere indiği için doğal bir durma noktası kaybolabilir. Ekip sürekli ilerliyor gibi görünürken iş uzun süre "neredeyse bitti" durumunda kalabilir. Bu durum hem tahminlerin güvenilirliğini düşürür hem de 3.1.3'te ele alınan tahminin taahhüde dönüşmesi sorununu ağırlaştırır.

**Örnek:** Bir geliştirici, bir veri akışı (streaming) özelliğini YZ destekli bir kodlama ajanıyla birkaç saat içinde geliştirdi. Ancak özellik canlı koşullarda belirli bir noktadan sonra beklenmedik biçimde duruyordu. Ajan art arda yedi farklı, makul görünen çözüm önerdi; her biri uygulandı, denendi ve sorunu çözmediği görüldü. Sorunun gerçek kaynağı ancak sistematik ölçümle bulunabildi: problem uygulamanın kendisinde değil, dış bir servisin veri gönderme biçimindeydi. Özelliği geliştirmek birkaç saat sürmüştü; çalışır hale getirmek ise bunun iki katından fazla. Dışarıdan bakan biri için bu, "YZ varken neden bu kadar sürdü?" sorusunu doğuruyordu.

---


