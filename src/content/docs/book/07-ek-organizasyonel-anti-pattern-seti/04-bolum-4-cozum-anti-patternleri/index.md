---
title: "Bölüm 4: Çözüm Anti-Pattern'leri"
---

### "Daha İyi İletişim" Çözüm Sanılır

**Belirti:** Yapısal problemler, daha fazla toplantı veya daha sık raporlama ile çözülmeye çalışılır.

**Neden sorun?** Ortak gerçeklik, karar mekanizması ve sorumluluk netliği yoksa iletişim miktarı artsa da çatışma devam eder.

**Örnek:** Haftalık toplantılar ikiye çıkarıldı, ancak karar bağımlılıkları ve öncelik çatışmaları çözülmedi.

**Daha sağlıklı soru:** Hangi sistemsel belirsizlik iletişim problemi gibi görünüyor?

### Memnuniyet Beklenti Yönetimi Sanılır

**Belirti:** Müşteriyi veya yönetimi kısa vadede memnun etmek için iyimser sözler verilir.

**Neden sorun?** Gerçekçi olmayan sözler kısa vadede rahatlık sağlar, uzun vadede güven kaybı üretir.

**Örnek:** Sürekli erken tarih verildi, sürekli gecikildi ve sonunda müşterinin güveni azaldı.

**Daha sağlıklı soru:** Verdiğimiz söz hangi varsayımlara ve risklere dayanıyor?

### Her Müşteri Özeldir Yaklaşımı

**Belirti:** Her müşteri talebi özel geliştirme olarak ele alınır.

**Neden sorun?** Ürün zamanla standart davranıştan uzaklaşır, kod tabanı parçalanır, test ve destek maliyeti artar.

**Örnek:** Her büyük müşteri için farklı kod yolu oluşturuldu; birkaç yıl sonra yeni özellik geliştirmek tüm varyantları test etmeyi gerektirdi.

**Daha sağlıklı soru:** Bu ihtiyaç ürün standardını genişletmeli mi, yoksa konfigürasyonla mı çözülmeli?

### Sahiplik Yoktur

**Belirti:** Sorumluluk birçok ekibe dağılmıştır, fakat sonucun uçtan uca sahibi yoktur.

**Neden sorun?** Problemler ekip arayüzlerinde kaybolur. Herkes kendi parçasını tamamladığını düşünür, ancak bütün sağlıklı çalışmaz.

**Örnek:** Canlı hata sonrası ürün, yazılım, test ve operasyon ekipleri kendi sorumluluk alanının tamamlandığını söyledi; fakat müşteri etkisi hâlâ devam ediyordu.

**Daha sağlıklı soru:** Bu ürün alanının uçtan uca sağlığını kim izliyor ve iyileştiriyor?

### Yol Haritası Kesin Plan Olarak Görülür

**Belirti:** Roadmap değişmeyen bir söz gibi ele alınır.

**Neden sorun?** Roadmap aslında stratejik varsayımların zamana yayılmış halidir. Pazar, müşteri, teknik risk veya kapasite değiştiğinde güncellenmelidir.

**Örnek:** Yeni regülasyon ve müşteri geri bildirimi gelmesine rağmen roadmap değişmedi; ekip gerçeklikten kopmuş bir plana göre çalışmaya zorlandı.

**Daha sağlıklı soru:** Roadmap'teki hangi varsayımlar değişti ve bu değişim hangi kararları etkiliyor?

### KPI'lar Bağımsız Tanımlanır

**Belirti:** Her ekip kendi hedefini optimize eder, fakat hedefler birbirini desteklemez.

**Neden sorun?** Uyumlu olmayan KPI'lar ekipleri karşı karşıya getirir. Bir ekibin başarısı diğer ekibin maliyetine dönüşebilir.

**Örnek:** Satış yeni müşteri sayısını artırdı, ürün özel talepleri kabul etti, yazılım karmaşıklıkla boğuştu, destek yükü arttı.

**Daha sağlıklı soru:** Bu hedefler sistemin bütününde hangi davranışı teşvik ediyor?

