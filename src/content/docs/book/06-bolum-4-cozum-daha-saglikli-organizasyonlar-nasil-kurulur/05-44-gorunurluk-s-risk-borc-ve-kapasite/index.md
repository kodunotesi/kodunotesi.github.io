---
title: "4.4 Görünürlük: İş, Risk, Borç ve Kapasite"
slug: book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/05-44-gorunurluk-is-risk-borc-ve-kapasite
---

Yazılım ekiplerinin yaşadığı temel problemlerden biri, yaptıkları işin önemli bir bölümünün görünmez olmasıdır. Kod yazmak görünürdür; ancak kodu güvenli biçimde değiştirebilmek için yapılan analiz, test, refactoring, mimari değerlendirme, performans incelemesi, güvenlik kontrolü ve teknik borç temizliği çoğu zaman görünmez kalır.

Görünmeyen iş, yok sayılan iştir. Yok sayılan iş ise planlamada yer bulamaz. Planlamada yer bulamayan iş, ya gizlice yapılır ya ertelenir ya da kriz anında çok daha yüksek maliyetle geri döner.

Bu nedenle sağlıklı organizasyonlar yalnızca feature teslimatını değil, yazılım üretimini mümkün kılan tüm iş türlerini görünür hale getirir.

En basit görünürlük modeli, işi dört kategoriye ayırmaktır:

* Yeni değer üretimi: Yeni özellikler, ürün geliştirmeleri, müşteri ihtiyaçları.
* Sistem sağlığı: Refactoring, test altyapısı, performans iyileştirme, mimari sadeleşme.
* Risk azaltma: Güvenlik, ölçeklenebilirlik, gözlemlenebilirlik, yedeklilik, veri bütünlüğü.
* Operasyonel destek: Canlı hatalar, müşteri eskalasyonları, veri düzeltmeleri, geçiş desteği.

Bu ayrım, teknik işlerin savunulmasını kolaylaştırır. Çünkü teknik çalışma artık "görünmeyen geliştirici tercihi" değil, sistem kapasitesinin korunması için yapılan planlı yatırım olarak görülür.

Ancak görünürlük yalnızca iş kategorisiyle sınırlı olmamalıdır. Risk ve kapasite de görünür olmalıdır.

Risk görünürlüğü için her büyük işin yanında şu bilgiler yer alabilir:

* Teknik belirsizlik düzeyi.
* Bağımlı ekip veya sistemler.
* Geri dönüş zorluğu.
* Test ve doğrulama ihtiyacı.
* Canlı ortam etkisi.
* Operasyonel hazırlık ihtiyacı.

Kapasite görünürlüğü için ise yalnızca kaç geliştiricinin çalıştığı değil, kapasitenin neye harcandığı gösterilmelidir. Bir ekip haftanın yarısını canlı destek, veri düzeltme ve müşteri eskalasyonlarına harcıyorsa, o ekibin feature üretim kapasitesi kağıt üzerindeki kişi sayısından çok daha düşüktür.

**Örnek:** Bir ERP şirketinde yazılım ekibi sürekli "neden daha az özellik çıkıyor" sorusuyla karşılaşıyordu. Ekip, sprint çıktısını üç kategoriye ayırarak raporlamaya başladı: ürün geliştirme, teknik iyileştirme ve risk azaltma. İlk raporlarda zamanın önemli bir kısmının eski modüllerdeki regresyonları önlemeye, manuel veri düzeltmelerine ve test altyapısı eksiklerini kapatmaya gittiği görüldü. Bu görünürlük, tartışmayı "ekip yavaş mı" sorusundan "kapasiteyi tüketen sistemsel maliyetler neler" sorusuna taşıdı. Sonraki çeyrekte teknik borç azaltımı için planlı kapasite ayrıldı ve canlı hata sayısı düştükçe feature geliştirme hızı da arttı.

Görünürlük, güvenin ön koşuludur; fakat görünürlük tek başına güven üretmez. Görünür hale gelen bilginin nasıl kullanıldığı belirleyicidir. Eğer teknik borç görünür olduğunda ekip suçlanıyorsa, bir sonraki sefer borç daha az görünür olur. Eğer risk görünür olduğunda ekip destek alıyorsa, riskler daha erken paylaşılır. Yüksek performanslı yazılım organizasyonlarında teslimat hızı, kalite ve operasyonel güvenilirlik birlikte ele alınır; görünürlük bu bütünün yönetilebilmesi için temel girdilerden biridir <span class="bkz-ref" title="3. Forsgren, N., Humble, J., &amp; Kim, G. (2018). Accelerate.">(Bkz: 3)</span>.

Bu yüzden görünürlük sisteminin amacı kontrol değil, ortak karar kalitesini artırmak olmalıdır. Sürekli teslimat pratiklerinde de amaç yalnızca daha sık yayın yapmak değil, değişiklikleri küçük, izlenebilir ve geri döndürülebilir hale getirerek riski yönetilebilir kılmaktır <span class="bkz-ref" title="7. Humble, J., &amp; Farley, D. (2010). Continuous Delivery.">(Bkz: 7)</span>.

### Yapay Zekâ Çağında Görünürlük

Yapay zekâ (YZ) destekli geliştirme, görünür kılınması gereken iş türlerine yenilerini ekler. Bunların başında doğrulama ve inceleme kapasitesi gelir. YZ ile üretilen kod miktarı arttıkça, bu kodu inceleyen, test eden ve canlıya hazırlayan ekip üyelerinin zamanı sistemin gerçek darboğazına dönüşür. Kapasite görünürlüğü artık yalnızca "kaç geliştirici var?" sorusunu değil, "ne kadar değişikliği güvenle doğrulayabiliyoruz?" sorusunu da yanıtlamalıdır.

İkinci yeni kalem, YZ'nin işletme maliyetidir. YZ araçlarının maliyeti lisans ücretiyle sınırlı değildir; kullanım yoğunluğuna, başarısız denemelere ve ajanların çalışma biçimine göre değişen, öngörülmesi zor bir gider kalemi oluşturur. Bu maliyet görünür değilse, verimlilik kazancının gerçekte ne kadar olduğu da bilinemez. Anlamlı ölçüt, tüketilen kaynak ya da üretilen kod miktarı değil; harcanan kaynak başına kabul edilen ve canlıya ulaşan değişikliktir.

Üçüncü kalem, 2.4.5'te ele alınan anlama borcudur. Risk görünürlüğü listesine "bu değişikliği ekipte kim açıklayabilir?" sorusunu eklemek basit ama etkili bir adımdır. Cevabı olmayan değişiklikler teknik borç gibi izlenmeli ve planlamada karşılığı ayrılmalıdır.

---

