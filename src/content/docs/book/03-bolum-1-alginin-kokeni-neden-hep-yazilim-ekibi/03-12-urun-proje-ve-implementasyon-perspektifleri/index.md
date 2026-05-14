---
title: "1.2 Ürün, Proje ve Implementasyon Perspektifleri"
---

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

Yapısal bir sorun olarak implementasyon ekipleri, müşteri taleplerini çoğu zaman analiz etmeden ya da önceliklendirmeden yazılım ekiplerine iletir. "Müşteri istiyor" ifadesi, bir gereksinim analizi yerine geçer hale gelir. Bu durum, yazılım ekipleri üzerinde hem teknik hem de iletişimsel bir yük oluşturur.

**Örnek:** Bir sanayi tesisinde çalışan implementasyon ekibi, fabrika ziyareti sırasında müşteriden topladığı on iki ayrı "küçük iyileştirme" talebini bir liste halinde yazılım ekibine iletti. Listede önceliklendirme yoktu, teknik bağlam yoktu, müşteriyle yapılan anlaşma detayları yoktu. Yazılım ekibi her birinin aslında ne anlama geldiğini anlamak için ek görüşmeler yapmak zorunda kaldı. Bu görüşmeler, listenin kendisinden daha uzun sürdü.

### 1.2.4 Yazılım Ekibi Perspektifi

Yazılım ekibi için başarı; sürdürülebilir, ölçeklenebilir, güvenli, güvenilir ve hatasız bir sistem oluşturmaktır. Bu tanım, diğer ekiplerin başarı tanımlarıyla kıyaslandığında dikkat çekici bir fark ortaya çıkar: yazılım ekibinin başarı kriterleri büyük ölçüde uzun vadeli ve sessiz niteliktedir.

Sistemin çökmemesi bir başarıdır, ama görünmezdir. Mimari borç birikmemesi bir başarıdır, ama ölçülmesi kolay değildir. Güvenlik açığı üretilmemesi bir başarıdır, ama kutlanmaz.

Buna karşılık yazılım ekipleri, geçmişte verilen tüm kararların sorumluluğunu taşımak zorundadır.Aynı zamanda gelecekte oluşabilecek ihtiyaçları veya sorunları öngörmelidirler. Hızlı teslim edilebilmesi için özellikler, teknik borç olarak sisteme işlenir. Yıllar içinde biriken bu borç, her yeni geliştirmenin maliyetini artırır ve hız düşer. Ama bu hız düşüşü dışarıdan bakıldığında "yazılım ekibinin yavaşlaması" olarak okunur; sistemin birikmiş karmaşıklığının bir sonucu olarak değil.

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

---


