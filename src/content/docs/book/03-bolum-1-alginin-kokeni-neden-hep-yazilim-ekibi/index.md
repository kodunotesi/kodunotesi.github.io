---
title: "BÖLÜM 1: Algının Kökeni – Neden Hep Yazılım Ekibi?"
---

## Giriş

Kurumsal yapılarda yazılım geliştirme ekiplerine yönelik şikayetler neredeyse evrenseldir. Ürün ekipleri, proje yöneticileri ve müşteri implementasyon ekipleri farklı şekillerde aynı cümleyi kurar: "Yazılım ekibi işleri yavaşlatıyor." Bu bölümün amacı, bu algının yüzeyde görünen nedenlerinden çok daha derin, yapısal ve sistematik kökenlerini ortaya koymaktır.

Bu algı bir tesadüf değildir. Organizasyonel yapı, iletişim biçimleri, başarı kriterleri ve teknik gerçeklikler bu algıyı sürekli yeniden üretir. Bu bölümde, bu algının nasıl oluştuğunu ve neden sürdürüldüğünü inceleyeceğiz.

---

## 1.1 Yazılım Takımına Yönelik Klişeler

Klişeler durup dururken oluşmaz. Her klişenin arkasında, bağlamından koparılmış gerçek bir gözlem vardır. Yazılım ekiplerine yönelik klişeler de bu kuralın istisnası değildir. Bu yargılar çoğu zaman yaşanmış deneyimlere dayanır ve bu yargılar deneyimin tamamını değil yalnızca görünen kısmını yansıtır. Klişenin kalıcı olmasını sağlayan şey ise bağlamın kaybolması ve gözlemin sistematik bir etikete dönüşmesidir.

Bu bölümde yaygın klişeleri tek tek ele alacağız. Her birini tanımlamakla kalmayıp, bu klişenin neden oluştuğunu, hangi yapısal koşullar ile beslendiğini ve yazılım ekibinin perspektifinden nasıl göründüğünü inceleyeceğiz.

---

**"Yavaşlar"**

"Yavaşlar" klişesi en yaygın ve en kalıcı olanıdır. Bu yargı genellikle iki şeyin birbirine karıştırılmasından doğar: işin görünen karmaşıklığı ile işin gerçek karmaşıklığı.

Kullanıcı arayüzünde birkaç alanı değiştirmek gibi görünen bir iş, arka planda veri modelinin yeniden tasarlanmasını, birden fazla servisin güncellenmesini ve mevcut sistemde geriye dönük uyumluluğun sağlanmasını gerektirebilir. Bu karmaşıklık dışarıdan görünmez ve dolayısıyla anlaşılamaz.

Bu durumu psikolojide "planlama yanılgısı" olarak da bilinen bilişsel bir eğilim besler. İnsanlar, tamamlayacakları işlerin süresini sistematik olarak olduğundan kısa tahmin etme eğilimindedir. Yazılım geliştirme özelinde bu yanılgı daha da derinleşir, çünkü yazılım geliştirme karmaşıklığı kümülatif ve öngörülemez bir nitelik taşır.

**Örnek:** Bir fintech şirketinde çalışan proje yöneticisi, her sprint sonunda aynı yorumu yapıyordu: "Bu iş neden iki hafta sürdü?" Söz konusu iş, kullanıcı ekranına yeni bir filtreleme alanı eklenmesiydi. Ancak bu değişiklik arka planda üç farklı servisin yeniden yapılandırılmasını, iki legacy sistemle uyumluluğun sağlanmasını ve mevcut performans testlerinin yeniden koşturulmasını gerektiriyordu. Proje yöneticisi ekranı görüyordu; yazılım ekibi ise altta yatan sistemi.

---

**"Anlaşılmaz konuşurlar"**

Teknik terminoloji, yazılım geliştiriciler için kesinlik sağlarken diğer ekipler için belirsizlik yaratır. "Race condition", "schema migration", "N+1 sorunu" veya "teknik borç" gibi kavramlar, teknik olmayan paydaşlar için anlam taşımaz. Bu durum çoğu zaman kasıtlı değildir. Yazılım ekipleri kendi zihinsel modellerini kullanarak konuşur ve bu modellerin diğer paydaşlara aktarılmasının bir maliyet gerektirdiğini her zaman fark etmez.

Yapısal sorun ise şudur: organizasyonlar bu çeviri maliyetini görünür kılacak bir mekanizma sunmaz. Toplantılarda terminoloji köprüsünü kuracak bir rol (iş analisti, teknik ürün yöneticisi gibi) yoksa, her iki taraf da kendi dilinde konuşmaya devam eder ve anlaşıldığını zanneder.

**Örnek:** Bir lojistik firmasında yapılan proje durum değerlendirme toplantısında yazılım ekibi lideri, bir gecikmenin nedenini "veritabanı indekslerinin optimize edilmesi gerekliliği" ile açıkladı. Ürün yöneticisi konuyu anladığını düşünerek onayladı. Ancak sonraki hafta ortaya çıktı ki ürün yöneticisi "indeks" kelimesini raporlama için kullanılan bir Excel listesi olarak anlamıştı. İki haftalık zaman kaybı, aslında tek bir cümlenin farklı yorumlanmasından kaynaklanıyordu.

---

**"İş birliğine kapalıdırlar"**

Bu algı, çoğu zaman yanlış anlaşılmış bir koruma refleksinden doğar. Yazılım ekipleri, dışarıdan gelen değişiklik taleplerine temkinli yaklaşır. Bunun nedeni iş birliğine isteksizlik değil, sistemin bütünlüğünü koruma sorumluluğudur.

Bir yazılım sisteminde yapılan her değişiklik, başka bir yeri etkileme riski taşır. "Şu tabloya bir sütun ekleyelim" gibi görünen basit bir istek, ilgili modülleri, mevcut API sözleşmelerini, veri aktarım süreçlerini ve üretilmiş dokümanları etkileyebilir. Yazılım ekibi bu riskleri gördüğü için yavaşlar; diğer ekipler ise bu yavaşlamayı isteksizlik olarak okur.

Yapısal sorun şudur: yazılım ekibi "hayır" dediğinde, bu cevabın arkasındaki teknik gerekçeyi aktaracak ortak bir dil ve zemin genellikle yoktur. Sonuçta yazılım ekibine "iş birliğine kapalı" etiketi yapıştırılır.

**Örnek:** Otel yönetimi yazılımı geliştiren bir şirkette, satış ekibi yeni bir müşteri için hızlıca özelleştirilmiş bir raporlama modülü istedi. Yazılım ekibi "mevcut raporlama mimarimizle uyumsuz" yanıtını verdi. Satış ekibi bunu "istemiyorlar" olarak yorumladı ve üst yönetime şikayette bulundu. Oysa yazılım ekibi, talebin hayata geçirilmesinin kritik bir mimari değişikliği zorunlu kıldığını ve bu değişikliğin diğer aktif müşterilerin kullandığı modülleri etkileyebileceğini değerlendirmişti.

---

**"Sahaya inmek istemezler"**

Müşterilerine anahtar teslim proje yapan şirketlerde çokça rastlanan bu klişe, özellikle proje sayısının fazla olduğu kurumlarda belirginleşir. Yazılım geliştirme ekiplerinin sürekli sahada olması isteği; diğer ekiplerin sağlanan çözüme yeterince güvenememesi, sahada beklenmeyen sistem davranışlarıyla karşılaşılması ve domain bilgisinin ekipler arasında yeterince paylaşılmaması gibi nedenlerden kaynaklanır.

Sahaya inmemenin arka planında da yapısal bir neden vardır: yazılım geliştirme derin konsantrasyon gerektiren bir iştir. Araştırmalar, bir geliştiricinin yoğun çalışma akışına girmesinin ortalama 15-20 dakika aldığını ve her kesintinin bu akışı sıfırladığını gösterir. Saha ziyaretleri ise genellikle tam gün süren, önceden planlanamayan ve bağlam değiştirme maliyeti yüksek aktivitelerdir. Birden fazla projenin eş zamanlı yürütüldüğü organizasyonlarda bu durum, zaten dar olan kapasiteyi daha da daraltır.

