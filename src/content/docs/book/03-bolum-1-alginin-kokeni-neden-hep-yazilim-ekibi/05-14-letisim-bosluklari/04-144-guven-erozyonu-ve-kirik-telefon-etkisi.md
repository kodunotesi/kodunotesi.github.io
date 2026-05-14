---
title: "1.4.4 Güven Erozyonu ve Kırık Telefon Etkisi"
sidebar:
  hidden: true
---

İletişim boşlukları tek seferlik olsaydı, kolayca düzeltilebilirdi. Asıl sorun, bu boşlukların tekrarlanması ve zamanla güven erozyonuna dönüşmesidir.

Yazılım ekibinin her uyarısı yanlış yorumlandığında, ekip uyarılarını daha üstü kapalı yapmaya başlar. “Söyledik ama dinlemediler” deneyimi biriktikçe iletişim giderek daha savunmacı bir hal alır. Öte yandan diğer ekipler, yazılım ekibinin her “bu karmaşık” ifadesini bir bahane olarak görmeye alışır. İki taraf arasındaki iletişim, bilgi aktarımı olmaktan çıkıp birer pozisyon savunmasına dönüşür.

Bu noktada bir başka sorun devreye girer: kırık telefon etkisi. Bir gereksinim organizasyon içinde el değiştirdikçe yalnızca bilgi kaybına uğramaz; aynı zamanda yeniden yorumlanır. Her ekip problemi kendi uzmanlık alanının diliyle yeniden ifade eder. Operasyon ekibi iş akışını düşünür, proje yöneticisi planlama açısından yaklaşır, ürün yöneticisi kapsam ve öncelik perspektifiyle değerlendirir, yazılım ekibi ise teknik risk ve mimari etkileri görür. Bu yeniden yorumlama zinciri ilerledikçe, başlangıçtaki ihtiyaç zaman zaman tamamen farklı bir probleme dönüşebilir.

Müşteriden implementasyon ekibine, implementasyon ekibinden proje yöneticisine, proje yöneticisinden ürün yöneticisine, ürün yöneticisinden yazılım ekibine ulaşan bir gereksinim; her aktarımda biraz anlam yitirir, biraz bağlam düşer, biraz öncelik değiştirir. Sonunda yazılım ekibinin önündeki problem tanımı, müşterinin orijinal ihtiyacıyla yalnızca uzaktan benzeşebilir.

**Örnek:** Bir müşteri, kullanıcıların günlük operasyon sırasında aynı raporu sürekli son 24 saat filtresiyle açtığını ve bu nedenle zaman kaybettiklerini belirterek, raporun varsayılan tarih aralığının değiştirilmesini istedi. Implementasyon ekibi bu talebi “raporlama ekranı kullanıcıları yavaşlatıyor” şeklinde özetledi. Proje yöneticisi bunu “raporlama performansı iyileştirilmeli” başlığıyla ürün yönetimine aktardı. Ürün yönetimi ise problemi sistem performansı perspektifiyle değerlendirerek yazılım ekibine “raporlama modülünde performans optimizasyonu gerekli” şeklinde iletti.

Yazılım ekibi bu bilgiyle kapsamlı bir performans analizi başlattı; sorgu süreleri incelendi, indeks stratejileri değerlendirildi ve altyapı tarafında optimizasyon planları hazırlandı. Oysa müşterinin gerçek ihtiyacı yalnızca varsayılan filtre değerinin değiştirilmesiydi ve bu değişiklik birkaç dakikalık bir geliştirmeyle çözülebilecek kadar basitti.

Sorun teknik yetersizlik değildi. Sorun, gereksinimin her aktarımda yeniden yorumlanması ve sonunda bambaşka bir probleme dönüşmesiydi.

---


