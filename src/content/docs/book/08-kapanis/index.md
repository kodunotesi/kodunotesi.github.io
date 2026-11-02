---
title: "KAPANIŞ"
---

Bu kitabın başında ortaya koyduğumuz temel iddia basitti: sorun tek başına yazılım ekipleri değildir; sorun, organizasyonların yazılım geliştirmeyi ele alış biçimidir.

Bu iddia yazılım ekiplerini savunmak için değil, tekrar eden gerilimlerin arkasındaki yapıyı görünür kılmak için kuruldu. Yazılım ekipleri ile ürün, proje, satış, implementasyon, operasyon ve yönetim ekipleri arasındaki çatışmalar çoğu zaman kişisel tutumlardan değil, aynı sistemi farklı gerçeklikler üzerinden okumaktan doğar.

Bölüm 1'de bu algının nasıl oluştuğunu; Bölüm 2'de yazılım geliştirmenin belirsizlik, karmaşıklık, bağımlılık, kalite, teknik borç ve görünmeyen riskler üzerine kurulu doğasını; Bölüm 3'te bu gerçekliklerin organizasyon içinde nasıl çatışmaya dönüştüğünü; Bölüm 4'te ise çözümün bireylerden daha fazla çaba istemek değil, sistemi yeniden tasarlamak olduğunu gördük.

Ortak gerçeklik, beklenti disiplini, görünürlük, önceliklendirme, sahiplik, ürün disiplini ve öğrenme kültürü yalnızca süreç önerileri değildir. Bunlar, organizasyonun hangi davranışları kolaylaştırdığına ve hangi davranışları zorlaştırdığına dair tasarım kararlarıdır.

Bu nedenle kitabın sonunda varmak istediğimiz nokta şudur: Yazılım geliştirme yalnızca teknik bir üretim faaliyeti değildir. Yazılım geliştirme, organizasyonun karar alma biçimini, belirsizlikle ilişkisini, risk anlayışını, öğrenme kapasitesini ve güven düzeyini görünür kılan bir aynadır.

---

## Asıl Mesele

Bir organizasyonda yazılım ekibi sürekli "yavaş" görünüyorsa, ilk soru ekip hızına değil, sistemin görünmeyen iş yükünü nasıl yönettiğine sorulmalıdır.

Bir değişiklik sürekli beklenenden büyük çıkıyorsa, ilk soru geliştiricilerin işi büyütüp büyütmediğine değil, organizasyonun bağımlılıkları ve etki alanını ne kadar görünür kıldığına sorulmalıdır.

Bir ekip riskleri sürekli vurguluyorsa, ilk soru ekibin direnç gösterip göstermediğine değil, geçmiş hataların, canlı sistem maliyetlerinin ve geri dönüş risklerinin karar masasında nasıl temsil edildiğine sorulmalıdır.

Bir organizasyonda suçlama döngüsü sürekli tekrar ediyorsa, ilk soru kimin hatalı olduğuna değil, neden risklerin erken ve güvenli biçimde paylaşılamadığına sorulmalıdır.

Bir organizasyon yapay zekâ araçlarına rağmen teslimatın hızlanmadığını düşünüyorsa, ilk soru araçların yeterince kullanılıp kullanılmadığına değil, darboğazın gerçekten kod yazmakta olup olmadığına ve üretilen kodu doğrulama kapasitesinin nasıl yönetildiğine sorulmalıdır.

Bu soruların ortak özelliği şudur: Odağı kişiden sisteme taşırlar.

Bu geçiş küçük görünür, fakat önemlidir. Çünkü "kim yaptı?" sorusu savunma üretir. "Sistem bunu nasıl üretti?" sorusu öğrenme üretir.

---

## Ne Değişmeli?

Bu kitabın ortaya koyduğu çerçeveye göre sağlıklı organizasyonlar üç temel alanda dönüşmelidir.

### Gerçeklik Tanımı

Organizasyonlar yalnızca müşteri talebini, satış hedefini veya teslim tarihini gerçeklik olarak kabul edemez. Teknik sınırlar, bağımlılıklar, kalite maliyeti, teknik borç, canlı sistem riski ve operasyonel hazırlık da aynı gerçekliğin parçalarıdır.

Gerçeklik, tek bir ekibin perspektifinden değil, farklı ekiplerin gördüğü maliyetlerin birlikte ele alınmasıyla kurulmalıdır. Bu yapılmadığında her ekip kendi açısından haklı kalır; fakat organizasyon doğru karar alamaz.

### Beklenti Disiplini

Beklentiler iyimserlik üzerinden değil, açık varsayımlar üzerinden yönetilmelidir. Tahmin ile taahhüt, plan ile söz, kapsam ile niyet birbirine karıştırılmamalıdır.

Kısa vadede müşteriye veya yönetime daha rahat duyulan bir tarih vermek cazip olabilir. Ancak sürekli bozulan sözler, uzun vadede güveni aşındırır. Sağlıklı beklenti yönetimi, herkesi mutlu edecek cümleyi kurmak değil, gerçekliği zamanında ve anlaşılır biçimde paylaşabilmektir.

### Sahiplik ve Öğrenme

Sorumluluk yalnızca hata olduğunda aranacak kişiyi belirlemek için kullanılmamalıdır. Gerçek sahiplik, bir ürün alanının, kararın veya sistem davranışının uçtan uca sağlığını izleme ve iyileştirme yetkisiyle birlikte gelir.

