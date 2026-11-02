---
title: "2.4.4 Neden Geç Fark Edilir?"
sidebar:
  hidden: true
---

Teknik borç, etkisini gecikmeli gösterdiği için organizasyonel algı tarafından çoğu zaman yanlış sınıflandırılır. Kısa vadede görünen metrikler güçlü olabilir: zamanında çıkan sürümler, kapanan iş sayısı veya artan özellik teslim kapasitesi. Borcun maliyeti ise dağıtık ve zamana yayılan biçimde ortaya çıkar.

Geç fark edilmenin başlıca nedenleri şunlardır:

* Ölçüm asimetrisi: teslimat çıktısı ölçülür, değişiklik maliyeti sınırlı izlenir.
* Nedensellik kopukluğu: bugünkü gecikmenin aylar önceki karardan kaynaklandığı net görülmez.
* Başarı yanılsaması: erken dönem teslim başarısı, yapısal riski görünmez kılar.
* Yerel optimizasyon: ekipler kendi hedeflerini tuttururken sistem düzeyinde verim düşebilir.

Bu nedenle teknik borç çoğu kurumda "aniden ortaya çıkan" bir sorun gibi algılanır. Oysa çoğu durumda sorun ani değildir; yalnızca birikim görünür eşiği geçmiştir. Eşik aşıldığında maliyet artışı hızlanır ve geri dönüş daha zor hale gelir <span class="bkz-ref" title="8. Fowler, M. (2018). Technical Debt Quadrant. | 9. Forsgren, N., Humble, J., &amp; Kim, G. (2018). Accelerate.">(Bkz: 8, 9)</span>.

**Örnek:** Kurumsal insan kaynakları yazılımının ürün yöneticisi, Jira dashboard’unda aylık teslim edilen özellik sayısını izliyordu. İlk dönemde metrikler olumlu görünüyordu. Ancak zamanla müşteri taleplerine yanıt süresi uzamaya, sprint içi belirsizlik büyümeye ve acil düzeltme oranı artmaya başladı. İlk yorum talep yoğunluğu oldu. Daha sonra yapılan analiz, asıl sapmanın teknik borç kaynaklı değişiklik maliyeti artışından geldiğini gösterdi. Görünür teslim metrikleri güçlü kaldığı için problem uzun süre fark edilmemişti.

Teknik borcun geç fark edilmesi, onu yalnızca teknik bir konu olmaktan çıkarır ve aynı zamanda bir görünürlük ve algı problemine dönüştürür. Bölümün geri kalanında görüleceği gibi, bu gecikmeli algı yazılım ekipleriyle diğer ekipler arasındaki gerilimin temel tetikleyicilerinden biridir.


---



