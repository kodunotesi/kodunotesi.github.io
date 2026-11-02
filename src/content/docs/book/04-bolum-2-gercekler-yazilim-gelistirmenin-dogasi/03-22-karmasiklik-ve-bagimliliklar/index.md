---
title: "2.2 Karmaşıklık ve Bağımlılıklar"
---

Modern yazılım sistemleri izole yapılar değildir. Her sistem; diğer sistemlerle, dış servislerle ve kullanıcı davranışlarıyla sürekli etkileşim halindedir. Bu etkileşim ağı, yazılım geliştirmenin en az görünen ama en belirleyici boyutlarından birini oluşturur: karmaşıklık.

Karmaşıklık, sistemdeki parçaların sayısından değil, bu parçalar arasındaki ilişkilerin yapısından doğar. İlişkiler arttıkça öngörülemezlik artar; öngörülemezlik arttıkça geliştirme süreci yavaşlar, hatalar çoğalır ve değişiklik maliyeti katlanır.

---

### 2.2.1 Bağımlılığın Anatomisi

Yazılım sistemlerinde bağımlılık, bir bileşenin çalışabilmesi için başka bir bileşene ihtiyaç duyması durumudur. Bu tanım teknik görünse de organizasyonel sonuçları son derece somuttur: bir bağımlılık değiştiğinde, ona bağlı olan her şey etkilenir.

Bağımlılıklar birkaç farklı biçimde ortaya çıkar. Teknik bağımlılıklar, bir servisin başka bir servisin API'ına veya veri yapısına bağlı olması gibi doğrudan teknik ilişkilerdir. Veri bağımlılıkları, iki modülün aynı veri kaynağını farklı biçimlerde yorumlaması ve bu yorumların tutarlı kalması gereken durumları kapsar. Zamana bağlı bağımlılıklar ise bir işlemin başka bir işlemin tamamlanmasını beklemesi durumunda ortaya çıkar ve özellikle asenkron sistemlerde kritik hale gelir.

Bu bağımlılıklar tek başına yönetilebilirdir. Asıl sorun, bağımlılıkların birbiriyle bağlantılı olmasından kaynaklanır. Bir zincirin herhangi bir halkasındaki değişiklik tüm zinciri etkiler; üstelik bu etki her zaman öngörülebilir biçimde değil, zaman zaman beklenmedik yerlerde tezahür eder.

**Örnek:** Orta ölçekli bir finans teknolojisi şirketinde müşteri bilgi güncelleme ekranı yenilendi. Görünürde basit bir arayüz değişikliğiydi. Ancak bu ekran; kimlik doğrulama servisi, müşteri veri ambarı, loglama altyapısı ve düzenleyici kuruma gönderilen raporlama servisiyle doğrudan entegreydi. Geliştirici ekip yalnızca arayüz katmanında değişiklik yaptı; ancak test aşamasında raporlama servisinin beklediği veri formatının eski şema üzerinden şekillendiği fark edildi. Değişiklik dört bileşeni etkiledi. Tek bir ekranın güncellenmesi, üç haftaya yayılan bir entegrasyon sürecine dönüştü.

---

### 2.2.2 Görünmeyen Bağımlılıklar

Yazılım sistemlerindeki bağımlılıkların önemli bir kısmı dokümante edilmemiştir. Bu bağımlılıklar, zamanla oluşmuş; "her zaman böyle çalışıyordu" varsayımına dayanan ilişkilerdir. Bir modül, başka bir modülün belirli bir sırayla veri göndereceğini varsayabilir. İki sistem, hiçbir zaman açıkça tanımlanmamış ortak bir davranış beklentisi üzerine kurulmuş olabilir.

Bu görünmez bağımlılıklar, değişiklik yapılana kadar sorun yaratmaz. Değişiklik yapıldığında ise kaynak genellikle hemen tespit edilemez. Hata, bağımlılığın kaynağında değil, ondan etkilenen başka bir yerde kendini gösterir. Bu durum hem hata ayıklama sürecini uzatır hem de geliştirme ekiplerinin bazı değişikliklerden neden uzak durduğunu açıklar.