Aynı şekilde hata sonrası değerlendirmeler de suçlu bulma ritüeline dönüşmemelidir. Hatalar, organizasyonun nasıl çalıştığını gösteren sinyallerdir. Bu sinyaller cezalandırıldığında insanlar saklanır; ciddiye alındığında sistem öğrenir.

---

## Ne Değişmezse?

Eğer organizasyonlar yazılım geliştirmeyi hâlâ doğrusal, öngörülebilir ve yalnızca eforla hızlandırılabilir bir üretim süreci gibi görmeye devam ederse, aynı sonuçlar tekrar eder.

Teslimatlar gecikir.

"Küçük" işler büyür.

Teknik borç görünmez biçimde birikir.

Riskler geç fark edilir.

Ekipler savunmaya geçer.

Toplantılar çözüm üretmekten çok pozisyon korumaya hizmet eder.

Güven azalır.

Bu tablo, kötü niyetli insanların sonucu değildir. Çoğu zaman iyi niyetli insanların, yanlış tasarlanmış bir sistem içinde rasyonel davranmasının sonucudur.

Bu yüzden kalıcı değişim, insanlardan daha fazla dayanıklılık beklemekle değil, sistemin daha sağlıklı davranışlar üretmesini sağlamakla mümkündür.

---

## Okuyucuya Not

Bu kitabı okuyan herkes aynı rolde olmayabilir. Bazı okuyucular yazılım geliştirici, bazıları teknik lider, bazıları ürün yöneticisi, proje yöneticisi, implementasyon uzmanı, satış lideri, operasyon yöneticisi veya üst yönetici olabilir.

Roller farklı olsa da herkesin değiştirebileceği bir şey vardır: sorduğu sorular.

"Neden bitmedi?" yerine "hangi varsayım yanlış çıktı?" diye sormak bir başlangıçtır.

"Kim geciktirdi?" yerine "hangi bağımlılık geç görünür oldu?" diye sormak bir başlangıçtır.

"Neden hayır diyorsunuz?" yerine "bu kararın riski ve maliyeti ne?" diye sormak bir başlangıçtır.

"Bunu kim yapacak?" yerine "bu sonucun uçtan uca sahibi kim?" diye sormak bir başlangıçtır.

Bu sorular tek başına organizasyonu değiştirmez. Fakat organizasyonel dikkati değiştirir. Dikkat değiştiğinde konuşmalar değişir. Konuşmalar değiştiğinde kararlar değişir. Kararlar değiştiğinde sistem yavaş yavaş başka sonuçlar üretmeye başlar.

Değişim çoğu zaman büyük bir dönüşüm programı gibi başlamaz. Bazen tek bir toplantıda suçlama yerine öğrenmeyi seçmekle başlar. Bazen teknik riski saklamak yerine erken görünür kılmakla başlar. Bazen müşteriye daha iyimser değil, daha dürüst bir söz vermekle başlar. Bazen de "bu iş neden böyle oldu?" sorusuna gerçekten cevap aramakla başlar.

---

## Son Söz

Yazılım geliştirme koddan ibaret değildir. Kod, organizasyonel kararların teknik biçim almış halidir.

Yapay zekâ çağında bu cümle daha da önem kazanıyor. Kodu artık makineler de yazabiliyor; ancak hangi kodun yazılması gerektiğine, neyin yeterince doğrulandığına ve sonuçların sahipliğini kimin üstlendiğine yine organizasyonlar karar veriyor. Yapay zekâ kodu ucuzlattı; anlaşmayı, güveni ve sahipliği ucuzlatmadı.

Bir sistemin mimarisi, çoğu zaman organizasyonun iletişim biçimini yansıtır. Bir ürünün karmaşıklığı, çoğu zaman yıllar boyunca verilen küçük istisna kararlarının toplamıdır. Bir ekibin temkinli davranışı, çoğu zaman geçmişte ödenmiş operasyonel bedellerin hafızasıdır. Bir gecikme, çoğu zaman yalnızca efor eksikliği değil, görünmeyen bağımlılıkların ve geç fark edilen varsayımların sonucudur.

Bu gerçekliği görmek, kimseyi tamamen haklı ya da tamamen haksız yapmaz. Tam tersine, daha olgun bir noktaya davet eder: problemi taraflarda değil, tarafların içinde çalıştığı sistemde aramak.

Eğer bu kitap, bir organizasyonda tek bir tartışmanın daha sağlıklı yapılmasına katkı sağlarsa, amacına yaklaşmış demektir.

Eğer bir ekip, bir sonraki gecikmede yalnızca savunmaya geçmek yerine varsayımlarını görünür kılarsa, bu bir ilerlemedir.

Eğer bir yönetici, bir sonraki kriz toplantısında "kim yaptı?" yerine "bunu sistem nasıl üretti?" diye sorarsa, bu bir ilerlemedir.

Eğer bir ürün veya satış ekibi, müşteriye verilen sözün teknik gerçeklikle birlikte kurulması gerektiğini kabul ederse, bu bir ilerlemedir.

Eğer bir yazılım ekibi, yalnızca teknik doğruluğa değil, kendi gerçekliğini anlaşılır kılmaya da sorumluluk alırsa, bu da bir ilerlemedir.

Çünkü daha sağlıklı organizasyonlar tek bir büyük kararla değil, tekrar eden küçük doğru davranışlarla kurulur.

Doğru sorular daha doğru konuşmaları başlatır.

Daha doğru konuşmalar daha doğru kararları mümkün kılar.

Daha doğru kararlar ise zamanla daha sağlıklı sistemler üretir.

Kodun ötesinde asıl mesele budur.

