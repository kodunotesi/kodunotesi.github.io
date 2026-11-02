---
title: "1.3.2 Neden Görünmez?"
slug: book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/04-13-gorunmeyen-is-yuku/02-132-neden-gorunmez
sidebar:
  hidden: true
---

Görünmez iş yükünün temel nedeni, organizasyonların yazılım geliştirmeyi çıktı (output) üzerinden ölçmesidir. Sprint hızı tamamlanan story point sayısını gösterir. Burndown grafiği kapatılan ticket’ları gösterir. Yol haritası teslim edilen özellikleri listeler.

Bu ölçüm araçları, teslim edilen değeri görünür kılarken teslim etmeyi mümkün kılan çalışmayı görünmez bırakır. Sonuç olarak şu paradoks ortaya çıkar: görünür iş ödüllendirilir, görünmez iş görmezden gelinir.

Bir geliştirici yeni bir özellik teslim ettiğinde bu başarı olarak değerlendirilir. Aynı geliştirici iki hafta boyunca kritik bir güvenlik açığını kapatmak için altyapıyı yeniden yapılandırdığında, sprint review’da gösterecek somut bir çıktısı yoktur. Performansı düşük görünebilir; oysa ekip için kritik bir riski ortadan kaldırmıştır.

**Örnek:** Bir SaaS şirketinde kıdemli bir geliştirici, üretim ortamında aralıklı olarak ortaya çıkan ve müşteri şikayetlerine yol açan bir performans sorununu araştırmaya başladı. Sorunun kök nedeni iki servis arasındaki senkronizasyon problemi olarak tespit edildi. Düzeltme, üç günlük mimari bir değişiklik gerektirdi. Sprint sonunda bu geliştirici yalnızca bir story point tamamlamıştı; ekip tarafından "düşük verimli bir hafta" olarak değerlendirildi. Müşteri şikayetlerinin kesilmesi ise doğrudan bu çalışmayla ilişkilendirilmedi.


