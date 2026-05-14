---
title: "2.2.5 Karmaşıklığın Organizasyonel Yansımaları"
sidebar:
  hidden: true
---

Karmaşıklık yalnızca teknik bir olgu değildir; organizasyonel bir gerçektir. Sistem karmaşıklaştıkça, sistemi anlayan kişi sayısı azalır. Belirli bir bileşeni gerçekten derinlemesine bilen geliştirici sayısı zaman içinde bire, hatta sıfıra düşebilir. Bu durum hem bir devam riski hem de bir karar alma sorunudur: o bileşenle ilgili her değişiklik kararı, eksik bilgiyle ya da tek bir kişinin varlığına bağımlı biçimde verilmek zorunda kalır.

Bunun yanı sıra, karmaşıklık ekipler arası iletişimi de ağırlaştırır. Değişiklik talep eden ekip, değişikliğin teknik bağlamını bilmeden bu değişikliği önemsiz görebilir. Değişikliği yapacak ekip ise o bağlamı her seferinde karşı tarafa ve hatta kendi içinde ilgili kişilere yeniden yeniden aktarmak zorunda kalır. Bu döngü, zamanla her iki tarafta da yorgunlğun ve yanlış anlamanın birikmesine neden olur.

Fowler'ın dile getirdiği gibi, karmaşıklığı azaltmak teknik bir tercih değil, organizasyonel bir zorunluluktur. Karmaşıklık yönetilmediğinde, ekiplerin değil sistemin kararları verdiği bir ortam oluşur <span class="bkz-ref" title="4. Hofstadter, D. R. (1979). Gödel, Escher, Bach.">(Bkz: 4)</span>.

**Örnek:** Bir lojistik teknoloji şirketinde kargo takip sistemi on yıl boyunca geliştirilmişti. Sistemin belirli bir çekirdeğini gerçek anlamda anlayan tek bir kıdemli geliştirici kalmıştı. O geliştirici görevden ayrıldığında, ekip kritik bir modülü değiştirme konusunda aylarca tereddüt etti. Değişikliği kimse üstlenemiyordu çünkü bağımlılık haritası hiçbir zaman dokümante edilmemişti. Sonunda dış danışman desteğiyle yapılan analizin maliyeti, o değişikliği yapmanın tahmini maliyetinin birkaç katına ulaştı. Karmaşıklık, organizasyonun hareket kabiliyetini bloke etmişti.

Karmaşıklık arttıkça sistemin davranışını öngörmek zorlaşır; bu durum yazılım ekiplerinin temkinli hareket etmesine neden olur. Karmaşıklık, yazılım geliştirmede lineer olmayan bir maliyet artışı yaratır <span class="bkz-ref" title="1. Brooks, F. P. (1995). The Mythical Man-Month.">(Bkz: 1)</span>.

---



