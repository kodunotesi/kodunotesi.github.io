---
title: "2.2.1 Bağımlılığın Anatomisi"
sidebar:
  hidden: true
---

Yazılım sistemlerinde bağımlılık, bir bileşenin çalışabilmesi için başka bir bileşene ihtiyaç duyması durumudur. Bu tanım teknik görünse de organizasyonel sonuçları son derece somuttur: bir bağımlılık değiştiğinde, ona bağlı olan her şey etkilenir.

Bağımlılıklar birkaç farklı biçimde ortaya çıkar. Teknik bağımlılıklar, bir servisin başka bir servisin API'ına veya veri yapısına bağlı olması gibi doğrudan teknik ilişkilerdir. Veri bağımlılıkları, iki modülün aynı veri kaynağını farklı biçimlerde yorumlaması ve bu yorumların tutarlı kalması gereken durumları kapsar. Zamana bağlı bağımlılıklar ise bir işlemin başka bir işlemin tamamlanmasını beklemesi durumunda ortaya çıkar ve özellikle asenkron sistemlerde kritik hale gelir.

Bu bağımlılıklar tek başına yönetilebilirdir. Asıl sorun, bağımlılıkların birbiriyle bağlantılı olmasından kaynaklanır. Bir zincirin herhangi bir halkasındaki değişiklik tüm zinciri etkiler; üstelik bu etki her zaman öngörülebilir biçimde değil, zaman zaman beklenmedik yerlerde tezahür eder.

**Örnek:** Orta ölçekli bir finans teknolojisi şirketinde müşteri bilgi güncelleme ekranı yenilendi. Görünürde basit bir arayüz değişikliğiydi. Ancak bu ekran; kimlik doğrulama servisi, müşteri veri ambarı, loglama altyapısı ve düzenleyici kuruma gönderilen raporlama servisiyle doğrudan entegreydi. Geliştirici ekip yalnızca arayüz katmanında değişiklik yaptı; ancak test aşamasında raporlama servisinin beklediği veri formatının eski şema üzerinden şekillendiği fark edildi. Değişiklik dört bileşeni etkiledi. Tek bir ekranın güncellenmesi, üç haftaya yayılan bir entegrasyon sürecine dönüştü.

---