### Teknik Gerçeklik Görünmezdir

**Belirti:** Mimari sınırlar, teknik borç, bağımlılıklar ve riskler karar masasına yeterince taşınmaz.

**Neden sorun?** Eksik gerçeklikle alınan kararlar, ileride gecikme veya kalite problemi olarak geri döner.

**Örnek:** Mimari sınırlar dikkate alınmadan müşteri taahhüdü verildi; geliştirme sırasında kapsam dönüşüm projesine dönüştü.

**Daha sağlıklı soru:** Bu kararın teknik gerçekliği nedir ve hangi riskleri kabul ediyoruz?

### Organizasyon Değişmeden Sonuç Beklenir

**Belirti:** Aynı yapı, aynı hedefler ve aynı karar mekanizmaları korunurken farklı sonuçlar beklenir.

**Neden sorun?** Sistem aynı kaldığında davranışlar da büyük ölçüde aynı kalır. Kalıcı sonuç için sistemi oluşturan teşvikler, görünürlük ve sorumluluk mekanizmaları değişmelidir.

**Örnek:** Süreç değişmeden yalnızca daha hızlı teslimat hedefi kondu; sonuç daha fazla stres, daha fazla hata ve daha fazla gecikme oldu.

**Daha sağlıklı soru:** Beklediğimiz yeni sonucu hangi yeni sistem davranışı üretecek?

### Yapay Zekâ Eklemek Süreci Düzeltir

**Belirti:** Teslimat sorunlarına çözüm olarak YZ araçları satın alınır; süreç, onay ve koordinasyon yapısı değişmeden kalır.

**Neden sorun?** Tanımsız bir süreci hızlandırmak kaosu da hızlandırır. Darboğaz kod yazmada değilse kazanç görünmez.

**Örnek:** YZ araçları yaygınlaştı ve tamamlanan görev sayısı arttı; ancak değişiklikler onay ve test kuyruğunda beklemeye devam etti.

**Daha sağlıklı soru:** Darboğazımız nerede ve YZ'yi o darboğazı giderecek biçimde mi kullanıyoruz?

### Yapay Zekâ Kullanım Oranı Başarı Ölçütüdür

**Belirti:** Kodun yüzde kaçının YZ ile yazıldığı ya da açılan değişiklik sayısı gibi çıktı metrikleri hedef haline getirilir.

**Neden sorun?** Bu metrikler kolayca şişirilebilir; değerle, kararlılıkla ve değişiklik maliyetiyle ilişkileri zayıftır.

**Örnek:** YZ kullanım hedefi konan ekiplerde değişiklik sayısı arttı; geri alınan değişikliklerin oranı da arttı.

**Daha sağlıklı soru:** Hangi değişiklikler kabul edildi, canlıya ulaştı ve beklenen değeri üretti?

### Yapay Zekâ ile Küçülmek Verimliliktir

**Belirti:** YZ kazanımı yalnızca kişi sayısını azaltma fırsatı olarak görülür.

**Neden sorun?** Maliyet azalırken alan bilgisi, kurumsal hafıza ve yeni başlayanların yetişme hattı da kaybolur.

**Örnek:** Yeni başlayan alımlarını durduran bir organizasyon, iki yıl sonra kritik modülleri devralacak kimseyi bulamadı.

**Daha sağlıklı soru:** YZ'den elde edilen kapasiteyi neye ayırıyoruz?

### Her Fikir Hemen Yapılabilir

**Belirti:** Kod ucuzladığı için her talep ve her fikir hemen geliştirmeye alınır.

**Neden sorun?** Ucuz üretim talebi artırır; önceliklendirme ve karar yükü büyür, ürün dağılır.

**Örnek:** YZ ile geliştirme hızlanınca yol haritasına giren madde sayısı ikiye katlandı; hiçbiri derinlemesine tamamlanamadı.

**Daha sağlıklı soru:** Bunu yapabildiğimiz için mi yapıyoruz, yoksa gerçekten gerekli olduğu için mi?

---

