---
title: "2.2.3 Karmaşıklığın Birikimi"
sidebar:
  hidden: true
---

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



