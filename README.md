# Son Depremler Uygulaması 🌍

Bu proje, [AFAD](https://deprem.afad.gov.tr/)'ın sağladığı güncel deprem verilerini Node.js ile çekip API olarak sunan ve React ile bu verileri kullanıcı arayüzünde listeleyen tam stack bir web uygulamasıdır.

## Proje Yapısı

- **Backend (Node.js + Express):**
  - AFAD'ın sitesinden verileri çeker.
  - Verileri ayrıştırıp JSON formatına dönüştürür.
  - `GET /api/earthquake` endpoint'i üzerinden verileri sağlar.

- **Frontend (React):**
  - Backend'den gelen API verilerini Axios ile çeker.
  - Depremleri tarih, saat, büyüklük, derinlik ve konum bilgisiyle birlikte listeler.
  - Kullanıcı dostu ve sade bir arayüz sunar.

## Özellikler

- Güncel deprem verilerini gösterme
- Tarih, saat, büyüklük, derinlik bilgileri
- Backend üzerinden verilerin otomatik güncellenmesi
- JSON formatında API servisi
- React ile dinamik listeleme

## Kullanılan Teknolojiler

### Backend:
- Node.js
- Express.js
- Axios / Cheerio (AFAD verilerini çekmek için)
- CORS

### Frontend:
- React
- Axios
- HTML / CSS

## Kurulum

### 1. Depoyu Klonlayın

```bash
git clone https://github.com/azizozkrcdg/earthquake-app.git
cd earthquake-app