**Örnek:** Bir liman yönetim sistemi projesinde implementasyon ekibi, yazılım geliştiricilerin sahada bulunmasını talep etti. İki geliştirici iki haftayı sahada geçirdi. Bu sürede bekleyen sprint görevleri tamamlanamadı, bir sonraki müşterinin teslim tarihi kaydı ve yazılım ekibi lideri hem saha hem de ofis baskısıyla aynı anda mücadele etmek zorunda kaldı. Sahaya inme sorunu çözüldü; ama başka bir yerde yeni bir gecikme krizi başladı.

---

**"Müşteri toplantılarına katılmak istemezler"**

Sahaya inmeme klişesiyle yapısal olarak benzerdir. Özellikle müşteri ile ürün arasında proje yönetimi, ürün yönetimi ve iş analisti gibi aracı pozisyonların bulunmadığı organizasyonlarda bu şikayet sıkça duyulur.

Bu talebin arkasında meşru bir ihtiyaç vardır: müşteri isteklerinin teknik açıdan değerlendirilmesi gerekir. Ancak bu değerlendirmenin toplantı sırasında, hazırlıksız ve doğaçlama yapılması yazılım ekibi için yüksek belirsizlik ve hata riski taşır. "Yapılabilir mi?" sorusuna anında cevap vermek çoğu zaman ya gerçekçi olmayan taahhütlere ya da "hayır" cevabının yanlış yorumlanmasına yol açar. Gereksinim analizi ayrı bir beceri ve rol gerektirir. Bu rol yoksa, yazılım ekibi aynı anda geliştirici, analist ve müşteri toplantısı katılımcısı olmaya zorlanır.

**Örnek:** Kurumsal bir CRM ürünü geliştiren firmada, müşteri toplantılarına yazılım ekibinden kıdemli bir geliştirici düzenli olarak dahil edildi. Toplantılar ortalama üç saat sürüyor, geliştirici kararları gerçek zamanlı olarak not alıyordu. Bir süre sonra bu geliştiricinin sprint hızı diğerlerinin yarısına düştü. Ekip içinde "o artık geliştirici değil, analist" yorumu yapılmaya başlandı. Organizasyon bir analist kazanırken bir geliştirici kaybetmişti. Ancak bunu fark etmemişti.

---

**"Teslim tarihi vermezler"**

En sık karşılaşılan klişelerden biridir ve çoğu zaman yazılım ekiplerinin sorumsuzluğu olarak yorumlanır. Oysa bunun ardında yapısal nedenler yatar.

Yazılım geliştirmede tahmin, diğer mesleklere kıyasla çok daha zor bir eylemdir. Belirsizliğin kendisi bir girdi olduğunda çıktıyı kesin olarak planlamak mümkün değildir. Ürün yol haritasındaki belirsizlikler, "definition of done" kavramının ekipler arasında farklı yorumlanması, çok paydaşlı implementasyon projelerinin karmaşıklığı, kaynak eksikliği ve yıllara yayılmış kod tabanlarının getirdiği teknik borç, teslim tarihi vermeyi yapısal olarak güçleştiren faktörler arasındadır.

**Hofstadter Yasası** bu durumu öz bir biçimde ifade eder: "Her şey tahmin edilenden daha uzun sürer; Hofstadter Yasası'nı hesaba katsanız bile." Öte yandan verilen bir teslim tarihi organizasyonda hemen taahhüt olarak kodlanır. Yazılım ekibi bunu bilir ve belirsiz koşullarda kesin tarih vermekten çekinir. Dışarıdan bu çekimserlik sorumluluk almaktan kaçınmak olarak okunur.

**Örnek:** Hastane otomasyon yazılımı üreten bir yazılım şirketinde ürün yöneticisi, bir sprint planlamasında yeni bir kamu entegrasyon modülü için teslim tarihi istedi. Yazılım ekibi lideri "iki ila dört hafta" aralığını verdi. Ürün yöneticisi bunu "iki hafta" olarak proje planına işledi. İki hafta sonra modül teslim edilemedi. Yazılım ekibi "tarih vermediklerini" söyledi; ürün yöneticisi ise "iki hafta dediler" dedi. İkisi de haklıydı, ama aynı konuşmayı farklı duymuştu.

---

**"Diğer ekiplere üstten bakarlar"**

İletişimsizlik, ekiplerin odak noktalarının ve kaygılarının farklı olması ve nihayetinde ekip kültürleri arasındaki derin uçurumun neden olduğu bu klişe, organizasyonlara ciddi hasar verir. Özellikle mühendislik pratiklerini önceleyen yazılım ekipleri, çözülmeye çalışılan problemin net tanımlanmasını; geçici ve baştan savma çözümler yerine üzerinde düşünülmüş, uzlaşılmış ve sürdürülebilir çözümleri tercih eder.

Bu dinamiğin altında da yapısal bir neden vardır: yazılım ekibi, eksik veya hatalı gereksinimlerin bedelini en ağır biçimde ödeyen taraftır. Geliştirme bittikten sonra ortaya çıkan "aslında böyle değildi" yorumu, yazılım ekibi için emek kaybı anlamına gelir. Bu deneyimi defalarca yaşayan bir ekibin savunmacı ve sorgulayıcı tutum geliştirmesi karakter sorunu değil, kötü tasarlanmış bir sürecin çıktısıdır. Eksik veya aceleyle oluşturulmuş gereksinimlerle sürekli karşılaşan yazılım ekipleri zamanla diğer ekiplerin kararlarını daha fazla sorgular; bu da karşı tarafta küçümsenme hissi yaratır.

**Örnek:** Bir kamu yazılım projesinde iş analisti, gereksinimler dokümanını teslim etti. Yazılım ekibi beş kritik belirsizlik tespit etti ve bunları yazılı olarak iletti. İş analisti "bunları toplantıda konuşalım" dedi. Toplantıda yazılım ekibi lideri her maddeyi tek tek açıkladı. Toplantıdan çıkıldığında iş analisti ekibine "yazılım ekibi her şeyi sorguluyor, hiç kolaylaştırmıyorlar" yorumunu yaptı. Yazılım ekibi ise "gereksinimler hâlâ net değil" diye kendi içinde konuştu. İki ekip de aynı toplantıdan çıkmış, ama bambaşka deneyimler yaşamıştı.

**"Yapay zekâ varken bu kadar sürmemeli"**

Yapay zekâ (YZ) destekli kodlama araçlarının yaygınlaşmasıyla "yavaşlar" klişesi yeni bir biçim kazandı. Bir ekranın, bir fonksiyonun, hatta küçük bir uygulamanın dakikalar içinde üretilebildiğini gören organizasyon, yazılım ekibinin süre tahminlerini eskisinden de şüpheli karşılar: "Bunu YZ ile bir saatte yaparsınız."

Bu klişenin arkasındaki gözlem doğrudur: kod üretmenin görünen kısmı gerçekten ucuzladı. Ancak işin görünmeyen kısmı (gereksinimi netleştirmek, üretilen kodu mevcut sistemle bütünleştirmek, doğrulamak, güvenliğini sağlamak ve canlıda sahiplenmek) aynı oranda ucuzlamadı. Kod üretme hızı arttıkça bu görünmeyen işin hacmi de artar. Algı ile ölçülen gerçeklik arasındaki fark burada da kendini gösterir: deneyimli geliştiricilerle yapılan kontrollü bir çalışmada katılımcılar YZ araçlarıyla yüzde 20 daha hızlı çalıştıklarını düşünürken, ölçülen tamamlanma süreleri yüzde 19 daha uzun çıkmıştır <span class="bkz-ref" title="6. Becker, J., Rush, N., Barnes, E., Rein, D. (2025). Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity. METR.">(Bkz: 6)</span>. Bu bulgu YZ'nin değersiz olduğunu değil, hız algısının güvenilir bir ölçüt olmadığını gösterir.

**Örnek:** Bir B2B SaaS şirketinde yönetim, YZ kodlama araçlarına yatırım yaptıktan sonra teslimat kapasitesinin belirgin biçimde artmasını bekledi. İlk iki sprintte açılan değişiklik talebi sayısı gerçekten arttı. Ancak canlıya çıkan özellik sayısı neredeyse aynı kaldı; artan kod hacmi kod incelemesi, test ve entegrasyon aşamalarında birikiyordu. Yönetimin sorusu "araçları kullanmıyorlar mı?" oldu; yazılım ekibinin cevabı ise "darboğaz hiçbir zaman kod yazmak değildi" idi.