Conway Yasası bu dinamiği yapısal bir perspektiften ele alır: sistemlerin iletişim yapısı, onu geliştiren organizasyonun iletişim yapısını yansıtır <span class="bkz-ref" title="12. Conway, M. E. (1968). How Do Committees Invent? Datamation.">(Bkz: 12)</span>. Organizasyon içindeki bilgi siloları, sistemdeki görünmez bağımlılıkların başlıca kaynağıdır. Bir ekip neyin nereye bağlı olduğunu bilmiyorsa, o bağımlılık her an bir sürpriz olarak karşısına çıkabilir.

**Örnek:** Bir e-ticaret platformunda ürün katalog servisi güncellendi. Geliştirici ekip tüm testleri geçti ve değişikliği üretime aldı. Üç saat sonra müşteri destek ekibi, siparişlerin tamamlanamadığına dair şikayetlerin yoğunlaştığını bildirdi. İncelemede, sipariş servisinin katalog servisinden belirli bir alanda her zaman boş olmayan bir değer beklediği ancak yeni versiyonda bu alanın bazı durumlarda boş dönebileceği anlaşıldı. Bu beklenti hiçbir dokümanda yer almıyordu; sadece sipariş servisini ilk yazan geliştirici biliyordu ve o kişi şirketten ayrılmıştı. Bağımlılık görünmezdi ama neden olduğu sonuçlar oldukça görünürdü.

---

### 2.2.3 Karmaşıklığın Birikimi

Yazılım sistemleri büyüdükçe karmaşıklık kaçınılmaz olarak artar. Ancak bu artış lineer değildir. Her yeni bileşen, mevcut bileşenlerle yeni ilişkiler kurar. Bu ilişkilerin sayısı, bileşen sayısıyla orantılı değil; bileşenlerin bir birleri ile kurdukları ilişki potansiyeli ile orantılı büyüyebilir. 

Örneğin;

> İlişki sayısını ikili ve yönsüz olduğunu var sayarsak, olası ilişki sayısı formülümüz **`n * (n-1) / 2`** olacaktır.
>
> Bu durumda; 
> - 10 bileşen için `10 * (10-1) / 2 = 45`
> - 100 bileşen için `100 * (100-1) / 2 = 4950`
>
> ilişkiden bahsedebiliriz.


Bu matematiksel gerçek, yazılım sistemlerinin neden belirli bir büyüklüğün ötesinde aniden yavaşladığını, değişiklik yapmanın neden giderek zorlaştığını ve neden bir yerde yapılan düzeltmenin başka bir yerde hata yarattığını açıklar. Karmaşıklık bir aşamada yönetilebilir bir özellikten, sistemin kendi kendine yarattığı bir kısıta dönüşür.

McConnell bu dinamiği "karmaşıklık bütçesi" kavramıyla açıklar: her sistemin taşıyabileceği belirli bir karmaşıklık kapasitesi vardır ve bu kapasite aşıldığında değişiklik maliyeti dramatik biçimde yükselir <span class="bkz-ref" title="3. Taleb, N. N. (2007). The Black Swan.">(Bkz: 3)</span>. Yazılım ekiplerinin "basit" görünen değişiklikler için uzun süreler öngörmesinin arkasında çoğu zaman bu birikmiş karmaşıklık yatar.

**Örnek:** Bir insan kaynakları platformu, beş yıl içinde on iki farklı modülle büyüdü. Her modül geliştirildiğinde, o dönemin koşullarına göre tasarlandı ve mevcut modüllere bağlandı. Beşinci yılın sonunda yeni bir izin yönetimi özelliği talep edildi. Ekip iki haftada tamamlanacağını düşündü. Ancak izin yönetimi; bordro hesaplama, çalışan profili, performans değerlendirme ve raporlama modülleriyle çakışıyordu. Her bağlantı noktasında farklı veri modelleri ve farklı iş kuralları vardı. İki haftalık iş, üç aylık bir entegrasyon projesine dönüştü. Karmaşıklık birikimi görünmezdi; etkisi ise son derece somuttu.

---

### 2.2.4 Değişimin Dalgalanma Etkisi

