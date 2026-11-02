---
title: "2.4.5 Anlama Borcu: Çalışan Ama Anlaşılmayan Kod"
sidebar:
  hidden: true
---

Teknik borç, bilinçli ya da bilinçsiz alınan tasarım kararlarının gelecekteki değişiklik maliyetine yansımasıdır. YZ destekli geliştirme, bunun yanına daha sessiz bir borç türü ekler: anlama borcu. Anlama borcu; sistemde çalışan, testlerden geçen, hatta temiz görünen, ancak ekipte hiç kimsenin neden o biçimde yazıldığını, hangi varsayımlara dayandığını ve değiştirildiğinde neyi etkileyeceğini gerçek anlamda bilmediği kodun birikmesidir. Bazı kaynaklarda bilgi borcu olarak da adlandırılır.

Peter Naur, programlamayı bir "teori inşası" olarak tanımlar: bir yazılım sisteminin asıl değeri kodun kendisinde değil, onu geliştiren ekibin zihnindeki ortak anlayıştadır. Kodun neden böyle olduğunu, hangi gerçek dünya ihtiyacına karşılık geldiğini ve nasıl değişebileceğini bilen bu anlayış kaybolduğunda, kod yerinde dursa bile sistem fiilen ölmeye başlar <span class="bkz-ref" title="16. Naur, P. (1985). Programming as Theory Building. Microprocessing and Microprogramming, 15(5).">(Bkz: 16)</span>. Geleneksel geliştirmede bu teori, kodu yazma sürecinde kendiliğinden oluşur. YZ kodu ürettiğinde ise yazma süreci kısalır ve teori oluşmadan kod sisteme girebilir.

Anlama borcu, teknik borçla aynı faiz mekanizmasıyla çalışır; ancak daha geç fark edilir. Kod kalitesi metrikleri iyi görünebilir, hatalar azalmış bile olabilir. Borç; ilk ciddi değişiklik talebinde, ilk beklenmedik arızada ya da sistemi bilen tek kişinin ayrılmasında görünür hale gelir. O noktada ekip, kendi sistemini yeniden keşfetmek zorunda kalır. Bu nedenle YZ çağında sağlıklı bir kural şudur: açıklanamayan bir değişiklik, testlerden geçse bile hazır değildir.

**Örnek:** Bir SaaS şirketinde bir ekip, raporlama altyapısını YZ destekli araçlarla birkaç hafta içinde yeniden yazdı. Yeni yapı daha hızlıydı ve testlerden sorunsuz geçti. Bir yıl sonra büyük bir müşterinin özel raporlama ihtiyacı geldiğinde ekip, hesaplama mantığının bazı kısımlarının neden o biçimde kurulduğunu açıklayamadı. Altyapıyı yeniden yazan geliştiriciler başka projelere geçmişti; geride bıraktıkları kod okunaklıydı, ama kararların gerekçesi hiçbir yerde yoktu. Ekip, iki haftalık bir değişiklik için önce bir aylık bir keşif çalışması yapmak zorunda kaldı.