---

Bu sekiz klişenin ortak noktası yalnızca yazılım geliştirmenin doğasının yeterince anlaşılmaması değildir <span class="bkz-ref" title="1. Brooks, F. P. (1995). The Mythical Man-Month.">(Bkz: 1)</span>. Daha derin bir sorun vardır: bu klişelerin her biri, organizasyonun işleyiş biçiminin doğal bir çıktısıdır. Bağlam olmadan yapılan gözlemler etikete dönüşür; etiketler zaman içinde gerçekmiş gibi muamele görür. Bu döngü kırılmadan, ekipler arasındaki gerilim yönetilemez.

Bu klişelerin nasıl beslendiğini anlamak için bir adım daha atmak gerekir: her ekibin başarıyı farklı tanımladığı ve bu tanımların yapısal olarak çatıştığı gerçeğini görmek. Bu konu, bir sonraki bölümün konusudur.

---

## 1.2 Ürün, Proje ve Implementasyon Perspektifleri

Bu bölümde ele alınacak temel sorun, ekiplerin birbirinden farklı önceliklere sahip olması değildir. Asıl sorun, her ekibin kendi iç mantığı çerçevesinde tamamen rasyonel olan bir bakış açısına sahip olması, ancak bu bakış açılarının organizasyon düzeyinde birbirleriyle yapısal olarak uyumsuz olmasıdır. Başka bir deyişle, hiç kimse yanlış değildir; ama sistemin ürettiği çatışma kaçınılmazdır.

### 1.2.1 Ürün Perspektifi

Ürün ekipleri için başarı, müşteri ihtiyacına hızlı ve doğru cevap vermektir. Kullanıcı geri bildirimleri, pazar rekabeti ve paydaş beklentileri bu ekiplerin günlük gündemini belirler. Başarı kriterleri genellikle özellik teslim hızı, müşteri memnuniyeti ve yol haritası gerçekleşme oranı olarak şekillenir.

Bu baskılar altında ürün ekipleri, yeni özellikleri olabildiğince hızlı yol haritasına almaya ve geliştirme ekibine iletmeye çalışır. Bu süreçte teknik maliyetler çoğu zaman geri planda kalır.

Bunun yapısal bir nedeni vardır: ürün yol haritaları neyin eklendiğini ödüllendirir, neyin eklenmediğini değil. "Bu özelliği neden geliştirmedik?" sorusu, "Bu özelliği neden bu kadar uzun sürede geliştirdik?" sorusu kadar sık sorulmaz. Bu asimetri, ürün ekiplerini sürekli ekleme yönünde iterken teknik sürdürülebilirliği görünmez kılar.

**Örnek:** Bir e-ticaret girişiminde ürün yöneticisi, müşteri geri bildirimlerine dayanarak ürün listeleme sayfasına gelişmiş bir filtreleme özelliği ekledi. Arayüz tarafından bakıldığında bu, birkaç filtre kutucuğundan ibaretti. Ancak yazılım ekibi için bu değişiklik, mevcut veritabanı sorgu mimarisinin baştan tasarlanmasını gerektiriyordu. Ürün ekibi bir onay kutusu görürken, yazılım ekibi üç haftalık yapısal bir çalışma görüyordu. İki taraf da haklıydı; ama aynı gerçeği görmüyordu.

### 1.2.2 Proje Perspektifi

Proje ekipleri için başarı, "demir üçgen" olarak da bilinen üç temel kısıtın dengelenmesidir: kapsam, zaman ve maliyet. Bu ekipler, üst yönetime ve müşterilere proje ilerleyişini raporlamakla yükümlüdür. Teslim tarihleri, bütçe tüketme hızı ve kilometre taşlarının gerçekleşme oranı, proje yöneticilerinin performansını doğrudan etkiler.

Bu baskı altında proje yöneticileri, belirsizliği ortadan kaldırmak yerine belirsizliği plan içinde sabitleyerek yönetmeye çalışır. Takvim çoğu zaman değiştirilemez bir kısıt olarak kabul edilirken, teknik karmaşıklık uyarlanabilir bir değişken olarak ele alınır. Ancak bu yaklaşım, yazılım geliştirmenin doğasıyla çelişir: teknik karmaşıklık çoğu zaman sabittir ve takvim esnekliğe muhtaç olan unsurdur.

Proje yönetiminde kullanılan geleneksel metodolojilerin büyük bölümü, inşaat sektörü gibi girdilerin öngörülebilir ve sürecin doğrusal olduğu alanlara yönelik geliştirilmiştir. Bilgi yoğun ve belirsizliğin yapısal olduğu yazılım geliştirmeye bu metodolojilerin doğrudan uygulanması yanlış beklentiler üretir.

**Örnek:** Kurumsal ERP implementasyon projesinde proje yöneticisi, müşteri yönetimine verilen söze bağlı kalmak adına altı haftalık yazılım geliştirme tahminini dört haftaya sıkıştırdı. Kapsamda herhangi bir değişiklik yapılmadı. Yazılım ekibine iletilen mesaj ise "daha hızlı çalışmaları gerektiği" yönündeydi. Bu süreçte teknik borç birikti, hata oranı arttı ve altı ay sonra aynı ekip, bu süreçte alınan kararların bedelini ödemeye devam ediyordu.

### 1.2.3 Implementasyon Perspektifi

Implementasyon ekipleri, organizasyonun müşteriyle en doğrudan temas eden birimidir. Sahadaki sorunlar, müşteri şikayetleri, geçişte yaşanan aksaklıklar ve servis kesintileri bu ekiplerin günlük gerçekliğini oluşturur. Başarı, sistemin canlıya alınması ve müşterinin süreci kabul etmesidir.

Bu ekipler üzerindeki baskı, diğer ekiplerden farklı bir nitelik taşır: anlık ve görünür bir baskıdır. Müşteri şikayet ediyordur, saha durmuştur, sistem çalışmıyordur. Bu gerçeklik, implementasyon ekiplerini her zaman "şimdi çalışsın" önceliğiyle hareket etmeye iter. Uzun vadeli mimari sağlık, bu anlık baskının gölgesinde kalır.

Talep analizi ve önceliklendirme için tanımlı bir adım olmadığında, müşteri talepleri çoğu zaman analiz edilmeden ya da önceliklendirilmeden yazılım ekiplerine ulaşır. "Müşteri istiyor" ifadesi, bir gereksinim analizi yerine geçer hale gelir. Bu durum, yazılım ekipleri üzerinde hem teknik hem de iletişimsel bir yük oluşturur.

**Örnek:** Bir perakende zinciri projesinde çalışan implementasyon ekibi, mağaza ziyaretleri sırasında müşteriden topladığı on iki ayrı "küçük iyileştirme" talebini bir liste halinde yazılım ekibine iletti. Listede önceliklendirme yoktu, teknik bağlam yoktu, müşteriyle yapılan anlaşma detayları yoktu. Yazılım ekibi her birinin aslında ne anlama geldiğini anlamak için ek görüşmeler yapmak zorunda kaldı. Bu görüşmeler, listenin kendisinden daha uzun sürdü.

### 1.2.4 Yazılım Ekibi Perspektifi

Yazılım ekibi için başarı; sürdürülebilir, ölçeklenebilir, güvenli, güvenilir ve hatasız bir sistem oluşturmaktır. Bu tanım, diğer ekiplerin başarı tanımlarıyla kıyaslandığında dikkat çekici bir fark ortaya çıkar: yazılım ekibinin başarı kriterleri büyük ölçüde uzun vadeli ve sessiz niteliktedir.

Sistemin çökmemesi bir başarıdır, ama görünmezdir. Mimari borç birikmemesi bir başarıdır, ama ölçülmesi kolay değildir. Güvenlik açığı üretilmemesi bir başarıdır, ama kutlanmaz.

