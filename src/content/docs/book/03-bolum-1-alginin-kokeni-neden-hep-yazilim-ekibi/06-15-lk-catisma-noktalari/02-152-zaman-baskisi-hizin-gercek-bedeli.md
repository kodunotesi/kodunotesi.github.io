---
title: "1.5.2 Zaman Baskısı: Hızın Gerçek Bedeli"
slug: book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/06-15-ilk-catisma-noktalari/02-152-zaman-baskisi-hizin-gercek-bedeli
sidebar:
  hidden: true
---

"Daha hızlı yapılabilir mi?" sorusu, yazılım ekiplerinin en sık karşılaştığı baskı biçimidir. Bu sorunun arkasında çoğu zaman meşru bir iş ihtiyacı yatar: müşteri bekliyor, rekabet baskısı var, teslim tarihi sözü verilmiş. Buna rağmen, hız baskısının yazılım geliştirme üzerindeki etkisi çoğu zaman beklenilenin tersidir.

Frederick Brooks, *The Mythical Man-Month* adlı kitabında bunu net biçimde ortaya koyar: geciken bir projeye insan kaynağı eklemek projeyi daha da geciktirir. Yeni ekip üyeleri sistemi öğrenmek için zamana ihtiyaç duyar; mevcut ekip bu öğretim sürecinde üretkenliğini kaybeder; iletişim maliyeti artar. Bu gözlem "Brooks Yasası" olarak bilinir ve onlarca yıllık deneyimle doğrulanmış durumdadır <span class="bkz-ref" title="1. Brooks, F. P. (1995). The Mythical Man-Month.">(Bkz: 1)</span>.

Hız baskısının daha doğrudan bir maliyeti ise teknik borç üretimidir. Zaman kısıtı altında çalışan yazılım ekiplerinde kısa yollara başvurma eğilimi artar: testlerin, mimari kararların, güvenlik kontrollerinin ve hata yönetiminin ertelenmesi riski doğar. Kısa vadede sistem teslim edilir uzun vadede bu kararların her biri bakım maliyeti olarak geri döner. Hız baskısı altında teslim edilen her özellik, gelecekteki her özelliğin maliyetini artırır.

Bu dinamiğin en tehlikeli tarafı, maliyet ile faturanın farklı zamanlarda ve farklı kişilere kesilmesidir. Hız kararı ile altı ay sonra yavaşlayan sistem arasındaki bağ çoğu zaman görünmez kalır; yavaşlama başka bir sorunun çıktısı gibi algılanır. Maliyeti ödeyen ise o sırada ekipte çalışan geliştirici ve son kullanıcıdır.

**Örnek:** Bir yazılım ekibi, stratejik öneme sahip bir müşteri için modülü altı haftada teslim etmesi gerektiğini öğrendi. Normal koşullarda on iki haftalık bir iş olduğu değerlendirildi. Tarihte esneklik olmadığı için ekip birçok kısa yolu kabul ederek altı haftada teslim etti. Müşteri memnun kaldı. Ancak üç ay sonra aynı modüle yeni bir gereksinim eklenmesi gerektiğinde, yazılım ekibi mevcut yapının bunu kaldırmayacağını belirtti. Yeniden yazım kararı alındı. Bu sefer gereken süre on altı haftaydı.



