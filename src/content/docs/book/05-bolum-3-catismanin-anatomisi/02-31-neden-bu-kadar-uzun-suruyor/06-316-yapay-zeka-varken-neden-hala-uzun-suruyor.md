---
title: "3.1.6 \"Yapay Zekâ Varken Neden Hâlâ Uzun Sürüyor?\""
sidebar:
  hidden: true
---

Yapay zekâ (YZ) destekli araçların yaygınlaşması, "neden bu kadar uzun sürüyor?" sorusunu ortadan kaldırmaz; sorunun tonunu sertleştirir. Kod yazımının görünür biçimde hızlandığı bir ortamda, teslimat süresindeki her gecikme daha az anlaşılır hale gelir. İş birimleri için mantık basittir: kodu artık makine yazıyorsa, süre kısalmalıdır.

Bu beklentinin gözden kaçırdığı nokta, YZ'nin işin hangi kısmını hızlandırdığıdır. YZ en çok, cevabı bilinen işi hızlandırır. Ancak bu bölümde ele alınan gecikmelerin önemli bir kısmı cevabı bilinmeyen işten kaynaklanır: belirsiz gereksinimler, beklenmeyen bağımlılıklar, yalnızca canlı ortamda ortaya çıkan davranışlar. Bu tür işlerde YZ makul görünen çözüm önerilerini çok hızlı üretebilir; fakat hangisinin doğru olduğunu anlamak yine ölçüm, deneme ve doğrulama gerektirir. YZ çağında hipotez ucuzlamıştır; ölçüm ise pahalı kalmıştır.

Buna ek olarak YZ ile çalışmanın kendine özgü bir zaman dinamiği vardır. Her çıktı yeni bir küçük iyileştirme fırsatı yaratır; deneme döngüsü saniyelere indiği için doğal bir durma noktası kaybolabilir. Ekip sürekli ilerliyor gibi görünürken iş uzun süre "neredeyse bitti" durumunda kalabilir. Bu durum hem tahminlerin güvenilirliğini düşürür hem de 3.1.3'te ele alınan tahminin taahhüde dönüşmesi sorununu ağırlaştırır.

**Örnek:** Bir geliştirici, bir veri akışı (streaming) özelliğini YZ destekli bir kodlama ajanıyla birkaç saat içinde geliştirdi. Ancak özellik canlı koşullarda belirli bir noktadan sonra beklenmedik biçimde duruyordu. Ajan art arda yedi farklı, makul görünen çözüm önerdi; her biri uygulandı, denendi ve sorunu çözmediği görüldü. Sorunun gerçek kaynağı ancak sistematik ölçümle bulunabildi: problem uygulamanın kendisinde değil, dış bir servisin veri gönderme biçimindeydi. Özelliği geliştirmek birkaç saat sürmüştü; çalışır hale getirmek ise bunun iki katından fazla. Dışarıdan bakan biri için bu, "YZ varken neden bu kadar sürdü?" sorusunu doğuruyordu.

---