Buna karşılık yazılım ekipleri, geçmişte verilen tüm kararların sorumluluğunu taşımak zorundadır. Aynı zamanda gelecekte oluşabilecek ihtiyaçları veya sorunları öngörmelidirler. Hızlı teslim edilebilmesi için özellikler, teknik borç olarak sisteme işlenir. Yıllar içinde biriken bu borç, her yeni geliştirmenin maliyetini artırır ve hız düşer. Ama bu hız düşüşü dışarıdan bakıldığında "yazılım ekibinin yavaşlaması" olarak okunur; sistemin birikmiş karmaşıklığının bir sonucu olarak değil.

Bu asimetri önemlidir: ürün, proje ve implementasyon ekipleri kararlar alır ve ilerler; yazılım ekibi ise bu kararların uzun vadeli sonuçlarıyla yaşamaya devam eder.

### 1.2.5 KPI Uyumsuzluğunun Yapısal Sonuçları

Bu dört perspektif farklı önceliklere işaret etmekle kalmaz aynı olay karşısında doğrudan çelişen yorumlar üretir.

Bir kapsam değişiklik talebini düşünelim:

- **Ürün ekibi** için bu, müşteri ihtiyacına verilen bir yanıttır ve hızla onaylanmalıdır.
- **Proje ekibi** için bu, takvimi tehdit eden bir risk olabilir; ancak müşteri talep ediyorsa kabul edilmek zorundadır.
- **Implementasyon ekibi** için bu, sahadaki bir sorunu çözecektir ve hemen hayata geçirilmelidir.
- **Yazılım ekibi** için ise bu değişiklik, mevcut sistemin yeniden değerlendirilmesini, belki de kritik bileşenlerin yeniden yazılmasını gerektirebilir.

Her ekip kendi açısından rasyonel biçimde davranmaktadır. Hiçbiri yanlış değildir. Ama bu rasyonellikler bir arada ele alındığında, organizasyon düzeyinde bir kayıp kaçınılmaz hale gelir.

*Accelerate* araştırmaları bu dinamiği "lokal optimizasyon ile global optimizasyon" çatışması olarak tanımlar: her ekip kendi metriğini optimize ettiğinde, sistemin bütünü için kayıp üretilir <span class="bkz-ref" title="2. Forsgren, N., Humble, J., Kim, G. (2018). Accelerate.">(Bkz: 2)</span>. Yazılım geliştirmede bu durum Conway Yasası ile de örtüşür: organizasyonların ürettiği sistemler, o organizasyonların iletişim yapısını yansıtır <span class="bkz-ref" title="5. Conway, M. E. (1968). How Do Committees Invent? Datamation.">(Bkz: 5)</span>. KPI’lar hizalanmamışsa, sistemin mimarisi ve ekipler arası işbirliği de hizalanmamış olacaktır.

Bu yapısal uyumsuzluk, bireysel iletişim becerilerini geliştirerek ya da toplantı sıklığını artırarak çözülemez. Sorun, teşvik yapılarında yatmaktadır. Bu gerçeği görmeden atılacak her adım, yüzeydeki belirtiyi tedavi etmeye çalışır; altta yatan nedeni değil.

### 1.2.6 Yapay Zekâ Çağında Çıktı Metrikleri

YZ destekli geliştirme, KPI uyumsuzluğuna yeni bir boyut ekler. Kod satırı, açılan değişiklik talebi (pull request) sayısı, kapanan iş adedi ya da "kodun yüzde kaçının YZ tarafından yazıldığı" gibi çıktı metrikleri, YZ araçlarıyla neredeyse zahmetsizce büyütülebilir. Bu metrikler yükselirken organizasyon verimliliğin arttığını düşünebilir; oysa müşteriye ulaşan değer, sistemin kararlılığı ve değişiklik maliyeti aynı yönde hareket etmeyebilir.

Goodhart Yasası bu tuzağı öz biçimde ifade eder: bir ölçüt hedefe dönüştüğünde, iyi bir ölçüt olmaktan çıkar <span class="bkz-ref" title="7. Goodhart, C. A. E. (1975). Problems of Monetary Management: The U.K. Experience. Papers in Monetary Economics, Reserve Bank of Australia.">(Bkz: 7)</span>. YZ, çıktı metriklerini hedefe dönüştürmenin maliyetini neredeyse sıfıra indirir. Ürün ekibi teslim edilen özellik sayısına, yönetim YZ kullanım oranına, yazılım ekibi ise incelemeden geçen değişiklik sayısına odaklandığında, her ekip kendi metriğini iyileştirirken sistemin bütünü kaybedebilir.

Bu nedenle YZ çağında anlamlı ölçüm, üretilen koddan kabul edilen ve değer üreten değişikliğe kaymalıdır: canlıya alınan, doğrulanmış ve geri alınması gerekmeyen değişiklikler; beklenen değere karşı gerçekleşen değer; değişiklik başarısızlık oranı ve geri dönüş süresi gibi sistem düzeyindeki göstergeler <span class="bkz-ref" title="2. Forsgren, N., Humble, J., Kim, G. (2018). Accelerate.">(Bkz: 2)</span>. Bu göstergeler ekip eğilimlerini izlemek içindir; bireyleri sıralamak için kullanıldıklarında aynı tuzağa yeniden düşülür.

---

## 1.3 Görünmeyen İş Yükü

Yazılım geliştirme sürecinin büyük bir kısmı, proje yönetim araçlarında görünmez. Sprint board’larında listelenmez, Jira ticket’larına dönüşmez, raporlara yansımaz. Ancak bu görünmezlik, söz konusu işlerin yapılmadığı anlamına gelmez. Tam tersine, bu işlerin büyük çoğunluğu "görünür" işlerin var olabilmesini sağlayan zemin niteliğindedir.

### 1.3.1 Görünmeyen İşin Anatomisi

Yazılım geliştirme ekiplerinin günlük iş yükünün önemli bir kısmı şu başlıklar altında toplanabilir:

**Teknik borç ve refactoring:** Her yazılım geliştirme sürecinde, hız veya kaynak kısıtı nedeniyle "daha iyi yapılabilirdi" kararları alınır. Bu kararların birikimi teknik borç olarak adlandırılır. Teknik borç, zaman içinde her yeni özelliğin maliyetini artırır; eski kodun anlaşılması, değiştirilmesi ve test edilmesi giderek daha fazla zaman alır. Refactoring ise bu borcun geri ödenmesidir: mevcut davranışı değiştirmeden iç yapıyı iyileştirmek. Bu çalışma dışarıdan görünmez, çünkü yeni bir özellik sunmaz; ancak var olan özelliklerin daha güvenli, daha hızlı ve daha düşük maliyetle geliştirilebilmesini sağlar.

**Altyapı ve bağımlılık yönetimi:** Yazılım sistemleri bağımlılıklar üzerine kurulur: kütüphaneler, framework’ler, veritabanları, üçüncü taraf servisler. Bu bağımlılıkların güncellenmesi, güvenlik açıklarının kapatılması ve eski teknolojilerin yenileriyle değiştirilmesi, sürekli devam eden bir iş yükü oluşturur. Dışarıdan bakıldığında bu çalışmalar "hiçbir şey değişmedi" izlenimi verir; oysa "hiçbir şeyin bozulmaması" için ciddi bir efor harcanmıştır.

**Hata araştırması:** Bir hatanın düzeltilmesi, zaman zaman düzeltmenin kendisinden çok daha uzun süren bir araştırma aşaması gerektirir. Hatanın hangi koşulda oluştuğunu anlamak, sistemi gözlemlemek, logları incelemek ve kök nedeni tespit etmek görünmez bir çalışmadır. Ticket üzerinde "bug fix: 2 saat" görünür; ancak öncesindeki dört saatlik araştırma görünmez.

**Bilgi aktarımı ve dokümantasyon:** Yeni ekip üyelerinin sisteme dahil edilmesi, kritik bilginin aktarılması ve dokümantasyonun güncellenmesi yazılım ekiplerinin önemli bir zamanını alır. Bu çalışma doğrudan bir özellik veya düzeltme üretmez. Ancak yapılmadığında bilgi siloları oluşur, sistem bilgisi birkaç kişide yoğunlaşır ve ekibin kolektif kapasitesi azalır.

