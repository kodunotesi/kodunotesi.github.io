---
title: "2.3.6 Kod Tamamlandı, Hazır Değil: Yapay Zekâ Çağında Doğrulama ve Geçerleme"
sidebar:
  hidden: true
---

YZ destekli geliştirmede "kod tamamlandı" ile "üretime hazır" arasındaki mesafe açılır. YZ kısa sürede derlenen, çalışan ve ilk bakışta doğru görünen kod üretebilir. Ancak bu kodun mevcut iş kurallarıyla tutarlı olup olmadığı, sınır durumlarda nasıl davrandığı, güvenlik ve performans gereksinimlerini karşılayıp karşılamadığı ayrı birer sorudur. Kodun hızla üretilmesi bu soruların yanıtlanma maliyetini düşürmez; tam tersine yanıtlanması gereken soru sayısını artırır.

Yazılım mühendisliğinde bu ayrım iki kavramla ifade edilir: doğrulama (verification) sistemin doğru biçimde inşa edilip edilmediğini, geçerleme (validation) ise doğru sistemin inşa edilip edilmediğini sorgular <span class="bkz-ref" title="15. Boehm, B. W. (1984). Verifying and Validating Software Requirements and Design Specifications. IEEE Software, 1(1).">(Bkz: 15)</span>. YZ çağında her iki soru da önem kazanır. Testlerden geçen, sürekli entegrasyon hattında yeşil görünen bir sistem, yanlış anlaşılmış bir gereksinimi kusursuz biçimde gerçekleştirmiş olabilir. Uygulama ucuzladıkça, yanlış şeyi hızla inşa etmek de ucuzlar.

Bu nedenle sağlıklı ekipler YZ'nin ürettiği çıktıya güvenmek yerine, o çıktıyı doğrulayan sisteme güvenir. İlke basittir: üretim olasılıksal olabilir; kabul deterministik olmalıdır. Kodun nasıl üretildiğinden bağımsız olarak kabul ölçütleri önceden tanımlanmış; otomatik testlerle ve açık davranış beklentileriyle doğrulanabilir olmalıdır. Bu yaklaşımda testler ve spesifikasyonlar YZ çağında daha az değil, daha fazla önem taşır; çünkü üretilen kodun ne yapması gerektiğini tanımlayan güvenilir kaynak onlardır.

**Örnek:** Bir e-ticaret şirketinde geliştirici, indirim hesaplama modülüne yeni bir kampanya türünü YZ destekli bir araçla birkaç saat içinde ekledi. Kod derlendi, mevcut birim testlerinden geçti ve kod incelemesinde temiz göründü. Canlıya çıkıştan sonra, aynı sepette birden fazla kampanyanın birleştiği durumlarda indirimlerin üst üste uygulandığı fark edildi. Mevcut testler bu birleşimi hiç tanımlamamıştı; YZ de iş kuralını bilmediği için en olası davranışı üretmişti. Sorun kodun kalitesinde değil, kabul ölçütlerinin tanımlanmamış olmasındaydı.

---
