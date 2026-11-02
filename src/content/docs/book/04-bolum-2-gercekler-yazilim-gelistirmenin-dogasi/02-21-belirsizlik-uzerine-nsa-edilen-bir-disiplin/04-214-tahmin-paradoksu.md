---
title: "2.1.4 Tahmin Paradoksu"
slug: book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/02-21-belirsizlik-uzerine-insa-edilen-bir-disiplin/04-214-tahmin-paradoksu
sidebar:
  hidden: true
---

Yazılım geliştirmede en çok gerilim yaratan konuların başında tahmin gelir. Organizasyonlar bütçe planlaması, kaynak dağılımı ve taahhüt yönetimi için kesin takvim ve maliyet bilgisine ihtiyaç duyar. Yazılım ekipleri ise belirsiz bir problemin ne kadar süreceğini, problem tam olarak netleşmeden söyleyemez.

Bu çelişki iki tarafı da haklı kılar ama yapısal bir gerilim üretir. Tahmin isteyen taraf sabit bir rakam ister; tahmin veren taraf ise bir aralık verir. Aralık kabul edilmez; rakam kabul edilir. Rakam kaçırıldığında sorumluluk yazılım ekibine yüklenir; oysa sorun, tahmin edilen işin öngörülemeyen bir değişkenler kümesi içerdiğidir.

Hofstadter Yasası bu gerilimi öz biçimde ifade eder: "Her şey tahmin edilenden daha uzun sürer; Hofstadter Yasası'nı hesaba katsanız bile." Bu bir şaka gibi görünür, ama bir gerçeği işaret eder: belirsizlik içeren işlerin tahmini yapısal olarak hatalıdır <span class="bkz-ref" title="4. Hofstadter, D. R. (1979). Gödel, Escher, Bach.">(Bkz: 4)</span>.

Agile topluluğunun bu sorunun çözümü için geliştirdiği "story point" gibi göreceli tahmin yöntemleri, kesin süre yerine karmaşıklık düzeyini ölçmeye çalışır. Ancak bu yöntemlerin bile, kapsamı değişen bir gereksinim ortamında yalnızca sınırlı bir kesinlik sağlayabildiği pratikte defalarca görülmüştür.

**Örnek:** Bir sigorta şirketinde geliştirilen hasar değerlendirme modülü için yazılım ekibi "altı ile sekiz hafta" aralığını verdi. Proje yöneticisi bütçe onayı için "altı hafta" olarak sundu. Yedinci haftada modülün entegre olduğu üçüncü parti bir değerlendirme servisinin API yapısının değiştiği öğrenildi. İki ek hafta gerekti. Proje yöneticisi "neden öngöremediniz?" diye sordu. Yazılım ekibi "bu yüzden sekiz hafta dedik" diye düşündü. Söylenen rakam altıydı; duyulan da altıydı. Ama konuşulan aslında altı ile sekiz arasındaki bir yerdi.

---