**Koordinasyon ve iletişim yükü:** Günlük toplantılar, planlama oturumları, gereksinimlerin netleştirilmesi için yapılan görüşmeler, code review’lar ve teknik tartışmalar için harcanan süre görünmez iş yükünün önemli bir parçasıdır. Bu süre sprint board’larına yansımaz; ancak gerçek bir kapasite tüketimidir.

### 1.3.2 Neden Görünmez?

Görünmez iş yükünün temel nedeni, organizasyonların yazılım geliştirmeyi çıktı (output) üzerinden ölçmesidir. Sprint hızı tamamlanan story point sayısını gösterir. Burndown grafiği kapatılan ticket’ları gösterir. Yol haritası teslim edilen özellikleri listeler.

Bu ölçüm araçları, teslim edilen değeri görünür kılarken teslim etmeyi mümkün kılan çalışmayı görünmez bırakır. Sonuç olarak şu paradoks ortaya çıkar: görünür iş ödüllendirilir, görünmez iş görmezden gelinir.

Bir geliştirici yeni bir özellik teslim ettiğinde bu başarı olarak değerlendirilir. Aynı geliştirici iki hafta boyunca kritik bir güvenlik açığını kapatmak için altyapıyı yeniden yapılandırdığında, sprint review’da gösterecek somut bir çıktısı yoktur. Performansı düşük görünebilir; oysa ekip için kritik bir riski ortadan kaldırmıştır.

**Örnek:** Bir SaaS şirketinde kıdemli bir geliştirici, üretim ortamında aralıklı olarak ortaya çıkan ve müşteri şikayetlerine yol açan bir performans sorununu araştırmaya başladı. Sorunun kök nedeni iki servis arasındaki senkronizasyon problemi olarak tespit edildi. Düzeltme, üç günlük mimari bir değişiklik gerektirdi. Sprint sonunda bu geliştirici yalnızca bir story point tamamlamıştı; ekip tarafından "düşük verimli bir hafta" olarak değerlendirildi. Müşteri şikayetlerinin kesilmesi ise doğrudan bu çalışmayla ilişkilendirilmedi.

### 1.3.3 Teknik Borcun Birikimi

Teknik borç kavramı, ilk olarak Ward Cunningham tarafından 1992 yılında tanımlandı. Cunningham, yazılım sistemlerinde bilinçli olarak alınan kısa vadeli kararların uzun vadede maliyete dönüştüğünü bir finansal metafor üzerinden açıkladı: tıpkı borç gibi, teknik borç da faiz öder. Her yeni geliştirme, birikmiş teknik borç üzerine inşa edildiğinde daha maliyetli hale gelir <span class="bkz-ref" title="3. Cunningham, W. (1992). The WyCash Portfolio Management System.">(Bkz: 3)</span>.

Bu birikimin somut sonuçları şöyle gözlemlenir:

- Yeni bir özellik eklemek giderek daha uzun sürer.
- Küçük değişiklikler beklenmedik hatalara yol açar.
- Test yazmak zorlaşır, çünkü bileşenler birbirine sıkı sıkıya bağlıdır.
- Yeni geliştiriciler sistemi anlamakta giderek daha çok zorlanır.
- Belirli bir noktadan sonra "her şeyi yeniden yazalım" tartışması başlar.

Bu sürecin kritik özelliği, dışarıdan görünmemesidir. Sistem çalışmaya devam eder; ancak her geliştirme adımı biraz daha pahalıya gelir. Organizasyon "yazılım ekibi neden yavaşladı?" diye sorar; oysa asıl soru "hangi kararlar bu yavaşlamayı kaçınılmaz kıldı?" olmalıdır.

**Örnek:** Beş yıl önce kurulan bir e-ticaret platformunda, başlangıçta "hızlı çıkalım" kararıyla alınan mimari tercihler zaman içinde birikti. Her yeni geliştirme bu birikimin üzerine inşa edildi. Beşinci yılda aynı türde bir özelliği geliştirmek, birinci yıla göre üç kat daha uzun sürüyordu. Ekip değişmişti, teknoloji değişmişti; ama birikmiş borç yerli yerinde duruyordu.

### 1.3.4 Görünmeyen İşin Organizasyonel Maliyeti

Görünmez iş yükünün uzun vadeli maliyeti yalnızca teknik değildir; organizasyonel ve insani boyutları da vardır.

**Geliştirici yorgunluğu:** Görünmez işin sürekli göz ardı edilmesi, yazılım geliştiricilerin motivasyonunu aşındırır. Sistem borcunu görebilen ancak azaltmak için zaman bulamayan bir geliştirici, giderek artan bir çaresizlik hissiyle çalışır. Bu durum, deneyimli geliştiricilerin organizasyondan ayrılmasına zemin hazırlar; beraberinde kritik sistem bilgisinin de yitirilmesine neden olur.

**Kırılgan sistemler:** Görünmez bakım işlerinin ertelenmesi sistem kırılganlığını artırır. Güncellenmemiş bağımlılıklar güvenlik açığına dönüşür. Refactoring yapılmamış bileşenler beklenmedik durumlarda hata üretir. Dokümante edilmemiş sistemler, kritik bilgiye sahip tek bir geliştiricinin ayrılmasıyla aniden anlaşılamaz hale gelir.

**Hız kaybının yanlış yorumlanması:** Görünmeyen iş yükü göz ardı edildiğinde ekibin hız kaybı yanlış yorumlanır. Organizasyon "geliştirici yeterliliği" veya "süreç verimsizliği" gibi açıklamalara yönelir. Oysa hız kaybının gerçek nedeni birikmiş teknik borç ve ertelenmiş bakım işleridir. Doğru tanı konulmadan uygulanan çözümler (daha fazla geliştirici işe almak, daha sıkı takip, daha kısa sprint döngüleri gibi) sorunu çözmez aksine çoğu zaman derinleştirir.

**Örnek:** Hızlı büyüyen bir girişimde yazılım ekibi iki yıl boyunca yeni özellik geliştirmeye odaklandı. Refactoring talepleri "şimdi değil, ilerleyen sprintlerde" kararıyla ertelendi. İki yılın sonunda ekip her sprint daha az iş çıkarır hale geldi. Yönetim çözüm olarak iki yeni geliştirici işe aldı. Yeni geliştiriciler sistemi anlamakta güçlük çekti; mevcut ekip bu geliştiricilere destek vermek için zamanlarının önemli bir bölümünü harcadı. Sprint hızı gerilemeye devam etti.

### 1.3.5 Doğrulama Yükü: Yapay Zekâ Çağının Görünmeyen İşi

YZ destekli geliştirme, görünmeyen iş yükünün bileşimini değiştirir. Söz dizimi, tekrar eden kalıp kodlar ve basit dönüşümler gibi düşük düzeyli işlerin önemli bir kısmı makineye devredilebilir. Ancak bunların yerini daha yüksek düzeyli ve daha az görünen bir iş alır: üretilen kodun gerçekten doğru olup olmadığını anlamak, mevcut sistemin bağlamıyla tutarlılığını kontrol etmek, hangi önerinin kabul edileceğine karar vermek ve kendi yazmadığı bir kodun sorumluluğunu üstlenmek.

Bu yük geliştiricilerin kendi deneyimlerinde de görünür hale gelmektedir. 2025 yılında yapılan geniş katılımlı bir geliştirici anketinde katılımcıların yüzde 66'sı YZ araçlarıyla yaşadıkları sorunlar arasında "neredeyse doğru ama tam olarak değil" çözümleri, yüzde 45'i ise YZ tarafından üretilen kodda hata ayıklamanın daha fazla zaman aldığını belirtmiştir <span class="bkz-ref" title="8. Stack Overflow (2025). 2025 Developer Survey: AI.">(Bkz: 8)</span>. "Neredeyse doğru" kod, açıkça hatalı koddan daha tehlikelidir; çünkü hatayı bulmak, kodun tamamını anlamayı gerektirir.