Bağımlılıklar, bir sistemde yapılan değişikliklerin öngörülemeyen biçimlerde yayılmasına neden olur. Buna yazılım mühendisliğinde "dalgalanma etkisi" (ripple effect) denir: küçük bir taşın suya düşmesiyle oluşan dalgalar gibi, bir noktadaki değişiklik çevresine yayılır ve zaman zaman çok uzaktaki noktalara ulaşır.

Bu etki, değişiklik kararlarını karmaşık hale getirir. Bir bileşeni değiştirmek, onunla doğrudan ilişkili bileşenleri etkiler. O bileşenler de başkalarını etkiler. Değişikliğin gerçek kapsamı ancak bu zincirleme etki haritalandırıldığında görünür hale gelir; bu haritalama ise değişikliği gerçekleştirme süresinden daha uzun sürebilir.

Yazılım ekiplerinin bazı değişiklik taleplerine "bu basit değil" yanıtını vermesinin temel nedeni bu dinamiktir. Değiştirilen şeyin kendisi basit olabilir; ama değişikliğin etki alanını güvenli biçimde yönetmek basit değildir.

**Örnek:** Bir perakende şirketinin satış sisteminde, kasiyerlerin işlem sırasında seçtiği "ödeme tipi" alanına yeni bir seçenek eklendi. Değişiklik yalnızca kasa ekranındaki bir açılır listeyi ilgilendiriyor gibi görünüyordu. Arayüz güncellendi, test edildi ve canlı ortama alındı.

Bir hafta sonra, bazı satış raporlarında günlük ciro toplamlarının eksik hesaplandığı fark edildi. İncelemede, raporlama servisinin ödeme tiplerini sabit bir liste üzerinden değerlendirdiği ve yeni eklenen seçeneği tanımadığı ortaya çıktı. Bu nedenle ilgili kayıtlar raporlara dahil edilmemişti. Daha sonra, aynı veriyi kullanan finansal mutabakat ekranlarında da hatalı sonuçlar oluştuğu görüldü.

Başlangıçta yalnızca kullanıcı arayüzünde küçük bir alan güncellemesi gibi görünen değişiklik, satış raporlama ve finansal mutabakat süreçlerine kadar yayılan bir dalgalanma etkisi oluşturdu.

---

### 2.2.5 Karmaşıklığın Organizasyonel Yansımaları

Karmaşıklık yalnızca teknik bir olgu değildir; organizasyonel bir gerçektir. Sistem karmaşıklaştıkça, sistemi anlayan kişi sayısı azalır. Belirli bir bileşeni gerçekten derinlemesine bilen geliştirici sayısı zaman içinde bire, hatta sıfıra düşebilir. Bu durum hem bir devam riski hem de bir karar alma sorunudur: o bileşenle ilgili her değişiklik kararı, eksik bilgiyle ya da tek bir kişinin varlığına bağımlı biçimde verilmek zorunda kalır.

Bunun yanı sıra, karmaşıklık ekipler arası iletişimi de ağırlaştırır. Değişiklik talep eden ekip, değişikliğin teknik bağlamını bilmeden bu değişikliği önemsiz görebilir. Değişikliği yapacak ekip ise o bağlamı her seferinde karşı tarafa ve hatta kendi içinde ilgili kişilere yeniden yeniden aktarmak zorunda kalır. Bu döngü, zamanla her iki tarafta da yorgunluğun ve yanlış anlamanın birikmesine neden olur.

Fowler'ın dile getirdiği gibi, karmaşıklığı azaltmak teknik bir tercih değil, organizasyonel bir zorunluluktur. Karmaşıklık yönetilmediğinde, ekiplerin değil sistemin kararları verdiği bir ortam oluşur <span class="bkz-ref" title="4. Hofstadter, D. R. (1979). Gödel, Escher, Bach.">(Bkz: 4)</span>.

