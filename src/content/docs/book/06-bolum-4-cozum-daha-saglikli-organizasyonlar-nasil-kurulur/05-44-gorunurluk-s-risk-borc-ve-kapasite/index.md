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

**Örnek:** Ankara'da bir ERP şirketinde yazılım ekibi sürekli "neden daha az özellik çıkıyor" sorusuyla karşılaşıyordu. Ekip, sprint çıktısını üç kategoriye ayırarak raporlamaya başladı: ürün geliştirme, teknik iyileştirme ve risk azaltma. İlk raporlarda zamanın önemli bir kısmının eski modüllerdeki regresyonları önlemeye, manuel veri düzeltmelerine ve test altyapısı eksiklerini kapatmaya gittiği görüldü. Bu görünürlük, tartışmayı "ekip yavaş mı" sorusundan "kapasiteyi tüketen sistemsel maliyetler neler" sorusuna taşıdı. Sonraki çeyrekte teknik borç azaltımı için planlı kapasite ayrıldı ve canlı hata sayısı düştükçe feature geliştirme hızı da arttı.

Görünürlük, güvenin ön koşuludur; fakat görünürlük tek başına güven üretmez. Görünür hale gelen bilginin nasıl kullanıldığı belirleyicidir. Eğer teknik borç görünür olduğunda ekip suçlanıyorsa, bir sonraki sefer borç daha az görünür olur. Eğer risk görünür olduğunda ekip destek alıyorsa, riskler daha erken paylaşılır. Yüksek performanslı yazılım organizasyonlarında teslimat hızı, kalite ve operasyonel güvenilirlik birlikte ele alınır; görünürlük bu bütünün yönetilebilmesi için temel girdilerden biridir (Bkz: 3).

Bu yüzden görünürlük sisteminin amacı kontrol değil, ortak karar kalitesini artırmak olmalıdır. Sürekli teslimat pratiklerinde de amaç yalnızca daha sık yayın yapmak değil, değişiklikleri küçük, izlenebilir ve geri döndürülebilir hale getirerek riski yönetilebilir kılmaktır (Bkz: 7).

---