Doğrulama yükü, klasik görünmeyen işin tüm özelliklerini taşır: sprint panosunda ayrı bir kart olarak yer almaz, çıktı metriklerinde görünmez ve tamamlandığında geriye "hiçbir şey olmamış" izlenimi bırakır. Organizasyon üretilen kod miktarını görürken, o kodu güvenilir kılan emeği görmez. Bu nedenle YZ'nin yaygınlaştığı ekiplerde kapasite planlaması, kod yazma süresini değil, doğrulama ve inceleme kapasitesini temel almalıdır.

**Örnek:** Bir lojistik yazılımı ekibinde kıdemli geliştiriciler, ekibin YZ araçlarıyla ürettiği değişikliklerin kod incelemesini üstlendi. Birkaç ay içinde kıdemli geliştiricilerin zamanının büyük kısmı inceleme kuyruğuna gitmeye başladı; kendi geliştirme işleri sürekli ertelendi. Sprint raporlarında bu emek görünmediği için, yönetimin gözünde kıdemli geliştiricilerin üretkenliği düşmüştü. Oysa ekibin güvenilir biçimde canlıya çıkabilmesini sağlayan şey tam olarak bu görünmeyen işti.

---

Görünmeyen iş yükü, algı ile gerçeklik arasındaki en büyük boşluklardan biridir. Bu boşluğu kapatmanın yolu, yazılım geliştirmeyi yalnızca çıktı üzerinden ölçen yaklaşımın ötesine geçmektir. Bakım, iyileştirme ve teknik sağlık, özellik geliştirme kadar gerçek bir iştir; yalnızca farklı bir görünürlüğe sahiptir. Bu gerçeklik kabul edilmeden, ekip kapasitesine ilişkin yapılan her planlama eksik kalır <span class="bkz-ref" title="3. Cunningham, W. (1992). The WyCash Portfolio Management System.">(Bkz: 3)</span>.

---

## 1.4 İletişim Boşlukları

Yazılım ekipleri ile iş ekipleri arasındaki iletişim sorunu yalnızca farklı kelimeler kullanmaktan ibaret değildir. Daha derinde, birbirinden farklı zihinsel modeller, risk algıları ve problem çerçeveleme biçimleri yatar. Bu farklılıklar, aynı toplantıda oturan, aynı konuyu konuştuğunu sanan iki tarafın aslında birbirini duymadığı bir ortam yaratır.

### 1.4.1 İki Farklı Dil

Yazılım ekipleri deterministik ve kesin ifadeler kullanmaya eğilimlidir. Bir sistemin nasıl davrandığını, hangi koşullarda ne ürettiğini ve hangi sınırlar içinde çalıştığını olabildiğince net tanımlamaya çalışırlar. Bu kesinlik eğilimi teknik doğruluk için bir zorunluluktur. Yazılımda muğlak bir gereksinim, muğlak bir sisteme dönüşür.

İş ekipleri ise belirsizlikle daha rahat çalışır. "Yaklaşık şöyle bir şey istiyoruz" veya "büyük ihtimalle bu yönde gideceğiz" gibi ifadeler, gereksinimin hâlâ şekillendiğini ve esnekliğe ihtiyaç duyulduğunu gösterir. Bu esneklik iş dünyasında çoğu zaman bir erdem olarak değerlendirilir.

Bu iki yaklaşım bir arada var olduğunda, aynı sözcükler farklı anlamlar taşır. "Mümkün mü?" sorusu iş ekibi için "yaklaşık olarak yapılabilir mi?" anlamına gelirken, yazılım ekibi için "tam olarak, şu koşullar altında, şu sürede yapılabilir mi?" anlamına gelir. Bu iki soru arasındaki fark büyüktür; ama toplantı sırasında çoğu zaman görünmez.

### 1.4.2 Mesajın Çarpıtılması: Söylenen ile Duyulan

Yazılım ekiplerinin kullandığı belirli ifadeler, diğer ekipler tarafından sistematik olarak farklı yorumlanır. Bu çarpıtma çoğu zaman kasıtsızdır; ancak sonuçları kalıcıdır.

| Yazılım ekibinin söylediği | Diğer ekiplerin duyduğu |
|---|---|
| "Bu mümkün değil." | "Yapmak istemiyorlar." |
| "İki ila dört hafta sürer." | "İki haftada biter." |
| "Bu biraz karmaşık." | "Bahane üretiyorlar." |
| "Daha fazla bilgiye ihtiyacım var." | "Başlamak istemiyorlar." |
| "Bunu test etmemiz gerekiyor." | "Gereksiz yere yavaşlatıyorlar." |
| "Mevcut mimariye uymaz." | "Esneklik göstermiyorlar." |

Bu çarpıtmaların ortak özelliği, yazılım ekibinin teknik bir gerçeği aktarırken karşı tarafın bir tutum veya niyet okumasıdır. Teknik kısıtlamalar iş birliğine kapalılık olarak yorumlanır. Belirsiz tahminler taahhüt olarak kaydedilir. Uyarılar direniş olarak algılanır.

**Örnek:** Bir yazılım ekibi, planlanan entegrasyonun mevcut sisteme eklenebilmesi için önce veri modelinin yeniden yapılandırılması gerektiğini belirtti ve bu çalışmanın iki sprint sürebileceğini aktardı. Proje yöneticisi bu mesajı "entegrasyonun iki sprintte tamamlanacağı" şeklinde anladı ve planını buna göre güncelledi. İki sprint sonunda entegrasyon henüz başlamamıştı; veri modeli çalışması tamamlanmış, ancak entegrasyon geliştirmesi başlamamıştı. Tarafların birbirini suçlamaya başladığı bu noktada asıl sorun, aynı cümleden farklı anlamların çıkarılmış olmasıydı.

### 1.4.3 Belirsizlik Toleransı ve Risk Algısı Farkı

Yazılım geliştirme sürecinde belirsizlik bir kayıp değil, bir gerçektir. Sistem nasıl davranacak, hangi uç durumlar ortaya çıkacak, bağımlılıklar nasıl tepki verecek — bunların tamamı ancak geliştirme ilerledikçe netleşir. Bu nedenle yazılım ekipleri belirsizliği ifade etmeye eğilimlidir: "Şu an kesin bir şey söyleyemem", "Bağımlılıkları incelemem gerekiyor", "Risk var ama boyutunu henüz bilemiyorum."

İş ekipleri ise çoğu zaman belirsizliği bir bilgi eksikliği veya hazırlıksızlık göstergesi olarak okur. Paydaşlara aktarılabilir ve yönetilebilir bir yanıt beklerler. "Risk var ama boyutunu bilmiyorum" ifadesi proje planına işlenemez; dolayısıyla ya görmezden gelinir ya da küçümsenir.

Bu fark, özellikle risk iletişiminde ciddi sorunlara yol açar. Yazılım ekibi bir riski erken ve açık biçimde dile getirdiğinde, bu uyarı çoğu zaman ciddiye alınmaz. Aynı risk gerçekleştiğinde ise "neden önceden söylemediniz?" sorusu gelir. Yazılım ekibi "söyledik" der; diğer ekip "ama bu kadar ciddi olduğunu anlamadık" der. Her ikisi de haklıdır.

**Örnek:** Bir yazılım ekibi, yeni modülün eski sistemle entegrasyonunda "veri tutarlılığı riski" olduğunu sprint planlamasında dile getirdi. Bu ifade proje planında bir aksiyon maddesi olarak değil, genel bir not olarak kaldı. Birkaç hafta sonra üretim ortamında veri tutarsızlığı yaşandı. Toplantıda yazılım ekibi uyardığını hatırlattı. Diğerleri bunu hatırlıyordu; ancak o uyarının bu kadar ciddi bir soruna işaret ettiğini anlamamışlardı.

### 1.4.4 Güven Erozyonu ve Kırık Telefon Etkisi

İletişim boşlukları tek seferlik olsaydı, kolayca düzeltilebilirdi. Asıl sorun, bu boşlukların tekrarlanması ve zamanla güven erozyonuna dönüşmesidir.

Yazılım ekibinin her uyarısı yanlış yorumlandığında, ekip uyarılarını daha üstü kapalı yapmaya başlar. "Söyledik ama dinlemediler" deneyimi biriktikçe iletişim giderek daha savunmacı bir hal alır. Öte yandan diğer ekipler, yazılım ekibinin her "bu karmaşık" ifadesini bir bahane olarak görmeye alışır. İki taraf arasındaki iletişim, bilgi aktarımı olmaktan çıkıp birer pozisyon savunmasına dönüşür.

