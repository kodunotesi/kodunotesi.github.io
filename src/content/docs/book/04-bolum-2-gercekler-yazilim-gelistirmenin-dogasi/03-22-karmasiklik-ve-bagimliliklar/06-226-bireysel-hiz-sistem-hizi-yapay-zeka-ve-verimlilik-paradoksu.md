---
title: "2.2.6 Bireysel Hız, Sistem Hızı: Yapay Zekâ ve Verimlilik Paradoksu"
sidebar:
  hidden: true
---

Yapay zekâ (YZ) destekli araçlar, tek bir geliştiricinin belirli bir görevi tamamlama hızını önemli ölçüde artırabilir. Ancak bireysel hızdaki artış, sistemin teslimat hızına doğrudan yansımaz. Bir değişikliğin müşteriye ulaşması için kod yazımının yanı sıra gereksinimin netleşmesi, kararların alınması, kod incelemesi, test, entegrasyon, onay ve canlıya geçiş adımlarının da tamamlanması gerekir. Darboğaz bu adımlardan birindeyse, kod yazımını hızlandırmak yalnızca darboğazın önündeki kuyruğu büyütür.

Ekonomi tarihinde bu durumun iki tanıdık karşılığı vardır. Birincisi Jevons Paradoksu'dur: bir kaynağın kullanımı verimlileştikçe, o kaynağa olan toplam talep azalmak yerine artabilir <span class="bkz-ref" title="13. Jevons, W. S. (1865). The Coal Question.">(Bkz: 13)</span>. Kod üretmek ucuzladıkça organizasyon daha fazla özellik, daha fazla entegrasyon ve daha fazla deneme talep eder; her yeni kod parçası ise bu bölümde ele alınan bağımlılık ve karmaşıklık yükünü büyütür. İkincisi dinamo etkisidir: elektrik motorları fabrikalara girdiğinde verimlilik artışı hemen gelmemiş; kazanç, fabrikalar buhar makinesine göre değil elektriğin olanaklarına göre yeniden tasarlandığında ortaya çıkmıştır <span class="bkz-ref" title="14. David, P. A. (1990). The Dynamo and the Computer: An Historical Perspective on the Modern Productivity Paradox. American Economic Review, 80(2).">(Bkz: 14)</span>. YZ'yi mevcut süreçlerin üzerine bir eklenti olarak koyan organizasyonlar da beklenen sıçramayı göremez; çünkü onay, koordinasyon ve doğrulama süreçleri değişmeden kalmıştır.

Bu iki gözlem, bu bölümün temel iddiasını güçlendirir: yazılım geliştirme doğrusal bir üretim hattı değildir. Üretim hattı varsayımıyla bakıldığında kod yazımını hızlandırmak tüm süreci hızlandırmalıdır. Oysa yazılım geliştirmede asıl maliyet, kodun kendisinden çok kodun sistemle, kararlarla ve diğer ekiplerle etkileşiminde ortaya çıkar.

**Örnek:** Bir sigorta yazılımı şirketinde YZ kodlama araçlarının yaygınlaşmasının ardından ekiplerin tamamladığı geliştirme görevi sayısı belirgin biçimde arttı. Altı ay sonra yapılan değerlendirmede, değişikliklerin müşteriye ulaşma süresinin neredeyse hiç kısalmadığı görüldü. Değişiklikler artık kod yazımında değil; iş birimlerinin onayında, test ortamı kuyruğunda ve entegrasyon testlerinde bekliyordu. Organizasyon zaten darboğaz olmayan adımı hızlandırmış; asıl bekleme noktalarına dokunmamıştı.

---
