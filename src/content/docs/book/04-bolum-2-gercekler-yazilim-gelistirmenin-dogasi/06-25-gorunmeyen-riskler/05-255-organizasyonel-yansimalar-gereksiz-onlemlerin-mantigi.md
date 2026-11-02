---
title: "2.5.5 Organizasyonel Yansımalar: \"Gereksiz\" Önlemlerin Mantığı"
sidebar:
  hidden: true
---

Yazılım ekiplerinin yük testi yapması, güvenlik denetimleri yürütmesi, mimari kapasite planlaması hazırlaması ve performans profilleme çalışmaları gerçekleştirmesi; bu faaliyetlerle doğrudan ilişki kuramayan paydaş ekipler tarafından zaman zaman aşırı temkinli ya da gereksiz önlemler olarak algılanır. Bu algı, görünmeyen risklerin organizasyonel olarak nasıl değerlendirildiğini yansıtmaktadır.

Ancak bu önlemlerin amacı, bölümün önceki alt başlıklarında ele alınan dinamiklerle birlikte değerlendirildiğinde farklı bir anlam kazanır. Yük testi, canlı kullanım öncesinde sistemin performans karakteristiğini görünür kılmaya çalışır. Güvenlik denetimleri, istismar gerçekleşmeden zafiyetleri tespit etmeye yöneliktir. Kapasite planlaması, olası büyüme senaryolarına karşı sistemin sınırlarını anlamayı amaçlar. Bu faaliyetlerin ortak amacı, görünmez riskleri erken ve kontrollü bir ortamda görünür hale getirmektir.

Forsgren, Humble ve Kim'in araştırması, yüksek performanslı yazılım ekiplerinin yalnızca hızlı teslimat değil, aynı zamanda düşük hata oranı ve kısa sorun çözme süresi ile karakterize edildiğini ortaya koyar <span class="bkz-ref" title="9. Forsgren, N., Humble, J., &amp; Kim, G. (2018). Accelerate.">(Bkz: 9)</span>. Bu bulgu, güvenilirlik odaklı pratiklerin teslimat hızının rakibi değil, uzun vadeli geliştirme kapasitesinin ön koşulu olduğunu göstermektedir. Henüz tanımlanmamış riskler üzerine çalışmak, kriz yönetimi için harcanacak kaynakları stratejik bir yatırıma dönüştürür.

**Örnek:** Bir fintech şirketinin altyapı ekibi, her büyük canlıya çıkış öncesinde iki günlük bir stabilite penceresi uyguluyordu. Bu dönemde sistem olağan yükün üzerinde test ediliyor, güvenlik kontrollerinden geçiriliyor ve olası başarısızlık noktaları gözlemleniyordu. Ürün ve iş geliştirme ekipleri zaman zaman bu süreci teslimatı yavaşlatan bir engel olarak değerlendirdi. Ancak bir yayın döngüsünde stabilite testleri sırasında, yalnızca yüksek eş zamanlı yük altında tetiklenen bir veri tutarsızlığı senaryosu tespit edildi. Sorunun canlı ortamda ortaya çıkmış olması, hem veri bütünlüğü hem de müşteri güveni açısından ciddi bir krize dönüşebilirdi. Görünüşte teslimatı yavaşlatan bu süreç, aslında görünmez bir riski üretim öncesinde görünür kılmıştı.