Bu noktada bir başka sorun devreye girer: kırık telefon etkisi. Bir gereksinim organizasyon içinde el değiştirdikçe yalnızca bilgi kaybına uğramaz; aynı zamanda yeniden yorumlanır. Her ekip problemi kendi uzmanlık alanının diliyle yeniden ifade eder. Operasyon ekibi iş akışını düşünür, proje yöneticisi planlama açısından yaklaşır, ürün yöneticisi kapsam ve öncelik perspektifiyle değerlendirir, yazılım ekibi ise teknik risk ve mimari etkileri görür. Bu yeniden yorumlama zinciri ilerledikçe, başlangıçtaki ihtiyaç zaman zaman tamamen farklı bir probleme dönüşebilir.

Müşteriden implementasyon ekibine, implementasyon ekibinden proje yöneticisine, proje yöneticisinden ürün yöneticisine, ürün yöneticisinden yazılım ekibine ulaşan bir gereksinim; her aktarımda biraz anlam yitirir, biraz bağlam düşer, biraz öncelik değiştirir. Sonunda yazılım ekibinin önündeki problem tanımı, müşterinin orijinal ihtiyacıyla yalnızca uzaktan benzeşebilir.

**Örnek:** Bir müşteri, kullanıcıların günlük operasyon sırasında aynı raporu sürekli son 24 saat filtresiyle açtığını ve bu nedenle zaman kaybettiklerini belirterek, raporun varsayılan tarih aralığının değiştirilmesini istedi. Implementasyon ekibi bu talebi "raporlama ekranı kullanıcıları yavaşlatıyor" şeklinde özetledi. Proje yöneticisi bunu "raporlama performansı iyileştirilmeli" başlığıyla ürün yönetimine aktardı. Ürün yönetimi ise problemi sistem performansı perspektifiyle değerlendirerek yazılım ekibine "raporlama modülünde performans optimizasyonu gerekli" şeklinde iletti.

Yazılım ekibi bu bilgiyle kapsamlı bir performans analizi başlattı; sorgu süreleri incelendi, indeks stratejileri değerlendirildi ve altyapı tarafında optimizasyon planları hazırlandı. Oysa müşterinin gerçek ihtiyacı yalnızca varsayılan filtre değerinin değiştirilmesiydi ve bu değişiklik birkaç dakikalık bir geliştirmeyle çözülebilecek kadar basitti.

Sorun teknik yetersizlik değildi. Sorun, gereksinimin her aktarımda yeniden yorumlanması ve sonunda bambaşka bir probleme dönüşmesiydi.

---

## 1.5 İlk Çatışma Noktaları

Çatışmalar aniden ortaya çıkmaz. Önceki bölümlerde ele alınan yapısal koşullar - hizalanmamış başarı kriterleri, görünmez iş yükü, iletişim boşlukları - belirli tetikleyicilerle bir araya geldiğinde somut çatışmaya dönüşür. Bu tetikleyiciler öngörülebilir niteliktedir; farklı organizasyonlarda, farklı ekiplerle, farklı sektörlerde tekrar tekrar aynı biçimlerde ortaya çıkarlar.

Bu bölümde bu tetikleyicileri tek tek inceleyeceğiz.

### 1.5.1 Kapsam Değişimi: Görünmez Maliyet

Kapsam değişimi, yazılım geliştirme projelerinde en sık yaşanan çatışma tetikleyicisidir. Bir özelliğin eklenmesi, değiştirilmesi veya kaldırılması — dışarıdan bakıldığında küçük bir düzeltme gibi görünür. Yazılım ekibi için ise bu değişiklik çoğu zaman sistemin yeniden değerlendirilmesi anlamına gelir.

Bunun nedeni, yazılım sistemlerinin birbirine bağlı bileşenlerden oluşmasıdır. Bir noktada yapılan değişiklik, diğer noktaları etkiler. "Sadece şu alanı ekleyin" isteği; veri modelini, API sözleşmelerini, doğrulama kurallarını, mevcut testleri ve bazen güvenlik katmanını etkileyebilir. Bu bağlantılar dışarıdan görünmez; dolayısıyla değişikliğin maliyeti de görünmez.

Kapsam değişiminin özellikle sorunlu bir boyutu vardır: değişikliği talep eden taraf için maliyet sıfır görünür. Ürün yöneticisi bir özelliği yol haritasına eklediğinde kendi açısından bir kayıp yaşamaz. Proje yöneticisi müşteri talebini kabul ettiğinde yalnızca bir satır daha eklemiş olur. Yazılım ekibi ise bu eklemenin gerçek maliyetini hesaplamak ve karşılamak zorunda kalır.

Bu asimetri, kapsam yönetimini yazılım ekibinin tek başına üstlendiği bir yük haline getirir. Ekip "hayır" dediğinde dirençli görünür; "evet" dediğinde ise ilerleyen süreçte beklenmedik gecikmelerin sorumlusu haline gelir.

**Örnek:** Bir yazılım ekibi, dört haftalık bir sprint planlaması yaptı. Planlamanın üçüncü haftasında ürün yöneticisi, müşteri toplantısından dönerek yeni bir özellik talebini "sadece küçük bir ek" olarak iletti. Yazılım ekibi bu talebin mevcut sprint kapsamıyla çakışacağını belirtti. Ürün yöneticisi "ama bu gerçekten küçük bir şey" dedi. Yazılım ekibi analiz yaptı ve değişikliğin üç farklı modülü etkilediğini tespit etti. Sprint başındaki plan bozuldu, öncelikler yeniden sıralandı, taahhüt edilen bir başka teslimat ertelendi. Sprint sonunda proje yöneticisi gecikme nedenini sordu.

### 1.5.2 Zaman Baskısı: Hızın Gerçek Bedeli

"Daha hızlı yapılabilir mi?" sorusu, yazılım ekiplerinin en sık karşılaştığı baskı biçimidir. Bu sorunun arkasında çoğu zaman meşru bir iş ihtiyacı yatar: müşteri bekliyor, rekabet baskısı var, teslim tarihi sözü verilmiş. Buna rağmen, hız baskısının yazılım geliştirme üzerindeki etkisi çoğu zaman beklenilenin tersidir.

Frederick Brooks, *The Mythical Man-Month* adlı kitabında bunu net biçimde ortaya koyar: geciken bir projeye insan kaynağı eklemek projeyi daha da geciktirir. Yeni ekip üyeleri sistemi öğrenmek için zamana ihtiyaç duyar; mevcut ekip bu öğretim sürecinde üretkenliğini kaybeder; iletişim maliyeti artar. Bu gözlem "Brooks Yasası" olarak bilinir ve onlarca yıllık deneyimle doğrulanmış durumdadır <span class="bkz-ref" title="1. Brooks, F. P. (1995). The Mythical Man-Month.">(Bkz: 1)</span>.

Hız baskısının daha doğrudan bir maliyeti ise teknik borç üretimidir. Zaman kısıtı altında çalışan yazılım ekiplerinde kısa yollara başvurma eğilimi artar: testlerin, mimari kararların, güvenlik kontrollerinin ve hata yönetiminin ertelenmesi riski doğar. Kısa vadede sistem teslim edilir uzun vadede bu kararların her biri bakım maliyeti olarak geri döner. Hız baskısı altında teslim edilen her özellik, gelecekteki her özelliğin maliyetini artırır.

Bu dinamiğin en tehlikeli tarafı, maliyet ile faturanın farklı zamanlarda ve farklı kişilere kesilmesidir. Hız kararı ile altı ay sonra yavaşlayan sistem arasındaki bağ çoğu zaman görünmez kalır; yavaşlama başka bir sorunun çıktısı gibi algılanır. Maliyeti ödeyen ise o sırada ekipte çalışan geliştirici ve son kullanıcıdır.

