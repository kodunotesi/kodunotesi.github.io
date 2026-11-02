---
title: "2.4.1 Teknik Borcun Tanımı ve Sınırları"
sidebar:
  hidden: true
---

Teknik borç, yazılım geliştirme sürecinde kısa vadeli teslimat hedefleri uğruna alınan ve gelecekte ek maliyet üreten kararların birikimidir. Bu tanımın önemli bir sonucu vardır: teknik borç yalnızca kod kalitesi değil, karar kalitesi problemidir. Kod, bu kararların yalnızca görünen yüzüdür.

Kavramsal karışıklık genellikle burada başlar. Kurumlar teknik borcu yalnızca "kötü kod" veya "eski teknoloji" başlığına indirger. Oysa borç farklı katmanlarda oluşabilir:

* Mimari borç: geçici tasarımın kalıcılaşması, sorumluluk sınırlarının bulanıklaşması.
* Test borcu: kritik davranışların otomatik güvenceye bağlanmaması.
* Veri borcu: veri modelinin iş gerçekliğini taşıyamaması, tarihsel tutarsızlıklar.
* Operasyon borcu: gözlemlenebilirlik, alarm ve izleme eksikleri.
* Bilgi borcu: dokümantasyon eksikliği ve kritik bilginin kişilerde kilitlenmesi.

Bu türlerin ortak özelliği aynıdır: bugün görünmez olan risk, yarın değişiklik maliyeti olarak geri döner. Bu nedenle teknik borç "hata" üretmeden de birikebilir. Sistem çalışıyor olabilir; ancak değiştirilebilirlik kapasitesi sessizce azalıyor olabilir <span class="bkz-ref" title="7. Cunningham, W. (1992). The WyCash Portfolio Management System. | 8. Fowler, M. (2018). Technical Debt Quadrant.">(Bkz: 7, 8)</span>.

Buradaki önemli ayrımlardan biri, her teknik borcun kötü niyetli veya irrasyonel bir karar sonucu oluşmamasıdır. Bazı durumlarda organizasyonlar bilinçli olarak kısa vadeli hız kazanımı için teknik borç alabilir. Özellikle erken aşama ürünlerde, kritik teslim tarihlerinde veya belirsiz iş ihtiyaçlarında bu tercih stratejik olabilir. Sorun çoğu zaman borcun varlığından değil; görünmez hale gelmesinden, sürekli ertelenmesinden ve geri ödeme kapasitesinin kaybedilmesinden doğar.

**Örnek:** B2B sipariş yönetim ürünü geliştiren bir ekip, lansmana yetişebilmek için fiyatlama kurallarını konfigürasyon tabanlı bir motor yerine doğrudan uygulama koduna gömdü. İlk müşteri devreye alımı sorunsuz geçti. Ancak takip eden dönemde her kampanya değişikliği kod müdahalesi gerektirdi, test yükü arttı ve sürüm döngüleri uzadı. Ürün doğru çalışmaya devam etse de kararın borç etkisi, değişiklik maliyetinde görünür hale geldi.

---



