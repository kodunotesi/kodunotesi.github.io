---
title: "1.5.1 Kapsam Değişimi: Görünmez Maliyet"
slug: book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/06-15-ilk-catisma-noktalari/01-151-kapsam-degisimi-gorunmez-maliyet
sidebar:
  hidden: true
---

Kapsam değişimi, yazılım geliştirme projelerinde en sık yaşanan çatışma tetikleyicisidir. Bir özelliğin eklenmesi, değiştirilmesi veya kaldırılması — dışarıdan bakıldığında küçük bir düzeltme gibi görünür. Yazılım ekibi için ise bu değişiklik çoğu zaman sistemin yeniden değerlendirilmesi anlamına gelir.

Bunun nedeni, yazılım sistemlerinin birbirine bağlı bileşenlerden oluşmasıdır. Bir noktada yapılan değişiklik, diğer noktaları etkiler. "Sadece şu alanı ekleyin" isteği; veri modelini, API sözleşmelerini, doğrulama kurallarını, mevcut testleri ve bazen güvenlik katmanını etkileyebilir. Bu bağlantılar dışarıdan görünmez; dolayısıyla değişikliğin maliyeti de görünmez.

Kapsam değişiminin özellikle sorunlu bir boyutu vardır: değişikliği talep eden taraf için maliyet sıfır görünür. Ürün yöneticisi bir özelliği yol haritasına eklediğinde kendi açısından bir kayıp yaşamaz. Proje yöneticisi müşteri talebini kabul ettiğinde yalnızca bir satır daha eklemiş olur. Yazılım ekibi ise bu eklemenin gerçek maliyetini hesaplamak ve karşılamak zorunda kalır.

Bu asimetri, kapsam yönetimini yazılım ekibinin tek başına üstlendiği bir yük haline getirir. Ekip "hayır" dediğinde dirençli görünür; "evet" dediğinde ise ilerleyen süreçte beklenmedik gecikmelerin sorumlusu haline gelir.

**Örnek:** Bir yazılım ekibi, dört haftalık bir sprint planlaması yaptı. Planlamanın üçüncü haftasında ürün yöneticisi, müşteri toplantısından dönerek yeni bir özellik talebini "sadece küçük bir ek" olarak iletti. Yazılım ekibi bu talebin mevcut sprint kapsamıyla çakışacağını belirtti. Ürün yöneticisi "ama bu gerçekten küçük bir şey" dedi. Yazılım ekibi analiz yaptı ve değişikliğin üç farklı modülü etkilediğini tespit etti. Sprint başındaki plan bozuldu, öncelikler yeniden sıralandı, taahhüt edilen bir başka teslimat ertelendi. Sprint sonunda proje yöneticisi gecikme nedenini sordu.


