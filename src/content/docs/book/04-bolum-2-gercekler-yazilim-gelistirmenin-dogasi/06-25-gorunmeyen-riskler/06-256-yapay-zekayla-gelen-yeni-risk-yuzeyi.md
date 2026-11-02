---
title: "2.5.6 Yapay Zekâyla Gelen Yeni Risk Yüzeyi"
sidebar:
  hidden: true
---

YZ destekli geliştirme, görünmeyen risklerin listesine yeni maddeler ekler. Bunların ilki, üretilen kodun kendisidir. Güvenlikle ilgili senaryolarda YZ kod asistanlarının ürettiği programları inceleyen akademik bir çalışmada, üretilen programların yaklaşık yüzde 40'ında güvenlik açığı tespit edilmiştir <span class="bkz-ref" title="17. Pearce, H., Ahmad, B., Tan, B., Dolan-Gavitt, B., Karri, R. (2022). Asleep at the Keyboard? Assessing the Security of GitHub Copilot&#x27;s Code Contributions. IEEE Symposium on Security and Privacy.">(Bkz: 17)</span>. YZ, eğitildiği kodun yaygın kalıplarını tekrar eder; bu kalıpların bir kısmı ise güvensizdir. Üstelik üretilen kod okunaklı ve kendinden emin göründüğü için, açıklar inceleme sırasında daha kolay gözden kaçabilir.

İkinci risk, YZ'nin ürünün veya geliştirme sürecinin içine bir aktör olarak yerleşmesidir. YZ ajanları dosya okuyabilir, komut çalıştırabilir, harici sistemlere erişebilir. Bu durumda dışarıdan gelen bir metin, bir doküman ya da bir web sayfası modele gizli talimatlar taşıyabilir. Bu tür saldırılar "prompt injection" olarak adlandırılır ve YZ uygulamaları için en kritik risklerin başında gösterilir <span class="bkz-ref" title="18. OWASP (2025). OWASP Top 10 for Large Language Model Applications.">(Bkz: 18)</span>. Buradan çıkan ilke açıktır: bir istem (prompt) güvenlik sınırı değildir. Güvenlik; yetkilerin en aza indirilmesi, kritik işlemlerin denetlenebilir ve geri alınabilir olması ve YZ'nin etki alanının (blast radius) bilinçli biçimde sınırlandırılmasıyla sağlanır.

Üçüncü risk insan tarafındadır. YZ'nin önerdiği değişiklikleri onaylama yükü arttıkça, onay mekanizması zamanla bir alışkanlığa dönüşebilir. İnsan döngüde görünür, ancak gerçek bir inceleme yapılmamaktadır. Bu "onay yorgunluğu", güvenliği kâğıt üzerinde sağlayıp pratikte ortadan kaldırır. Bu nedenle yazılım ekiplerinin YZ araçlarına yetki verirken temkinli davranması, bu bölümde ele alınan "gereksiz" önlemlerin YZ çağındaki karşılığıdır: görünmeyen bir riski, görünür hale gelmeden yönetme çabası.

**Örnek:** Bir müşteri destek platformunda, gelen talepleri özetleyip ilgili ekibe yönlendiren bir YZ ajanı devreye alındı. Ajanın işini yapabilmesi için müşteri kayıtlarına okuma ve yazma yetkisi verilmişti. Bir güvenlik testinde, destek talebinin metnine gizlenmiş bir talimatın ajanı başka bir müşterinin kayıtlarını özetlemeye yönlendirebildiği görüldü. Sorun modelin "kötü niyetli" olması değildi; ajana, yaptığı iş için gerekenden çok daha geniş bir yetki verilmişti.

---
