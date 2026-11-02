---
title: "1.3.5 Doğrulama Yükü: Yapay Zekâ Çağının Görünmeyen İşi"
sidebar:
  hidden: true
---

YZ destekli geliştirme, görünmeyen iş yükünün bileşimini değiştirir. Söz dizimi, tekrar eden kalıp kodlar ve basit dönüşümler gibi düşük düzeyli işlerin önemli bir kısmı makineye devredilebilir. Ancak bunların yerini daha yüksek düzeyli ve daha az görünen bir iş alır: üretilen kodun gerçekten doğru olup olmadığını anlamak, mevcut sistemin bağlamıyla tutarlılığını kontrol etmek, hangi önerinin kabul edileceğine karar vermek ve kendi yazmadığı bir kodun sorumluluğunu üstlenmek.

Bu yük geliştiricilerin kendi deneyimlerinde de görünür hale gelmektedir. 2025 yılında yapılan geniş katılımlı bir geliştirici anketinde katılımcıların yüzde 66'sı YZ araçlarıyla yaşadıkları sorunlar arasında "neredeyse doğru ama tam olarak değil" çözümleri, yüzde 45'i ise YZ tarafından üretilen kodda hata ayıklamanın daha fazla zaman aldığını belirtmiştir <span class="bkz-ref" title="8. Stack Overflow (2025). 2025 Developer Survey: AI.">(Bkz: 8)</span>. "Neredeyse doğru" kod, açıkça hatalı koddan daha tehlikelidir; çünkü hatayı bulmak, kodun tamamını anlamayı gerektirir.

Doğrulama yükü, klasik görünmeyen işin tüm özelliklerini taşır: sprint panosunda ayrı bir kart olarak yer almaz, çıktı metriklerinde görünmez ve tamamlandığında geriye "hiçbir şey olmamış" izlenimi bırakır. Organizasyon üretilen kod miktarını görürken, o kodu güvenilir kılan emeği görmez. Bu nedenle YZ'nin yaygınlaştığı ekiplerde kapasite planlaması, kod yazma süresini değil, doğrulama ve inceleme kapasitesini temel almalıdır.

**Örnek:** Bir lojistik yazılımı ekibinde kıdemli geliştiriciler, ekibin YZ araçlarıyla ürettiği değişikliklerin kod incelemesini üstlendi. Birkaç ay içinde kıdemli geliştiricilerin zamanının büyük kısmı inceleme kuyruğuna gitmeye başladı; kendi geliştirme işleri sürekli ertelendi. Sprint raporlarında bu emek görünmediği için, yönetimin gözünde kıdemli geliştiricilerin üretkenliği düşmüştü. Oysa ekibin güvenilir biçimde canlıya çıkabilmesini sağlayan şey tam olarak bu görünmeyen işti.

---

Görünmeyen iş yükü, algı ile gerçeklik arasındaki en büyük boşluklardan biridir. Bu boşluğu kapatmanın yolu, yazılım geliştirmeyi yalnızca çıktı üzerinden ölçen yaklaşımın ötesine geçmektir. Bakım, iyileştirme ve teknik sağlık, özellik geliştirme kadar gerçek bir iştir; yalnızca farklı bir görünürlüğe sahiptir. Bu gerçeklik kabul edilmeden, ekip kapasitesine ilişkin yapılan her planlama eksik kalır <span class="bkz-ref" title="3. Cunningham, W. (1992). The WyCash Portfolio Management System.">(Bkz: 3)</span>.

---