**Örnek:** Bir lojistik teknoloji şirketinde kargo takip sistemi on yıl boyunca geliştirilmişti. Sistemin belirli bir çekirdeğini gerçek anlamda anlayan tek bir kıdemli geliştirici kalmıştı. O geliştirici görevden ayrıldığında, ekip kritik bir modülü değiştirme konusunda aylarca tereddüt etti. Değişikliği kimse üstlenemiyordu çünkü bağımlılık haritası hiçbir zaman dokümante edilmemişti. Sonunda dış danışman desteğiyle yapılan analizin maliyeti, o değişikliği yapmanın tahmini maliyetinin birkaç katına ulaştı. Karmaşıklık, organizasyonun hareket kabiliyetini bloke etmişti.

Karmaşıklık arttıkça sistemin davranışını öngörmek zorlaşır; bu durum yazılım ekiplerinin temkinli hareket etmesine neden olur. Karmaşıklık, yazılım geliştirmede lineer olmayan bir maliyet artışı yaratır <span class="bkz-ref" title="1. Brooks, F. P. (1995). The Mythical Man-Month.">(Bkz: 1)</span>.

### 2.2.6 Bireysel Hız, Sistem Hızı: Yapay Zekâ ve Verimlilik Paradoksu

Yapay zekâ (YZ) destekli araçlar, tek bir geliştiricinin belirli bir görevi tamamlama hızını önemli ölçüde artırabilir. Ancak bireysel hızdaki artış, sistemin teslimat hızına doğrudan yansımaz. Bir değişikliğin müşteriye ulaşması için kod yazımının yanı sıra gereksinimin netleşmesi, kararların alınması, kod incelemesi, test, entegrasyon, onay ve canlıya geçiş adımlarının da tamamlanması gerekir. Darboğaz bu adımlardan birindeyse, kod yazımını hızlandırmak yalnızca darboğazın önündeki kuyruğu büyütür.

Ekonomi tarihinde bu durumun iki tanıdık karşılığı vardır. Birincisi Jevons Paradoksu'dur: bir kaynağın kullanımı verimlileştikçe, o kaynağa olan toplam talep azalmak yerine artabilir <span class="bkz-ref" title="13. Jevons, W. S. (1865). The Coal Question.">(Bkz: 13)</span>. Kod üretmek ucuzladıkça organizasyon daha fazla özellik, daha fazla entegrasyon ve daha fazla deneme talep eder; her yeni kod parçası ise bu bölümde ele alınan bağımlılık ve karmaşıklık yükünü büyütür. İkincisi dinamo etkisidir: elektrik motorları fabrikalara girdiğinde verimlilik artışı hemen gelmemiş; kazanç, fabrikalar buhar makinesine göre değil elektriğin olanaklarına göre yeniden tasarlandığında ortaya çıkmıştır <span class="bkz-ref" title="14. David, P. A. (1990). The Dynamo and the Computer: An Historical Perspective on the Modern Productivity Paradox. American Economic Review, 80(2).">(Bkz: 14)</span>. YZ'yi mevcut süreçlerin üzerine bir eklenti olarak koyan organizasyonlar da beklenen sıçramayı göremez; çünkü onay, koordinasyon ve doğrulama süreçleri değişmeden kalmıştır.

Bu iki gözlem, bu bölümün temel iddiasını güçlendirir: yazılım geliştirme doğrusal bir üretim hattı değildir. Üretim hattı varsayımıyla bakıldığında kod yazımını hızlandırmak tüm süreci hızlandırmalıdır. Oysa yazılım geliştirmede asıl maliyet, kodun kendisinden çok kodun sistemle, kararlarla ve diğer ekiplerle etkileşiminde ortaya çıkar.

**Örnek:** Bir sigorta yazılımı şirketinde YZ kodlama araçlarının yaygınlaşmasının ardından ekiplerin tamamladığı geliştirme görevi sayısı belirgin biçimde arttı. Altı ay sonra yapılan değerlendirmede, değişikliklerin müşteriye ulaşma süresinin neredeyse hiç kısalmadığı görüldü. Değişiklikler artık kod yazımında değil; iş birimlerinin onayında, test ortamı kuyruğunda ve entegrasyon testlerinde bekliyordu. Organizasyon zaten darboğaz olmayan adımı hızlandırmış; asıl bekleme noktalarına dokunmamıştı.

---