**Örnek:** Bir yazılım ekibi, stratejik öneme sahip bir müşteri için modülü altı haftada teslim etmesi gerektiğini öğrendi. Normal koşullarda on iki haftalık bir iş olduğu değerlendirildi. Tarihte esneklik olmadığı için ekip birçok kısa yolu kabul ederek altı haftada teslim etti. Müşteri memnun kaldı. Ancak üç ay sonra aynı modüle yeni bir gereksinim eklenmesi gerektiğinde, yazılım ekibi mevcut yapının bunu kaldırmayacağını belirtti. Yeniden yazım kararı alındı. Bu sefer gereken süre on altı haftaydı.

### 1.5.3 Önceliklendirme Çatışmaları

Her ekip kendi işini en öncelikli olarak görür. Bu doğal bir eğilimdir; ancak organizasyon düzeyinde ele alınmadığında süregelen bir gerilim kaynağına dönüşür.

Ürün ekibi yeni özelliklerin hızlı geliştirilmesini ister. Proje ekibi taahhüt edilen teslimatların zamanında yapılmasını ister. Implementasyon ekibi sahadaki kritik hataların önce giderilmesini ister. Yazılım ekibi ise teknik borcun azaltılması ve altyapının sağlıklı tutulması gerektiğini düşünür. Bu taleplerin tamamı meşrudur; ancak sınırlı bir kapasite üzerinde eş zamanlı baskı oluştururlar.

Önceliklendirme konusunda net bir karar mekanizması olmadığında, çatışma kaçınılmazdır. Yazılım ekibi kimin talebini önceliklendirir? Hangi kritere göre? Bu kararı kim verir? Bu sorular yanıtsız kaldığında, önceliklendirme çoğu zaman en çok baskı yapana göre şekillenir. Bu durum, hem kaliteyi düşürür hem de ekibin yönlendirilebileceği izlenimini güçlendirir.

**Örnek:** Bir yazılım ekibi aynı anda üç farklı yönden gelen taleple karşı karşıya kaldı: proje yöneticisi taahhüt edilen entegrasyonun bitmesini istiyordu, ürün yöneticisi yeni pazara açılış için kritik bir özelliğin hızla hazırlanmasını talep ediyordu, implementasyon ekibi ise üretim ortamında devam eden bir performans sorununa öncelik verilmesini istiyordu. Üç talep de meşruydu. Yazılım ekibi lideri hangisini önceliklendireceğine karar veremedi ve bu kararı üst yönetime iletti. Net bir öncelik kararı çıkmadı; üç iş paralel yürütülmeye çalışıldı ve üçü de gecikti.

### 1.5.4 Beklenti-Gerçeklik Açığı

Yazılım geliştirme sürecinde en sarsıcı çatışma anlarından biri, paydaşların geliştirilen ürünü ilk kez gördüğü andır. Aylar boyunca süren çalışmanın ardından yapılan demo toplantısında "bu benim beklediğim şey değil" cümlesi, her taraf için farklı bir anlam taşır.

Paydaş için bu cümle, beklentilerinin karşılanmadığını ve sürecin yanlış ilerlediğini ifade eder. Yazılım ekibi için ise bu cümle, aylar boyunca verilen ve onaylanan gereksinimlere uygun çalışıldığını, ancak o gereksinimlerin yanlış yazıldığını ya da yanlış anlaşıldığını gösterir.

Bu açık, çoğu zaman gereksinim belirsizliğinden kaynaklanır. Yazılı bir gereksinim belgesi, paydaşın zihnindeki gerçek beklentiyi tam olarak yansıtmayabilir. Paydaş onayladığını sandığı belgeyi, aslında yüzeysel olarak değerlendirmiştir. Yazılım ekibi ise bu belgeyi teknik kesinlikle yorumlamış ve uygulamıştır.

Beklenti-gerçeklik açığı ne kadar geç ortaya çıkarsa, maliyeti o kadar yüksek olur. Erken bir geri bildirim küçük bir düzeltmeye yol açarken, teslimattan sonra gelen "bu benim istediğim değil" yorumu bazen aylar süren yeniden çalışmaya dönüşebilir.

**Örnek:** Bir yazılım ekibi, altı aylık geliştirme sürecinin sonunda müşteriye demo yaptı. Müşteri sistemi gördükten sonra "arayüz çok karmaşık, kullanıcılarım bunu anlayamaz" dedi. Yazılım ekibi gereksinim belgesinin arayüz tasarımına dair hiçbir kısıt içermediğini belirtti. Müşteri "ama biz sizden kullanımı kolay bir sistem istemiştik?" dedi. İki taraf da haklıydı; ama "kullanımı kolay" ifadesinin ne anlama geldiği hiçbir zaman netleştirilmemişti.

### 1.5.5 Çatışmanın Tırmanma Döngüsü

Yukarıda ele alınan tetikleyicilerin her biri, tek başına yönetilebilir bir sorundur. Asıl tehlike, bu tetikleyicilerin birbiriyle etkileşime girmesidir.

Kapsam değişimi zaman baskısıyla birleştiğinde kalite düşer. Kalite düşüşü sahada hatalara yol açar. Sahada hatalar çıkınca implementasyon ekibi baskı uygular. Bu baskı yazılım ekibini savunmaya iter. Savunmaya geçen yazılım ekibi iletişimi azaltır. Azalan iletişim beklenti-gerçeklik açığını büyütür. Büyüyen açık yeni bir kapsam değişikliğine zemin hazırlar.

Bu döngü kendi kendini besler ve giderek daha yıkıcı hale gelir. Başlangıçta teknik bir anlaşmazlık olan durum, zamanla kişisel suçlamalara dönüşür. "Yazılım ekibi yavaş" ifadesi yerini "yazılım ekibi anlaşılmaz" ifadesine bırakır, o da "yazılım ekibi güvenilmez" ifadesine.

Çatışmanın bu tırmanma dinamiği, bireylerin niyetinden bağımsızdır. İyi niyetli, yetenekli insanlar da bu döngüye girebilir. Çünkü döngüyü yaratan bireyler değil, yapıdır.

Bu tür çatışmaların kökeni bireylerde değil, sistemdedir.

---

## Sonuç

Bu bölümün temel iddiası şudur: yazılım ekiplerine yönelik "yavaş", "zorlaştıran" veya "dirençli" algısı çoğu zaman bireysel tutumlardan değil, organizasyonun yazılım geliştirmeyi nasıl okuduğundan doğar.

1.1'de yazılım ekiplerine yönelik klişelerin hangi gözlemlerden beslendiğini gördük. 1.2'de ürün, proje, implementasyon ve yazılım ekiplerinin farklı başarı tanımlarıyla hareket ettiğini; 1.3'te görünmeyen iş yükünün kapasite algısını nasıl bozduğunu; 1.4'te aynı cümlelerin farklı ekipler tarafından nasıl farklı duyulduğunu; 1.5'te ise bu boşlukların ilk çatışma noktalarına nasıl dönüştüğünü inceledik.

Bu çerçevede "yazılım ekibi neden böyle?" sorusu tek başına açıklayıcı değildir. Daha doğru soru, organizasyonun hangi başarı kriterleri, hangi görünürlük eksikleri ve hangi iletişim boşlukları altında bu algıyı ürettiğidir. Algı doğru okunmadığında gerilim kişilere bağlanır; doğru okunduğunda ise bunun sistemsel bir sonuç olduğu anlaşılır.

Böylece Bölüm 1, kitabın geri kalanı için temel bir eşik kurar: algının kökenini anlamadan teknik gerçekliği ve çatışma dinamiklerini doğru okumak mümkün değildir. Bir sonraki bölümde bu algının teknik zeminini, yani yazılım geliştirmenin doğasını inceleyeceğiz.

---
## Referanslar

1. Brooks, F. P. (1995). The Mythical Man-Month.
2. Forsgren, N., Humble, J., Kim, G. (2018). Accelerate.
3. Cunningham, W. (1992). The WyCash Portfolio Management System.
4. DeMarco, T., Lister, T. (2013). Peopleware.
5. Conway, M. E. (1968). How Do Committees Invent? Datamation.
6. Becker, J., Rush, N., Barnes, E., Rein, D. (2025). Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity. METR.
7. Goodhart, C. A. E. (1975). Problems of Monetary Management: The U.K. Experience. Papers in Monetary Economics, Reserve Bank of Australia.
8. Stack Overflow (2025). 2025 Developer Survey: AI.

---


