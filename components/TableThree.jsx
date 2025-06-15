import React from "react";

const TableThree = () => {
  return (
    <div>
      <div className="table-three mt-5">
        <table className="border-collapse border table-fixed text-left font-light">
          <tbody>
            <tr className="border">
              <td colSpan="3" className="p-3">
                <p>
                  <strong>Üçüncü Taraf Reklam Çerezleri</strong>
                </p>
              </td>
            </tr>
            <tr className="border">
              <td className="border p-3">
                <p>
                  <strong>Çerez Adı</strong>
                </p>
              </td>
              <td className="border p-3">
                <p>
                  <strong>Amaç</strong>
                </p>
              </td>
              <td className="border p-3">
                <p>
                  <strong>Süre ve diğer bilgiler</strong>
                </p>
              </td>
            </tr>
            <tr className="border">
              <td className="border p-3 italic">
                <p>Adjust</p>
                <p>Google Firebase Analytics</p>
                <p>Facebook Event</p>
                <p>Google Ads</p>
                <p>Bing Ads</p>
                <p>Facebook Ads</p>
                <p>Pinterest Ads</p>
                <p>Snapchat Ads</p>
                <p>TikTok Ads</p>
                <p>X Ads</p>
                <p>Taboola Ads</p>
                <p>Outbrain Ads</p>
                <p>Vungle Ads</p>
                <p>Index Ads</p>
                <p>Opera Ads</p>
                <p>Startio Ads</p>
                <p>Pubmatic Ads</p>
              </td>
              <td className="border p-3">
                <p>
                  Bu üçüncü taraf çerezler, bizim ve üçüncü tarafların
                  reklamların etkinliğini ölçüp optimize etmemizi, gördüğünüz
                  reklamların mümkün olduğunca alakalı olmasını sağlamamızı ve
                  üçüncü taraf platformlarında ve web sitelerinde Hizmetlerimizi
                  tanıtmamızı sağlar.
                </p>
              </td>
              <td className="p-3">
                <p>
                  Üçüncü taraf çerezlerin süresi, üçüncü taraf çerez
                  politikalarına tabi olacaktır ancak
                  <a
                    className="text-orange-600 underline"
                    href="#"
                    target="_blank"
                  >
                    buradan
                  </a>
                  Üçüncü Taraf Reklamcılık seçeneğini ve Üçüncü Taraf
                  Reklamcılık Çerezlerini Özelleştir seçeneğini kullanarak
                  etkinleştirilebilir veya devre dışı bırakılabilir.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
