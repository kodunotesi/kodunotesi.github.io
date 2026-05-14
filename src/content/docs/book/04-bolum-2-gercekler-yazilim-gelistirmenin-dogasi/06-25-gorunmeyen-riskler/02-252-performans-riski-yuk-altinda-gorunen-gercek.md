---
title: "2.5.2 Performans Riski: Yük Altında Görünen Gerçek"
sidebar:
  hidden: true
---

Performans sorunları, yazılım geliştirme sürecinde en sistemli biçimde göz ardı edilen risk kategorilerinden biridir. Geliştirme ortamlarında çalışan sistemler, gerçek kullanım koşullarının küçük bir kesitini simüle eder: veri hacmi sınırlıdır, eş zamanlı kullanıcı sayısı düşüktür ve ağ gecikmeleri genellikle göz ardı edilebilir düzeydedir. Bu koşullarda sorunsuz çalışan bir sistem, canlı ortamda tamamen farklı bir davranış sergileyebilir.

Performans sorunlarının karakteristik özelliği, doğrusal olmayan biçimde ortaya çıkmalarıdır. Bir veritabanı sorgusu, on binlerce kayıt içinden arama yaparken milisaniyeler içinde sonuç döndürebilir. Aynı sorgu, yüz milyonlarca kayıt arasında çalışırken dakikalar alabilir. Bu geçiş ani değildir; belirli bir veri eşiğine ulaşıldığında sistem davranışı dramatik biçimde değişir. Geliştirme ortamında bu eşiğe hiç ulaşılmadıysa sorun görünmez kalır.

McConnell, bu bağlamda savunmacı programlama pratiğinin (defensive programming) önemine dikkat çeker: geliştiricilerin beklenmedik girdi büyüklüklerini, sınır koşullarını ve uç senaryoları sistematik biçimde ele alması gerektiğini vurgular <span class="bkz-ref" title="11. McConnell, S. (2004). Code Complete (2nd ed.).">(Bkz: 11)</span>. Savunmacı programlama yalnızca hata yönetimini değil, sistemin olası kullanım koşullarına hazır olmasını da kapsar.

**Örnek:** Bir kurumsal raporlama sistemi, geliştirme ve test aşamalarında yüz binlerce kayıt içeren veritabanıyla test edilmişti. Sistem bu koşullarda hızlı çalışıyor, raporlar birkaç saniye içinde üretiliyordu. Ancak sistemin canlı ortama  alınmasından bir yıl sonra veritabanı on milyonlarca kayda ulaştığında, bazı raporların çalışması dakikalar sürüyordu. Sorunun kök nedeni, belirli sorgularda kullanılan join ve filtreleme işlemlerinde çalışma anında doğru inekslerin kullanılmamasıydı. Sorguların çalışma zamanı karmaşıklığı, geliştirme ortamındaki veri boyutunda hiç görünür olmamıştı. Performans riski, sistemin veri hacmiyle birlikte büyümüş ve yalnızca canlı ortmama özgü koşullarda gün yüzüne çıkmıştı.

---



