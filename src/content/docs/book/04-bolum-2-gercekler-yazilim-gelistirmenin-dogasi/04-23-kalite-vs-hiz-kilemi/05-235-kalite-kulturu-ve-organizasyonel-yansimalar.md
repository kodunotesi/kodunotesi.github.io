---
title: "2.3.5 Kalite Kültürü ve Organizasyonel Yansımalar"
sidebar:
  hidden: true
---

Kalite, bireysel geliştirici tercihlerine bırakılabilecek bir uygulama değildir. Organizasyonun yapısı, teşvik mekanizmaları, ölçüm sistemleri ve başarı kriterleri; kaliteye verilen önemi doğrudan şekillendirir. Yazılım ekiplerinin nasıl davrandığı yalnızca teknik bilgiyle değil, organizasyonun hangi davranışları ödüllendirdiğiyle de belirlenir.

Bir organizasyonda "ne kadar çabuk teslim ettin?" sorusu, "ne kadar sorunsuz çalışıyor?" sorusundan daha sık ve daha ağır biçimde tartışılıyorsa, o organizasyon zamanla kaliteyi ikinci plana itmeye başlar. Geliştirici performansı yalnızca kapatılan task sayısıyla veya girişi yapılan efor ile ölçülüyorsa, test yazmak, refactoring yapmak veya teknik borcu azaltmak görünmez hale gelir. Yönetim panolarında hata oranı, bakım maliyeti veya operasyonel kararlılık yerine yalnızca teslim hızı yer alıyorsa, ekiplerin davranışı da buna göre şekillenir.

Organizasyonlar çoğu zaman kalite kültürünü doğrudan söylemlerle değil, ölçüm sistemleri aracılığıyla oluşturur. İnsanlar genellikle önem verilen şeyi değil, ölçülen ve ödüllendirilen şeyi optimize eder. Bu nedenle yerel ölçekte verimli görünen davranışlar, sistem düzeyinde ciddi verimsizlikler üretebilir.

Bu yapısal baskı, geliştiricilerin karar alma süreçlerini sessizce dönüştürür. Bir geliştirici teknik açıdan doğru olanı yapmak isteyebilir; ancak organizasyon hızlı teslimatı sürekli daha fazla ödüllendiriyorsa, zamanla mühendislik açısından doğru kararlarla organizasyonun beklentileri arasındaki gerilimi bireysel bir yük olarak sırtında taşımaya başlar. Bu gerilim uzun süre devam ettiğinde, mesleki yıpranma ve motivasyon kaybına dönüşebilir.

Conway'in gözlemi burada da geçerlidir: organizasyonun öncelikleri, iletişim biçimi ve teşvik yapıları zamanla üretilen yazılımın mimarisine ve kalite karakterine yansır <span class="bkz-ref" title="12. Conway, M. E. (1968). How Do Committees Invent? Datamation.">(Bkz: 12)</span>. Kalite kültürü teknik bir detay değil, organizasyonel tasarımın doğrudan bir sonucudur.

**Örnek:** Büyük ölçekli bir yazılım şirketinde ekipler sprint hızlarıyla değerlendiriliyordu. Başarı kriteri büyük ölçüde kapatılan task sayısına dayanıyordu. Zaman içinde ekipler doğal olarak küçük, hızlı tamamlanabilecek işleri tercih etmeye başladı. Daha derin mimari problemler, refactoring çalışmaları ve teknik borç azaltma faaliyetleri ise sürekli erteleniyordu çünkü bu çalışmalar teslimat metriğine doğrudan katkı sağlamıyordu.

Bir süre sonra refactoring görevleri neredeyse hiç açılmaz hale geldi. Ekipler kısa vadeli teslim hedeflerini tutturabiliyor, ancak sistemin iç yapısı giderek karmaşıklaşıyordu. Yeni özellik geliştirmek daha fazla koordinasyon gerektiriyor, küçük değişiklikler bile beklenmedik yan etkiler üretiyor ve teslim süreleri zamanla uzuyordu.

İki yılın sonunda teknik borç, organizasyonun yeni geliştirme kapasitesini ciddi biçimde azaltmıştı. Hiç kimse bilinçli olarak kaliteyi sabote etmemişti; ancak ölçüm sistemi insanları sürekli kısa vadeli optimizasyonlara yönlendirmişti.

Kalite, yazılım geliştirmede opsiyonel bir özellik değil, sistemin sürdürülebilirliği için yapısal bir zorunluluktur. Kaliteye yapılan yatırımın etkisi çoğu zaman anlık teslim hızında değil, sistemin zaman içindeki değiştirilebilirliğinde ortaya çıkar. Bu nedenle kalite maliyeti kısa vadede görünürken, getirisi uzun vadeli geliştirme kapasitesi, öngörülebilirlik ve organizasyonel sürdürülebilirlik olarak geri döner.



