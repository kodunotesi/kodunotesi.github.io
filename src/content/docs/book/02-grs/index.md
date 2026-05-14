---
title: "GİRİŞ"
slug: book/02-giris
---

Orta ölçekli bir yazılım şirketinde haftalık proje toplantısı başlamak üzereydi. Masanın etrafında ürün yöneticisi, proje yöneticisi, saha implementasyonunu yapan ekibin lideri ve yazılım takımından iki kişi vardı. Toplantı, daha başlamadan gergindi.

Müşteri tarafında beklentiler artmıştı. Teslim tarihleri yaklaşmıştı. Sahadan gelen geri bildirimler sertleşiyordu. Proje yöneticisi proje planını ve önceki hafta planlanan taskların listelendiği Jira dashboardunu aynı ekranda yan yana açtı. Ürün yöneticisi ve implementasyon takım lideri de kendi bilgisayarlarında aynı Jira dashboard'ına odaklanmışlardı.

İlk cümle proje yöneticisinden geldi ve Jira dashboard'ında henüz tamamlanmamış olan tasklardan birisini işaret ederek:

> "Bu iş neden hala bitmedi? Geçen hafta yaptığımız planlamaya göre bu işin UAT aşamasına geçmiş olması gerekiyordu."

Yazılım ekibi açıklama yapmaya çalıştı. Teknik bağımlılıklardan, veri modelindeki değişikliklerden, performans risklerinden bahsettiler. Proje yöneticisi için bu açıklamalar yeterli değildi. Toplantı, kısa sürede bir çözüm arayışından çok bir savunma ve suçlama seansına dönüştü.

Bu sahne, yalnızca bu şirkete ait değildir. Benzer toplantılar, farklı sektörlerde, farklı ekiplerle her gün tekrar eder. Cümleler değişir, kişiler değişir, şirketler değişir. 

Ancak yapı aynıdır.

- Ürün ekipleri yazılım ekiplerini yavaş olmakla suçlar. 
- Proje ekipleri teslimatların geciktiğini söyler. 
- Implementasyon ekipleri sahadaki baskıyı vurgular. 
- Yazılım ekipleri ise anlaşılmadıklarını düşünür.

Bu kitap, bu döngünün neden tekrar tekrar oluştuğunu anlamak için yazıldı. Bu kitap, yazılım ekiplerini savunmak için yazılmadı. Aynı şekilde, diğer ekipleri suçlamak için de yazılmadı. Bu kitap, daha temel bir iddia ortaya koyar:

**`Sorun bireylerde değildir. Sorun, sistemdedir.`**

Organizasyonlar, yazılım geliştirmeyi çoğu zaman bir üretim faaliyeti gibi ele alır. Gereksinimlerin net olduğu, işlerin planlanabildiği ve çıktının öngörülebilir olduğu varsayılır. Ancak yazılım geliştirme, doğası gereği bu varsayımlarla çelişir.

- Belirsizlik vardır.
- Karmaşıklık vardır.
- Bağımlılıklar vardır.

Belirsizliklerin, karmaşlıklıkların ve bağımlılıkların önemli bir kısmı doğrudan yazılım ekiplerinin kontrolünde değildir. Müşteriler, kurum içi paydaşlar, regülasyonlar/standartlar, kullanılan teknolojiler ve trendler yazılım geliştirme sürecinin doğrusal bir üretim bandı olarak işletilmesini zorlaştırır. Kaldı ki, güncel ve trend olan yazılım geliştirme metodolojilerinin neredeyse tamamı lineer yaklaşım yerine sürekli iyileştirme ve sürekli teslimatı mümkün kılmayı hedefleyen yöntemleri ön plana çıkarır.    

Bu gerçekler göz ardı edildiğinde, organizasyonlarda yazılım ekiplerinden gerçekçi olmayan beklentiler oluşur. Organizasyonlar bu beklentileri süregelen bir gerilim ortamında yönetmek için efor harcamak zorunda kalır. Yazılım ekipleri ise bu beklentiler karşısında ya savunmaya geçer ya da sessizce kendi bildiklerini okumaya devam eder.

Sonuçta ortaya çıkan şey, bireylerin başarısızlığı değil, sistemin ürettiği bir gerilimdir.

Bu kitap boyunca şu sorulara cevap arayacağız:

- Yazılım ekipleri neden sürekli "yavaş" olarak algılanır?
- "Küçük" görülen işler neden beklenenden uzun sürer?
- Neden değişiklik yapmak bu kadar zor görünür?
- Neden aynı çatışmalar farklı şirketlerde tekrar eder?

Bu soruların cevapları, yüzeyde görünen açıklamalardan daha derindedir.

Bu kitap dört bölümden oluşur.

- İlk bölümde, yazılım ekiplerine yönelik algının nasıl oluştuğunu inceleyeceğiz.
- İkinci bölümde, yazılım geliştirmenin teknik doğasını ele alacağız.
- Üçüncü bölümde, bu iki katmanın organizasyon içinde nasıl çatışmaya dönüştüğünü analiz edeceğiz.
- Dördüncü bölümde ise bu problemlere sistemsel çözümler önereceğiz.

Bu kitap, hızlı çözümler sunmaz. 

Bu kitap, kolay cevaplar vermez. 

Ancak doğru soruları sorar. Çünkü doğru sorular sorulmadan, doğru çözümler bulunamaz.

Bu kitabı okurken, anlatılan örneklerde kendinizi, ekibinizi ve organizasyonunuzu göreceksiniz. Bu bir tesadüf değildir. Çünkü bu problemler bireysel değil, yapısaldır. Ve yapısal problemler, ancak yapısal çözümlerle giderilebilir.

Bu kitap, o çözümlere giden yolu açmayı amaçlar.

