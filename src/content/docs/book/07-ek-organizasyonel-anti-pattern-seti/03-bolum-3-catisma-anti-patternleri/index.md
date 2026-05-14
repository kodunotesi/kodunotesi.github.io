---
title: "Bölüm 3: Çatışma Anti-Pattern'leri"
---

### "Neden Uzun Sürdü?" Refleksi

**Belirti:** Gecikme yaşandığında ilk tepki, sürenin neden arttığını sorgulamak olur.

**Neden sorun?** Bu soru çoğu zaman semptoma odaklanır. Kapsam değişimi, belirsizlik, bağımlılık ve karar gecikmesi gibi kök nedenler gölgede kalabilir.

**Örnek:** Raporlama talebi geciktiğinde yalnızca süre tartışıldı; veri modelindeki eksiklik ve geç gelen kararlar konuşulmadı.

**Daha sağlıklı soru:** Bu iş tahmin ettiğimizden neden farklı çıktı?

### Kapsam Sabit Varsayılır

**Belirti:** Yeni talepler veya değişiklikler eklenirken teslim tarihi ve kapasite beklentisi aynı kalır.

**Neden sorun?** Kapsam değişirken planın değişmemesi, gecikmeyi kaçınılmaz hale getirir. Ekip sonunda ya kaliteyi düşürür ya da tarihi kaçırır.

**Örnek:** Sprint ortasında üç yeni müşteri talebi eklendi, ancak teslim tarihi güncellenmedi.

**Daha sağlıklı soru:** Bu yeni talep hangi işi geriye atıyor veya hangi riski artırıyor?

### Direnç Yanlış Yorumlanır

**Belirti:** Yazılım ekibinin temkinli yaklaşımı, risk uyarısı veya ek süre talebi isteksizlik olarak görülür.

**Neden sorun?** Teknik ekip çoğu zaman geçmiş arıza hafızasını, canlı sistem maliyetini ve geri dönüş riskini taşır. Bu bağlam görünmezse koruma refleksi blokaj gibi okunur.

**Örnek:** Kademeli yayın önerisi, müşteri etkisi sürdüğü için gereksiz bekletme olarak yorumlandı.

**Daha sağlıklı soru:** Bu temkin hangi geçmiş deneyim veya görünmeyen riskten kaynaklanıyor?

### Suçlama Kültürü Oluşur

**Belirti:** Problemler ortaya çıktığında toplantılar çözümden çok sorumluluk dağıtma alanına dönüşür.

**Neden sorun?** Suçlama, öğrenmeyi azaltır. Ekipler riskleri daha geç paylaşır, savunma dili artar ve aynı sorunlar tekrar eder.

**Örnek:** Her canlı hata sonrası toplantı "kim onayladı" tartışmasına döndü.

**Daha sağlıklı soru:** Sistem bu sonucu hangi kararlar, varsayımlar ve görünmeyen risklerle üretti?

### Herkes Haklıdır

**Belirti:** Her ekip kendi perspektifinden doğru davranır; ancak toplam sonuç organizasyon için kötü olur.

**Neden sorun?** Bu durum genellikle KPI, öncelik ve gerçeklik uyumsuzluğuna işaret eder. Lokal optimizasyon, sistemin bütününde kayıp üretir.

**Örnek:** Satış söz verdi, ürün kapsamı genişletti, yazılım kaliteyi korumaya çalıştı, operasyon hızlı geçiş istedi. Her ekip kendi hedefi açısından haklıydı; proje yine de başarısız oldu.

**Daha sağlıklı soru:** Hangi hedefler ekipleri ayrı ayrı doğru ama birlikte yanlış davranmaya itiyor?

### Problem Bireyselleştirilir

**Belirti:** Tekrarlayan sorunlar kişi hatası olarak yorumlanır.

**Neden sorun?** Aynı problem farklı kişilerle tekrar ediyorsa, mesele bireysel performans değil sistem davranışıdır.

**Örnek:** Aynı tür gecikme üç farklı proje yöneticisiyle tekrarlandı; buna rağmen sorun kişisel takip eksikliği olarak ele alındı.

**Daha sağlıklı soru:** Bu problemi tekrar üreten süreç, karar veya görünürlük eksikliği nedir?

---

